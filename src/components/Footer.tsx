"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { BalangirMihmsLogo, GooglePlayBadge, OdishaHealthEmblem } from "./BrandLogos";

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="mt-auto" aria-label="Site Footer">
      {/* Main Footer Band — Light Blush Surface with High-Contrast Navy & Magenta */}
      <div className="bg-footer-bg text-ink-primary border-t-2 border-brand-accent pt-12 pb-10">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <BalangirMihmsLogo className="w-12 h-12" />
                <OdishaHealthEmblem className="w-13 h-13 sm:w-14 sm:h-14" />
                <div>
                  <p className="text-lg font-extrabold text-brand-primary tracking-wide leading-tight">
                    {t.footer.programmeName}
                  </p>
                  <p className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                    {t.footer.govtLabel}
                  </p>
                </div>
              </div>

              <p className="text-sm text-ink-secondary leading-relaxed max-w-md">
                {t.footer.description}
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3">
                <a
                  href="tel:104"
                  className="inline-flex items-center gap-3 pr-5 pl-1.5 py-1.5 rounded-full bg-brand-accent hover:bg-brand-accent-dark transition shadow-md shadow-brand-accent/25"
                >
                  <span className="w-10 h-10 rounded-full bg-white text-brand-accent flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-amber">
                      {t.footer.helplineLabel}
                    </span>
                    <span className="text-sm font-extrabold text-white">
                      {t.contact.cards.helplineValue}
                    </span>
                  </span>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=gov.odisha.balangir.mihms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:-translate-y-0.5"
                  aria-label="Download Balangir MIHMS App on Google Play"
                >
                  <GooglePlayBadge className="w-34 sm:w-36 h-auto drop-shadow-xs" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-base font-extrabold text-brand-primary pb-2.5 mb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-9 after:h-0.5 after:rounded-full after:bg-brand-accent">
                {t.footer.quickLinksTitle}
              </h3>
              <ul className="space-y-2.5 text-sm font-medium">
                {[
                  { label: t.nav.home, href: "/#home" },
                  { label: t.nav.about, href: "/#about" },
                  { label: t.nav.purposeVision, href: "/#purpose-vision" },
                  { label: t.nav.contact, href: "/#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-ink-secondary hover:text-brand-accent transition"
                    >
                      <ChevronRight
                        className="w-4 h-4 text-brand-accent shrink-0"
                        aria-hidden="true"
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-base font-extrabold text-brand-primary pb-2.5 mb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-9 after:h-0.5 after:rounded-full after:bg-brand-accent">
                {t.footer.essentialsTitle}
              </h3>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <Link
                    href="/sitemap"
                    className="inline-flex items-center gap-1.5 text-ink-secondary hover:text-brand-accent transition"
                  >
                    <ChevronRight
                      className="w-4 h-4 text-brand-accent shrink-0"
                      aria-hidden="true"
                    />
                    <span>{t.footer.sitemap}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center gap-1.5 text-ink-secondary hover:text-brand-accent transition"
                  >
                    <ChevronRight
                      className="w-4 h-4 text-brand-accent shrink-0"
                      aria-hidden="true"
                    />
                    <span>{t.footer.privacyPolicy}</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-base font-extrabold text-brand-primary pb-2.5 mb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-9 after:h-0.5 after:rounded-full after:bg-brand-accent">
                {t.footer.contactTitle}
              </h3>
              <ul className="space-y-3 text-sm text-ink-secondary font-medium">
                <li className="flex items-start gap-2.5">
                  <MapPin
                    className="w-4 h-4 text-brand-accent shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">
                    {t.contact.cards.addressValue}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone
                    className="w-4 h-4 text-brand-accent shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+916652232245"
                    className="hover:text-brand-accent transition"
                  >
                    {t.contact.cards.phoneValue}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail
                    className="w-4 h-4 text-brand-accent shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:cdmo.balangir@odisha.gov.in"
                    className="hover:text-brand-accent break-all transition"
                  >
                    {t.contact.cards.emailValue}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Attribution Bar — Bold Primary Magenta */}
      <div className="bg-footer-bottom text-white py-5">
        <div className="site-container text-center space-y-1.5">
          <p className="text-xs sm:text-sm text-white font-medium">
            © 2026 {t.footer.copyright}
          </p>
          <p className="text-xs text-white/85">{t.footer.attribution}</p>
        </div>
      </div>
    </footer>
  );
}
