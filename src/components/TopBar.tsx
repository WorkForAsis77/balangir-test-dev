"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe, Network } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { Language } from "@/data/translations";
import { IndianFlagIcon } from "./BrandLogos";

const ODIA_DIGITS = ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"];
const ODIA_MONTHS = [
  "ଜାନୁ",
  "ଫେବୃ",
  "ମାର୍ଚ୍ଚ",
  "ଅପ୍ରେଲ୍",
  "ମେ",
  "ଜୁନ୍",
  "ଜୁଲାଇ",
  "ଅଗଷ୍ଟ",
  "ସେପ୍ଟେ",
  "ଅକ୍ଟୋ",
  "ନଭେ",
  "ଡିସେ",
];
const HINDI_MONTHS = [
  "जनवरी",
  "फ़रवरी",
  "मार्च",
  "अप्रैल",
  "मई",
  "जून",
  "जुलाई",
  "अगस्त",
  "सितंबर",
  "अक्टूबर",
  "नवंबर",
  "दिसंबर",
];
const EN_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function toOdiaDigits(input: string) {
  return input.replace(/[0-9]/g, (d) => ODIA_DIGITS[Number(d)]);
}

function formatLocalizedDateTime(now: Date, lang: Language): string {
  const day = now.getDate();
  const year = now.getFullYear();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const isPm = hours >= 12;
  hours = hours % 12 || 12;
  const hStr = String(hours).padStart(2, "0");

  if (lang === "or") {
    const period = isPm ? "ଅପରାହ୍ନ" : "ପୂର୍ବାହ୍ନ";
    return toOdiaDigits(
      `${day} ${ODIA_MONTHS[now.getMonth()]} ${year} | ${hStr}:${minutes} ${period}`
    );
  }
  if (lang === "hi") {
    const period = isPm ? "अपराह्न" : "पूर्वाह्न";
    return `${day} ${HINDI_MONTHS[now.getMonth()]} ${year} | ${hStr}:${minutes} ${period}`;
  }
  const period = isPm ? "PM" : "AM";
  return `${day} ${EN_MONTHS[now.getMonth()]} ${year} | ${hStr}:${minutes} ${period}`;
}

const LANGUAGE_OPTIONS: { code: Language; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "or", label: "Odia", native: "ଓଡ଼ିଆ (Odia)" },
  { code: "hi", label: "Hindi", native: "हिंदी (Hindi)" },
];

