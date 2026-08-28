import type { Lang } from "@/i18n/dictionaries";

export type Direction = {
  slug: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
};

export const directions: Direction[] = [
  {
    slug: "ecommerce",
    title: { en: "E-commerce", ru: "Интернет-магазины" },
    description: {
      en: "Modern online stores with product management and integrations.",
      ru: "Современные интернет-магазины с управлением товарами и интеграциями.",
    },
  },
  {
    slug: "web-applications",
    title: { en: "Web Applications", ru: "Веб-приложения" },
    description: {
      en: "Scalable web applications tailored to specific business needs.",
      ru: "Масштабируемые веб-приложения под конкретные задачи бизнеса.",
    },
  },
  {
    slug: "telegram-bots",
    title: { en: "Telegram Bots", ru: "Telegram-боты" },
    description: {
      en: "Custom Telegram bots for automation, support and business processes.",
      ru: "Telegram-боты под автоматизацию, поддержку и бизнес-процессы.",
    },
  },
  {
    slug: "mobile-apps",
    title: { en: "Mobile Apps", ru: "Мобильные приложения" },
    description: {
      en: "Native mobile applications for iOS and Android.",
      ru: "Нативные мобильные приложения для iOS и Android.",
    },
  },
];
