"use client";

import { useEffect, useRef, type RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LOGO_SRC = "/nuvio-logo-metal.webp";

type MetallicLogoProps = {
  heroRef: RefObject<HTMLElement | null>;
  className?: string;
};

type RotState = {
  rotX: number;
  rotY: number;
  velX: number;
  velY: number;
  dragging: boolean;
  lastX: number;
  lastY: number;
  lastT: number;
};

const REST_TILT_X = -6;

export default function MetallicLogo({ heroRef, className }: MetallicLogoProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const rotorRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const shadeRef = useRef<HTMLDivElement>(null);
  const contactShadowRef = useRef<HTMLDivElement>(null);

  const state = useRef<RotState>({
    rotX: REST_TILT_X,
    rotY: 8,
    velX: 0,
    velY: 0,
    dragging: false,
    lastX: 0,
    lastY: 0,
    lastT: 0,
  });

  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;

    function apply() {
      const s = state.current;
      const rotor = rotorRef.current;
      const highlight = highlightRef.current;
      const shade = shadeRef.current;
      const shadow = contactShadowRef.current;
      if (!rotor) return;

      rotor.style.transform = `rotateX(${s.rotX}deg) rotateY(${s.rotY}deg)`;

      const hx = Math.max(-40, Math.min(40, s.rotY * 1.1));
      const hy = Math.max(-40, Math.min(40, -s.rotX * 1.6));
      if (highlight) {
        highlight.style.transform = `translate(${hx}%, ${hy}%)`;
      }
      if (shade) {
        shade.style.transform = `translate(${-hx * 0.7}%, ${-hy * 0.7}%)`;
      }
      if (shadow) {
        const sx = Math.max(-16, Math.min(16, s.rotY * 0.35));
        const skew = Math.max(-10, Math.min(10, s.rotY * 0.25));
        shadow.style.transform = `translateX(${sx}px) scaleX(${1 - Math.abs(s.rotY) * 0.002}) skewX(${skew}deg)`;
      }
    }

    function loop() {
      const s = state.current;

      if (!s.dragging) {
        const velMag = Math.abs(s.velX) + Math.abs(s.velY);
        if (velMag > 0.02) {
          s.rotY += s.velX;
          s.rotX += s.velY;
          s.velX *= 0.945;
          s.velY *= 0.945;
        } else {
          s.velX = 0;
          s.velY = 0;
          if (!reduceMotion.current) {
            s.rotY += 0.045;
          }
        }
        // ease tilt back to resting position
        s.rotX += (REST_TILT_X - s.rotX) * 0.04;
        s.rotX = Math.max(-26, Math.min(20, s.rotX));
      }

      apply();
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    function onPointerDown(e: PointerEvent) {
      const s = state.current;
      s.dragging = true;
      s.velX = 0;
      s.velY = 0;
      s.lastX = e.clientX;
      s.lastY = e.clientY;
      s.lastT = performance.now();
      stage?.setPointerCapture(e.pointerId);
      stage?.classList.add("nv-logo-grabbing");
    }

    function onPointerMove(e: PointerEvent) {
      const s = state.current;
      if (!s.dragging) return;
      const now = performance.now();
      const dt = Math.max(1, now - s.lastT);
      const dx = e.clientX - s.lastX;
      const dy = e.clientY - s.lastY;

      const sensX = 0.42;
      const sensY = 0.32;

      s.rotY += dx * sensX;
      s.rotX = Math.max(-26, Math.min(20, s.rotX - dy * sensY));

      // instantaneous velocity for inertia (deg per frame ~16ms)
      s.velX = (dx * sensX) * (16 / dt);
      s.velY = (-dy * sensY) * (16 / dt);

      s.lastX = e.clientX;
      s.lastY = e.clientY;
      s.lastT = now;
    }

    function onPointerUp(e: PointerEvent) {
      const s = state.current;
      s.dragging = false;
      try {
        stage?.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      stage?.classList.remove("nv-logo-grabbing");
      // clamp inertia so it doesn't fly off
      s.velX = Math.max(-6, Math.min(6, s.velX));
      s.velY = Math.max(-6, Math.min(6, s.velY));
    }

    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", onPointerUp);
    stage.addEventListener("pointercancel", onPointerUp);

    return () => {
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerup", onPointerUp);
      stage.removeEventListener("pointercancel", onPointerUp);
    };
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
      <div ref={stageRef} className="nv-logo-stage" role="img" aria-label="NUVIO">
        <div className="nv-logo-perspective">
          <div ref={rotorRef} className="nv-logo-rotor">
            <img
              src={LOGO_SRC}
              alt=""
              draggable={false}
              className="nv-logo-img"
              loading="eager"
              fetchPriority="high"
            />
            <div
              ref={highlightRef}
              className="nv-logo-highlight"
              style={{ maskImage: `url(${LOGO_SRC})`, WebkitMaskImage: `url(${LOGO_SRC})` }}
            />
            <div
              ref={shadeRef}
              className="nv-logo-shade"
              style={{ maskImage: `url(${LOGO_SRC})`, WebkitMaskImage: `url(${LOGO_SRC})` }}
            />
          </div>
        </div>

        <div className="nv-logo-platform" aria-hidden="true">
          <div ref={contactShadowRef} className="nv-logo-platform-shadow" />
          <div className="nv-logo-platform-ring" />
        </div>
      </div>
    </motion.div>
  );
}
