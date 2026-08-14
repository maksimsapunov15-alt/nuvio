"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });

  const ringX = useTransform(sx, (v) => v * 24);
  const ringY = useTransform(sy, (v) => v * 24);
  const ringRotate = useTransform(sx, (v) => v * 6);
  const glowX = useTransform(sx, (v) => v * -14);
  const glowY = useTransform(sy, (v) => v * -14);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px);
    my.set(py);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="nv-radial-glow relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />

      <div className="nv-container relative grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="text-[11px] font-medium tracking-[0.18em] text-gray-300">
              {t.hero.badge}
            </span>
          </motion.div>

          <h1 className="max-w-2xl text-[42px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[56px] lg:text-[64px]">
            {t.hero.headline
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.045,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mr-[0.28em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-lg text-[17px] leading-relaxed text-gray-400"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[14px] font-medium text-white transition-colors duration-300 hover:border-white/50"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex h-[340px] w-full max-w-md items-center justify-center sm:h-[420px] lg:h-[480px]"
        >
          <motion.div
            style={{ x: glowX, y: glowY }}
            className="absolute h-[70%] w-[70%] rounded-full bg-white/10 blur-[100px]"
          />

          <motion.div
            style={{ x: ringX, y: ringY, rotate: ringRotate }}
            className="nv-float relative"
          >
            <svg
              width="380"
              height="380"
              viewBox="0 0 380 380"
              className="max-w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="ring1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4a4a4a" />
                  <stop offset="22%" stopColor="#f5f5f5" />
                  <stop offset="45%" stopColor="#1a1a1a" />
                  <stop offset="68%" stopColor="#eaeaea" />
                  <stop offset="100%" stopColor="#0a0a0a" />
                </linearGradient>
                <linearGradient id="ring2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0a0a0a" />
                  <stop offset="30%" stopColor="#e8e8e8" />
                  <stop offset="55%" stopColor="#222222" />
                  <stop offset="80%" stopColor="#dcdcdc" />
                  <stop offset="100%" stopColor="#151515" />
                </linearGradient>
                <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow
                    dx="0"
                    dy="18"
                    stdDeviation="24"
                    floodColor="#000000"
                    floodOpacity="0.6"
                  />
                </filter>
              </defs>
              <g filter="url(#soft)">
                <circle
                  cx="160"
                  cy="150"
                  r="118"
                  fill="none"
                  stroke="url(#ring1)"
                  strokeWidth="34"
                />
                <circle
                  cx="230"
                  cy="230"
                  r="90"
                  fill="none"
                  stroke="url(#ring2)"
                  strokeWidth="30"
                />
              </g>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] tracking-[0.28em] text-gray-500">
          {t.hero.scroll}
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
