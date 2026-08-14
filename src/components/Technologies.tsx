"use client";

import Reveal from "./Reveal";
import { technologies } from "@/data/technologies";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Technologies() {
  const { t } = useLanguage();
  const loop = [...technologies, ...technologies];

  return (
    <section className="relative border-t nv-hairline py-28 lg:py-36">
      <div className="nv-container">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <span className="nv-divider" />
            <span className="nv-eyebrow">{t.technologies.eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-lg text-[34px] font-semibold leading-[1.15] tracking-tight sm:text-[44px]">
            {t.technologies.heading}
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.14}>
        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
          <div className="nv-marquee-track flex w-max gap-4 py-2">
            {loop.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="flex items-center gap-2.5 whitespace-nowrap rounded-full border nv-hairline px-6 py-3 text-[14px] font-medium text-gray-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
