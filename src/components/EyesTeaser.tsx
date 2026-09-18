"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./EyesTeaser.module.css";

// A 256 × 96 game-style sprite, drawn on an integer pixel grid. Separate
// iris layers allow real gaze movement without sliding or inverting a photo.
const EYE_SHAPE = "M4 17H10V13H20V11H32V13H44V16H56V19H68V22H78V25H88V28H94V30H86V33H76V36H64V38H50V39H36V37H24V34H14V30H8V25H4Z";

function PixelEye({ index, gazeRef }: { index: number; gazeRef: (element: SVGGElement | null) => void }) {
  const mirror = index === 1 ? "translate(96 0) scale(-1 1)" : undefined;
  return (
    <g transform={`translate(${index === 0 ? 8 : 152} 26)`}>
      <g className={`${styles.lids} ${index === 1 ? styles.delayedBlink : ""}`}>
      <defs>
        <clipPath id={`eye-aperture-${index}`}>
          <path d={EYE_SHAPE} transform={mirror} />
        </clipPath>
      </defs>
      <g transform={mirror}>
        <path d={EYE_SHAPE} fill="#55534c" stroke="#242221" strokeWidth="2" />
      </g>
      <g clipPath={`url(#eye-aperture-${index})`}>
        <g transform={mirror}>
          <path d="M8 22H14V18H24V15H36V13H52V15H64V18H76V21H86V25H90V29H80V33H68V36H54V38H38V36H26V33H16V29H10V25H8Z" fill="#92917c" />
          <path d="M14 22H24V19H36V17H50V19H64V22H74V26H80V30H68V33H54V35H38V33H26V30H18V26H14Z" fill="#b8b69b" />
          {Array.from({ length: 28 }, (_, pixel) => (
            <rect key={pixel} x={14 + ((pixel * 13) % 68)} y={17 + ((pixel * 7) % 16)} width="1" height="1" fill={pixel % 2 ? "#55534c" : "#ccc6a8"} />
          ))}
          <path d="M10 22H16V24H21V27H27V28H22V26H17V25H12ZM76 27H81V29H87V30H80V29H75V32H69V31H74Z" fill="#66504a" />
        </g>
        <g ref={gazeRef}>
          <path d="M39 3H55V7H60V13H63V30H60V36H55V40H39V37H34V31H31V13H34V7H39Z" fill="#2c2422" />
          <path d="M40 5H54V9H58V15H60V29H57V34H53V37H41V34H37V29H34V16H37V10H40Z" fill="#61352e" />
          <path d="M41 9H53V13H56V29H53V33H40V30H37V15H41Z" fill="#8a4b39" />
          <path d="M45 5H49V12H51V31H49V40H45V33H43V14H45Z" fill="#030303" />
          <path d="M35 20H37V25H35ZM38 30H40V33H38ZM52 33H54V35H52ZM56 23H58V28H56Z" fill="#a16e4c" />
          <rect x="41" y="21" width="1" height="2" fill="#c3ac88" />
        </g>
        <g transform={mirror}>
          <path d="M0 0H96V30H88V28H78V25H68V22H56V19H44V16H32V13H20V14H10V18H0Z" fill="#121110" />
          <path d="M12 31H18V33H28V36H40V38H54V38H66V36H78V33H86V31H90V34H82V38H68V41H28V39H18V35H12Z" fill="#49463e" />
        </g>
      </g>
      </g>
    </g>
  );
}

