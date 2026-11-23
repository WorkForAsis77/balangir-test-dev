import React from "react";
import Image from "next/image";

export function IndianFlagIcon({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 24"
      className={`${className} rounded-[2px] shadow-xs shrink-0`}
      aria-hidden="true"
    >
      {/* Official Indian National Flag colors (kept fixed by national protocol) */}
      <rect width="36" height="8" y="0" fill="#FF9933" />
      <rect width="36" height="8" y="8" fill="#FFFFFF" />
      <rect width="36" height="8" y="16" fill="#138808" />
      <circle cx="18" cy="12" r="2.8" fill="none" stroke="#000080" strokeWidth="0.9" />
      <circle cx="18" cy="12" r="0.6" fill="#000080" />
    </svg>
  );
}

export function BalangirMihmsLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <Image
      src="/image/header/govt_odisha.png"
      alt="Government of Odisha Emblem"
      width={72}
      height={72}
      className={`${className} object-contain shrink-0`}
      loading="eager"
      fetchPriority="high"
    />
  );
}

export function OdishaHealthEmblem({ className = "w-13 h-13 sm:w-14 sm:h-14" }: { className?: string }) {
  return (
    <Image
      src="/image/header/nhm_odisha.png"
      alt="National Health Mission Odisha"
      width={88}
      height={88}
      className={`${className} object-contain shrink-0`}
      loading="eager"
      fetchPriority="high"
    />
  );
}

export function GooglePlayBadge({ className = "w-36 h-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/google-play-badge.svg"
      alt="Get it on Google Play"
      width={180}
      height={53}
      className={`${className} object-contain`}
    />
  );
}

export function GooglePlayIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <Image
      src="/images/google_play_icon.png"
      alt="Google Play"
      width={48}
      height={48}
      className={`${className} object-contain`}
    />
  );
}
