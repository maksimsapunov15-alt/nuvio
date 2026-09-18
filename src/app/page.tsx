import type { Metadata } from "next";
import EyesTeaser from "@/components/EyesTeaser";

export const metadata: Metadata = {
  title: { absolute: "Хочешь узнать что это? — 29.09.26" },
  description: "Хочешь узнать что это? 29.09.26",
  openGraph: {
    title: "Хочешь узнать что это?",
    description: "29.09.26",
    locale: "ru_RU",
    images: [{ url: "/teaser/eyes.png", width: 1983, height: 793 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Хочешь узнать что это?",
    description: "29.09.26",
    images: ["/teaser/eyes.png"],
  },
};

export default function Home() {
  return <EyesTeaser />;
}
