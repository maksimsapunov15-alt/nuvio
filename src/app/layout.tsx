import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const siteUrl = "https://nuvio.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nuvio Studio — Build the future.",
    template: "%s — Nuvio Studio",
  },
  description:
    "Nuvio creates modern digital solutions for businesses and private clients: websites, web applications, e-commerce, backend development, REST APIs, Telegram bots, integrations and AI solutions.",
  keywords: [
    "Nuvio",
    "Nuvio Studio",
    "web development studio",
    "web applications",
    "backend development",
    "Telegram bots",
    "REST API",
    "разработка сайтов",
    "веб-студия",
  ],
  authors: [{ name: "Nuvio Studio" }],
  creator: "Nuvio Studio",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nuvio Studio",
    title: "Nuvio Studio — Build the future.",
    description:
      "Modern websites, web applications and backend solutions designed around your business.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvio Studio — Build the future.",
    description:
      "Modern websites, web applications and backend solutions designed around your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-white selection:text-black">
        <LanguageProvider>
          <ScrollProgress />
          <div className="nv-grain" aria-hidden="true" />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
