"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { useApp } from "@/context/AppContext";

export function PrivacyPolicyContent() {
  const { t } = useApp();

  return (
    <div className="bg-surface-muted min-h-[70vh] pb-16">
      <div className="bg-gradient-to-r from-brand-primary-dark via-brand-primary to-brand-secondary text-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-brand-amber mb-3">
            <Link href="/" className="hover:underline">
              {t.privacyPage.breadcrumbHome}
            </Link>{" "}
            <span aria-hidden="true">/</span>{" "}
            <span className="text-white font-semibold">{t.privacyPage.title}</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-brand-accent flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t.privacyPage.title}
            </h1>
          </div>
          <p className="mt-3 text-sm sm:text-base text-white/90">
            {t.privacyPage.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          <p className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-topbar text-xs font-semibold border border-brand-accent/25">
            {t.privacyPage.lastUpdated}
          </p>

          {t.privacyPage.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h2 className="text-lg font-bold text-brand-primary">
                {section.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}

          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary-dark transition"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>{t.privacyPage.backToHome}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
