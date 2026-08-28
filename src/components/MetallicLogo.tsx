"use client";

import { Suspense, useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { motion, useScroll, useTransform } from "framer-motion";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const SHAPE_SRC = "/nuvio-logo-shape.svg";
const TARGET_SIZE = 2.5;
const REST_POLAR = Math.PI / 2 - 0.12;

type MetallicLogoProps = {
  heroRef: RefObject<HTMLElement | null>;
  className?: string;
};

function LogoMesh({ idleSpeed }: { idleSpeed: number }) {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);

  useEffect(() => {
    let cancelled = false;
    const loader = new SVGLoader();
    loader.load(SHAPE_SRC, (data) => {
      if (cancelled) return;
      const shapes: THREE.Shape[] = [];
      data.paths.forEach((path) => {
        shapes.push(...SVGLoader.createShapes(path));
      });

      const geo = new THREE.ExtrudeGeometry(shapes, {
        depth: 70,
        bevelEnabled: true,
        bevelThickness: 7,
        bevelSize: 5,
        bevelSegments: 4,
        curveSegments: 20,
      });
      geo.computeBoundingBox();
      geo.center();

      const box = geo.boundingBox;
      let scale = 1;
      if (box) {
        const size = new THREE.Vector3();
        box.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);
        scale = TARGET_SIZE / maxDim;
      }
      geo.scale(scale, -scale, scale); // flip Y: SVG space is Y-down
      geo.computeVertexNormals();
      setGeometry(geo);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    // extremely slow ambient bob so the object never feels static,
    // independent from the drag-driven OrbitControls rotation
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(performance.now() / 3200) * 0.035;
    }
  });

  if (!geometry) return null;

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial
        color="#eef0f2"
        metalness={1}
        roughness={0.16}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

function IdleAutoRotate({
  controlsRef,
  speed,
}: {
  controlsRef: RefObject<OrbitControlsImpl | null>;
  speed: number;
}) {
  useFrame((_, delta) => {
    const controls = controlsRef.current;
    if (!controls) return;
    if (!controls.autoRotate) return;
    controls.autoRotate = true;
    controls.autoRotateSpeed = speed;
    controls.update();
    void delta;
  });
  return null;
}

function Scene({ reduceMotion }: { reduceMotion: boolean }) {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 4, 5]} intensity={0.6} />
      <directionalLight position={[-4, -2, -3]} intensity={0.25} color="#8fa2b8" />

      <Suspense fallback={null}>
        <LogoMesh idleSpeed={reduceMotion ? 0 : 0.5} />
        <Environment preset="city" environmentIntensity={1.1} />
      </Suspense>

      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.75}
        autoRotate={!reduceMotion}
        autoRotateSpeed={0.6}
        minPolarAngle={REST_POLAR - 0.42}
        maxPolarAngle={REST_POLAR + 0.5}
        target={[0, 0, 0]}
        onStart={() => {
          if (controlsRef.current) controlsRef.current.autoRotate = false;
        }}
        onEnd={() => {
          window.setTimeout(() => {
            if (controlsRef.current) controlsRef.current.autoRotate = !reduceMotion;
          }, 500);
        }}
      />
    </>
  );
}

export default function MetallicLogo({ heroRef, className }: MetallicLogoProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.62]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);
  const extraTiltX = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <motion.div
      style={{ scale, y: translateY, opacity, rotateX: extraTiltX }}
      className={`nv-logo-outer ${className ?? ""}`}
    >
      <div className="nv-logo-stage nv-logo-stage-3d" role="img" aria-label="NUVIO">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0.5, 5.2], fov: 32 }}
          gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
          style={{ touchAction: "none" }}
        >
          <Scene reduceMotion={reduceMotion} />
        </Canvas>

        <div className="nv-logo-platform" aria-hidden="true">
          <div className="nv-logo-platform-shadow" />
          <div className="nv-logo-platform-ring" />
        </div>
      </div>
    </motion.div>
  );
}
