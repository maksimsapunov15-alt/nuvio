"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { processSteps } from "@/data/process";
import Reveal from "./Reveal";

/**
 * Process — the quietest chapter on the page, deliberately spare: a single
 * connecting rule, big mono step numbers, one clause of description each.
 * A breathing beat between the two heavier chapters around it.
 */
export default function Process() {
  const { t, lang } = useLanguage();

  return (
    <section id="process" className="nv-field-floor relative">
      <div className="nv-container py-24 lg:py-32">
        <Reveal>
          <span className="text-label font-mono tracking-[0.2em] text-gray-600">
            {t.process.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-heading lg:text-heading-lg mt-6 max-w-md font-sans font-semibold tracking-tight text-white">
            {t.process.heading}
          </h2>
        </Reveal>

        <div className="relative mt-16 max-w-2xl pl-10 lg:pl-14">
          <div className="absolute top-2 bottom-2 left-0 w-px bg-white/10" aria-hidden="true" />
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={0.1 + i * 0.05}>
              <div className="relative border-b border-white/5 py-8 last:border-b-0">
                <span className="absolute -left-10 top-8 font-mono text-small text-gray-600 lg:-left-14">
                  {step.index}
                </span>
                <h3 className="text-body-lg font-medium text-white">{step.title[lang]}</h3>
                <p className="text-body mt-2 text-gray-500">{step.description[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
