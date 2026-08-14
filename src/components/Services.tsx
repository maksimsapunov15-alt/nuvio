"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Price from "./Price";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Services() {
  const { t, lang } = useLanguage();

  return (
    <section id="services" className="relative border-t nv-hairline py-28 lg:py-36">
      <div className="nv-container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="nv-divider" />
                <span className="nv-eyebrow">{t.services.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-lg text-[34px] font-semibold leading-[1.15] tracking-tight sm:text-[44px]">
                {t.services.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-sm text-[14px] leading-relaxed text-gray-500">
              {t.services.note}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border nv-hairline bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 0.06}>
              <a
                href="#services-detail"
                className="group relative flex h-full flex-col justify-between gap-8 bg-black p-7 transition-colors duration-300 hover:bg-[#0a0a0a]"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="text-[13px] text-gray-600">
                      0{i + 1}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </div>
                  <h3 className="mt-6 text-[19px] font-semibold tracking-tight text-white">
                    {service.title[lang]}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-500">
                    {service.description[lang]}
                  </p>
                </div>
                <div className="border-t nv-hairline pt-4">
                  <div className="text-[15px] font-medium text-white">
                    <Price usd={service.priceUsd} rub={service.priceRub} />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
