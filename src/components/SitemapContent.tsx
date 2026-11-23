"use client";

import React from "react";
import Link from "next/link";
import {
  Accessibility,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Network,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { Language } from "@/data/translations";

const LANG_CARDS: { code: Language; name: string; native: string }[] = [
  { code: "en", name: "English", native: "English" },
  { code: "or", name: "Odia", native: "ଓଡ଼ିଆ" },
  { code: "hi", name: "Hindi", native: "हिंदी" },
];

export function SitemapContent() {
  const { language, setLanguage, t } = useApp();

  return (
    <div className="bg-surface-muted min-h-[70vh] pb-16">
      <div className="bg-gradient-to-r from-brand-primary-dark via-brand-primary to-brand-secondary text-white py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-brand-amber mb-3">
            <Link href="/" className="hover:underline">
              {t.sitemapPage.breadcrumbHome}
            </Link>{" "}
            <span aria-hidden="true">/</span>{" "}
            <span className="text-white font-semibold">{t.sitemapPage.title}</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-brand-accent flex items-center justify-center shrink-0">
              <Network className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t.sitemapPage.title}
            </h1>
          </div>
          <p className="mt-3 text-sm sm:text-base text-white/90 max-w-3xl">
            {t.sitemapPage.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-primary mb-5">
            {t.sitemapPage.sectionsHeading}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.sitemapPage.groups.map((group, idx) => (
              <section
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 border-t-4 border-t-brand-accent"
              >
                <h3 className="text-lg font-bold text-brand-primary">
                  {group.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-5">
                  {group.description}
                </p>

                <ul className="space-y-3">
                  {group.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group block rounded-xl p-3.5 border border-slate-200/80 hover:border-brand-accent hover:bg-brand-accent/6 transition"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-sm sm:text-base text-brand-primary group-hover:text-brand-topbar transition">
                            {item.label}
                          </span>
                          <ArrowUpRight
                            className="w-4 h-4 text-brand-accent shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          {item.detail}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="lg:col-span-7 bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
            <div className="flex items-center gap-2.5 mb-4">
              <Accessibility className="w-5 h-5 text-brand-accent" aria-hidden="true" />
              <h2 className="text-lg font-bold text-brand-primary">
                {t.sitemapPage.accessibilityHeading}
              </h2>
            </div>
            <ul className="space-y-2.5">
              {t.sitemapPage.accessibilityItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-emerald-600 shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
            <div className="flex items-center gap-2.5 mb-4">
              <Globe className="w-5 h-5 text-brand-primary" aria-hidden="true" />
              <h2 className="text-lg font-bold text-brand-primary">
                {t.sitemapPage.languagesHeading}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {LANG_CARDS.map((lang) => {
                const isActive = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => setLanguage(lang.code)}
                    aria-pressed={isActive}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-left transition cursor-pointer ${
                      isActive
                        ? "bg-brand-primary text-white border-brand-primary"
                        : "bg-slate-50 text-slate-800 border-slate-200 hover:border-brand-accent"
                    }`}
                  >
                    <span className="font-bold text-sm">{lang.native}</span>
                    <span
                      className={`text-xs ${
                        isActive ? "text-brand-amber" : "text-slate-500"
                      }`}
                    >
                      {lang.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary-dark transition"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>{t.sitemapPage.backToHome}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
