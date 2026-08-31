"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import HeroLogo from "./HeroLogo";
import CTAButton from "./CTAButton";
import { EASE_NV } from "@/lib/motion";

/**
 * Hero — "Mark." Not a logo→headline→sub→two-buttons stack. The static
 * logo sits as a fixed emblem dead-center of the whole viewport,
 * independent of the content flow around it, on a plain flat-black
 * background — no texture, no light sweep, no gradient. The headline runs
 * as its own band bottom-left, sub-copy and actions anchor bottom-right —
 * an asymmetric placard, not a centered stack.
 */
export default function Hero() {
  const { t } = useLanguage();
  const headlineLines = t.hero.headline.split("\n");

  return (
    <section id="home" className="nv-field-void relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* logo — its own layer, always dead-center of the viewport,
          independent of the content flow around it */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
        <HeroLogo className="pointer-events-auto" />
      </div>

      {/* content — top row (badge / chapter mark) and bottom band
          (headline left, sub + actions right) frame the emblem */}
      <div className="nv-container relative z-10 flex flex-1 flex-col justify-between py-8 pt-28 pb-12 lg:pt-32 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE_NV }}
          className="flex items-start justify-between"
        >
          <span className="text-label font-mono font-medium tracking-[0.32em] text-gray-500">
            {t.hero.badge}
          </span>
          <span className="text-label font-mono tracking-[0.2em] text-gray-700">
            00 — NUVIO
          </span>
        </motion.div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <h1 className="text-hero lg:text-hero-lg max-w-2xl font-sans font-semibold tracking-tight text-white">
            {headlineLines.map((line, i) => (
              <motion.span
                key={`${line}-${i}`}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.6 + i * 0.08,
                  ease: EASE_NV,
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: EASE_NV }}
            className="flex flex-col items-start gap-5 lg:items-end lg:text-right"
          >
            <p className="text-body-lg max-w-xs text-gray-400">{t.hero.sub}</p>
            <div className="flex flex-wrap items-center gap-5 lg:flex-row-reverse">
              <CTAButton href="#contact">{t.hero.ctaPrimary}</CTAButton>
              <a
                href="#capability"
                className="group inline-flex items-center gap-1.5 text-small font-medium text-gray-400 transition-colors duration-300 hover:text-white"
              >
                {t.hero.ctaSecondary}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
