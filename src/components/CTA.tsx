"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";
import CTAButton from "./CTAButton";

/**
 * CTA — closing statement. One large serif line, one action, centered,
 * minimal — a bookend that echoes Hero's restraint. A graphite tone beat
 * (not another black panel) between Pricing and Contact.
 */
export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="nv-field-graphite relative overflow-hidden">
      <div className="nv-container relative flex flex-col items-center py-28 text-center lg:py-40">
        <Reveal>
          <h2 className="text-statement lg:text-statement-lg max-w-2xl font-sans font-semibold tracking-tight text-white">
            {t.cta.headingLine1}
            <br />
            {t.cta.headingLine2}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-body-lg mt-6 max-w-md text-gray-400">{t.cta.sub}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10">
            <CTAButton href="#contact" size="lg">
              {t.cta.button}
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
