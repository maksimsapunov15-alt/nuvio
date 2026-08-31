"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CHAPTERS = [
  { id: "capability", index: "01", label: "CAPABILITY" },
  { id: "laptop", index: "02", label: "PRODUCT" },
  { id: "about", index: "03", label: "ABOUT" },
  { id: "process", index: "04", label: "PROCESS" },
  { id: "technologies", index: "05", label: "TECHNOLOGY" },
  { id: "phone", index: "06", label: "PRODUCT" },
  { id: "work", index: "07", label: "WORK" },
  { id: "pricing", index: "08", label: "PRICING" },
  { id: "contact", index: "09", label: "CONTACT" },
] as const;

/**
 * The signature wayfinding device: a slim, desktop-only fixed label
 * tracking which chapter is in view via IntersectionObserver. Cross-fades
 * only — no slide/bounce. Purely supplementary to the real, accessible
 * Navbar, so it's hidden from assistive tech.
 */
export default function ChapterIndex() {
  const [activeId, setActiveId] = useState<string>(CHAPTERS[0].id);

  useEffect(() => {
    const elements = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const nearest = [...visible].sort(
          (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
        )[0];
        setActiveId(nearest.target.id);
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = CHAPTERS.find((c) => c.id === activeId) ?? CHAPTERS[0];

  return (
    <div
      className="pointer-events-none fixed bottom-6 left-6 z-40 hidden lg:block"
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-label flex items-center gap-2 font-mono tracking-[0.2em] text-gray-600"
        >
          <span className="text-gray-500">{active.index}</span>
          <span className="h-px w-4 bg-gray-700" />
          <span>{active.label}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
