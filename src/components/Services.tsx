"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { directions } from "@/data/directions";
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
              <h2 className="max-w-lg text-[34px] font-semibold uppercase leading-[1.15] tracking-tight sm:text-[44px]">
                {t.services.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <a
              href="#services-detail"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {t.services.viewAll}
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border nv-hairline bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {directions.map((direction, i) => (
            <Reveal key={direction.slug} delay={(i % 4) * 0.06}>
              <a
                href="#services-detail"
                className="group relative flex h-full min-h-[210px] flex-col justify-between gap-8 bg-black p-7 transition-colors duration-300 hover:bg-[#0a0a0a] active:bg-[#0a0a0a]"
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
                    {direction.title[lang]}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-500">
                    {direction.description[lang]}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
