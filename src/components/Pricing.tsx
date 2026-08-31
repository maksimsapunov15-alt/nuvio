"use client";

import { pricingRows } from "@/data/pricing";
import Price from "./Price";
import LanguageToggle from "./LanguageToggle";
import Reveal from "./Reveal";
import CTAButton from "./CTAButton";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Pricing — a ledger, deliberately plain: the one chapter where the data
 * is genuinely list-shaped (name + price pairs). Mono numerals,
 * right-aligned prices, thin rules — its plainness is the contrast beat
 * after the visually dense Work chapter.
 */
export default function Pricing() {
  const { t, lang } = useLanguage();

  return (
    <section id="pricing" className="nv-field-floor relative">
      <div className="nv-container py-24 lg:py-32">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div className="flex items-start gap-5">
              <span className="text-index-lg font-mono leading-none text-white/10">08</span>
              <h2 className="text-heading lg:text-heading-lg max-w-sm font-sans font-semibold tracking-tight text-white">
                {t.pricing.heading}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <span className="text-small text-gray-600">{t.pricing.currencyNote}</span>
              <LanguageToggle />
            </div>
          </Reveal>
        </div>

        <div className="mt-2">
          {pricingRows.map((row, i) => (
            <Reveal key={row.name.en} delay={Math.min(i * 0.03, 0.2)}>
              <div
                className={`flex items-center justify-between py-5 ${
                  i !== pricingRows.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <span className="text-body-lg text-white">{row.name[lang]}</span>
                <span className="text-body-lg font-mono text-gray-300">
                  <Price usd={row.usd} rub={row.rub} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
            <div>
              <div className="text-body-lg font-medium text-white">
                {t.pricing.freeConsultation}
              </div>
              <p className="text-body mt-2 max-w-md text-gray-500">
                {t.pricing.freeConsultationText}
              </p>
            </div>
            <CTAButton href="#contact">{t.pricing.startProject}</CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
