"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { services } from "@/data/services";
import { whyItems } from "@/data/whyNuvio";
import Price from "./Price";
import Reveal from "./Reveal";
import { EASE_NV } from "@/lib/motion";

/**
 * Capability — replaces the old Services + ServicesDetail + WhyNuvio grid
 * trio with one chapter: a single-column, no-card, large-mono-numeral list
 * of the 8 services (zigzag alignment against a giant watermark numeral,
 * expand-in-place for the feature checklist instead of always-visible
 * boxed cards), closing with the 4 WhyNuvio principles folded in as a
 * compact numbered strip — so nothing becomes its own repeated 4-card grid.
 */
export default function Capability() {
  const { t, lang } = useLanguage();
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section id="capability" className="nv-field-floor relative">
      <div className="nv-container relative py-24 lg:py-32">
        {/* header — asymmetric, not the old eyebrow+divider+heading block */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div className="flex items-start gap-5">
              <span className="text-index-lg font-mono leading-none text-white/10">01</span>
              <h2 className="text-statement lg:text-statement-lg max-w-xl font-sans font-semibold tracking-tight text-white">
                {t.servicesDetail.heading}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-label font-mono tracking-[0.2em] text-gray-600">
              {services.length} {t.services.eyebrow.toUpperCase()}
            </span>
          </Reveal>
        </div>

        {/* the list */}
        <div className="mt-4">
          {services.map((service, i) => {
            const isOpen = openSlug === service.slug;
            return (
              <Reveal key={service.slug} delay={Math.min(i * 0.04, 0.3)}>
                <div className="group relative border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpenSlug(isOpen ? null : service.slug)}
                    aria-expanded={isOpen}
                    className="grid w-full grid-cols-[2rem_1fr] items-center gap-x-4 gap-y-2 py-6 text-left transition-colors sm:grid-cols-[2.5rem_1fr_1fr_auto] sm:gap-x-8"
                  >
                    <span className="font-mono text-small text-gray-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-heading font-medium text-white transition-colors group-hover:text-white/80">
                      {service.title[lang]}
                    </span>
                    <span className="hidden max-w-xs text-body text-gray-500 sm:block">
                      {service.description[lang]}
                    </span>
                    <span className="flex items-center gap-4 font-mono text-body text-gray-300">
                      <Price usd={service.priceUsd} rub={service.priceRub} />
                      <Plus
                        size={16}
                        className={`shrink-0 text-gray-600 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE_NV }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pb-8 pl-0 sm:pl-11">
                          <ul className="flex flex-wrap gap-x-6 gap-y-2">
                            {service.features[lang].map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center gap-2 text-small text-gray-400"
                              >
                                <Check size={13} className="text-gray-600" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {service.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-gray-500"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-md text-small text-gray-600">{t.servicesDetail.note}</p>
        </Reveal>

        {/* principles coda — WhyNuvio content, folded in as a strip rather
            than its own repeated 4-card-grid chapter */}
        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-12 lg:grid-cols-4">
          {whyItems.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.06}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-small text-gray-600">{item.index}</span>
                <item.icon size={18} strokeWidth={1.5} className="text-gray-400" />
                <h3 className="text-body-lg font-medium text-white">{item.title[lang]}</h3>
                <p className="text-small text-gray-500">{item.description[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
