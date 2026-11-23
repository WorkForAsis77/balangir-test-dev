"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { OFFICIALS, OfficialProfile } from "@/data/officials";

function OfficialItem({
  official,
  decorative = false,
}: {
  official: OfficialProfile;
  decorative?: boolean;
}) {
  const { language } = useApp();
  const [imgFailed, setImgFailed] = useState(false);

  const name = official.name[language];
  const designation = official.designation[language];
  const showImage = Boolean(official.image) && !imgFailed;

  return (
    <article
      aria-hidden={decorative || undefined}
      className="group w-40 sm:w-44 shrink-0 flex flex-col items-center text-center px-2 py-1 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-4 ring-white shadow-md overflow-hidden shrink-0 transition-shadow duration-300 group-hover:shadow-lg">
        {showImage && official.image ? (
          <Image
            src={official.image}
            alt={decorative ? "" : `${name} — ${designation}`}
            fill
            sizes="96px"
            onError={() => setImgFailed(true)}
            className="object-cover object-top"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white font-extrabold text-base sm:text-lg tracking-wide"
            style={{
              background: `linear-gradient(145deg, ${official.accentFrom}, ${official.accentTo})`,
            }}
            aria-hidden="true"
          >
            {official.initials}
          </div>
        )}
      </div>

      <h3 className="mt-2.5 text-xs sm:text-[13px] font-bold text-brand-primary leading-snug">
        {name}
      </h3>
      <p className="mt-0.5 text-[11px] sm:text-xs text-slate-600 leading-snug">
        {designation}
      </p>
    </article>
  );
}

export function LeadershipSection() {
  const { t } = useApp();
  const activeOfficials = OFFICIALS.filter((o) => o.active);

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="py-7 sm:py-9 bg-gradient-to-b from-surface-leadership-top via-surface-base to-surface-leadership-bottom border-b border-brand-accent/15 overflow-hidden"
    >
      <div className="site-container">
        <h2
          id="leadership-heading"
          className="text-center text-sm sm:text-base font-extrabold uppercase tracking-wider text-brand-primary mb-6"
        >
          {t.leadership.title}
        </h2>

        {/* Seamless Right-to-Left Continuous Marquee (pauses on hover/focus) */}
        <div className="marquee-container relative overflow-hidden">
          {/* Subtle edge fade gradients */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 z-10 bg-gradient-to-r from-surface-base/95 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 z-10 bg-gradient-to-l from-surface-base/95 to-transparent"
            aria-hidden="true"
          />

          <div className="animate-marquee-rtl items-start">
            {/* Primary track */}
            <div className="flex items-start gap-5 sm:gap-8 pr-5 sm:pr-8">
              {activeOfficials.map((official) => (
                <OfficialItem key={official.id} official={official} />
              ))}
            </div>

            {/* Duplicate track for seamless infinite right-to-left loop */}
            <div
              className="flex items-start gap-5 sm:gap-8 pr-5 sm:pr-8"
              aria-hidden="true"
            >
              {activeOfficials.map((official) => (
                <OfficialItem
                  key={`${official.id}-dup`}
                  official={official}
                  decorative
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
