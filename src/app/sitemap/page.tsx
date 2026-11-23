import type { Metadata } from "next";
import { SitemapContent } from "@/components/SitemapContent";

export const metadata: Metadata = {
  title: "Sitemap | Balangir MIHMS",
  description:
    "Structured website sitemap for Balangir MIHMS — Maternal & Infant Health Monitoring System, Balangir, Odisha.",
};

export default function SitemapPage() {
  return <SitemapContent />;
}

