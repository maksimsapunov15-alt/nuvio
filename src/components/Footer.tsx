"use client";

import { navLinks } from "@/data/nav";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t nv-hairline py-10">
      <div className="nv-container flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="text-[13px] text-gray-500">{t.footer.rights}</span>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-gray-500 transition-colors duration-300 hover:text-white"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <a
            href="https://t.me/NuvioIT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-gray-500 transition-colors duration-300 hover:text-white"
          >
            {t.footer.telegram}
          </a>
        </nav>

        <span className="text-[13px] text-gray-500">nuvio.studio</span>
      </div>
    </footer>
  );
}
