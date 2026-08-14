import { UserCheck, Cpu, Code2, LifeBuoy, type LucideIcon } from "lucide-react";
import type { Lang } from "@/i18n/dictionaries";

export type WhyItem = {
  index: string;
  icon: LucideIcon;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
};

export const whyItems: WhyItem[] = [
  {
    index: "01",
    icon: UserCheck,
    title: { en: "Individual Approach", ru: "Индивидуальный подход" },
    description: {
      en: "Every project starts with understanding the client's goals.",
      ru: "Каждый проект начинается с понимания целей клиента.",
    },
  },
  {
    index: "02",
    icon: Cpu,
    title: { en: "Modern Technology", ru: "Современные технологии" },
    description: {
      en: "We use modern, reliable and scalable technologies.",
      ru: "Мы используем современные, надёжные и масштабируемые технологии.",
    },
  },
  {
    index: "03",
    icon: Code2,
    title: { en: "Clean Engineering", ru: "Чистая инженерия" },
    description: {
      en: "Our code is structured, maintainable and built for long-term growth.",
      ru: "Наш код структурирован, поддерживаем и рассчитан на долгосрочный рост.",
    },
  },
  {
    index: "04",
    icon: LifeBuoy,
    title: { en: "Long-Term Support", ru: "Долгосрочная поддержка" },
    description: {
      en: "We stay involved even after the project launches.",
      ru: "Мы остаёмся на связи даже после запуска проекта.",
    },
  },
];
