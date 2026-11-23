import type { Metadata } from "next";
import {
  Noto_Sans_Devanagari,
  Noto_Sans_Oriya,
  Poppins,
} from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppDownloadStrip } from "@/components/AppDownloadStrip";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const notoSansOriya = Noto_Sans_Oriya({
  variable: "--font-noto-oriya",
  subsets: ["oriya"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balangir MIHMS | Maternal & Infant Health Monitoring System",
  description:
    "Official public information landing page for Balangir MIHMS — Maternal & Infant Health Monitoring System, District Health Administration, Balangir, Government of Odisha.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${notoSansOriya.variable} ${notoSansDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-base text-ink-primary">
        <AppProvider>
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <AppDownloadStrip />
          <Footer />
          <ScrollToTop />
        </AppProvider>
      </body>
    </html>
  );
}
