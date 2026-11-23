"use client";

import React from "react";
import Image from "next/image";
import {
  Activity,
  Baby,
  Building2,
  HeartPulse,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

const CARD_ICONS = [Users, Activity, Smartphone, ShieldCheck] as const;

const ABOUT_EXTRAS = {
  en: {
    features: [
      {
        icon: Target,
        title: "100% Antenatal Tracking",
        desc: "First-trimester mapping & scheduled ANC clinical checkups.",
      },
      {
        icon: HeartPulse,
        title: "High-Risk Screening",
        desc: "Early detection of severe anemia, BP & gestational risks.",
      },
      {
        icon: Building2,
        title: "Institutional Deliveries",
        desc: "100% hospital births with 24/7 emergency obstetric care.",
      },
      {
        icon: Baby,
        title: "42-Day Postnatal Care",
        desc: "Structured home visits & routine newborn immunization.",
      },
    ],
    stats: [
      { val: "14 Blocks", lbl: "Active Coverage", color: "text-brand-accent" },
      { val: "1,200+", lbl: "ASHA & ANM Network", color: "text-brand-primary" },
      { val: "100% Free", lbl: "Government Care", color: "text-emerald-700" },
    ],
  },
  or: {
    features: [
      {
        icon: Target,
        title: "୧୦୦% ପ୍ରସବପୂର୍ବ ଯତ୍ନ",
        desc: "ପ୍ରଥମ ତ୍ରୈମାସିକ ପଞ୍ଜୀକରଣ ଓ ନିୟମିତ ANC ପରୀକ୍ଷା।",
      },
      {
        icon: HeartPulse,
        title: "ଉଚ୍ଚ-ବିପଦ ଚିହ୍ନଟ",
        desc: "ରକ୍ତହୀନତା, ରକ୍ତଚାପ ଓ ଗର୍ଭଧାରଣ ଜଟିଳତାର ଶୀଘ୍ର ନିରାକରଣ।",
      },
      {
        icon: Building2,
        title: "ପ୍ରାତିଷ୍ଠାନିକ ପ୍ରସବ",
        desc: "ଡାକ୍ତରଖାନାରେ ୧୦୦% ସୁରକ୍ଷିତ ପ୍ରସବ ଓ ୨୪/୭ ପ୍ରସୂତି ସେବା।",
      },
      {
        icon: Baby,
        title: "୪୨ ଦିନ ଯତ୍ନ",
        desc: "ନିୟମିତ ଗୃହ ପରିଦର୍ଶନ ଓ ନବଜାତ ଶିଶୁର ସମ୍ପୂର୍ଣ୍ଣ ଟିକାକରଣ।",
      },
    ],
    stats: [
      { val: "୧୪ଟି ବ୍ଲକ୍", lbl: "ସକ୍ରିୟ କଭରେଜ୍", color: "text-brand-accent" },
      { val: "୧,୨୦୦+", lbl: "ଆଶା ଓ ଏଏନ୍ଏମ୍ କର୍ମୀ", color: "text-brand-primary" },
      { val: "୧୦୦% ମାଗଣା", lbl: "ସରକାରୀ ସେବା", color: "text-emerald-700" },
    ],
  },
  hi: {
    features: [
      {
        icon: Target,
        title: "१००% प्रसवपूर्व देखभाल",
        desc: "प्रथम तिमाही पंजीकरण एवं नियमित ANC स्वास्थ्य जाँच।",
      },
      {
        icon: HeartPulse,
        title: "उच्च-जोखिम जाँच",
        desc: "एनीमिया, रक्तचाप व जटिलताओं की प्रारंभिक पहचान।",
      },
      {
        icon: Building2,
        title: "संस्थागत प्रसव",
        desc: "अस्पतालों में १००% सुरक्षित प्रसव व २४/७ आपातकालीन सेवा।",
      },
      {
        icon: Baby,
        title: "४२ दिन शिशु सुरक्षा",
        desc: "नियमित गृह भेंट व नवजात शिशु का संपूर्ण टीकाकरण।",
      },
    ],
    stats: [
      { val: "१४ ब्लॉक", lbl: "सक्रिय कवरेज", color: "text-brand-accent" },
      { val: "१,२००+", lbl: "आशा व एएनएम नेटवर्क", color: "text-brand-primary" },
      { val: "१००% निःशुल्क", lbl: "सरकारी सेवा", color: "text-emerald-700" },
    ],
  },
} as const;

export function AboutSection() {
  const { t, language } = useApp();
  const extras = ABOUT_EXTRAS[language] || ABOUT_EXTRAS.en;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-surface-warm border-b border-brand-accent/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Compacted Top Spacing */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-topbar mb-1.5">
            {t.about.sectionTag}
          </span>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary section-heading-underline-center"
          >
            {t.about.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-medium">
            {t.about.subtitle}
          </p>
        </div>

        {/* Programme Overview + Visual: Content & Image Height-Matched */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-10 sm:mb-14">
          {/* Left Column: Narrative Paragraphs + 4 Key Capabilities + 3 Stat Badges */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {/* Narrative Paragraphs */}
            <div className="space-y-3">
              {t.about.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-xs sm:text-sm md:text-[15px] text-slate-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 4 Key Capabilities Grid (Fulfills the height mismatch) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {extras.features.map((feat, fIdx) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={fIdx}
                    className="p-3 rounded-xl bg-white border border-brand-accent/15 shadow-2xs hover:border-brand-accent/40 transition flex items-start gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-blush text-brand-accent flex items-center justify-center shrink-0 mt-0.5">
                      <FeatIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-brand-primary leading-snug">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3-Stat Metric Strip */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 border-t border-slate-200/90">
              {extras.stats.map((st, sIdx) => (
                <div
                  key={sIdx}
                  className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 text-center shadow-2xs"
                >
                  <div className={`text-xs sm:text-sm font-black ${st.color}`}>
                    {st.val}
                  </div>
                  <div className="text-[10px] text-slate-500 font-semibold mt-0.5 uppercase tracking-wide">
                    {st.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full flex flex-col justify-between rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:flex-1 min-h-[280px]">
                <Image
                  src="/images/about-care.jpg"
                  alt={t.about.imageAlt}
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-brand-primary text-white px-5 py-3.5 flex items-center justify-between gap-3 shrink-0">
                <div>
                  <p className="font-bold text-xs sm:text-sm">{t.about.imageBadgeTitle}</p>
                  <p className="text-[11px] text-white/80">{t.about.imageBadgeSub}</p>
                </div>
                <span
                  className="w-2.5 h-2.5 rounded-full bg-brand-accent shrink-0"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights Infographic Cards */}
        <div>
          <h3 className="text-center text-base sm:text-lg lg:text-xl font-bold text-brand-primary mb-5 sm:mb-6">
            {t.about.highlightsTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {t.about.cards.map((card, index) => {
              const Icon = CARD_ICONS[index % CARD_ICONS.length];
              return (
                <article
                  key={index}
                  className="group bg-white rounded-2xl p-5 sm:p-6 text-center shadow-md shadow-slate-900/5 border border-slate-100 border-b-4 border-b-brand-accent/80 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-brand-accent-light to-brand-accent text-white flex items-center justify-center shadow-md shadow-brand-accent/25 mb-3.5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-brand-primary leading-snug">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-brand-topbar mt-0.5 mb-2">
                    {card.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