export function TopBar() {
  const {
    language,
    setLanguage,
    t,
    zoomPercent,
    canZoomIn,
    canZoomOut,
    isDefaultZoom,
    zoomIn,
    zoomOut,
    resetZoom,
  } = useApp();

  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [dateTimeText, setDateTimeText] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateClock = () => {
      setDateTimeText(formatLocalizedDateTime(new Date(), language));
    };
    updateClock();
    const timer = window.setInterval(updateClock, 30000);
    return () => window.clearInterval(timer);
  }, [language]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSkipToMain = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const mainEl = document.getElementById("main-content");
    if (mainEl) {
      e.preventDefault();
      mainEl.focus({ preventScroll: false });
      mainEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-brand-topbar text-white text-xs sm:text-[13px] shadow-xs">
      <div className="site-container 2xl:max-w-[1800px] 3xl:max-w-[2100px] py-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3">
        {/* Left: Government of Odisha identity + Live Date/Time */}
        <div className="flex items-center justify-between sm:justify-start flex-wrap gap-x-2.5 gap-y-1 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <IndianFlagIcon className="w-5 h-3.5" />
            <span className="font-medium tracking-wide truncate">
              {t.topBar.govtOfOdisha}
            </span>
            <span className="hidden md:inline text-white/50" aria-hidden="true">
              |
            </span>
            <span className="hidden md:inline text-white/90 font-normal truncate">
              {t.topBar.districtLabel}
            </span>
          </div>
          {dateTimeText && (
            <span
              className="text-[11px] text-white/85 font-normal whitespace-nowrap"
              aria-label="Current date and time"
            >
              {dateTimeText}
            </span>
          )}
        </div>

        {/* Right: Accessibility Controls — Skip to Main, Sitemap, Zoom, Language */}
        <div className="flex items-center flex-wrap justify-between sm:justify-end gap-1 sm:gap-1.5">
          {/* Skip to Main Content — keyboard-first accessible control */}
          <a
            href="#main-content"
            onClick={handleSkipToMain}
            className="inline-flex items-center px-2 py-1 rounded text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white focus-visible:bg-white/20 transition font-medium whitespace-nowrap"
          >
            {t.topBar.skipToMain}
          </a>

          <span className="hidden sm:inline-block w-px h-4 bg-white/35" aria-hidden="true" />

          {/* Sitemap Quick Link */}
          <Link
            href="/sitemap"
            title={t.topBar.sitemap}
            aria-label={t.topBar.sitemap}
            className="inline-flex items-center gap-1 px-2 py-1 rounded text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white transition font-medium whitespace-nowrap"
          >
            <Network className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="hidden md:inline">{t.topBar.sitemap}</span>
          </Link>

          <span className="w-px h-4 bg-white/35" aria-hidden="true" />

          {/* Zoom In / Zoom Out / Reset Controls */}
          <div
            className="inline-flex items-center gap-0.5"
            role="group"
            aria-label="Text size controls"
          >
            <button
              type="button"
              onClick={zoomOut}
              disabled={!canZoomOut}
              title={`${t.topBar.zoomOutLabel} (${zoomPercent}%)`}
              aria-label={t.topBar.zoomOutLabel}
              className="min-w-7 px-1.5 py-1 rounded font-semibold text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white disabled:opacity-45 disabled:cursor-not-allowed transition cursor-pointer"
            >
              {t.topBar.zoomOutSymbol}
            </button>
            <button
              type="button"
              onClick={resetZoom}
              title={`${t.topBar.zoomResetLabel} (${zoomPercent}%)`}
              aria-label={t.topBar.zoomResetLabel}
              aria-pressed={isDefaultZoom}
              className={`min-w-7 px-1.5 py-1 rounded font-semibold transition cursor-pointer focus-visible:outline-2 focus-visible:outline-white ${
                isDefaultZoom
                  ? "bg-white/20 text-white"
                  : "text-white hover:bg-white/15"
              }`}
            >
              {t.topBar.zoomResetSymbol}
            </button>
            <button
              type="button"
              onClick={zoomIn}
              disabled={!canZoomIn}
              title={`${t.topBar.zoomInLabel} (${zoomPercent}%)`}
              aria-label={t.topBar.zoomInLabel}
              className="min-w-7 px-1.5 py-1 rounded font-semibold text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white disabled:opacity-45 disabled:cursor-not-allowed transition cursor-pointer"
            >
              {t.topBar.zoomInSymbol}
            </button>
          </div>

          <span className="hidden sm:inline-block w-px h-4 bg-white/35" aria-hidden="true" />

          {/* Language Selector Dropdown */}
          <div className="relative ml-auto sm:ml-0" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setLangMenuOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={langMenuOpen}
              aria-label={t.topBar.selectLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white text-white font-medium transition cursor-pointer whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{t.meta.languageNative}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  langMenuOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {langMenuOpen && (
              <ul
                role="listbox"
                aria-label={t.topBar.selectLanguage}
                className="absolute right-0 mt-1.5 w-44 bg-white text-ink-primary rounded-lg shadow-xl border border-slate-200 py-1 z-50"
              >
                {LANGUAGE_OPTIONS.map((opt) => {
                  const isActive = language === opt.code;
                  return (
                    <li key={opt.code} role="option" aria-selected={isActive}>
                      <button
                        type="button"
                        onClick={() => {
                          setLanguage(opt.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-sm flex items-center justify-between transition cursor-pointer ${
                          isActive
                            ? "bg-brand-topbar text-white font-semibold"
                            : "hover:bg-brand-accent/10 hover:text-brand-topbar"
                        }`}
                      >
                        <span>{opt.native}</span>
                        {isActive && (
                          <span className="text-xs" aria-hidden="true">
                            ✓
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

