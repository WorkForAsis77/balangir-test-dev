"use client";

import React, { useState } from "react";
import {
  Ambulance,
  Award,
  Baby,
  BarChart3,
  Building2,
  CheckCircle2,
  Database,
  Droplet,
  Eye,
  HeartPulse,
  HousePlus,
  IndianRupee,
  Layers,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stethoscope,
  Target,
  Users,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

type TabKey = "purpose" | "vision" | "pillars";

const LOCALIZED_COPY = {
  en: {
    sectionSubtitle:
      "Integrated digital monitoring, clinical early detection, and continuous frontline care for every mother and newborn across Balangir district.",
    pillarsTab: "Key Pillars & Focus",
    purposeMissionTag: "District Mission",
    commit1Val: "100% Antenatal",
    commit1Lbl: "Complete ANC Visits",
    commit2Val: "Early Screening",
    commit2Lbl: "High-Risk Pregnancy",
    commit3Val: "42-Day Safety",
    commit3Lbl: "Postnatal Monitoring",
    focusHeaderSub: "6 Strategic Initiatives",
    hubTitle: "Maternal Support Hub",
    hubSubtitle:
      "Dedicated 24/7 operational cell connecting 1,200+ frontline ASHA & ANM workers to Balangir DHH maternity specialists.",
    hubStat1: "14 Blocks Active",
    hubStat2: "100% Free Gov Service",
    hubServicesHeading: "Clinical & Emergency Support",
    hubServices: [
      {
        title: "24/7 Obstetric Emergency Transport",
        desc: "Free 108/104 ambulance coordination for timely facility transfer.",
      },
      {
        title: "Specialist Obstetrician On-Call",
        desc: "Direct tele-referral with Balangir DHH gynecologists & pediatricians.",
      },
      {
        title: "Dedicated SNCU & Maternity Beds",
        desc: "Special Newborn Care Units & round-the-clock blood bank access.",
      },
      {
        title: "Real-Time ASHA Guidance Hotline",
        desc: "Immediate clinical protocol support for high-risk pregnancy alerts.",
      },
    ],
    hubHelpline: "Free Helpline: 104 (Toll-Free)",
    visionMissionTag: "Strategic Roadmap",
    visionCommit1Val: "Zero Deaths",
    visionCommit1Lbl: "Preventable Mortality",
    visionCommit2Val: "100% Hospital",
    visionCommit2Lbl: "Institutional Delivery",
    visionCommit3Val: "14 Blocks",
    visionCommit3Lbl: "Universal Digital Care",
    goalsHeaderSub: "5 Core Benchmarks",
    milestoneTitle: "District Milestone 2026",
    milestoneSubtitle:
      "Universal clinical care coverage for every eligible mother across Balangir district.",
    milestoneStats: [
      { val: "< 70", lbl: "Target MMR" },
      { val: "100%", lbl: "Facility Births" },
      { val: "14 Blocks", lbl: "Full Coverage" },
    ],
    milestoneActionsHeading: "Key Strategic Action Pillars",
    milestoneActions: [
      {
        title: "24/7 Obstetric & Emergency Care",
        desc: "Upgraded CHCs and DHH with specialized labor wards & doctors.",
      },
      {
        title: "24/7 Blood Bank & Diagnostic Readiness",
        desc: "Guaranteed blood storage and free pathology for expectant mothers.",
      },
      {
        title: "SNCU & Neonatal ICU Units",
        desc: "Advanced specialized newborn beds to handle critical infant cases.",
      },
      {
        title: "Real-Time District Collector Dashboard",
        desc: "Daily oversight by District Administration & Health Officers.",
      },
    ],
    milestonePriority: "District Priority: Safe Motherhood",
    pillarsTitle: "Core Architectural Pillars",
    pillarsSubtitle: "Four institutional pillars driving Balangir's health transformation",
  },
  or: {
    sectionSubtitle:
      "ବଲାଙ୍ଗୀର ଜିଲ୍ଲାର ପ୍ରତ୍ୟେକ ମାଆ ଓ ନବଜାତ ଶିଶୁଙ୍କ ପାଇଁ ସକ୍ରିୟ ନିରୀକ୍ଷଣ, ପ୍ରାରମ୍ଭିକ ବିପଦ ଚିହ୍ନଟ ଏବଂ ସମୟୋପଯୋଗୀ ସ୍ୱାସ୍ଥ୍ୟସେବା।",
    pillarsTab: "ପ୍ରମୁଖ ସ୍ତମ୍ଭ ଓ ଲକ୍ଷ୍ୟ",
    purposeMissionTag: "ଜିଲ୍ଲା ସଂକଳ୍ପ",
    commit1Val: "୧୦୦% ANC ଯତ୍ନ",
    commit1Lbl: "ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରସବପୂର୍ବ ପରୀକ୍ଷା",
    commit2Val: "ପ୍ରାରମ୍ଭିକ ଚିହ୍ନଟ",
    commit2Lbl: "ଉଚ୍ଚ-ବିପଦପୂର୍ଣ୍ଣ ଗର୍ଭାବସ୍ଥା",
    commit3Val: "୪୨ ଦିନ ଯତ୍ନ",
    commit3Lbl: "ପ୍ରସବୋତ୍ତର ଶିଶୁ ନିରୀକ୍ଷଣ",
    focusHeaderSub: "୬ଟି ମୁଖ୍ୟ ପଦକ୍ଷେପ",
    hubTitle: "ମାତୃ ସହାୟତା କେନ୍ଦ୍ର",
    hubSubtitle:
      "୧,୨୦୦+ ଆଶା ଓ ଏଏନ୍ଏମ୍ କର୍ମୀଙ୍କୁ ବଲାଙ୍ଗୀର ଜିଲ୍ଲା ମୁଖ୍ୟ ଚିକିତ୍ସାଳୟ ବିଶେଷଜ୍ଞଙ୍କ ସହ ସଂଯୋଗ କରୁଥିବା ୨୪/୭ କଣ୍ଟ୍ରୋଲ୍ ସେଲ୍।",
    hubStat1: "୧୪ଟି ବ୍ଲକ୍ ସକ୍ରିୟ",
    hubStat2: "୧୦୦% ମାଗଣା ସରକାରୀ ସେବା",
    hubServicesHeading: "ପ୍ରମୁଖ ଡାକ୍ତରୀ ଓ ଜରୁରୀକାଳୀନ ସେବା",
    hubServices: [
      {
        title: "୨୪/୭ ଜରୁରୀକାଳୀନ ପ୍ରସୂତି ପରିବହନ",
        desc: "୧୦୮/୧୦୪ ଆମ୍ବୁଲାନ୍ସ ମାଧ୍ୟମରେ ସମୟୋଚିତ ଡାକ୍ତରଖାନା ସ୍ଥାନାନ୍ତର।",
      },
      {
        title: "ଅନ୍-କଲ୍ ବିଶେଷଜ୍ଞ ଡାକ୍ତର ସେବା",
        desc: "ବଲାଙ୍ଗୀର ଜିଲ୍ଲା ମୁଖ୍ୟ ଡାକ୍ତରଖାନାର ସ୍ତ୍ରୀ-ରୋଗ ବିଶେଷଜ୍ଞଙ୍କ ସହ ପରାମର୍ଶ।",
      },
      {
        title: "ସଜ୍ଜିତ ପ୍ରସୂତି କକ୍ଷ ଓ SNCU ଶଯ୍ୟା",
        desc: "ନବଜାତ ଶିଶୁ ଯତ୍ନ ୟୁନିଟ୍ ଏବଂ ୨୪ ଘଣ୍ଟିଆ ରକ୍ତଭଣ୍ଡାର ସୁବିଧା।",
      },
      {
        title: "ଆଶା କର୍ମୀ ସହାୟତା ହଟ୍‌ଲାଇନ୍",
        desc: "ଉଚ୍ଚ-ବିପଦପୂର୍ଣ୍ଣ ଗର୍ଭାବସ୍ଥା ସତର୍କତା ପାଇଁ ତୁରନ୍ତ ଡାକ୍ତରୀ ନିର୍ଦ୍ଦେଶନା।",
      },
    ],
    hubHelpline: "ମାଗଣା ହେଲ୍ପଲାଇନ୍: ୧୦୪ (ଶୁଳ୍କମୁକ୍ତ)",
    visionMissionTag: "ଜିଲ୍ଲା ରୋଡମ୍ୟାପ୍",
    visionCommit1Val: "ଶୂନ୍ୟ ମୃତ୍ୟୁ",
    visionCommit1Lbl: "ପ୍ରତିରୋଧଯୋଗ୍ୟ ମୃତ୍ୟୁହାର",
    visionCommit2Val: "୧୦୦% ଡାକ୍ତରଖାନା",
    visionCommit2Lbl: "ପ୍ରାତିଷ୍ଠାନିକ ପ୍ରସବ",
    visionCommit3Val: "୧୪ଟି ବ୍ଲକ୍",
    visionCommit3Lbl: "ସାର୍ବଜନୀନ ଡିଜିଟାଲ୍ ଯତ୍ନ",
    goalsHeaderSub: "୫ଟି ରଣନୈତିକ ଲକ୍ଷ୍ୟ",
    milestoneTitle: "ଜିଲ୍ଲା ଲକ୍ଷ୍ୟ ୨୦୨୬",
    milestoneSubtitle:
      "ବଲାଙ୍ଗୀର ଜିଲ୍ଲାର ପ୍ରତ୍ୟେକ ଯୋଗ୍ୟ ମାଆଙ୍କ ପାଇଁ ସାର୍ବଜନୀନ ଡାକ୍ତରୀ ସୁବିଧା ସୁନିଶ୍ଚିତ କରିବା।",
    milestoneStats: [
      { val: "< ୭୦", lbl: "ଲକ୍ଷ୍ୟ MMR" },
      { val: "୧୦୦%", lbl: "ପ୍ରାତିଷ୍ଠାନିକ ପ୍ରସବ" },
      { val: "୧୪ଟି ବ୍ଲକ୍", lbl: "ସମ୍ପୂର୍ଣ୍ଣ କଭରେଜ୍" },
    ],
    milestoneActionsHeading: "ମୁଖ୍ୟ କାର୍ଯ୍ୟାନ୍ୱୟନ ସ୍ତମ୍ଭ",
    milestoneActions: [
      {
        title: "୨୪/୭ ପ୍ରସୂତି ଓ ଜରୁରୀକାଳୀନ ସେବା",
        desc: "ସମସ୍ତ CHC ଓ ଜିଲ୍ଲା ମୁଖ୍ୟ ଡାକ୍ତରଖାନାରେ ବିଶେଷଜ୍ଞ ଚିକିତ୍ସକ।",
      },
      {
        title: "୨୪/୭ ରକ୍ତଭଣ୍ଡାର ଓ ଡାକ୍ତରୀ ପରୀକ୍ଷା",
        desc: "ଗର୍ଭବତୀ ମାଆଙ୍କ ପାଇଁ ନିରବଚ୍ଛିନ୍ନ ରକ୍ତ ଓ ମାଗଣା ପରୀକ୍ଷା ସୁବିଧା।",
      },
      {
        title: "SNCU ଓ ନବଜାତ ଶିଶୁ ଯତ୍ନ ୟୁନିଟ୍",
        desc: "ଜଟିଳ ନବଜାତ ଶିଶୁଙ୍କ ଚିକିତ୍ସା ପାଇଁ ଉନ୍ନତ ବିଶେଷଜ୍ଞ ଶଯ୍ୟା।",
      },
      {
        title: "ଜିଲ୍ଲାପାଳଙ୍କ ପ୍ରକୃତ ସମୟ ଡ୍ୟାସବୋର୍ଡ",
        desc: "ଜିଲ୍ଲା ପ୍ରଶାସନ ଓ ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗ ଦ୍ୱାରା ଦୈନନ୍ଦିନ ନିରୀକ୍ଷଣ।",
      },
    ],
    milestonePriority: "ଜିଲ୍ଲା ପ୍ରାଥମିକତା: ସୁରକ୍ଷିତ ମାତୃତ୍ୱ",
    pillarsTitle: "ମୁଖ୍ୟ ସ୍ତମ୍ଭ ସମୂହ",
    pillarsSubtitle: "ବଲାଙ୍ଗୀର ସ୍ୱାସ୍ଥ୍ୟ ରୂପାନ୍ତରଣର ଚାରୋଟି ମୁଖ୍ୟ ଭିତ୍ତିଭୂମି",
  },
  hi: {
    sectionSubtitle:
      "बलांगीर जिले की प्रत्येक माँ और नवजात शिशु के लिए सक्रिय निगरानी, प्रारंभिक जोखिम पहचान और निरंतर स्वास्थ्य देखभाल।",
    pillarsTab: "प्रमुख स्तंभ एवं लक्ष्य",
    purposeMissionTag: "जिला संकल्प",
    commit1Val: "१००% प्रसवपूर्व",
    commit1Lbl: "पूर्ण ANC जाँच",
    commit2Val: "शीघ्र पहचान",
    commit2Lbl: "उच्च-जोखिम गर्भावस्था",
    commit3Val: "४२ दिन सुरक्षा",
    commit3Lbl: "प्रसवोत्तर शिशु निगरानी",
    focusHeaderSub: "६ रणनीतिक पहल",
    hubTitle: "मातृ सहायता केंद्र",
    hubSubtitle:
      "१,२००+ फ्रंटलाइन आशा व एएनएम कार्यकर्ताओं को बलांगीर जिला अस्पताल के विशेषज्ञों से जोड़ने वाला २४/७ नियंत्रण कक्ष।",
    hubStat1: "१४ ब्लॉक सक्रिय",
    hubStat2: "१००% निःशुल्क सरकारी सेवा",
    hubServicesHeading: "प्रमुख नैदानिक एवं आपातकालीन सेवाएँ",
    hubServices: [
      {
        title: "२४/७ आपातकालीन प्रसूति परिवहन",
        desc: "समय पर अस्पताल पहुँचाने हेतु १०८/१०४ एम्बुलेंस का त्वरित समन्वय।",
      },
      {
        title: "ऑन-कॉल विशेषज्ञ चिकित्सक परामर्श",
        desc: "बलांगीर जिला अस्पताल के वरिष्ठ स्त्री-रोग विशेषज्ञों से सीधा संपर्क।",
      },
      {
        title: "सज्जित प्रसूति कक्ष व SNCU बेड",
        desc: "विशेष नवजात शिशु देखभाल इकाई (SNCU) व २४ घंटे ब्लड बैंक सुविधा।",
      },
      {
        title: "आशा कार्यकर्ताओं हेतु मार्गदर्शन हेल्पलाइन",
        desc: "उच्च-जोखिम गर्भावस्था अलर्ट के लिए तुरंत चिकित्सकीय दिशानिर्देश।",
      },
    ],
    hubHelpline: "निःशुल्क हेल्पलाइन: १०४ (टोल-फ्री)",
    visionMissionTag: "जिला रोडमैप",
    visionCommit1Val: "शून्य मृत्यु",
    visionCommit1Lbl: "रोकथाम योग्य मृत्यु दर",
    visionCommit2Val: "१००% अस्पताल",
    visionCommit2Lbl: "संस्थागत प्रसव",
    visionCommit3Val: "१४ ब्लॉक",
    visionCommit3Lbl: "सार्वभौमिक डिजिटल सेवा",
    goalsHeaderSub: "५ मुख्य मानक",
    milestoneTitle: "जिला लक्ष्य २०२६",
    milestoneSubtitle:
      "बलांगीर जिले की प्रत्येक योग्य गर्भवती माँ के लिए सार्वभौमिक नैदानिक देखभाल कवरेज।",
    milestoneStats: [
      { val: "< ७०", lbl: "लक्ष्य MMR" },
      { val: "१००%", lbl: "संस्थागत प्रसव" },
      { val: "१४ ब्लॉक", lbl: "पूर्ण कवरेज" },
    ],
    milestoneActionsHeading: "प्रमुख क्रियान्वयन स्तंभ",
    milestoneActions: [
      {
        title: "२४/७ प्रसूति एवं आपातकालीन देखभाल",
        desc: "सभी सीएचसी व जिला अस्पताल में सुसज्जित प्रसव कक्ष व चिकित्सक।",
      },
      {
        title: "२४/७ ब्लड बैंक व पैथोलॉजी सुविधा",
        desc: "गर्भवती महिलाओं के लिए सुरक्षित रक्त भंडारण व निःशुल्क जाँच।" }
,
      {
        title: "SNCU व नवजात गहन चिकित्सा इकाई",
        desc: "गंभीर नवजात शिशुओं के त्वरित उपचार हेतु विशेष वार्ड।" }
,
      {
        title: "जिलाधिकारी का रियल-टाइम डैशबोर्ड",
        desc: "जिला प्रशासन एवं मुख्य चिकित्सा अधिकारी द्वारा दैनिक निगरानी।" }
,
    ],
    milestonePriority: "जिला प्राथमिकता: सुरक्षित मातृत्व",
    pillarsTitle: "प्रमुख संस्थागत स्तंभ",
    pillarsSubtitle: "बलांगीर स्वास्थ्य सुधार को दिशा देने वाले चार बुनियादी स्तंभ",
  },
} as const;

const HUB_STYLES = [
  {
    card: "bg-gradient-to-br from-hub-blue-from to-hub-blue-to border-hub-blue-border",
    iconWrap: "bg-gradient-to-br from-hub-blue-icon-from to-hub-blue-icon-to shadow-hub-blue-icon-from/30",
    Icon: Users,
  },
  {
    card: "bg-gradient-to-br from-hub-orange-from to-hub-orange-to border-hub-orange-border",
    iconWrap: "bg-gradient-to-br from-hub-orange-icon-from to-hub-orange-icon-to shadow-hub-orange-icon-to/30",
    Icon: Database,
  },
  {
    card: "bg-gradient-to-br from-hub-green-from to-hub-green-to border-hub-green-border",
    iconWrap: "bg-gradient-to-br from-hub-green-icon-from to-hub-green-icon-to shadow-hub-green-icon-from/30",
    Icon: IndianRupee,
  },
  {
    card: "bg-gradient-to-br from-hub-pink-from to-hub-pink-to border-hub-pink-border",
    iconWrap: "bg-gradient-to-br from-hub-pink-icon-from to-hub-pink-icon-to shadow-hub-pink-icon-from/30",
    Icon: HousePlus,
  },
] as const;

export function PurposeVisionSection() {
  const { t, language } = useApp();
  const [activeTab, setActiveTab] = useState<TabKey>("purpose");

  const copy = LOCALIZED_COPY[language] || LOCALIZED_COPY.en;

  return (
    <section
      id="purpose-vision"
      aria-labelledby="purpose-vision-heading"
      className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-[#FFF5F9] via-[#FFFFFF] to-[#FDF2F8] pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-8 lg:pb-18"
    >
      {/* Soft Ambient Brand Atmospheric Glows */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-brand-accent/6 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-brand-secondary/6 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Interactive Design 3 Tab Switcher — Compacted top spacing */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-5 sm:pb-6 border-b border-slate-200/80 mb-6 sm:mb-7">
          <div>
            <div className="inline-flex items-center rounded-full bg-white border border-brand-accent/25 shadow-2xs px-3 py-1 gap-2 mb-2">
              <HeartPulse className="w-3.5 h-3.5 text-brand-accent" aria-hidden="true" />
              <span className="text-xs font-bold text-brand-primary">
                {t.purposeVision.sectionTag}
              </span>
            </div>

            <h2
              id="purpose-vision-heading"
              className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-brand-primary-deep tracking-tight leading-[1.2]"
            >
              {t.purposeVision.headlinePrefix}{" "}
              <span className="text-brand-accent">{t.purposeVision.headlineAccent}</span>{" "}
              <span>{t.purposeVision.headlineSuffix}</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {copy.sectionSubtitle}
            </p>
          </div>

          {/* Tab Navigation Buttons */}
          <div
            role="tablist"
            aria-label="Purpose and Vision Navigation"
            className="inline-flex flex-wrap p-1.5 rounded-2xl bg-white/95 backdrop-blur-xs border border-slate-200/90 shadow-2xs gap-1.5 self-start lg:self-auto shrink-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "purpose"}
              onClick={() => setActiveTab("purpose")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "purpose"
                  ? "bg-brand-accent text-white shadow-md shadow-brand-accent/30"
                  : "text-slate-600 hover:text-brand-accent hover:bg-slate-50"
              }`}
            >
              <Target className="w-4 h-4" aria-hidden="true" />
              <span>{t.purposeVision.purpose.title}</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "vision"}
              onClick={() => setActiveTab("vision")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "vision"
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/30"
                  : "text-slate-600 hover:text-brand-primary hover:bg-slate-50"
              }`}
            >
              <Eye className="w-4 h-4" aria-hidden="true" />
              <span>{t.purposeVision.vision.title}</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "pillars"}
              onClick={() => setActiveTab("pillars")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "pillars"
                  ? "bg-gradient-to-r from-brand-accent to-brand-primary text-white shadow-md shadow-brand-primary/20"
                  : "text-slate-600 hover:text-brand-accent hover:bg-slate-50"
              }`}
            >
              <Layers className="w-4 h-4" aria-hidden="true" />
              <span>{copy.pillarsTab}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Purpose & Focus — NO BLANK SPACE, Seamlessly Balanced */}
        {activeTab === "purpose" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch animate-fadeIn">
            {/* Left Col: Purpose Panel + Key Focus Panel with natural spacing (NO justify-between void) */}
            <div className="lg:col-span-7 flex flex-col gap-4.5">
              {/* Purpose Panel with 3-Commitment Strip */}
              <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-6 shadow-xs border border-brand-accent/15">
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold">
                      <Target className="w-4.5 h-4.5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-brand-primary-deep">
                      {t.purposeVision.purpose.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-brand-blush text-brand-accent border border-brand-accent/20">
                    {copy.purposeMissionTag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {t.purposeVision.purpose.statement}
                </p>

                {/* Integrated 3 Key Commitment Strip — Fills the former gap with real value */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 border-t border-brand-accent/12">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-brand-blush/70 border border-brand-accent/15 text-center">
                    <div className="text-[11px] sm:text-xs font-extrabold text-brand-accent">
                      {copy.commit1Val}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-tight">
                      {copy.commit1Lbl}
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-brand-blush/70 border border-brand-accent/15 text-center">
                    <div className="text-[11px] sm:text-xs font-extrabold text-brand-accent">
                      {copy.commit2Val}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-tight">
                      {copy.commit2Lbl}
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-brand-blush/70 border border-brand-accent/15 text-center">
                    <div className="text-[11px] sm:text-xs font-extrabold text-brand-accent">
                      {copy.commit3Val}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-tight">
                      {copy.commit3Lbl}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Focus Areas Panel — Framed & Connected */}
              <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-6 shadow-xs border border-brand-accent/15 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-primary-deep flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-accent" />
                    {t.purposeVision.purpose.focusTitle}
                  </h4>
                  <span className="text-[11px] text-slate-500 font-semibold">
                    {copy.focusHeaderSub}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {t.purposeVision.purpose.focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 sm:p-3 rounded-xl bg-brand-blush/40 border border-brand-accent/15 shadow-2xs hover:bg-white hover:border-brand-accent/40 transition flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-brand-accent shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Maternal Support Hub Card */}
            <div className="lg:col-span-5">
              <div className="h-full bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-6 shadow-md border border-brand-accent/20 flex flex-col justify-between text-center relative overflow-hidden">
                <div
                  className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand-accent/8 blur-2xl"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-secondary text-white flex items-center justify-center mx-auto mb-2.5 shadow-md shadow-brand-accent/30">
                    <Stethoscope className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-extrabold text-brand-primary-deep mb-1">
                    {copy.hubTitle}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto mb-3.5">
                    {copy.hubSubtitle}
                  </p>

                  {/* 2 Stats Badges */}
                  <div className="grid grid-cols-2 gap-2 mb-3.5">
                    <div className="p-2.5 rounded-xl bg-brand-blush border border-brand-accent/20 text-xs font-bold text-brand-primary-deep">
                      {copy.hubStat1}
                    </div>
                    <div className="p-2.5 rounded-xl bg-brand-blush border border-brand-accent/20 text-xs font-bold text-brand-primary-deep">
                      {copy.hubStat2}
                    </div>
                  </div>

                  {/* 4 Key Clinical & Emergency Services */}
                  <div className="text-left mb-3.5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                        {copy.hubServicesHeading}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {copy.hubServices.map((svc, sIdx) => {
                        const Icons = [Ambulance, Stethoscope, Building2, Smartphone];
                        const SvcIcon = Icons[sIdx % Icons.length];
                        return (
                          <div
                            key={sIdx}
                            className="p-2 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:bg-white hover:border-brand-accent/30 transition flex items-start gap-2.5"
                          >
                            <div className="w-6.5 h-6.5 rounded-lg bg-brand-blush text-brand-accent flex items-center justify-center shrink-0 mt-0.5">
                              <SvcIcon className="w-3.5 h-3.5" aria-hidden="true" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-brand-primary-deep leading-snug">
                                {svc.title}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                                {svc.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Card Footer: 104 Helpline */}
                <div className="relative z-10 pt-3.5 border-t border-slate-200/80">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blush border border-brand-accent/25 text-xs font-extrabold text-brand-accent shadow-2xs">
                    <PhoneCall className="w-3.5 h-3.5 text-brand-accent animate-pulse" aria-hidden="true" />
                    <span>{copy.hubHelpline}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Vision & Long-Term Goals — Balanced Layout, NO EMPTY SPACE */}
        {activeTab === "vision" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch animate-fadeIn">
            {/* Left Col: Vision Statement & Strategic Goals */}
            <div className="lg:col-span-7 flex flex-col gap-4.5">
              <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-6 shadow-xs border border-brand-primary/15">
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">
                      <Eye className="w-4.5 h-4.5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-brand-primary-deep">
                      {t.purposeVision.vision.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-brand-primary border border-brand-primary/20">
                    {copy.visionMissionTag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {t.purposeVision.vision.statement}
                </p>

                {/* 3 Vision Commitments Strip */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 border-t border-brand-primary/12">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-brand-primary/15 text-center">
                    <div className="text-[11px] sm:text-xs font-extrabold text-brand-primary">
                      {copy.visionCommit1Val}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-tight">
                      {copy.visionCommit1Lbl}
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-brand-primary/15 text-center">
                    <div className="text-[11px] sm:text-xs font-extrabold text-brand-primary">
                      {copy.visionCommit2Val}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-tight">
                      {copy.visionCommit2Lbl}
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-brand-primary/15 text-center">
                    <div className="text-[11px] sm:text-xs font-extrabold text-brand-primary">
                      {copy.visionCommit3Val}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-tight">
                      {copy.visionCommit3Lbl}
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Goals Panel */}
              <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-6 shadow-xs border border-brand-primary/15 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-primary-deep flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-primary" />
                    {t.purposeVision.vision.goalsTitle}
                  </h4>
                  <span className="text-[11px] text-slate-500 font-semibold">
                    {copy.goalsHeaderSub}
                  </span>
                </div>
                <div className="space-y-2">
                  {t.purposeVision.vision.goals.map((goal, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 sm:p-3 rounded-xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:bg-white hover:border-brand-primary/40 transition flex items-start gap-2.5"
                    >
                      <ShieldCheck
                        className="w-4 h-4 text-brand-primary shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">
                        {goal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: 2026 District Milestone Side Card — RICHLY FILLED & ZERO VOID */}
            <div className="lg:col-span-5">
              <div className="h-full bg-gradient-to-br from-brand-primary to-brand-primary-deep text-white rounded-2xl p-5 sm:p-6 shadow-xl shadow-brand-primary/20 flex flex-col justify-between text-center relative overflow-hidden">
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-brand-secondary/15 blur-2xl"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 text-brand-secondary-light flex items-center justify-center mx-auto mb-2.5 shadow-md">
                    <Award className="w-6 h-6 text-yellow-300" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-extrabold text-white mb-1">
                    {copy.milestoneTitle}
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed max-w-sm mx-auto mb-3.5">
                    {copy.milestoneSubtitle}
                  </p>

                  {/* 3 KPI Targets Strip */}
                  <div className="grid grid-cols-3 gap-2 mb-3.5">
                    {copy.milestoneStats.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2 rounded-xl bg-white/8 border border-white/12 text-center"
                      >
                        <div className="text-xs sm:text-[13px] font-black text-brand-secondary-light">
                          {st.val}
                        </div>
                        <div className="text-[9px] text-slate-200 font-medium mt-0.5 leading-tight">
                          {st.lbl}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 4 Strategic Implementation Action Pillars */}
                  <div className="text-left mb-3.5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary-light" />
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300">
                        {copy.milestoneActionsHeading}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {copy.milestoneActions.map((act, aIdx) => {
                        const ActIcons = [Building2, Droplet, Baby, BarChart3];
                        const ActIcon = ActIcons[aIdx % ActIcons.length];
                        return (
                          <div
                            key={aIdx}
                            className="p-2 rounded-xl bg-white/6 border border-white/10 hover:bg-white/10 transition flex items-start gap-2.5"
                          >
                            <div className="w-6.5 h-6.5 rounded-lg bg-white/12 text-brand-secondary-light flex items-center justify-center shrink-0 mt-0.5">
                              <ActIcon className="w-3.5 h-3.5" aria-hidden="true" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white leading-snug">
                                {act.title}
                              </div>
                              <div className="text-[11px] text-slate-300 leading-tight mt-0.5">
                                {act.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Footer with High-Contrast Priority Badge */}
                <div className="relative z-10 pt-3.5 border-t border-white/15">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-secondary/20 border border-brand-secondary/40 text-xs font-black text-brand-secondary-light tracking-wide uppercase shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" aria-hidden="true" />
                    <span>{copy.milestonePriority}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Key Pillars & Programme Objectives */}
        {activeTab === "pillars" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Top Sub-section: 4 Objectives */}
            <div>
              <div className="mb-5">
                <h3 className="text-lg sm:text-xl font-extrabold text-brand-primary-deep">
                  {t.purposeVision.objectivesTitle}
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  {t.purposeVision.objectivesSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {t.purposeVision.objectives.map((obj, idx) => (
                  <article
                    key={idx}
                    className="bg-white/95 rounded-2xl p-4 sm:p-5 shadow-2xs border border-slate-200/90 hover:border-brand-accent/50 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary text-white text-xs font-black mb-3 shadow-2xs">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-brand-primary-deep mb-1.5 leading-snug">
                      {obj.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {obj.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Bottom Sub-section: 4 Infrastructure Grid Items */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="text-center max-w-2xl mx-auto mb-5">
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-primary-deep">
                  {copy.pillarsTitle}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {copy.pillarsSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {t.purposeVision.gridItems.map((box, index) => {
                  const style = HUB_STYLES[index % HUB_STYLES.length];
                  const Icon = style.Icon;
                  return (
                    <div
                      key={index}
                      className={`${style.card} rounded-2xl border p-4.5 flex flex-col items-center justify-center text-center shadow-2xs hover:-translate-y-0.5 transition duration-200`}
                    >
                      <div
                        className={`${style.iconWrap} w-10 h-10 rounded-xl text-white flex items-center justify-center shadow-xs mb-2.5`}
                      >
                        <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                      </div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-brand-primary-deep leading-snug">
                        {box.title}
                      </h5>
                      <p className="text-xs font-medium text-slate-700 mt-0.5">
                        {box.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
