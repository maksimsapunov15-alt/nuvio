"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

/**
 * About — pull-quote. Not a 2-col info+stats grid. One large serif
 * statement occupies the main column; the 4 stats run as a stacked rail
 * on the edge, right-aligned, mono numerals — asymmetric, not a
 * symmetric stat row.
 */
export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="nv-field-floor relative">
      <div className="nv-container grid gap-16 py-24 lg:grid-cols-[1fr_260px] lg:gap-24 lg:py-32">
        <div>
          <Reveal>
            <span className="text-label font-mono tracking-[0.2em] text-gray-600">
              {t.about.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-statement lg:text-statement-lg mt-8 max-w-2xl font-sans font-semibold tracking-tight text-white">
              {t.about.p1}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-body-lg mt-8 max-w-md text-gray-500">{t.about.p2}</p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8 border-l border-white/10 pl-8 lg:items-end lg:border-l-0 lg:border-r lg:pl-0 lg:pr-8 lg:text-right">
          {t.about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.1 + i * 0.06}>
              <div>
                <div className="text-heading-lg font-mono font-medium text-white">
                  {stat.value}
                </div>
                <div className="text-body mt-1 text-gray-300">{stat.label}</div>
                <div className="text-small mt-1 max-w-[220px] text-gray-600 lg:ml-auto">
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
