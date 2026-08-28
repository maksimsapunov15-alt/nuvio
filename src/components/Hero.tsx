"use client";

import { useRef, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import MetallicLogo from "./MetallicLogo";

type SmokePuff = {
  top: string;
  left: string;
  size: number;
  duration: number;
  x: number;
  y: number;
  delay: number;
};

const SMOKE_PUFFS: SmokePuff[] = [
  { top: "14%", left: "10%", size: 220, duration: 22, x: 40, y: -30, delay: 0 },
  { top: "62%", left: "80%", size: 260, duration: 27, x: -35, y: 25, delay: -6 },
  { top: "6%", left: "72%", size: 190, duration: 19, x: -25, y: 20, delay: -3 },
  { top: "78%", left: "18%", size: 210, duration: 25, x: 30, y: -20, delay: -12 },
  { top: "42%", left: "48%", size: 320, duration: 31, x: 20, y: -25, delay: -9 },
];

export default function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  const headlineLines = t.hero.headline.split("\n");

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24 pb-12 lg:pt-28"
    >
      <div className="nv-cinematic-bg" aria-hidden="true" />
      {SMOKE_PUFFS.map((p, i) => (
        <span
          key={i}
          className="nv-smoke"
          aria-hidden="true"
          style={
            {
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--smoke-x": `${p.x}px`,
              "--smoke-y": `${p.y}px`,
            } as CSSProperties
          }
        />
      ))}
      <div className="nv-vignette" aria-hidden="true" />

      <div className="nv-container relative z-10 flex flex-1 flex-col lg:grid lg:grid-cols-[1fr_1.08fr] lg:items-center lg:gap-8">
        {/* Text block — below the logo on mobile, left column on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 mt-10 flex flex-col items-center text-center lg:order-1 lg:mt-0 lg:items-start lg:text-left"
        >
          <span className="text-[11px] font-semibold tracking-[0.32em] text-gray-500">
            {t.hero.badge}
          </span>

          <h1 className="mt-5 text-[36px] font-semibold uppercase leading-[1.06] tracking-tight text-white sm:text-[44px] lg:text-[54px] xl:text-[60px]">
            {headlineLines.map((line, i) => (
              <motion.span
                key={`${line}-${i}`}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.45 + i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xs text-[15px] leading-relaxed text-gray-400 lg:max-w-sm"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[13.5px] font-semibold uppercase tracking-wide text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Logo stage — dominant first-screen element */}
        <div className="order-1 flex flex-col items-center justify-center gap-6 lg:order-2">
          <MetallicLogo heroRef={heroRef} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="nv-hero-hint"
          >
            <span className="lg:hidden">
              ПОТЯНИТЕ, ЧТОБЫ ПОВЕРНУТЬ
              <br />
              ЛИСТАЙТЕ, ЧТОБЫ УЗНАТЬ БОЛЬШЕ
            </span>
            <span className="hidden lg:inline">
              DRAG TO ROTATE
              <br />
              SCROLL TO EXPLORE
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