export default function EyesTeaser() {
  const [revealed, setRevealed] = useState(false);
  const [dateVisible, setDateVisible] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const gazeRefs = useRef<(SVGGElement | null)[]>([]);
  const shakeRef = useRef<HTMLSpanElement>(null);
  const shakeAnimation = useRef<Animation | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 2800);
    return () => {
      clearTimeout(timer);
      shakeAnimation.current?.cancel();
    };
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const current = [{ x: 0, y: 0 }, { x: 0, y: 0 }];
    const target = [{ x: 0, y: 0 }, { x: 0, y: 0 }];
    let frame = 0;

    function animate() {
      let moving = false;
      current.forEach((point, index) => {
        point.x += (target[index].x - point.x) * 0.12;
        point.y += (target[index].y - point.y) * 0.12;
        if (Math.abs(target[index].x - point.x) + Math.abs(target[index].y - point.y) > 0.05) moving = true;
        gazeRefs.current[index]?.setAttribute("transform", `translate(${Math.round(point.x)} ${Math.round(point.y)})`);
      });
      frame = moving ? requestAnimationFrame(animate) : 0;
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(animate);
    }

    function follow(event: PointerEvent) {
      if (reducedMotion.matches || event.pointerType === "touch") return;
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;
      [0.22, 0.78].forEach((center, index) => {
        const dx = (event.clientX - rect.left - rect.width * center) / (window.innerWidth * 0.35);
        const dy = (event.clientY - rect.top - rect.height * 0.52) / (window.innerHeight * 0.35);
        const distance = Math.max(1, Math.hypot(dx, dy));
        target[index] = { x: (dx / distance) * 13, y: (dy / distance) * 5 };
      });
      schedule();
    }

    function reset() {
      target.forEach((point) => { point.x = 0; point.y = 0; });
      schedule();
    }

    window.addEventListener("pointermove", follow, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    reducedMotion.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", follow);
      document.documentElement.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      reducedMotion.removeEventListener("change", reset);
    };
  }, [revealed]);

  function shake() {
    setDateVisible(true);
    const element = shakeRef.current;
    if (!element) return;
    shakeAnimation.current?.cancel();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    shakeAnimation.current = element.animate(
      reduced
        ? [{ opacity: 1 }, { opacity: 0.55 }, { opacity: 1 }]
        : [
            { transform: "translate(0, 0) rotate(0)" },
            { transform: "translate(-9px, 3px) rotate(-1.5deg)" },
            { transform: "translate(8px, -4px) rotate(1.2deg)" },
            { transform: "translate(-7px, -2px) rotate(-1deg)" },
            { transform: "translate(6px, 3px) rotate(0.8deg)" },
            { transform: "translate(-4px, -2px) rotate(-0.5deg)" },
            { transform: "translate(2px, 1px) rotate(0.2deg)" },
            { transform: "translate(0, 0) rotate(0)" },
          ],
      { duration: reduced ? 300 : 600, easing: "ease-out" },
    );
  }

  return (
    <main className={styles.page} data-revealed={revealed} data-date-visible={dateVisible}>
      <div className={styles.intro} aria-hidden={revealed}>
        <h1>Хочешь узнать что это?</h1>
      </div>
      <div className={styles.date} aria-hidden={!dateVisible}>
        <time dateTime="2026-09-29">29.09.26</time>
      </div>
      <div className={styles.eyes} inert={!revealed}>
        <span className={styles.shake} ref={shakeRef}>
          <svg ref={svgRef} viewBox="0 0 256 96" className={styles.artwork} shapeRendering="crispEdges" aria-hidden="true">
            {[0, 1].map((index) => (
              <PixelEye key={index} index={index} gazeRef={(element) => { gazeRefs.current[index] = element; }} />
            ))}
          </svg>
          <button className={`${styles.hitArea} ${styles.left}`} type="button" onClick={shake} aria-label="Потревожить левый глаз" />
          <button className={`${styles.hitArea} ${styles.right}`} type="button" onClick={shake} aria-label="Потревожить правый глаз" />
        </span>
      </div>
      <nav className={styles.socials} aria-label="Социальные сети">
        <a href="https://www.tiktok.com/@nuvioit" target="_blank" rel="noopener noreferrer" aria-label="TikTok @nuvioit — открыть в новой вкладке">TikTok <span aria-hidden="true">↗</span></a>
        <span className={styles.socialDivider} aria-hidden="true">/</span>
        <a href="https://www.instagram.com/nuvioiti/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @nuvioiti — открыть в новой вкладке">Instagram <span aria-hidden="true">↗</span></a>
      </nav>
    </main>
  );
}
