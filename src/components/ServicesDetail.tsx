"use client";

import { useRef } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import Price from "./Price";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ServicesDetail() {
  const { t, lang } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCards(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 380, behavior: "smooth" });
  }

  return (
    <section id="services-detail" className="relative border-t nv-hairline py-28 lg:py-36">
      <div className="nv-container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="nv-divider" />
                <span className="nv-eyebrow">{t.servicesDetail.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-lg text-[34px] font-semibold leading-[1.15] tracking-tight sm:text-[44px]">
                {t.servicesDetail.heading}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scrollByCards(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border nv-hairline text-gray-400 transition-colors duration-300 hover:border-white/40 hover:text-white"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scrollByCards(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border nv-hairline text-gray-400 transition-colors duration-300 hover:border-white/40 hover:text-white"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div
            ref={trackRef}
            className="nv-hide-scrollbar mt-14 flex gap-5 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {services.map((service, i) => (
              <div
                key={service.slug}
                style={{ scrollSnapAlign: "start" }}
                className="group flex w-[320px] shrink-0 flex-col justify-between gap-8 rounded-2xl border nv-hairline bg-[#0a0a0a] p-8 transition-colors duration-300 hover:border-white/25 sm:w-[360px]"
              >
                <div>
                  <span className="text-[13px] text-gray-600">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-[21px] font-semibold tracking-tight text-white">
                    {service.title[lang]}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-500">
                    {service.description[lang]}
                  </p>

                  <div className="mt-6 text-[16px] font-medium text-white">
                    <Price usd={service.priceUsd} rub={service.priceRub} />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border nv-hairline px-3 py-1 text-[11px] text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 flex flex-col gap-2.5 border-t nv-hairline pt-6">
                    {service.features[lang].map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-[13px] text-gray-400"
                      >
                        <Check size={13} className="shrink-0 text-gray-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="group/link inline-flex items-center gap-1.5 text-[14px] font-medium text-white"
                >
                  {t.servicesDetail.learnMore}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mt-6 text-[13px] text-gray-600">{t.servicesDetail.note}</p>
      </div>
    </section>
  );
}
