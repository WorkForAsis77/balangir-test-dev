"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Pause,
  PhoneCall,
  Play,
  ShieldCheck,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { LeadershipDial } from "./LeadershipDial";

const HERO_SLIDE_IMAGES = [
  "/images/hero-banner.jpg",
  "/images/hero-slide-2.jpg",
  "/images/hero-slide-3.jpg",
  "/images/hero-slide-4.jpg",
] as const;

const AUTOPLAY_INTERVAL_MS = 4500;

export function HeroSection() {
  const { language, t } = useApp();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [taglineCycle, setTaglineCycle] = useState(0);

  const slideCount = HERO_SLIDE_IMAGES.length;
  const taglineWords = t.hero.tagline.split(" ");

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const replayTimer = window.setInterval(() => {
      setTaglineCycle((prev) => prev + 1);
    }, 5000);

    return () => window.clearInterval(replayTimer);
  }, [language]);

  useEffect(() => {
    if (isPaused || isHovered) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, isHovered, slideCount]);

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % slideCount);
  };

  const currentSlideMeta = t.hero.slides[activeSlide] ?? t.hero.slides[0];

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-surface-hero-start via-surface-base to-surface-hero-end"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-accent/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-primary/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative site-container 2xl:max-w-none 2xl:px-12 3xl:px-16 pt-4 pb-8 sm:pt-10 sm:pb-12 lg:pt-8 lg:pb-12 2xl:pt-6 2xl:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 2xl:gap-12 3xl:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-5 space-y-5 2xl:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 2xl:px-4 2xl:py-2 rounded-full bg-brand-accent/12 border border-brand-accent/25 text-brand-topbar text-xs sm:text-sm 2xl:text-base font-semibold">
              <ShieldCheck className="w-4 h-4 2xl:w-5 2xl:h-5 shrink-0" aria-hidden="true" />
              <span>{t.hero.badge}</span>
            </div>

            <div className="space-y-2 2xl:space-y-3">
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-brand-primary tracking-tight leading-[1.15]"
              >
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg 2xl:text-2xl font-bold text-brand-accent">
                {t.hero.fullName}
              </p>
            </div>

            <div className="relative pl-4 2xl:pl-5 py-1" aria-label={t.hero.tagline}>
              <span
                key={`bar-${language}-${taglineCycle}`}
                className="animate-tagline-bar absolute left-0 top-0 bottom-0 w-1 2xl:w-1.5 rounded-full bg-gradient-to-b from-brand-accent to-brand-topbar"
                aria-hidden="true"
              />
              <span className="sr-only">{t.hero.tagline}</span>
              <p
                key={`tagline-${language}-${taglineCycle}`}
                aria-hidden="true"
                className="text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl font-semibold text-slate-800 leading-snug"
              >
                {taglineWords.map((word, idx) => {
                  const isLast = idx === taglineWords.length - 1;
                  return (
                    <React.Fragment key={`${idx}-${word}`}>
                      <span
                        className={`animate-tagline-word ${isLast ? "whitespace-nowrap" : ""}`}
                        style={{ animationDelay: `${idx * 110}ms` }}
                      >
                        {word}
                        {isLast && (
                          <span
                            className="animate-tagline-cursor inline-block w-0.5 2xl:w-1 h-5 2xl:h-7 align-middle ml-1.5 rounded-full bg-brand-accent"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                      {!isLast ? " " : ""}
                    </React.Fragment>
                  );
                })}
              </p>
            </div>

            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-slate-600 leading-relaxed 2xl:leading-relaxed max-w-2xl 2xl:max-w-3xl">
              {t.hero.intro}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 2xl:gap-5 pt-2">
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 2xl:px-8 2xl:py-3.5 rounded-xl bg-gradient-to-r from-brand-accent to-brand-accent-dark text-white font-semibold text-sm sm:text-base 2xl:text-lg shadow-md shadow-brand-accent/25 hover:shadow-lg hover:brightness-105 transition"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 2xl:px-8 2xl:py-3.5 rounded-xl bg-white text-brand-primary border-2 border-brand-primary/25 hover:border-brand-primary hover:bg-brand-primary hover:text-white font-semibold text-sm sm:text-base 2xl:text-lg transition"
              >
                <PhoneCall className="w-4 h-4 2xl:w-5 2xl:h-5 shrink-0" aria-hidden="true" />
                <span>{t.hero.secondaryCta}</span>
              </Link>
            </div>
          </div>

          {/* Right Auto-Animating 4-Image Carousel Column (wider & taller showcase) */}
          <div className="lg:col-span-7">
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label={t.hero.title}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocus={() => setIsHovered(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setIsHovered(false);
                }
              }}
              className="group relative rounded-2xl 2xl:rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/15 border-4 2xl:border-5 border-white bg-slate-900"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-auto lg:h-[450px] xl:h-[500px] 2xl:h-[540px] 3xl:h-[600px] w-full overflow-hidden">
                {HERO_SLIDE_IMAGES.map((src, idx) => {
                  const isActive = idx === activeSlide;
                  const slideMeta = t.hero.slides[idx] ?? t.hero.slides[0];
                  return (
                    <div
                      key={src}
                      aria-hidden={!isActive}
                      className={`absolute inset-0 transition-all duration-1000 ease-out ${
                        isActive
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-105 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={slideMeta.imageAlt}
                        fill
                        loading={idx === 0 ? "eager" : "lazy"}
                        fetchPriority={idx === 0 ? "high" : "auto"}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  );
                })}

                <div
                  className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-brand-primary-dark/90 via-brand-primary-dark/20 to-black/15"
                  aria-hidden="true"
                />

                {/* Carousel Controls (Top-Right to keep left side dedicated to Leadership Dial) */}
                <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-xs text-white text-[11px] font-semibold tabular-nums border border-white/10">
                    {activeSlide + 1} / {slideCount}
                  </span>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label={t.hero.carouselControls.previousSlide}
                    title={t.hero.carouselControls.previousSlide}
                    className="w-8 h-8 rounded-full bg-black/55 hover:bg-brand-accent backdrop-blur-xs text-white flex items-center justify-center transition cursor-pointer border border-white/10"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label={t.hero.carouselControls.nextSlide}
                    title={t.hero.carouselControls.nextSlide}
                    className="w-8 h-8 rounded-full bg-black/55 hover:bg-brand-accent backdrop-blur-xs text-white flex items-center justify-center transition cursor-pointer border border-white/10"
                  >
                    <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPaused((prev) => !prev)}
                    aria-label={
                      isPaused
                        ? t.hero.carouselControls.resumeAutoplay
                        : t.hero.carouselControls.pauseAutoplay
                    }
                    title={
                      isPaused
                        ? t.hero.carouselControls.resumeAutoplay
                        : t.hero.carouselControls.pauseAutoplay
                    }
                    className="w-8 h-8 rounded-full bg-black/55 hover:bg-brand-accent backdrop-blur-xs text-white flex items-center justify-center transition cursor-pointer border border-white/10"
                  >
                    {isPaused ? (
                      <Play className="w-3.5 h-3.5" aria-hidden="true" />
                    ) : (
                      <Pause className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                  </button>
                </div>

                {/* Moving Half-Circle Leadership Dial (pinned to the LEFT edge) */}
                <LeadershipDial />

                {/* Bottom Slide Caption & Indicators (full width on mobile, bounded on desktop to give room for leadership dial) */}
                <div className="absolute bottom-0 inset-x-0 z-30 p-3 sm:p-5 text-white pointer-events-none flex justify-end">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 w-full md:ml-auto md:max-w-[70%]">
                    <div className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-brand-accent flex items-center justify-center shrink-0 shadow-md">
                        <HeartHandshake
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0" aria-live="polite">
                        <p className="font-bold text-xs sm:text-base leading-snug line-clamp-2">
                          {currentSlideMeta.captionTitle}
                        </p>
                        <p className="text-[11px] sm:text-sm text-white/90 leading-snug mt-0.5 line-clamp-1">
                          {currentSlideMeta.captionSub}
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto pointer-events-auto"
                      role="tablist"
                      aria-label="Hero slides"
                    >
                      {HERO_SLIDE_IMAGES.map((_, idx) => {
                        const isActive = idx === activeSlide;
                        return (
                          <button
                            key={idx}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            aria-label={`${t.hero.carouselControls.goToSlide} ${idx + 1}`}
                            onClick={() => setActiveSlide(idx)}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                              isActive
                                ? "w-7 bg-brand-accent"
                                : "w-2 bg-white/55 hover:bg-white"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* District Highlights Ribbon */}
      <div className="bg-gradient-to-r from-brand-primary-dark via-brand-primary to-brand-secondary text-white border-t border-white/10">
        <div className="site-container 2xl:max-w-none 2xl:px-12 3xl:px-16 py-5 2xl:py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8">
            {t.hero.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center lg:items-start text-center lg:text-left px-3 py-1.5 2xl:px-5 2xl:py-3 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-lg sm:text-xl 2xl:text-3xl font-extrabold text-brand-amber">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm 2xl:text-base text-white/90 font-medium mt-0.5">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
