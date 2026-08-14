"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative border-t nv-hairline py-28 lg:py-36">
      <div className="nv-container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="nv-divider" />
                <span className="nv-eyebrow">{t.about.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-md text-[34px] font-semibold leading-[1.15] tracking-tight sm:text-[44px]">
                {t.about.heading}
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <Reveal delay={0.1}>
              <p className="text-[17px] leading-relaxed text-gray-400">
                {t.about.p1}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-[17px] leading-relaxed text-gray-400">
                {t.about.p2}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 border-t nv-hairline pt-14 lg:grid-cols-4">
          {t.about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border-l nv-hairline pl-6">
                <div className="text-[36px] font-semibold tracking-tight text-white sm:text-[42px]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[15px] font-medium text-white">
                  {stat.label}
                </div>
                <div className="mt-2 text-[13px] leading-relaxed text-gray-500">
                  {stat.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
