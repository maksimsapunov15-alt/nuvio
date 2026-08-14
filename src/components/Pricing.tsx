"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Price from "./Price";
import LanguageToggle from "./LanguageToggle";
import { pricingRows } from "@/data/pricing";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Pricing() {
  const { t, lang } = useLanguage();

  return (
    <section id="pricing" className="relative border-t nv-hairline py-28 lg:py-36">
      <div className="nv-container">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="nv-divider" />
                <span className="nv-eyebrow">{t.pricing.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-lg text-[34px] font-semibold leading-[1.15] tracking-tight sm:text-[44px]">
                {t.pricing.heading}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <span className="text-[12px] tracking-wide text-gray-500">
                {t.pricing.currencyNote}
              </span>
              <LanguageToggle />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-14 overflow-hidden rounded-2xl border nv-hairline">
            {pricingRows.map((row, i) => (
              <div
                key={row.name.en}
                className={`flex items-center justify-between px-7 py-6 transition-colors duration-300 hover:bg-white/[0.03] sm:px-9 ${
                  i !== pricingRows.length - 1 ? "border-b nv-hairline" : ""
                }`}
              >
                <span className="text-[15px] font-medium text-white sm:text-[17px]">
                  {row.name[lang]}
                </span>
                <span className="text-[16px] font-semibold text-white sm:text-[18px]">
                  <Price usd={row.usd} rub={row.rub} />
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border nv-hairline bg-[#0a0a0a] p-8 sm:flex-row sm:items-center">
            <div>
              <div className="text-[17px] font-semibold text-white">
                {t.pricing.freeConsultation}
              </div>
              <p className="mt-2 max-w-md text-[14px] leading-relaxed text-gray-500">
                {t.pricing.freeConsultationText}
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.pricing.startProject}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
