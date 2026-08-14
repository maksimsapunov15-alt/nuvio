import type { Lang } from "@/i18n/dictionaries";

export type Service = {
  slug: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  priceUsd: string;
  priceRub: string;
  tech: string[];
  features: Record<Lang, string[]>;
};

export const services: Service[] = [
  {
    slug: "websites",
    title: { en: "Websites", ru: "Сайты" },
    description: {
      en: "Modern responsive websites for businesses and brands.",
      ru: "Современные адаптивные сайты для бизнеса и брендов.",
    },
    priceUsd: "$35+",
    priceRub: "2 500 ₽+",
    tech: ["Next.js", "React", "REST API"],
    features: {
      en: [
        "Responsive Development",
        "Modern Minimalist Design",
        "SEO Ready",
        "High Performance",
      ],
      ru: [
        "Адаптивная вёрстка",
        "Современный минималистичный дизайн",
        "Готовность к SEO",
        "Высокая производительность",
      ],
    },
  },
  {
    slug: "multi-page-websites",
    title: { en: "Multi-Page Websites", ru: "Многостраничные сайты" },
    description: {
      en: "Professional multi-page websites with custom structure and design.",
      ru: "Профессиональные многостраничные сайты с индивидуальной структурой и дизайном.",
    },
    priceUsd: "$70+",
    priceRub: "5 000 ₽+",
    tech: ["Next.js", "PostgreSQL", "REST API"],
    features: {
      en: [
        "Custom Information Architecture",
        "Clean & Maintainable Code",
        "SEO Ready",
        "Post-Launch Support",
      ],
      ru: [
        "Индивидуальная архитектура",
        "Чистый и поддерживаемый код",
        "Готовность к SEO",
        "Поддержка после запуска",
      ],
    },
  },
  {
    slug: "ecommerce",
    title: { en: "E-commerce", ru: "Интернет-магазины" },
    description: {
      en: "Modern online stores with product management and integrations.",
      ru: "Современные интернет-магазины с управлением товарами и интеграциями.",
    },
    priceUsd: "$120+",
    priceRub: "8 000 ₽+",
    tech: ["Next.js", "PostgreSQL", "Docker"],
    features: {
      en: [
        "Payment Integrations",
        "Product & Order Management",
        "High Performance",
        "Post-Launch Support",
      ],
      ru: [
        "Интеграция платежей",
        "Управление товарами и заказами",
        "Высокая производительность",
        "Поддержка после запуска",
      ],
    },
  },
  {
    slug: "web-applications",
    title: { en: "Web Applications", ru: "Веб-приложения" },
    description: {
      en: "Scalable web applications tailored to specific business needs.",
      ru: "Масштабируемые веб-приложения под конкретные задачи бизнеса.",
    },
    priceUsd: "$150+",
    priceRub: "10 000 ₽+",
    tech: ["Java", "Spring Boot", ".NET", "PostgreSQL"],
    features: {
      en: [
        "Custom Architecture",
        "Clean & Maintainable Code",
        "High Performance",
        "Post-Launch Support",
      ],
      ru: [
        "Индивидуальная архитектура",
        "Чистый и поддерживаемый код",
        "Высокая производительность",
        "Поддержка после запуска",
      ],
    },
  },
  {
    slug: "telegram-bots",
    title: { en: "Telegram Bots", ru: "Telegram-боты" },
    description: {
      en: "Custom Telegram bots for automation, support and business processes.",
      ru: "Telegram-боты под автоматизацию, поддержку и бизнес-процессы.",
    },
    priceUsd: "$30+",
    priceRub: "2 500 ₽+",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    features: {
      en: [
        "Process Automation",
        "Clean & Maintainable Code",
        "High Performance",
        "Post-Launch Support",
      ],
      ru: [
        "Автоматизация процессов",
        "Чистый и поддерживаемый код",
        "Высокая производительность",
        "Поддержка после запуска",
      ],
    },
  },
  {
    slug: "backend-development",
    title: { en: "Backend Development", ru: "Backend-разработка" },
    description: {
      en: "Backend systems built with Java, Python, C# or PHP.",
      ru: "Backend-системы на Java, Python, C# или PHP.",
    },
    priceUsd: "$45+",
    priceRub: "3 500 ₽+",
    tech: ["Java", "Python", "C#", "PHP"],
    features: {
      en: [
        "Scalable Architecture",
        "Clean & Maintainable Code",
        "High Performance",
        "Post-Launch Support",
      ],
      ru: [
        "Масштабируемая архитектура",
        "Чистый и поддерживаемый код",
        "Высокая производительность",
        "Поддержка после запуска",
      ],
    },
  },
  {
    slug: "rest-api",
    title: { en: "REST API", ru: "REST API" },
    description: {
      en: "Secure and scalable API architecture and integrations.",
      ru: "Безопасная и масштабируемая архитектура API и интеграции.",
    },
    priceUsd: "$45+",
    priceRub: "3 500 ₽+",
    tech: ["REST API", "PostgreSQL", "Docker"],
    features: {
      en: [
        "Secure Authentication",
        "Clean Documentation",
        "High Performance",
        "Post-Launch Support",
      ],
      ru: [
        "Безопасная авторизация",
        "Понятная документация",
        "Высокая производительность",
        "Поддержка после запуска",
      ],
    },
  },
  {
    slug: "maintenance",
    title: { en: "Maintenance", ru: "Поддержка" },
    description: {
      en: "Technical support, updates and monitoring.",
      ru: "Техническая поддержка, обновления и мониторинг.",
    },
    priceUsd: "$10+",
    priceRub: "1 000 ₽+",
    tech: ["Git", "Docker", "Monitoring"],
    features: {
      en: [
        "Regular Updates",
        "Monitoring & Alerts",
        "Bug Fixing",
        "Post-Launch Support",
      ],
      ru: [
        "Регулярные обновления",
        "Мониторинг и оповещения",
        "Исправление ошибок",
        "Поддержка после запуска",
      ],
    },
  },
];
