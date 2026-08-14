"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import dictionaries, { langToCurrency, type Currency, type Lang } from "./dictionaries";

type LanguageContextValue = {
  lang: Lang;
  currency: Currency;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (typeof dictionaries)["en"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "nuvio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ru") {
      setLangState(stored);
      return;
    }
    const browserLang = window.navigator.language?.toLowerCase() ?? "";
    setLangState(browserLang.startsWith("ru") ? "ru" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "ru" ? "en" : "ru";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      currency: langToCurrency[lang],
      setLang,
      toggleLang,
      t: dictionaries[lang],
    }),
    [lang, setLang, toggleLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
