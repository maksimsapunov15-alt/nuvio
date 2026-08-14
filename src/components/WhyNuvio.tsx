"use client";

import Reveal from "./Reveal";
import { whyItems } from "@/data/whyNuvio";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function WhyNuvio() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative border-t nv-hairline py-28 lg:py-36">
      <div className="nv-container">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <span className="nv-divider" />
            <span className="nv-eyebrow">{t.whyNuvio.eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-lg text-[34px] font-semibold leading-[1.15] tracking-tight sm:text-[44px]">
            {t.whyNuvio.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
          {whyItems.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-6 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-gray-600">
                    {item.index}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border nv-hairline text-white">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold tracking-tight text-white">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-500">
                    {item.description[lang]}
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
