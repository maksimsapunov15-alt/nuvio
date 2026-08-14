import type { Lang } from "@/i18n/dictionaries";

export type ProcessStep = {
  index: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: { en: "Discover", ru: "Исследование" },
    description: {
      en: "We understand your idea, goals and requirements.",
      ru: "Мы изучаем вашу идею, цели и требования.",
    },
  },
  {
    index: "02",
    title: { en: "Plan", ru: "Планирование" },
    description: {
      en: "We define the architecture, features and visual direction.",
      ru: "Определяем архитектуру, функциональность и визуальное направление.",
    },
  },
  {
    index: "03",
    title: { en: "Build", ru: "Разработка" },
    description: {
      en: "We design and develop the product.",
      ru: "Проектируем и разрабатываем продукт.",
    },
  },
  {
    index: "04",
    title: { en: "Launch", ru: "Запуск" },
    description: {
      en: "We test, deploy and prepare everything for release.",
      ru: "Тестируем, разворачиваем и готовим всё к релизу.",
    },
  },
  {
    index: "05",
    title: { en: "Support", ru: "Поддержка" },
    description: {
      en: "We continue improving and maintaining the product.",
      ru: "Продолжаем улучшать и поддерживать продукт.",
    },
  },
];
