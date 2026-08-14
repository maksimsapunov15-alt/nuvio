"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="nv-radial-glow relative border-t nv-hairline py-32 lg:py-44">
      <div className="nv-container flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-2xl text-[36px] font-semibold leading-[1.12] tracking-tight sm:text-[52px]">
            {t.cta.headingLine1}
            <br />
            {t.cta.headingLine2}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-gray-500">
            {t.cta.sub}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
          >
            {t.cta.button}
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
