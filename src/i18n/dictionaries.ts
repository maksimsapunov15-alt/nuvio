export type Lang = "en" | "ru";
export type Currency = "USD" | "RUB";

export const langToCurrency: Record<Lang, Currency> = {
  en: "USD",
  ru: "RUB",
};

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    services: string;
    work: string;
    pricing: string;
    contact: string;
    startProject: string;
  };
  hero: {
    badge: string;
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
    stats: { value: string; label: string; detail: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    note: string;
    viewAll: string;
  };
  servicesDetail: {
    eyebrow: string;
    heading: string;
    learnMore: string;
    note: string;
  };
  whyNuvio: {
    eyebrow: string;
    heading: string;
  };
  process: {
    eyebrow: string;
    heading: string;
  };
  technologies: {
    eyebrow: string;
    heading: string;
  };
  portfolio: {
    eyebrow: string;
    heading: string;
    liveLabel: string;
    codeLabel: string;
  };
  pricing: {
    eyebrow: string;
    heading: string;
    currencyNote: string;
    freeConsultation: string;
    freeConsultationText: string;
    startProject: string;
  };
  cta: {
    headingLine1: string;
    headingLine2: string;
    sub: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    telegramLabel: string;
    studioLabel: string;
    formName: string;
    formNamePlaceholder: string;
    formContact: string;
    formContactPlaceholder: string;
    formType: string;
    formTypePlaceholder: string;
    formBudget: string;
    formBudgetPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    openingMessage: string;
    projectTypes: string[];
    budgets: string[];
    telegramMessage: {
      title: string;
      name: string;
      contact: string;
      type: string;
      budget: string;
      message: string;
    };
  };
  footer: {
    rights: string;
    telegram: string;
  };
};

