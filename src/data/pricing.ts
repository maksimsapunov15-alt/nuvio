import type { Lang } from "@/i18n/dictionaries";

export type PricingRow = {
  name: Record<Lang, string>;
  rub: string;
  usd: string;
};

export const pricingRows: PricingRow[] = [
  { name: { en: "Landing Page", ru: "Лендинг" }, rub: "от 2 500 ₽", usd: "from $35" },
  { name: { en: "Multi-Page Website", ru: "Многостраничный сайт" }, rub: "от 5 000 ₽", usd: "from $70" },
  { name: { en: "E-commerce", ru: "Интернет-магазин" }, rub: "от 8 000 ₽", usd: "from $120" },
  { name: { en: "Web Application", ru: "Веб-приложение" }, rub: "от 10 000 ₽", usd: "from $150" },
  { name: { en: "Telegram Bot", ru: "Telegram-бот" }, rub: "от 2 500 ₽", usd: "from $30" },
  { name: { en: "Backend Development", ru: "Backend-разработка" }, rub: "от 3 500 ₽", usd: "from $45" },
  { name: { en: "REST API", ru: "REST API" }, rub: "от 3 500 ₽", usd: "from $45" },
  { name: { en: "Maintenance", ru: "Поддержка" }, rub: "от 1 000 ₽", usd: "from $10" },
];
