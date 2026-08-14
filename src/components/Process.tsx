"use client";

import Reveal from "./Reveal";
import { processSteps } from "@/data/process";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Process() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative border-t nv-hairline py-28 lg:py-36">
      <div className="nv-container">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <span className="nv-divider" />
            <span className="nv-eyebrow">{t.process.eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-lg text-[34px] font-semibold leading-[1.15] tracking-tight sm:text-[44px]">
            {t.process.heading}
          </h2>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="mt-20 hidden lg:block">
          <div className="grid grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.08}>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] font-medium text-gray-500">
                      {step.index}
                    </span>
                    <span className="h-px flex-1 bg-white/15" />
                  </div>
                  <div className="mt-6 h-2 w-2 rounded-full bg-white" />
                  <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-white">
                    {step.title[lang]}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-gray-500">
                    {step.description[lang]}
                  </p>
                  {i < processSteps.length - 1 && (
                    <span className="absolute right-[-14px] top-[38px] text-gray-700">
                      →
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="mt-16 flex flex-col lg:hidden">
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.06}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border nv-hairline text-[12px] text-gray-400">
                    {step.index}
                  </div>
                  {i < processSteps.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-white/15" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="text-[17px] font-semibold tracking-tight text-white">
                    {step.title[lang]}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-500">
                    {step.description[lang]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
