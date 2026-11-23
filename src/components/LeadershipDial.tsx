"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { OFFICIALS, OfficialProfile } from "@/data/officials";
import { Award, Pause, Play, X } from "lucide-react";

export function LeadershipDial() {
  const { language, t } = useApp();
  const [selectedOfficial, setSelectedOfficial] = useState<OfficialProfile | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const activeOfficials = OFFICIALS.filter((o) => o.active);

  return (
    <>
      <aside
        aria-label={t.leadership.title}
        className={`group-leadership pointer-events-none absolute left-2 sm:left-3.5 2xl:left-5 top-2.5 sm:top-3.5 2xl:top-5 bottom-2.5 sm:bottom-3.5 2xl:bottom-5 z-25 hidden md:flex flex-col w-[165px] xs:w-[178px] sm:w-[200px] md:w-[215px] 2xl:w-[245px] ${
          isPaused ? "leadership-paused" : ""
        }`}
      >
        {/* 100% Transparent Container (hero background image shines through) */}
        <div className="pointer-events-auto relative flex flex-col h-full w-full bg-transparent overflow-hidden">
        
        {/* Top Header Pill — Floating Frosted Badge */}
        <div className="mb-2 px-2.5 py-1.5 rounded-xl bg-black/45 backdrop-blur-md border border-white/20 shadow-md flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-amber-300 truncate">
              {t.leadership.title || "LEADERSHIP"}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? "Resume scroll" : "Pause scroll"}
            title={isPaused ? "Resume scroll" : "Pause scroll"}
            className="w-5 h-5 rounded-md bg-white/15 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center transition cursor-pointer shrink-0"
          >
            {isPaused ? (
              <Play className="w-2.5 h-2.5 fill-current" aria-hidden="true" />
            ) : (
              <Pause className="w-2.5 h-2.5 fill-current" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Vertical Scrolling Viewport (Transparent background) */}
        <div className="relative flex-1 overflow-hidden">
          {/* Subtle edge fades for smooth entrance/exit */}
          <div
            className="pointer-events-none absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black/25 to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-black/25 to-transparent z-10"
            aria-hidden="true"
          />

          {/* Continuous Top-to-Bottom Scrolling Track */}
          <div
            className="animate-scroll-ttb flex flex-col gap-2 py-1 px-0.5"
            tabIndex={0}
            role="region"
            aria-label="Scrolling Leadership List"
          >
            {/* Set 1: Primary list */}
            {activeOfficials.map((official) => {
              const name = official.name[language];
              const designation = official.designation[language];

              return (
                <button
                  key={`leader-1-${official.id}`}
                  type="button"
                  onClick={() => {
                    setSelectedOfficial(official);
                    setIsPaused(true);
                  }}
                  className="w-full p-2 sm:p-2.5 rounded-xl bg-black/45 hover:bg-black/65 backdrop-blur-md border border-white/20 hover:border-amber-400/80 shadow-lg hover:shadow-amber-500/15 transition-all duration-200 text-left flex items-center gap-2 sm:gap-2.5 cursor-pointer group focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:outline-none"
                >
                  {/* Dignitary Avatar Photo */}
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white/95 shadow-sm overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                    {official.image ? (
                      <Image
                        src={official.image}
                        alt={name}
                        fill
                        sizes="36px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-white font-extrabold text-[10px]"
                        style={{
                          background: `linear-gradient(135deg, ${official.accentFrom}, ${official.accentTo})`,
                        }}
                      >
                        {official.initials}
                      </div>
                    )}
                  </div>

                  {/* Dignitary Name & Designation in Clean Rectangle Pod */}
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] sm:text-xs font-bold text-white leading-tight truncate group-hover:text-amber-200 transition-colors drop-shadow-sm">
                      {name}
                    </p>
                    <p className="text-[9.5px] sm:text-[10px] font-medium text-amber-200/90 leading-tight line-clamp-1 mt-0.5 drop-shadow-xs">
                      {designation}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Set 2: Duplicate list for seamless infinite loop */}
            {activeOfficials.map((official) => {
              const name = official.name[language];
              const designation = official.designation[language];

              return (
                <button
                  key={`leader-2-${official.id}`}
                  type="button"
                  aria-hidden="true"
                  tabIndex={-1}
                  onClick={() => {
                    setSelectedOfficial(official);
                    setIsPaused(true);
                  }}
                  className="w-full p-2 sm:p-2.5 rounded-xl bg-black/45 hover:bg-black/65 backdrop-blur-md border border-white/20 hover:border-amber-400/80 shadow-lg hover:shadow-amber-500/15 transition-all duration-200 text-left flex items-center gap-2 sm:gap-2.5 cursor-pointer group focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:outline-none"
                >
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white/95 shadow-sm overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                    {official.image ? (
                      <Image
                        src={official.image}
                        alt=""
                        fill
                        sizes="36px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-white font-extrabold text-[10px]"
                        style={{
                          background: `linear-gradient(135deg, ${official.accentFrom}, ${official.accentTo})`,
                        }}
                      >
                        {official.initials}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] sm:text-xs font-bold text-white leading-tight truncate group-hover:text-amber-200 transition-colors drop-shadow-sm">
                      {name}
                    </p>
                    <p className="text-[9.5px] sm:text-[10px] font-medium text-amber-200/90 leading-tight line-clamp-1 mt-0.5 drop-shadow-xs">
                      {designation}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>

      {/* Detail Modal / Backdrop for clicked leader */}
      {selectedOfficial && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="official-modal-title"
          className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => {
            setSelectedOfficial(null);
            setIsPaused(false);
          }}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl bg-surface-base border-2 border-brand-accent p-6 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setSelectedOfficial(null);
                setIsPaused(false);
              }}
              aria-label="Close"
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="relative w-24 h-24 mx-auto rounded-full ring-4 ring-brand-accent/30 shadow-lg overflow-hidden mb-3.5">
              {selectedOfficial.image ? (
                <Image
                  src={selectedOfficial.image}
                  alt={selectedOfficial.name[language]}
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-white font-extrabold text-xl"
                  style={{
                    background: `linear-gradient(135deg, ${selectedOfficial.accentFrom}, ${selectedOfficial.accentTo})`,
                  }}
                >
                  {selectedOfficial.initials}
                </div>
              )}
            </div>

            <h3
              id="official-modal-title"
              className="text-lg font-bold text-brand-primary"
            >
              {selectedOfficial.name[language]}
            </h3>
            <p className="mt-1 text-sm font-semibold text-brand-accent">
              {selectedOfficial.designation[language]}
            </p>

            <button
              type="button"
              onClick={() => {
                setSelectedOfficial(null);
                setIsPaused(false);
              }}
              className="mt-5 w-full py-2.5 rounded-xl bg-brand-primary text-white font-semibold text-sm hover:bg-brand-primary-dark transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
