"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { BalangirMihmsLogo, OdishaHealthEmblem } from "./BrandLogos";
import { TopBar } from "./TopBar";

const SECTION_IDS = ["home", "about", "purpose-vision", "contact"] as const;

export function Header() {
  const { t } = useApp();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: t.nav.home, href: isHomePage ? "#home" : "/#home" },
    { id: "about", label: t.nav.about, href: isHomePage ? "#about" : "/#about" },
    {
      id: "purpose-vision",
      label: t.nav.purposeVision,
      href: isHomePage ? "#purpose-vision" : "/#purpose-vision",
    },
    {
      id: "contact",
      label: t.nav.contact,
      href: isHomePage ? "#contact" : "/#contact",
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) return;

    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0.05 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isHomePage]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      <TopBar />

      <div
        className={`bg-surface-base/98 backdrop-blur-md border-b border-slate-200/90 transition-shadow ${
          scrolled ? "shadow-md" : "shadow-xs"
        }`}
      >
        <div className="site-container home-large-bleed">
          <div className="flex items-center justify-between gap-3 py-2.5 sm:py-3">
            {/* Approved Programme & Department Logo Area */}
            <Link
              href={isHomePage ? "#home" : "/"}
              className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                <BalangirMihmsLogo className="w-10 h-10 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                <span className="md:hidden">
                  <OdishaHealthEmblem className="w-11 h-11 sm:w-13 sm:h-13 transition-transform group-hover:scale-105" />
                </span>
              </div>
              <div className="min-w-0">
                <span className="block text-base sm:text-xl font-bold text-brand-primary leading-tight tracking-tight truncate">
                  {t.nav.brandName}
                </span>
                <span className="block text-[11px] sm:text-xs font-medium text-brand-topbar leading-snug truncate">
                  {t.nav.brandSubtitle}
                </span>
              </div>
              <div className="hidden md:flex items-center gap-2.5 pl-3 ml-1 border-l border-slate-200">
                <OdishaHealthEmblem className="w-12 h-12 lg:w-14 lg:h-14 transition-transform group-hover:scale-105" />
                <span className="text-[11px] leading-tight text-slate-600 max-w-[165px]">
                  {t.nav.departmentLabel}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-1"
            >
              {navItems.map((item) => {
                const isActive = isHomePage && activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-brand-accent bg-brand-accent/10"
                        : "text-brand-primary hover:text-brand-accent hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full bg-brand-accent"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}

              <Link
                href="/sitemap"
                className={`ml-1 px-3.5 py-2 rounded-lg text-sm font-semibold border transition-colors whitespace-nowrap ${
                  pathname === "/sitemap"
                    ? "bg-brand-primary text-white border-brand-primary"
                    : "border-brand-primary/25 text-brand-primary hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent/8"
                }`}
              >
                {t.nav.sitemap}
              </Link>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg border border-slate-200 text-brand-primary hover:bg-brand-accent/10 hover:text-brand-accent transition cursor-pointer shrink-0"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation-drawer"
            aria-label="Mobile Navigation"
            className="lg:hidden bg-surface-base border-t border-slate-200 shadow-lg"
          >
            <div className="site-container py-3 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = isHomePage && activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-brand-accent/10 text-brand-accent border-l-4 border-brand-accent"
                        : "text-brand-primary hover:bg-slate-50 hover:text-brand-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/sitemap"
                onClick={() => setMobileMenuOpen(false)}
                className={`mt-1 px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/sitemap"
                    ? "bg-brand-primary text-white"
                    : "text-brand-primary bg-slate-50 hover:bg-brand-accent/10 hover:text-brand-accent"
                }`}
              >
                {t.nav.sitemap}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
