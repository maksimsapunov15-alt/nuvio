import type { Lang } from "@/i18n/dictionaries";

export type Project = {
  name: string;
  category: Record<Lang, string>;
  description: Record<Lang, string>;
  tech: string[];
  device: "laptop" | "phone";
};

export const projects: Project[] = [
  {
    name: "Vantage",
    category: { en: "Web Application", ru: "Веб-приложение" },
    description: {
      en: "Internal operations dashboard for a logistics company — real-time tracking, analytics and role-based access.",
      ru: "Внутренняя панель управления для логистической компании — трекинг в реальном времени, аналитика и ролевой доступ.",
    },
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    device: "laptop",
  },
  {
    name: "Solace",
    category: { en: "E-commerce", ru: "Интернет-магазин" },
    description: {
      en: "Full-featured online store with catalog management, payments and order automation.",
      ru: "Полнофункциональный интернет-магазин с управлением каталогом, оплатой и автоматизацией заказов.",
    },
    tech: ["Next.js", "PostgreSQL", "REST API"],
    device: "laptop",
  },
  {
    name: "Kelvin Bot",
    category: { en: "Telegram Bot", ru: "Telegram-бот" },
    description: {
      en: "Support and booking automation bot handling thousands of conversations for a service business.",
      ru: "Бот для поддержки и записи, обрабатывающий тысячи обращений для сервисного бизнеса.",
    },
    tech: ["Python", "FastAPI", "MongoDB"],
    device: "phone",
  },
  {
    name: "Northline",
    category: { en: "Corporate Website", ru: "Корпоративный сайт" },
    description: {
      en: "Multi-page corporate website with a custom CMS and a fast, minimal design system.",
      ru: "Многостраничный корпоративный сайт с собственной CMS и быстрой минималистичной дизайн-системой.",
    },
    tech: [".NET", "MySQL", "Git"],
    device: "laptop",
  },
];
