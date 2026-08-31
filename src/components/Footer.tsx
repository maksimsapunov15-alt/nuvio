"use client";

import { navLinks } from "@/data/nav";
import { useLanguage } from "@/i18n/LanguageProvider";
import Section from "./Section";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <Section as="footer" className="py-10" containerClassName="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <span className="text-small text-gray-500">{t.footer.rights}</span>

      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-small text-gray-500 transition-colors duration-300 hover:text-white"
          >
            {t.nav[link.key]}
          </a>
        ))}
        <a
          href="https://t.me/NuvioIT"
          target="_blank"
          rel="noopener noreferrer"
          className="text-small text-gray-500 transition-colors duration-300 hover:text-white"
        >
          {t.footer.telegram}
        </a>
      </nav>

      <span className="text-small text-gray-500">nuvio.studio</span>
    </Section>
  );
}
