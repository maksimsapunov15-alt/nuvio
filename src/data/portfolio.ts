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
  {
    name: "Aurora",
    category: { en: "Landing Page", ru: "Лендинг" },
    description: {
      en: "Fitness studio landing concept with a live class schedule and trial booking form.",
      ru: "Концепт лендинга фитнес-студии с интерактивным расписанием занятий и записью на пробное.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    device: "laptop",
    url: "https://maksimsapunov15-alt.github.io/nuvio-aurora/",
    repo: "https://github.com/maksimsapunov15-alt/nuvio-aurora",
  },
  {
    name: "Ledger",
    category: { en: "SaaS Landing", ru: "SaaS-лендинг" },
    description: {
      en: "Marketing site concept for an invoicing SaaS, with a product preview and pricing tiers.",
      ru: "Концепт маркетингового сайта для SaaS-сервиса выставления счетов, с превью продукта и тарифами.",
    },
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
    device: "laptop",
    url: "https://maksimsapunov15-alt.github.io/nuvio-ledger/",
    repo: "https://github.com/maksimsapunov15-alt/nuvio-ledger",
  },
  {
    name: "Marrow",
    category: { en: "Restaurant Website", ru: "Сайт ресторана" },
    description: {
      en: "Restaurant site concept with a seasonal menu browser and table reservation form.",
      ru: "Концепт сайта ресторана с интерактивным сезонным меню и формой бронирования столика.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    device: "laptop",
    url: "https://maksimsapunov15-alt.github.io/nuvio-marrow/",
    repo: "https://github.com/maksimsapunov15-alt/nuvio-marrow",
  },
  {
    name: "Pulse",
    category: { en: "Event Landing", ru: "Лендинг мероприятия" },
    description: {
      en: "One-day conference landing concept with a live countdown, speaker grid and ticket tiers.",
      ru: "Концепт лендинга однодневной конференции с обратным отсчётом, спикерами и билетами.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    device: "laptop",
    url: "https://maksimsapunov15-alt.github.io/nuvio-pulse/",
    repo: "https://github.com/maksimsapunov15-alt/nuvio-pulse",
  },
  {
    name: "Havenly",
    category: { en: "Real Estate", ru: "Недвижимость" },
    description: {
      en: "Real estate listings concept with filterable property cards and a detail modal.",
      ru: "Концепт каталога недвижимости с фильтрами по типу жилья и модальным окном объекта.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    device: "laptop",
    url: "https://maksimsapunov15-alt.github.io/nuvio-havenly/",
    repo: "https://github.com/maksimsapunov15-alt/nuvio-havenly",
  },
  {
    name: "Loop",
    category: { en: "Media / Podcast", ru: "Медиа / подкаст" },
    description: {
      en: "Editorial podcast site concept with a working player mock-up and an episode archive.",
      ru: "Концепт журнального сайта подкаста с рабочим макетом плеера и архивом выпусков.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    device: "laptop",
    url: "https://maksimsapunov15-alt.github.io/nuvio-loop/",
    repo: "https://github.com/maksimsapunov15-alt/nuvio-loop",
  },
];
