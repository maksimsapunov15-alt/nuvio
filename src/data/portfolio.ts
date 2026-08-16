import type { Lang } from "@/i18n/dictionaries";

export type Project = {
  name: string;
  category: Record<Lang, string>;
  description: Record<Lang, string>;
  tech: string[];
  device: "laptop" | "phone";
  url: string;
  repo: string;
};

export const projects: Project[] = [
  {
    name: "Vantage",
    category: { en: "Web Application", ru: "Веб-приложение" },
    description: {
      en: "Operations dashboard concept for a logistics company — live-style tracking, analytics and fleet overview.",
      ru: "Концепт панели управления для логистической компании — трекинг поставок, аналитика и загрузка автопарка.",
    },
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
    device: "laptop",
    url: "https://maksimsapunov15-alt.github.io/nuvio-vantage/",
    repo: "https://github.com/maksimsapunov15-alt/nuvio-vantage",
  },
  {
    name: "Solace",
    category: { en: "E-commerce", ru: "Интернет-магазин" },
    description: {
      en: "Online store concept with a working catalog, cart and checkout flow.",
      ru: "Концепт интернет-магазина с рабочим каталогом, корзиной и оформлением заказа.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    device: "laptop",
    url: "https://maksimsapunov15-alt.github.io/nuvio-solace/",
    repo: "https://github.com/maksimsapunov15-alt/nuvio-solace",
  },
  {
    name: "Kelvin Bot",
    category: { en: "Telegram Bot", ru: "Telegram-бот" },
    description: {
      en: "Landing page for a booking & support bot, with a simulated conversation demo.",
      ru: "Лендинг для бота записи и поддержки клиентов с демонстрацией диалога.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    device: "phone",
    url: "https://maksimsapunov15-alt.github.io/nuvio-kelvin-bot/",
    repo: "https://github.com/maksimsapunov15-alt/nuvio-kelvin-bot",
  },
  {
    name: "Northline",
    category: { en: "Corporate Website", ru: "Корпоративный сайт" },
    description: {
      en: "Multi-page corporate website concept with a clean, structured design system.",
      ru: "Концепт многостраничного корпоративного сайта со строгой структурной дизайн-системой.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    device: "laptop",
    url: "https://maksimsapunov15-alt.github.io/nuvio-northline/",
    repo: "https://github.com/maksimsapunov15-alt/nuvio-northline",
  },
];
