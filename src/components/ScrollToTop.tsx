"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useApp } from "@/context/AppContext";

export function ScrollToTop() {
  const { t } = useApp();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.footer.backToTop}
      title={t.footer.backToTop}
      className="fixed bottom-5 right-5 z-30 w-11 h-11 rounded-full bg-brand-accent hover:bg-brand-primary text-white shadow-lg shadow-black/20 flex items-center justify-center transition cursor-pointer hover:scale-105 active:scale-95"
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}
