"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=gov.odisha.balangir.mihms";

export function AppDownloadStrip() {
  const { t } = useApp();

  return (
    <aside
      aria-label={t.appDownloadStrip.ariaLabel}
      className="relative w-full overflow-hidden bg-[#405d7b] border-t border-white/20 border-b border-black/15 shadow-inner"
    >
      {/* Background Cultural Silhouette Skyline */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_68%] opacity-55 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: "url('/images/odisha_heritage_strip_bg.jpg')" }}
      />

      {/* Subtle Gradient Overlay for enhanced contrast and readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#334c67]/95 via-[#405d7b]/45 to-[#334c67]/95 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
        {/* Left Column: Heading and Subtitle */}
        <div className="flex flex-col gap-1 min-w-0">
          <h2 className="text-white text-base sm:text-lg font-bold tracking-wide leading-tight drop-shadow-xs">
            {t.appDownloadStrip.title}
          </h2>
          <p className="text-white/95 text-xs sm:text-[13px] font-medium leading-relaxed drop-shadow-xs">
            {t.appDownloadStrip.subtitle}
          </p>
        </div>

        {/* Right Column: Google Play Button Pill */}
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.appDownloadStrip.ariaLabel}
          title={t.appDownloadStrip.ariaLabel}
          className="shrink-0 inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-slate-900 px-4 py-1.5 sm:py-2 rounded-lg shadow-md shadow-black/20 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-white/80 cursor-pointer"
        >
          {/* Official Google Play 4-Color Logo */}
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
            viewBox="0 0 27.11 31.5"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z"
              fill="#ea4335"
            />
            <path
              d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z"
              fill="#fbbc04"
            />
            <path
              d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z"
              fill="#4285f4"
            />
            <path
              d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z"
              fill="#34a853"
            />
          </svg>

          {/* Button Label */}
          <div className="flex flex-col text-left leading-none">
            <span className="text-[9px] sm:text-[10px] font-semibold text-slate-600 uppercase tracking-wider">
              {t.appDownloadStrip.getItOn}
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight mt-0.5">
              {t.appDownloadStrip.googlePlay}
            </span>
          </div>
        </a>
      </div>
    </aside>
  );
}