const dictionaries: Record<Lang, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      work: "Work",
      pricing: "Pricing",
      contact: "Contact",
      startProject: "Start a Project",
    },
    hero: {
      badge: "DIGITAL SOLUTIONS",
      headline: "Solutions that\nmove your\nbusiness forward",
      sub: "We build thoughtful, scalable solutions that are engineered to perform.",
      ctaPrimary: "Start a Project",
      ctaSecondary: "View Services",
      scroll: "SCROLL",
    },
    about: {
      eyebrow: "About Us",
      heading: "We are Nuvio.",
      p1: "Nuvio is a digital studio focused on building modern websites, web applications, backend systems and automation tools.",
      p2: "We combine design, technology and clean engineering to create products that are fast, reliable and built to grow with your business.",
      stats: [
        { value: "10+", label: "Projects", detail: "Successfully delivered for our clients." },
        { value: "15+", label: "Clients", detail: "Companies and startups who trust us with their ideas." },
        { value: "3+", label: "Years of experience", detail: "Building digital products of varying complexity." },
        { value: "100%", label: "Focus on quality", detail: "Every project is on time, on scope, and cared for." },
      ],
    },
    services: {
      eyebrow: "Services",
      heading: "Our Directions",
      note: "Final price depends on project complexity and requirements. Prices below are starting prices.",
      viewAll: "View All",
    },
    servicesDetail: {
      eyebrow: "Service Details",
      heading: "Everything included, by default.",
      learnMore: "Learn more",
      note: "Final price depends on project complexity and requirements.",
    },
    whyNuvio: {
      eyebrow: "Why Nuvio",
      heading: "Why Nuvio?",
    },
    process: {
      eyebrow: "Our Process",
      heading: "How we work",
    },
    technologies: {
      eyebrow: "Technologies",
      heading: "Built with proven tools.",
    },
    portfolio: {
      eyebrow: "Selected Work",
      heading: "Selected Work",
      liveLabel: "Live demo",
      codeLabel: "Code",
    },
    pricing: {
      eyebrow: "Pricing",
      heading: "Simple, transparent pricing.",
      currencyNote: "Prices shown in USD.",
      freeConsultation: "Free consultation",
      freeConsultationText:
        "Final pricing depends on project scope and complexity. Tell us about your idea and we'll prepare a clear estimate — no fake discounts, no fine print.",
      startProject: "Start a Project",
    },
    cta: {
      headingLine1: "Have an idea?",
      headingLine2: "Let's build something great together.",
      sub: "Tell us about your project and we'll get back to you.",
      button: "Start a Project",
    },
    contact: {
      eyebrow: "Contacts",
      heading: "Let's talk about your project.",
      sub: "The fastest way to reach us is Telegram. Fill in the form and it will open a prefilled message for you to send — or write to us directly.",
      telegramLabel: "TELEGRAM",
      studioLabel: "STUDIO",
      formName: "Name",
      formNamePlaceholder: "Your name",
      formContact: "Email / Telegram",
      formContactPlaceholder: "you@email.com or @handle",
      formType: "Project type",
      formTypePlaceholder: "Select type",
      formBudget: "Budget",
      formBudgetPlaceholder: "Select budget",
      formMessage: "Message",
      formMessagePlaceholder: "Tell us about your project...",
      formSubmit: "Send Request",
      openingMessage: "Opening Telegram with your message…",
      projectTypes: ["Website", "Web Application", "E-commerce", "Backend Development", "Telegram Bot", "Other"],
      budgets: ["< $50", "$50 – $150", "$150 – $500", "$500+", "Not sure yet"],
      telegramMessage: {
        title: "New project request from nuvio.studio",
        name: "Name",
        contact: "Contact",
        type: "Project type",
        budget: "Budget",
        message: "Message",
      },
    },
    footer: {
      rights: "© 2026 Nuvio Studio",
      telegram: "Telegram: @NuvioIT",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      work: "Работы",
      pricing: "Цены",
      contact: "Контакты",
      startProject: "Начать проект",
    },
    hero: {
      badge: "DIGITAL SOLUTIONS",
      headline: "Цифровые\nрешения\nдля вашего\nбизнеса",
      sub: "Создаём продуманные и масштабируемые решения, которые работают на результат.",
      ctaPrimary: "Обсудить проект",
      ctaSecondary: "Смотреть услуги",
      scroll: "СКРОЛЛ",
    },
    about: {
      eyebrow: "О нас",
      heading: "Мы — Nuvio.",
      p1: "Nuvio — цифровая студия, которая создаёт современные сайты, веб-приложения, backend-системы и инструменты автоматизации.",
      p2: "Мы объединяем дизайн, технологии и чистую инженерию, чтобы создавать продукты, которые быстро работают, надёжны и растут вместе с вашим бизнесом.",
      stats: [
        { value: "10+", label: "Проектов", detail: "Успешно реализовано для наших клиентов." },
        { value: "15+", label: "Клиентов", detail: "Компании и стартапы, которые доверяют нам свои идеи." },
        { value: "3+", label: "Года опыта", detail: "Разработка цифровых продуктов разной сложности." },
        { value: "100%", label: "Фокус на качество", detail: "Каждый проект — в срок, по задаче и с заботой." },
      ],
    },
    services: {
      eyebrow: "Услуги",
      heading: "Наши направления",
      note: "Итоговая цена зависит от сложности и требований проекта. Ниже указаны стартовые цены.",
      viewAll: "Посмотреть все",
    },
    servicesDetail: {
      eyebrow: "Детали услуг",
      heading: "Всё включено по умолчанию.",
      learnMore: "Подробнее",
      note: "Итоговая цена зависит от сложности и требований проекта.",
    },
    whyNuvio: {
      eyebrow: "Почему Nuvio",
      heading: "Почему Nuvio?",
    },
    process: {
      eyebrow: "Наш процесс",
      heading: "Как мы работаем",
    },
    technologies: {
      eyebrow: "Технологии",
      heading: "Работаем на проверенных технологиях.",
    },
    portfolio: {
      eyebrow: "Избранные проекты",
      heading: "Избранные проекты",
      liveLabel: "Живая версия",
      codeLabel: "Код",
    },
    pricing: {
      eyebrow: "Цены",
      heading: "Простые и прозрачные цены.",
      currencyNote: "Цены указаны в рублях.",
      freeConsultation: "Бесплатная консультация",
      freeConsultationText:
        "Итоговая стоимость зависит от объёма и сложности проекта. Расскажите нам о своей идее — мы подготовим понятную смету, без фейковых скидок и мелкого шрифта.",
      startProject: "Начать проект",
    },
    cta: {
      headingLine1: "Есть идея?",
      headingLine2: "Давайте создадим что-то значимое вместе.",
      sub: "Расскажите о своём проекте — мы свяжемся с вами.",
      button: "Начать проект",
    },
    contact: {
      eyebrow: "Контакты",
      heading: "Обсудим ваш проект.",
      sub: "Быстрее всего связаться с нами через Telegram. Заполните форму — откроется готовое сообщение, которое останется только отправить, либо напишите нам напрямую.",
      telegramLabel: "TELEGRAM",
      studioLabel: "СТУДИЯ",
      formName: "Имя",
      formNamePlaceholder: "Ваше имя",
      formContact: "Email / Telegram",
      formContactPlaceholder: "you@email.com или @ник",
      formType: "Тип проекта",
      formTypePlaceholder: "Выберите тип",
      formBudget: "Бюджет",
      formBudgetPlaceholder: "Выберите бюджет",
      formMessage: "Сообщение",
      formMessagePlaceholder: "Расскажите о своём проекте...",
      formSubmit: "Отправить заявку",
      openingMessage: "Открываем Telegram с вашим сообщением…",
      projectTypes: ["Сайт", "Веб-приложение", "Интернет-магазин", "Backend-разработка", "Telegram-бот", "Другое"],
      budgets: ["до 3 000 ₽", "3 000 – 10 000 ₽", "10 000 – 35 000 ₽", "35 000 ₽+", "Пока не знаю точно"],
      telegramMessage: {
        title: "Новая заявка с сайта nuvio.studio",
        name: "Имя",
        contact: "Контакт",
        type: "Тип проекта",
        budget: "Бюджет",
        message: "Сообщение",
      },
    },
    footer: {
      rights: "© 2026 Nuvio Studio",
      telegram: "Telegram: @NuvioIT",
    },
  },
};

export default dictionaries;
