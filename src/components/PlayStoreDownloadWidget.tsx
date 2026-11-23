"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=gov.odisha.balangir.mihms";

export function PlayStoreDownloadWidget() {
  const pathname = usePathname();
  // Active on home page (all sections: #home, #about, #purpose-vision, #contact)
  const isOtherPage =
    Boolean(pathname) &&
    (pathname.startsWith("/privacy-policy") || pathname.startsWith("/sitemap"));
  const isHome = !isOtherPage;

  // On home: initially false (hidden off-screen). On other pages: always visible
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Periodic Show (2.8s) -> Reverse back / Hide (3.0s) -> Show cycle on Home section
  useEffect(() => {
    if (!isHome) return;

    let hideTimeout: NodeJS.Timeout;

    const triggerCycle = () => {
      // 1. Pop out smoothly from right to left (show)
      setIsVisible(true);

      // 2. Stay visible for 2.8 seconds, then reverse back / hide
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 2800);
    };

    // Initial delay: starts hidden, then pops out smoothly after 1.5 seconds
    const initialDelay = setTimeout(() => {
      triggerCycle();
    }, 1500);

    // Repeat cycle: 2.8s visible + 3.0s hidden = 5.8s total interval
    // After 3 seconds of being hidden, she pops out again smoothly
    const cycleInterval = setInterval(() => {
      triggerCycle();
    }, 5800);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(hideTimeout);
      clearInterval(cycleInterval);
    };
  }, [isHome]);

  // When to show:
  // - Other pages: always visible (docked)
  // - Home: visible during the active pop-out, or while hovered by the user
  const shouldShow = !isHome || isVisible || isHovered;

  return (
    <aside
      aria-label="Download Balangir MIHMS App on Google Play"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 pointer-events-none select-none"
    >
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Balangir MIHMS App on Google Play Store"
        title="Download Balangir MIHMS App on Google Play"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: !shouldShow
            ? "translate3d(115%, 0, 0) scale(0.96)"
            : isHovered
            ? "translate3d(-10px, 0, 0) scale(1.02)"
            : "translate3d(0, 0, 0) scale(1)",
          transition: shouldShow
            ? "transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), filter 0.35s ease"
            : "transform 0.75s cubic-bezier(0.4, 0, 0.2, 1), filter 0.35s ease",
          willChange: "transform",
        }}
        className="pointer-events-auto group block relative cursor-pointer filter drop-shadow-[-10px_16px_32px_rgba(15,23,42,0.35)] hover:drop-shadow-[-14px_22px_40px_rgba(15,23,42,0.45)]"
      >
        <Image
          src="/images/mihms_app_avatar.png"
          alt="Healthcare Assistant - Download Balangir MIHMS App on Google Play"
          width={400}
          height={400}
          className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto object-contain block select-none"
          priority
        />
      </a>
    </aside>
  );
}
