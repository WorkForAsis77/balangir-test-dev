"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { Language, TRANSLATIONS, TranslationContent } from "@/data/translations";

const ZOOM_STEPS = [85, 92, 100, 110, 120] as const;
const DEFAULT_ZOOM_INDEX = 2; // 100%
const LANG_STORAGE_KEY = "balangir_mihms_lang";
const ZOOM_STORAGE_KEY = "balangir_mihms_zoom_idx";
const PREFS_EVENT = "balangir-mihms-prefs-change";

interface AppContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
  zoomPercent: number;
  canZoomIn: boolean;
  canZoomOut: boolean;
  isDefaultZoom: boolean;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

function subscribePrefs(callback: () => void) {
  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener(PREFS_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(PREFS_EVENT, handler);
  };
}

function getLangSnapshot(): Language {
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "en" || saved === "or" || saved === "hi") {
      return saved;
    }
  } catch {
    // Fallback when storage is unavailable
  }
  return "en";
}

function getLangServerSnapshot(): Language {
  return "en";
}

function getZoomSnapshot(): number {
  try {
    const saved = window.localStorage.getItem(ZOOM_STORAGE_KEY);
    if (saved !== null) {
      const parsed = Number.parseInt(saved, 10);
      if (!Number.isNaN(parsed) && parsed >= 0 && parsed < ZOOM_STEPS.length) {
        return parsed;
      }
    }
  } catch {
    // Fallback when storage is unavailable
  }
  return DEFAULT_ZOOM_INDEX;
}

function getZoomServerSnapshot(): number {
  return DEFAULT_ZOOM_INDEX;
}

function emitPrefsChange() {
  window.dispatchEvent(new Event(PREFS_EVENT));
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribePrefs,
    getLangSnapshot,
    getLangServerSnapshot
  );

  const zoomIndex = useSyncExternalStore(
    subscribePrefs,
    getZoomSnapshot,
    getZoomServerSnapshot
  );

  // Sync <html lang> and document title
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = TRANSLATIONS[language].meta.siteTitle;
  }, [language]);

  // Sync root font-size scaling cleanly without breaking responsive layout
  useEffect(() => {
    document.documentElement.style.fontSize = `${ZOOM_STEPS[zoomIndex]}%`;
  }, [zoomIndex]);

  const setLanguage = (lang: Language) => {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore storage access errors
    }
    emitPrefsChange();
  };

  const setZoomIndex = (nextIndex: number) => {
    const clamped = Math.max(0, Math.min(ZOOM_STEPS.length - 1, nextIndex));
    try {
      window.localStorage.setItem(ZOOM_STORAGE_KEY, String(clamped));
    } catch {
      // Ignore storage access errors
    }
    emitPrefsChange();
  };

  const value: AppContextValue = {
    language,
    setLanguage,
    t: TRANSLATIONS[language],
    zoomPercent: ZOOM_STEPS[zoomIndex],
    canZoomIn: zoomIndex < ZOOM_STEPS.length - 1,
    canZoomOut: zoomIndex > 0,
    isDefaultZoom: zoomIndex === DEFAULT_ZOOM_INDEX,
    zoomIn: () => setZoomIndex(zoomIndex + 1),
    zoomOut: () => setZoomIndex(zoomIndex - 1),
    resetZoom: () => setZoomIndex(DEFAULT_ZOOM_INDEX),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used inside AppProvider");
  }
  return ctx;
}
