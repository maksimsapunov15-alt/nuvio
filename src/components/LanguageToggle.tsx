"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-white/20 p-1 ${className ?? ""}`}
    >
      <button
        type="button"
        onClick={() => setLang("ru")}
        aria-pressed={lang === "ru"}
        className={`rounded-full px-3 py-1.5 text-[12px] font-semibold tracking-wide transition-colors duration-300 ${
          lang === "ru" ? "bg-white text-black" : "text-gray-400 hover:text-white"
        }`}
      >
        RU
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1.5 text-[12px] font-semibold tracking-wide transition-colors duration-300 ${
          lang === "en" ? "bg-white text-black" : "text-gray-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
