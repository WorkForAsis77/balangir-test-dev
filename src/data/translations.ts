export type Language = "en" | "or" | "hi";

export interface TranslationContent {
  meta: {
    siteTitle: string;
    siteDescription: string;
    languageName: string;
    languageNative: string;
  };
  topBar: {
    govtOfOdisha: string;
    districtLabel: string;
    skipToMain: string;
    sitemap: string;
    zoomOutLabel: string;
    zoomResetLabel: string;
    zoomInLabel: string;
    zoomOutSymbol: string;
    zoomResetSymbol: string;
    zoomInSymbol: string;
    selectLanguage: string;
  };
  nav: {
    home: string;
    about: string;
    purposeVision: string;
    contact: string;
    sitemap: string;
    openMenu: string;
    closeMenu: string;
    brandName: string;
    brandSubtitle: string;
    departmentLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    fullName: string;
    tagline: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    slides: {
      imageAlt: string;
      captionTitle: string;
      captionSub: string;
    }[];
    carouselControls: {
      previousSlide: string;
      nextSlide: string;
      pauseAutoplay: string;
      resumeAutoplay: string;
      goToSlide: string;
    };
    highlights: {
      value: string;
      label: string;
    }[];
  };
  leadership: {
    sectionTag: string;
    title: string;
    subtitle: string;
    stateGroupLabel: string;
    districtGroupLabel: string;
  };
  about: {
    sectionTag: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    imageAlt: string;
    imageBadgeTitle: string;
    imageBadgeSub: string;
    highlightsTitle: string;
    cards: {
      title: string;
      subtitle: string;
      description: string;
    }[];
  };
  purposeVision: {
    sectionTag: string;
    title: string;
    headlinePrefix: string;
    headlineAccent: string;
    headlineSuffix: string;
    subtitle: string;
    purpose: {
      title: string;
      statement: string;
      focusTitle: string;
      focusAreas: string[];
    };
    vision: {
      title: string;
      statement: string;
      goalsTitle: string;
      goals: string[];
    };
    viewMore: string;
    viewLess: string;
    gridItems: {
      title: string;
      subtitle: string;
    }[];
    objectivesTitle: string;
    objectivesSubtitle: string;
    objectives: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    notice: string;
    cards: {
      addressTitle: string;
      addressValue: string;
      phoneTitle: string;
      phoneValue: string;
      phoneHours: string;
      emailTitle: string;
      emailValue: string;
      emailSub: string;
      helplineTitle: string;
      helplineValue: string;
      helplineSub: string;
    };
    mapTitle: string;
    mapSubtitle: string;
    openInMaps: string;
    form: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      mobileLabel: string;
      mobilePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      resetBtn: string;
      requiredNote: string;
      errors: {
        nameRequired: string;
        nameMin: string;
        mobileRequired: string;
        mobileInvalid: string;
        emailRequired: string;
        emailInvalid: string;
        subjectRequired: string;
        messageRequired: string;
        messageMin: string;
      };
      success: {
        title: string;
        body: string;
        referenceLabel: string;
        newEnquiryBtn: string;
      };
    };
  };
  appDownloadStrip: {
    title: string;
    subtitle: string;
    getItOn: string;
    googlePlay: string;
    ariaLabel: string;
  };
  footer: {
    govtLabel: string;
    programmeName: string;
    description: string;
    helplineLabel: string;
    quickLinksTitle: string;
    essentialsTitle: string;
    contactTitle: string;
    privacyPolicy: string;
    sitemap: string;
    copyright: string;
    attribution: string;
    backToTop: string;
  };
  sitemapPage: {
    breadcrumbHome: string;
    title: string;
    subtitle: string;
    sectionsHeading: string;
    accessibilityHeading: string;
    languagesHeading: string;
    backToHome: string;
    groups: {
      title: string;
      description: string;
      links: {
        label: string;
        href: string;
        detail: string;
      }[];
    }[];
    accessibilityItems: string[];
  };
  privacyPage: {
    breadcrumbHome: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    backToHome: string;
    sections: {
      heading: string;
      body: string;
    }[];
  };
}

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  en: {
    meta: {
      siteTitle: "Balangir MIHMS | Maternal & Infant Health Monitoring System",
      siteDescription:
        "Official public information portal for Balangir MIHMS — Maternal & Infant Health Monitoring System, District Health Administration, Balangir, Government of Odisha.",
      languageName: "English",
      languageNative: "English",
    },
    topBar: {
      govtOfOdisha: "Government of Odisha",
      districtLabel: "District Administration, Balangir",
      skipToMain: "Skip to Main Content",
      sitemap: "Sitemap",
      zoomOutLabel: "Decrease text size (Zoom Out)",
      zoomResetLabel: "Reset text size to default",
      zoomInLabel: "Increase text size (Zoom In)",
      zoomOutSymbol: "A-",
      zoomResetSymbol: "A",
      zoomInSymbol: "A+",
      selectLanguage: "Select Language",
    },
    nav: {
      home: "Home",
      about: "About",
      purposeVision: "Purpose & Vision",
      contact: "Contact",
      sitemap: "Sitemap",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      brandName: "Balangir MIHMS",
      brandSubtitle: "Maternal & Infant Health Monitoring System",
      departmentLabel: "Department of Health & Family Welfare, Odisha",
    },
    hero: {
      badge: "District Health Initiative • Balangir, Odisha",
      title: "Balangir MIHMS",
      fullName: "Maternal & Infant Health Monitoring System",
      tagline:
        "Empowering Safe Motherhood and Healthy Beginnings Across Balangir District.",
      intro:
        "Balangir MIHMS is a dedicated public health monitoring initiative under the Balangir District Health Administration, connecting expectant mothers, ASHA/ANM health workers, health facilities, and diagnostic centres to deliver timely antenatal care, early high-risk identification, and structured postnatal support.",
      primaryCta: "Explore Programme",
      secondaryCta: "Contact & Enquiry",
      slides: [
        {
          imageAlt:
            "Community health worker consulting an expectant mother with a digital tablet at a primary health centre in Balangir, Odisha",
          captionTitle: "Digital Care at the Last Mile",
          captionSub:
            "Supporting mothers and newborns across rural and urban blocks of Balangir",
        },
        {
          imageAlt:
            "Doctor conducting an antenatal ultrasound and diagnostic checkup for an expectant mother in a Balangir district clinic",
          captionTitle: "Timely Antenatal & Ultrasound Care",
          captionSub:
            "Coordinated diagnostic referrals and early high-risk pregnancy screening",
        },
        {
          imageAlt:
            "Health worker guiding expectant mothers during a rural maternal nutrition and awareness camp in Odisha",
          captionTitle: "Community Outreach & Awareness",
          captionSub:
            "Empowering rural families through regular Village Health & Nutrition sessions",
        },
        {
          imageAlt:
            "Mother smiling with her healthy newborn baby alongside a nurse in a bright maternity care ward in Odisha",
          captionTitle: "Safe Delivery & Healthy Beginnings",
          captionSub:
            "Structured institutional delivery support and postnatal newborn follow-up",
        },
      ],
      carouselControls: {
        previousSlide: "Previous slide",
        nextSlide: "Next slide",
        pauseAutoplay: "Pause slideshow",
        resumeAutoplay: "Play slideshow",
        goToSlide: "Go to slide",
      },
      highlights: [
        { value: "14 Blocks", label: "District-Wide Coverage" },
        { value: "ANC & PNC", label: "End-to-End Tracking" },
        { value: "High-Risk", label: "Early Identification" },
        { value: "3 Languages", label: "Odia, Hindi & English" },
      ],
    },
    leadership: {
      sectionTag: "Patronage & Administration",
      title: "Leadership & Guidance",
      subtitle:
        "Guided by National, State, and Balangir District Health Leadership for Safe Motherhood",
      stateGroupLabel: "National & State Leadership",
      districtGroupLabel: "District Administration & Health Leadership — Balangir",
    },
    about: {
      sectionTag: "Programme Overview",
      title: "About Balangir MIHMS",
      subtitle:
        "Strengthening Maternal & Infant Healthcare Delivery Through Coordinated Digital Monitoring",
      paragraphs: [
        "The Balangir Maternal & Infant Health Monitoring System (Balangir MIHMS) is a district-level public health programme designed to ensure every pregnant woman and newborn in Balangir receives complete, timely, and accessible healthcare. By uniting frontline community health workers (ASHA and ANM), public health facilities, and empanelled diagnostic services onto a single coordinated framework, the programme simplifies antenatal check-ups, essential diagnostics, and continuous follow-ups.",
        "Special priority is placed on early identification and close monitoring of high-risk pregnancies, especially across rural, tribal, and hard-to-reach pockets of Balangir district where geographical distance and delayed referrals can impact outcomes. Through structured digital tracking, timely alerts, and community engagement, Balangir MIHMS works toward safer pregnancies, institutional deliveries, and a healthy start for every child.",
      ],
      imageAlt:
        "Mother holding her healthy newborn baby during a postnatal checkup with a doctor at a district clinic in Balangir, Odisha",
      imageBadgeTitle: "Safe Motherhood & Newborn Care",
      imageBadgeSub: "Coordinated District Health Support",
      highlightsTitle: "Key Programme Highlights",
      cards: [
        {
          title: "Community",
          subtitle: "Health Workers",
          description:
            "Empowers ASHA & ANM workers with structured checklists and timely home-visit guidance.",
        },
        {
          title: "Diagnostic",
          subtitle: "Ultrasound & Tests",
          description:
            "Streamlines access to essential antenatal diagnostics, scans, and lab check-ups.",
        },
        {
          title: "Digital",
          subtitle: "Tracking System",
          description:
            "Maintains longitudinal maternal and infant health records for real-time follow-up.",
        },
        {
          title: "Structured",
          subtitle: "High-Risk Follow-Up",
          description:
            "Ensures priority referrals and timely medical intervention for high-risk pregnancies.",
        },
      ],
    },
    purposeVision: {
      sectionTag: "Purpose & Vision",
      title: "Purpose & Vision",
      headlinePrefix: "Transforming",
      headlineAccent: "Maternal",
      headlineSuffix: "Healthcare in Balangir",
      subtitle: "Transforming Maternal & Infant Healthcare in Balangir",
      purpose: {
        title: "Our Purpose",
        statement:
          "To safeguard maternal and infant health across Balangir district by ensuring timely, equitable, and quality antenatal, delivery, and postnatal healthcare services through digital monitoring, frontline worker coordination, and proactive community support.",
        focusTitle: "Key Focus Areas",
        focusAreas: [
          "Early registration of pregnancies and scheduled Antenatal Care (ANC) visits",
          "Early screening, flagging, and specialist follow-up of high-risk pregnancies",
          "Accessible ultrasound (USG) and essential maternal diagnostic referrals",
          "Seamless coordination among ASHA workers, ANMs, PHCs, CHCs, and District Hospital",
          "Nutrition, anaemia management, and danger-sign awareness for mothers and families",
          "Structured postnatal and newborn immunization tracking in remote and rural areas",
        ],
      },
      vision: {
        title: "Our Vision",
        statement:
          "To build a resilient, transparent, and technology-enabled maternal and infant healthcare ecosystem in Balangir where every mother experiences a safe pregnancy, every complication is addressed in time, and every newborn begins life healthy.",
        goalsTitle: "Long-Term Goals",
        goals: [
          "Measurably reduce maternal and neonatal health risks across all blocks",
          "Increase timely institutional deliveries and skilled birth attendance",
          "Equip healthcare personnel and administrators with actionable real-time insights",
          "Bridge healthcare accessibility gaps in underserved and hard-to-reach villages",
          "Foster strong community participation and family awareness in maternal care",
        ],
      },
      viewMore: "View Details",
      viewLess: "Hide Details",
      gridItems: [
        { title: "Frontline Network", subtitle: "ASHA & ANM Coordination" },
        { title: "Digital Registry", subtitle: "Real-Time Health Tracking" },
        { title: "Timely Diagnostics", subtitle: "ANC & Ultrasound Access" },
        { title: "Healthy Outcomes", subtitle: "Safe Motherhood & Infancy" },
      ],
      objectivesTitle: "Programme Objectives & Key Focus Areas",
      objectivesSubtitle:
        "Core pillars guiding day-to-day maternal and infant health monitoring in Balangir district",
      objectives: [
        {
          title: "100% Antenatal Coverage",
          description:
            "Ensure early pregnancy registration and completion of all recommended ANC visits with iron, calcium, and clinical check-ups.",
        },
        {
          title: "High-Risk Pregnancy Tracking",
          description:
            "Identify warning signs early—such as severe anaemia, hypertension, or gestational complications—for prompt specialist care.",
        },
        {
          title: "Timely Diagnostic & USG Referrals",
          description:
            "Reduce waiting times and financial barriers by linking expectant mothers with nearby government and empanelled diagnostic facilities.",
        },
        {
          title: "Postnatal & Newborn Monitoring",
          description:
            "Continue structured follow-up after delivery to monitor maternal recovery, breastfeeding, growth, and routine immunization.",
        },
      ],
    },
    contact: {
      sectionTag: "Official Communication",
      title: "Contact & Enquiry",
      subtitle:
        "Reach out to the District Health Office, Balangir for programme information, support, or official enquiries.",
      notice:
        "Note: Final department-approved contact numbers, email addresses, and office details may be updated by the concerned authority prior to final deployment.",
      cards: {
        addressTitle: "Official Office Address",
        addressValue:
          "O/o Chief District Medical & Public Health Officer (CDM & PHO), District Headquarters Hospital Campus, Balangir, Odisha – 767001",
        phoneTitle: "Contact Number",
        phoneValue: "+91 6652-232245",
        phoneHours: "Mon – Sat, 10:00 AM – 5:00 PM",
        emailTitle: "Official Email",
        emailValue: "cdmo.balangir@odisha.gov.in",
        emailSub: "For official correspondence & queries",
        helplineTitle: "Health Helpline",
        helplineValue: "104 / 108",
        helplineSub: "24×7 State Health & Emergency Support",
      },
      mapTitle: "Office Location Map",
      mapSubtitle: "District Headquarters Hospital Campus, Balangir, Odisha",
      openInMaps: "Open in Google Maps",
      form: {
        title: "Submit an Enquiry",
        subtitle:
          "Fill in your details below and our programme support team will review your enquiry.",
        nameLabel: "Full Name",
        namePlaceholder: "Enter your full name",
        mobileLabel: "Mobile Number",
        mobilePlaceholder: "Enter 10-digit mobile number",
        emailLabel: "Email Address",
        emailPlaceholder: "Enter your email address",
        subjectLabel: "Subject",
        subjectPlaceholder: "Enter subject of your enquiry",
        messageLabel: "Message",
        messagePlaceholder: "Write your enquiry or feedback in detail...",
        submitBtn: "Submit Enquiry",
        resetBtn: "Clear Form",
        requiredNote: "All fields marked with * are required.",
        errors: {
          nameRequired: "Please enter your full name.",
          nameMin: "Name must be at least 2 characters long.",
          mobileRequired: "Please enter your 10-digit mobile number.",
          mobileInvalid: "Please enter a valid 10-digit Indian mobile number.",
          emailRequired: "Please enter your email address.",
          emailInvalid: "Please enter a valid email address.",
          subjectRequired: "Please enter a subject for your enquiry.",
          messageRequired: "Please enter your message.",
          messageMin: "Message should be at least 10 characters long.",
        },
        success: {
          title: "Enquiry Submitted Successfully",
          body: "Thank you for contacting Balangir MIHMS. Your enquiry has been recorded and will be reviewed by the concerned district health cell.",
          referenceLabel: "Reference ID",
          newEnquiryBtn: "Submit Another Enquiry",
        },
      },
    },
    appDownloadStrip: {
      title: "Download App Now",
      subtitle:
        "Access all maternal & infant health services anytime, anywhere with our official mobile application",
      getItOn: "GET IT ON",
      googlePlay: "Google Play",
      ariaLabel: "Download Balangir MIHMS App on Google Play Store",
    },
  footer: {
      govtLabel: "Government of Odisha",
      programmeName: "Balangir MIHMS",
      description:
        "Maternal & Infant Health Monitoring System (MIHMS) is a public health initiative of the District Health Administration, Balangir, Odisha dedicated to safe motherhood and healthy newborn outcomes.",
      helplineLabel: "State Health Helpline",
      quickLinksTitle: "Quick Links",
      essentialsTitle: "Portal Information",
      contactTitle: "Official Contact",
      privacyPolicy: "Privacy Policy",
      sitemap: "Sitemap",
      copyright:
        "Content Owned, Maintained and Updated by District Health Administration, Balangir, Government of Odisha.",
      attribution:
        "Balangir MIHMS • Public Information Portal • Designed for Accessibility (English, ଓଡ଼ିଆ, हिंदी)",
      backToTop: "Back to top",
    },
    sitemapPage: {
      breadcrumbHome: "Home",
      title: "Website Sitemap",
      subtitle:
        "A structured overview of all sections, informational pages, language options, and visitor accessibility features on the Balangir MIHMS portal.",
      sectionsHeading: "Portal Structure & Sections",
      accessibilityHeading: "Accessibility & Visitor Controls",
      languagesHeading: "Supported Languages",
      backToHome: "Return to Landing Page",
      groups: [
        {
          title: "Landing Page Sections",
          description: "Primary public information sections on the main portal.",
          links: [
            {
              label: "Home / Hero Banner",
              href: "/#home",
              detail:
                "Programme identity, approved tagline, brief introduction, and primary call-to-action.",
            },
            {
              label: "Leadership & Guidance",
              href: "/#leadership",
              detail:
                "National, State, and Balangir District Health Administration leadership.",
            },
            {
              label: "About Balangir MIHMS",
              href: "/#about",
              detail:
                "Programme background, district overview, and key maternal & infant healthcare highlights.",
            },
            {
              label: "Purpose & Vision",
              href: "/#purpose-vision",
              detail:
                "Official purpose and vision statements, long-term goals, programme objectives, and key focus areas.",
            },
            {
              label: "Contact & Enquiry",
              href: "/#contact",
              detail:
                "Official office address, phone number, email address, location map, and validated enquiry form.",
            },
          ],
        },
        {
          title: "Portal Pages & Policies",
          description: "Reference pages accessible across all screens.",
          links: [
            {
              label: "Sitemap",
              href: "/sitemap",
              detail:
                "Structured directory of all website sections and navigation options.",
            },
            {
              label: "Privacy Policy",
              href: "/privacy-policy",
              detail:
                "Information regarding visitor privacy, enquiry data handling, and portal usage.",
            },
          ],
        },
      ],
      accessibilityItems: [
        "Skip to Main Content link accessible immediately via keyboard Tab navigation",
        "Zoom In (A+), Zoom Out (A−), and Reset (A) text-size controls preserving responsive layout",
        "Full keyboard navigation and visible focus indicators across menus, controls, and forms",
        "Trilingual interface supporting English, Odia (ଓଡ଼ିଆ), and Hindi (हिंदी) scripts",
      ],
    },
    privacyPage: {
      breadcrumbHome: "Home",
      title: "Privacy Policy",
      subtitle:
        "Official privacy guidelines for visitors using the Balangir MIHMS public information landing page.",
      lastUpdated: "Status: Draft policy pending final department approval",
      backToHome: "Return to Landing Page",
      sections: [
        {
          heading: "1. General Information",
          body: "This public information portal for Balangir MIHMS (Maternal & Infant Health Monitoring System) is operated for public awareness and official communication under the District Health Administration, Balangir, Government of Odisha. Browsing this website does not automatically capture personally identifiable information.",
        },
        {
          heading: "2. Enquiry Form Information",
          body: "When visitors voluntarily submit an enquiry through the Contact section (such as Name, Mobile Number, Email Address, Subject, and Message), the information is used solely to review and respond to the citizen's query or feedback.",
        },
        {
          heading: "3. Visitor Preferences & Accessibility Settings",
          body: "The portal stores non-personal display preferences—specifically your chosen language (English, Odia, or Hindi) and preferred text zoom level—locally in your browser to provide a consistent accessible experience across visits.",
        },
        {
          heading: "4. Contact for Privacy Queries",
          body: "For questions regarding this portal or its content, please reach out to the Office of the CDM & PHO, Balangir through the Contact section on the landing page.",
        },
      ],
    },
  },

  or: {
    meta: {
      siteTitle: "ବଲାଙ୍ଗୀର MIHMS | ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟ ନିରୀକ୍ଷଣ ପ୍ରଣାଳୀ",
      siteDescription:
        "ବଲାଙ୍ଗୀର MIHMS — ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟ ନିରୀକ୍ଷଣ ପ୍ରଣାଳୀ, ଜିଲ୍ଲା ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶାସନ, ବଲାଙ୍ଗୀର, ଓଡ଼ିଶା ସରକାରଙ୍କ ସରକାରୀ ସୂଚନା ପୋର୍ଟାଲ୍।",
      languageName: "Odia",
      languageNative: "ଓଡ଼ିଆ",
    },
    topBar: {
      govtOfOdisha: "ଓଡ଼ିଶା ସରକାର",
      districtLabel: "ଜିଲ୍ଲା ପ୍ରଶାସନ, ବଲାଙ୍ଗୀର",
      skipToMain: "ମୁଖ୍ୟ ବିଷୟବସ୍ତୁକୁ ଯାଆନ୍ତୁ",
      sitemap: "ସାଇଟ୍‌ମ୍ୟାପ୍",
      zoomOutLabel: "ଅକ୍ଷର ଆକାର କମାନ୍ତୁ (ଜୁମ୍ ଆଉଟ୍)",
      zoomResetLabel: "ସାଧାରଣ ଅକ୍ଷର ଆକାରକୁ ଫେରନ୍ତୁ",
      zoomInLabel: "ଅକ୍ଷର ଆକାର ବଢ଼ାନ୍ତୁ (ଜୁମ୍ ଇନ୍)",
      zoomOutSymbol: "କ-",
      zoomResetSymbol: "କ",
      zoomInSymbol: "କ+",
      selectLanguage: "ଭାଷା ବାଛନ୍ତୁ",
    },
    nav: {
      home: "ମୁଖ୍ୟ ପୃଷ୍ଠା",
      about: "ଆମ ବିଷୟରେ",
      purposeVision: "ଉଦ୍ଦେଶ୍ୟ ଓ ସଙ୍କଳ୍ପ",
      contact: "ଯୋଗାଯୋଗ",
      sitemap: "ସାଇଟ୍‌ମ୍ୟାପ୍",
      openMenu: "ମେନୁ ଖୋଲନ୍ତୁ",
      closeMenu: "ମେନୁ ବନ୍ଦ କରନ୍ତୁ",
      brandName: "ବଲାଙ୍ଗୀର MIHMS",
      brandSubtitle: "ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟ ନିରୀକ୍ଷଣ ପ୍ରଣାଳୀ",
      departmentLabel: "ସ୍ୱାସ୍ଥ୍ୟ ଓ ପରିବାର କଲ୍ୟାଣ ବିଭାଗ, ଓଡ଼ିଶା",
    },
    hero: {
      badge: "ଜିଲ୍ଲା ସ୍ୱାସ୍ଥ୍ୟ ଅଭିଯାନ • ବଲାଙ୍ଗୀର, ଓଡ଼ିଶା",
      title: "ବଲାଙ୍ଗୀର MIHMS",
      fullName: "ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟ ନିରୀକ୍ଷଣ ପ୍ରଣାଳୀ",
      tagline:
        "ବଲାଙ୍ଗୀର ଜିଲ୍ଲାରେ ସୁରକ୍ଷିତ ମାତୃତ୍ୱ ଏବଂ ସୁସ୍ଥ ଶୈଶବର ଆରମ୍ଭକୁ ସଶକ୍ତ କରିବା।",
      intro:
        "ବଲାଙ୍ଗୀର MIHMS ହେଉଛି ଜିଲ୍ଲା ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶାସନ, ବଲାଙ୍ଗୀର ଅଧୀନରେ ଏକ ସମର୍ପିତ ଜନସ୍ୱାସ୍ଥ୍ୟ ନିରୀକ୍ଷଣ କାର୍ଯ୍ୟକ୍ରମ। ଏହା ଗର୍ଭବତୀ ମହିଳା, ଆଶା/ଏଏନ୍ଏମ୍ ସ୍ୱାସ୍ଥ୍ୟକର୍ମୀ, ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ର ଏବଂ ଡାଏଗ୍ନୋଷ୍ଟିକ୍ ସେଣ୍ଟରଗୁଡ଼ିକୁ ସଂଯୋଗ କରି ସମୟୋପଯୋଗୀ ପ୍ରସବପୂର୍ବ ଯତ୍ନ, ଉଚ୍ଚ-ବିପଦପୂର୍ଣ୍ଣ ଗର୍ଭାବସ୍ଥାର ପ୍ରାରମ୍ଭିକ ଚିହ୍ନଟ ଏବଂ ନିୟମିତ ପ୍ରସବୋତ୍ତର ସହାୟତା ସୁନିଶ୍ଚିତ କରେ।",
      primaryCta: "କାର୍ଯ୍ୟକ୍ରମ ଜାଣନ୍ତୁ",
      secondaryCta: "ଯୋଗାଯୋଗ ଓ ଅନୁସନ୍ଧାନ",
      slides: [
        {
          imageAlt:
            "ଓଡ଼ିଶାର ବଲାଙ୍ଗୀର ସ୍ଥିତ ପ୍ରାଥମିକ ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ରରେ ଜଣେ ସାମ୍ପ୍ରଦାୟିକ ସ୍ୱାସ୍ଥ୍ୟକର୍ମୀ ଡିଜିଟାଲ୍ ଟ୍ୟାବଲେଟ୍ ମାଧ୍ୟମରେ ଗର୍ଭବତୀ ମହିଳାଙ୍କୁ ପରାମର୍ଶ ଦେଉଛନ୍ତି",
          captionTitle: "ପ୍ରତ୍ୟେକ ଗ୍ରାମରେ ଡିଜିଟାଲ୍ ସ୍ୱାସ୍ଥ୍ୟସେବା",
          captionSub:
            "ବଲାଙ୍ଗୀରର ଗ୍ରାମାଞ୍ଚଳ ଓ ସହରାଞ୍ଚଳରେ ମାଆ ଓ ନବଜାତ ଶିଶୁଙ୍କ ପାଇଁ ସମନ୍ୱିତ ସହାୟତା",
        },
        {
          imageAlt:
            "ବଲାଙ୍ଗୀର ଜିଲ୍ଲା ଚିକିତ୍ସାଳୟରେ ଜଣେ ମହିଳା ଡାକ୍ତର ଗର୍ଭବତୀ ମହିଳାଙ୍କ ପ୍ରସବପୂର୍ବ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ ଓ ସ୍ୱାସ୍ଥ୍ୟ ପରୀକ୍ଷା କରୁଛନ୍ତି",
          captionTitle: "ସମୟୋଚିତ ପ୍ରସବପୂର୍ବ ଓ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ ସେବା",
          captionSub:
            "ସୁସଂଗଠିତ ଡାଏଗ୍ନୋଷ୍ଟିକ୍ ରେଫରାଲ୍ ଏବଂ ଉଚ୍ଚ-ବିପଦ ଗର୍ଭାବସ୍ଥାର ପ୍ରାରମ୍ଭିକ ଚିହ୍ନଟ",
        },
        {
          imageAlt:
            "ଓଡ଼ିଶାର ଗ୍ରାମାଞ୍ଚଳରେ ସ୍ୱାସ୍ଥ୍ୟକର୍ମୀ ଗର୍ଭବତୀ ମହିଳାଙ୍କୁ ମାତୃ ପୁଷ୍ଟି ଓ ସଚେତନତା ଶିବିରରେ ପରାମର୍ଶ ଦେଉଛନ୍ତି",
          captionTitle: "ସାମୁଦାୟିକ ସଚେତନତା ଓ ସହଭାଗିତା",
          captionSub:
            "ନିୟମିତ ଗ୍ରାମ୍ୟ ସ୍ୱାସ୍ଥ୍ୟ ଓ ପୁଷ୍ଟି ଦିବସ ମାଧ୍ୟମରେ ପରିବାରକୁ ସଶକ୍ତ କରିବା",
        },
        {
          imageAlt:
            "ଓଡ଼ିଶାର ଜିଲ୍ଲା ମାତୃ ଓ ଶିଶୁ ୱାର୍ଡରେ ନର୍ସଙ୍କ ଉପସ୍ଥିତିରେ ମାଆ ନିଜ ସୁସ୍ଥ ନବଜାତ ଶିଶୁକୁ କୋଳରେ ଧରି ହସୁଛନ୍ତି",
          captionTitle: "ସୁରକ୍ଷିତ ପ୍ରସବ ଓ ସୁସ୍ଥ ଶୈଶବ",
          captionSub:
            "ପ୍ରାତିଷ୍ଠାନିକ ପ୍ରସବ ସହାୟତା ଏବଂ ନିୟମିତ ପ୍ରସବୋତ୍ତର ଶିଶୁ ଅନୁସରଣ",
        },
      ],
      carouselControls: {
        previousSlide: "ପୂର୍ବବର୍ତ୍ତୀ ଛବି",
        nextSlide: "ପରବର୍ତ୍ତୀ ଛବି",
        pauseAutoplay: "ସ୍ଲାଇଡ୍ ଶୋ ଅଟକାନ୍ତୁ",
        resumeAutoplay: "ସ୍ଲାଇଡ୍ ଶୋ ଚଲାନ୍ତୁ",
        goToSlide: "ସ୍ଲାଇଡ୍‌କୁ ଯାଆନ୍ତୁ",
      },
      highlights: [
        { value: "୧୪ ବ୍ଲକ୍", label: "ସମଗ୍ର ଜିଲ୍ଲାରେ ସେବା" },
        { value: "ANC ଓ PNC", label: "ସମ୍ପୂର୍ଣ୍ଣ ସ୍ୱାସ୍ଥ୍ୟ ଟ୍ରାକିଂ" },
        { value: "ଉଚ୍ଚ-ବିପଦ", label: "ପ୍ରାରମ୍ଭିକ ଚିହ୍ନଟ" },
        { value: "୩ ଭାଷା", label: "ଓଡ଼ିଆ, ହିନ୍ଦୀ ଓ ଇଂରାଜୀ" },
      ],
    },
    leadership: {
      sectionTag: "ପୃଷ୍ଠପୋଷକତା ଓ ପ୍ରଶାସନ",
      title: "ନେତୃତ୍ୱ ଓ ମାର୍ଗଦର୍ଶନ",
      subtitle:
        "ସୁରକ୍ଷିତ ମାତୃତ୍ୱ ପାଇଁ ଜାତୀୟ, ରାଜ୍ୟ ଏବଂ ବଲାଙ୍ଗୀର ଜିଲ୍ଲା ସ୍ୱାସ୍ଥ୍ୟ ନେତୃତ୍ୱଙ୍କ ମାର୍ଗଦର୍ଶନ",
      stateGroupLabel: "ଜାତୀୟ ଓ ରାଜ୍ୟ ନେତୃତ୍ୱ",
      districtGroupLabel: "ଜିଲ୍ଲା ପ୍ରଶାସନ ଓ ସ୍ୱାସ୍ଥ୍ୟ ନେତୃତ୍ୱ — ବଲାଙ୍ଗୀର",
    },
    about: {
      sectionTag: "କାର୍ଯ୍ୟକ୍ରମ ପରିଚୟ",
      title: "ବଲାଙ୍ଗୀର MIHMS ବିଷୟରେ",
      subtitle:
        "ସମନ୍ୱିତ ଡିଜିଟାଲ୍ ନିରୀକ୍ଷଣ ମାଧ୍ୟମରେ ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟସେବାକୁ ସୁଦୃଢ଼ କରିବା",
      paragraphs: [
        "ବଲାଙ୍ଗୀର ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟ ନିରୀକ୍ଷଣ ପ୍ରଣାଳୀ (ବଲାଙ୍ଗୀର MIHMS) ହେଉଛି ଏକ ଜିଲ୍ଲାସ୍ତରୀୟ ଜନସ୍ୱାସ୍ଥ୍ୟ କାର୍ଯ୍ୟକ୍ରମ, ଯାହା ବଲାଙ୍ଗୀରର ପ୍ରତ୍ୟେକ ଗର୍ଭବତୀ ମହିଳା ଏବଂ ନବଜାତ ଶିଶୁଙ୍କୁ ସମ୍ପୂର୍ଣ୍ଣ, ସମୟୋପଯୋଗୀ ଏବଂ ସୁଲଭ ସ୍ୱାସ୍ଥ୍ୟସେବା ଯୋଗାଇବା ପାଇଁ ପ୍ରସ୍ତୁତ ହୋଇଛି। ଆଶା ଓ ଏଏନ୍ଏମ୍ ସ୍ୱାସ୍ଥ୍ୟକର୍ମୀ, ସରକାରୀ ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ର ଏବଂ ତାଲିକାଭୁକ୍ତ ଡାଏଗ୍ନୋଷ୍ଟିକ୍ ସେଣ୍ଟରଗୁଡ଼ିକୁ ଗୋଟିଏ ପ୍ରଣାଳୀରେ ଯୋଡ଼ି ଏହା ପ୍ରସବପୂର୍ବ ପରୀକ୍ଷା, ଅତ୍ୟାବଶ୍ୟକ ପରୀକ୍ଷଣ ଏବଂ ନିୟମିତ ଅନୁସରଣକୁ ସରଳ କରିଥାଏ।",
        "ବଲାଙ୍ଗୀର ଜିଲ୍ଲାର ଗ୍ରାମାଞ୍ଚଳ, ଆଦିବାସୀ ଏବଂ ଦୁର୍ଗମ ଅଞ୍ଚଳରେ ଉଚ୍ଚ-ବିପଦପୂର୍ଣ୍ଣ ଗର୍ଭାବସ୍ଥାର ପ୍ରାରମ୍ଭିକ ଚିହ୍ନଟ ଓ ନିରନ୍ତର ନିରୀକ୍ଷଣ ଉପରେ ବିଶେଷ ଗୁରୁତ୍ୱ ଦିଆଯାଉଛି। ଡିଜିଟାଲ୍ ଟ୍ରାକିଂ, ସମୟୋପଯୋଗୀ ସୂଚନା ଏବଂ ସାମୁଦାୟିକ ସହଭାଗିତା ମାଧ୍ୟମରେ ବଲାଙ୍ଗୀର MIHMS ସୁରକ୍ଷିତ ଗର୍ଭାବସ୍ଥା, ପ୍ରାତିଷ୍ଠାନିକ ପ୍ରସବ ଏବଂ ପ୍ରତ୍ୟେକ ଶିଶୁ ପାଇଁ ଏକ ସୁସ୍ଥ ଜୀବନର ଆରମ୍ଭ ସୁନିଶ୍ଚିତ କରୁଛି।",
      ],
      imageAlt:
        "ବଲାଙ୍ଗୀର ଜିଲ୍ଲା ଚିକିତ୍ସାଳୟରେ ଜଣେ ମାଆ ନିଜ ସୁସ୍ଥ ନବଜାତ ଶିଶୁକୁ ଧରି ମହିଳା ଡାକ୍ତରଙ୍କ ନିକଟରେ ପ୍ରସବୋତ୍ତର ପରୀକ୍ଷା କରାଉଛନ୍ତି",
      imageBadgeTitle: "ସୁରକ୍ଷିତ ମାତୃତ୍ୱ ଓ ନବଜାତ ଯତ୍ନ",
      imageBadgeSub: "ସମନ୍ୱିତ ଜିଲ୍ଲା ସ୍ୱାସ୍ଥ୍ୟ ସହାୟତା",
      highlightsTitle: "କାର୍ଯ୍ୟକ୍ରମର ପ୍ରମୁଖ ବୈଶିଷ୍ଟ୍ୟ",
      cards: [
        {
          title: "ସାମୁଦାୟିକ",
          subtitle: "ସ୍ୱାସ୍ଥ୍ୟକର୍ମୀ ନେଟୱର୍କ",
          description:
            "ଆଶା ଓ ଏଏନ୍ଏମ୍ କର୍ମୀଙ୍କୁ ନିୟମିତ ଗୃହ ପରିଦର୍ଶନ ଏବଂ ସୁସଂଗଠିତ ମାର୍ଗଦର୍ଶନରେ ସଶକ୍ତ କରେ।",
        },
        {
          title: "ଡାଏଗ୍ନୋଷ୍ଟିକ୍",
          subtitle: "ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ ଓ ପରୀକ୍ଷା",
          description:
            "ଅତ୍ୟାବଶ୍ୟକ ପ୍ରସବପୂର୍ବ ପରୀକ୍ଷା, ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ ସ୍କାନ୍ ଏବଂ ଲାବ୍ ସେବାକୁ ସହଜଲଭ୍ୟ କରେ।",
        },
        {
          title: "ଡିଜିଟାଲ୍",
          subtitle: "ଟ୍ରାକିଂ ପ୍ରଣାଳୀ",
          description:
            "ପ୍ରକୃତ ସମୟରେ ଅନୁସରଣ ପାଇଁ ମାଆ ଓ ଶିଶୁଙ୍କ ନିରନ୍ତର ସ୍ୱାସ୍ଥ୍ୟ ରେକର୍ଡ ସଂରକ୍ଷଣ କରେ।",
        },
        {
          title: "ସୁସଂଗଠିତ",
          subtitle: "ଉଚ୍ଚ-ବିପଦ ଅନୁସରଣ",
          description:
            "ବିପଦପୂର୍ଣ୍ଣ ଗର୍ଭାବସ୍ଥା ପାଇଁ ପ୍ରାଥମିକ ରେଫରାଲ୍ ଏବଂ ସମୟୋପଯୋଗୀ ଚିକିତ୍ସା ସୁନିଶ୍ଚିତ କରେ।",
        },
      ],
    },
    purposeVision: {
      sectionTag: "ଉଦ୍ଦେଶ୍ୟ ଓ ସଙ୍କଳ୍ପ",
      title: "ଉଦ୍ଦେଶ୍ୟ ଓ ସଙ୍କଳ୍ପ",
      headlinePrefix: "ବଲାଙ୍ଗୀରରେ",
      headlineAccent: "ମାତୃ ଓ ଶିଶୁ",
      headlineSuffix: "ସ୍ୱାସ୍ଥ୍ୟସେବାର ରୂପାନ୍ତରଣ",
      subtitle: "ବଲାଙ୍ଗୀରରେ ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟସେବାର ରୂପାନ୍ତରଣ",
      purpose: {
        title: "ଆମର ଉଦ୍ଦେଶ୍ୟ",
        statement:
          "ଡିଜିଟାଲ୍ ନିରୀକ୍ଷଣ, ସ୍ୱାସ୍ଥ୍ୟକର୍ମୀଙ୍କ ସମନ୍ୱୟ ଏବଂ ସକ୍ରିୟ ସାମୁଦାୟିକ ସହାୟତା ମାଧ୍ୟମରେ ବଲାଙ୍ଗୀର ଜିଲ୍ଲାର ପ୍ରତ୍ୟେକ ଗର୍ଭବତୀ ମହିଳା ଓ ଶିଶୁଙ୍କୁ ସମୟୋପଯୋଗୀ, ସମାନ ଏବଂ ଗୁଣାତ୍ମକ ପ୍ରସବପୂର୍ବ, ପ୍ରସବକାଳୀନ ଓ ପ୍ରସବୋତ୍ତର ସ୍ୱାସ୍ଥ୍ୟସେବା ଯୋଗାଇ ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟକୁ ସୁରକ୍ଷିତ କରିବା।",
        focusTitle: "ପ୍ରମୁଖ ଧ୍ୟାନ କ୍ଷେତ୍ର",
        focusAreas: [
          "ଗର୍ଭାବସ୍ଥାର ପ୍ରାରମ୍ଭିକ ପଞ୍ଜୀକରଣ ଏବଂ ନିର୍ଦ୍ଧାରିତ ପ୍ରସବପୂର୍ବ ପରୀକ୍ଷା (ANC)",
          "ଉଚ୍ଚ-ବିପଦପୂର୍ଣ୍ଣ ଗର୍ଭାବସ୍ଥାର ପ୍ରାରମ୍ଭିକ ଚିହ୍ନଟ ଏବଂ ବିଶେଷଜ୍ଞ ପରାମର୍ଶ",
          "ସୁଲଭ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ (USG) ଏବଂ ଅତ୍ୟାବଶ୍ୟକ ମାତୃ ସ୍ୱାସ୍ଥ୍ୟ ପରୀକ୍ଷଣ ରେଫରାଲ୍",
          "ଆଶା କର୍ମୀ, ଏଏନ୍ଏମ୍, ପିଏଚ୍‌ସି, ସିଏଚ୍‌ସି ଏବଂ ଜିଲ୍ଲା ଡାକ୍ତରଖାନା ମଧ୍ୟରେ ଉତ୍ତମ ସମନ୍ୱୟ",
          "ମାଆ ଓ ପରିବାର ପାଇଁ ପୁଷ୍ଟି, ରକ୍ତହୀନତା ନିୟନ୍ତ୍ରଣ ଏବଂ ବିପଦ ସଙ୍କେତ ସଚେତନତା",
          "ଦୁର୍ଗମ ଓ ଗ୍ରାମାଞ୍ଚଳରେ ସୁସଂଗଠିତ ପ୍ରସବୋତ୍ତର ଯତ୍ନ ଏବଂ ଶିଶୁ ଟିକାକରଣ ଟ୍ରାକିଂ",
        ],
      },
      vision: {
        title: "ଆମର ସଙ୍କଳ୍ପ",
        statement:
          "ବଲାଙ୍ଗୀରରେ ଏକ ସୁଦୃଢ଼, ସ୍ୱଚ୍ଛ ଏବଂ ଜ୍ଞାନକୌଶଳ-ଆଧାରିତ ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟସେବା ବ୍ୟବସ୍ଥା ଗଠନ କରିବା, ଯେଉଁଠାରେ ପ୍ରତ୍ୟେକ ମାଆ ସୁରକ୍ଷିତ ଗର୍ଭାବସ୍ଥା ଲାଭ କରିବେ, ପ୍ରତ୍ୟେକ ଜଟିଳତାର ସମୟୋଚିତ ସମାଧାନ ହେବ ଏବଂ ପ୍ରତ୍ୟେକ ନବଜାତ ଶିଶୁ ସୁସ୍ଥ ଜୀବନ ଆରମ୍ଭ କରିବ।",
        goalsTitle: "ଦୀର୍ଘକାଳୀନ ଲକ୍ଷ୍ୟ",
        goals: [
          "ସମସ୍ତ ବ୍ଲକ୍‌ରେ ମାତୃ ଓ ନବଜାତ ଶିଶୁଙ୍କ ସ୍ୱାସ୍ଥ୍ୟଗତ ବିପଦକୁ ହ୍ରାସ କରିବା",
          "ସମୟୋପଯୋଗୀ ପ୍ରାତିଷ୍ଠାନିକ ପ୍ରସବ ଏବଂ ଦକ୍ଷ ସ୍ୱାସ୍ଥ୍ୟସେବା ସହାୟତା ବୃଦ୍ଧି କରିବା",
          "ସ୍ୱାସ୍ଥ୍ୟକର୍ମୀ ଓ ପ୍ରଶାସକଙ୍କୁ ପ୍ରକୃତ ସମୟର ତଥ୍ୟ ମାଧ୍ୟମରେ ସଶକ୍ତ କରିବା",
          "ଦୁର୍ଗମ ଏବଂ ଅବହେଳିତ ଗ୍ରାମଗୁଡ଼ିକରେ ସ୍ୱାସ୍ଥ୍ୟସେବାର ବ୍ୟବଧାନ ଦୂର କରିବା",
          "ମାତୃ ସ୍ୱାସ୍ଥ୍ୟ ଯତ୍ନରେ ସାମୁଦାୟିକ ସହଭାଗିତା ଓ ପାରିବାରିକ ସଚେତନତା ବୃଦ୍ଧି କରିବା",
        ],
      },
      viewMore: "ବିସ୍ତୃତ ଦେଖନ୍ତୁ",
      viewLess: "କମ୍ ଦେଖନ୍ତୁ",
      gridItems: [
        { title: "ସାମୁଦାୟିକ ନେଟୱର୍କ", subtitle: "ଆଶା ଓ ଏଏନ୍ଏମ୍ ସମନ୍ୱୟ" },
        { title: "ଡିଜିଟାଲ୍ ରେଜିଷ୍ଟ୍ରି", subtitle: "ପ୍ରକୃତ ସମୟ ସ୍ୱାସ୍ଥ୍ୟ ଟ୍ରାକିଂ" },
        { title: "ସମୟୋଚିତ ପରୀକ୍ଷା", subtitle: "ANC ଓ ଅଲ୍ଟ୍ରାସାଉଣ୍ଡ ସୁବିଧା" },
        { title: "ସୁସ୍ଥ ଫଳାଫଳ", subtitle: "ସୁରକ୍ଷିତ ମାତୃତ୍ୱ ଓ ଶୈଶବ" },
      ],
      objectivesTitle: "କାର୍ଯ୍ୟକ୍ରମର ଲକ୍ଷ୍ୟ ଏବଂ ପ୍ରମୁଖ କ୍ଷେତ୍ର",
      objectivesSubtitle:
        "ବଲାଙ୍ଗୀର ଜିଲ୍ଲାରେ ଦୈନନ୍ଦିନ ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟ ନିରୀକ୍ଷଣର ମୂଳ ସ୍ତମ୍ଭ",
      objectives: [
        {
          title: "ଶତପ୍ରତିଶତ ପ୍ରସବପୂର୍ବ ଯତ୍ନ",
          description:
            "ପ୍ରାରମ୍ଭିକ ଗର୍ଭ ପଞ୍ଜୀକରଣ ଏବଂ ଆଇରନ୍, କ୍ୟାଲସିୟମ୍ ଓ ଚିକିତ୍ସା ପରୀକ୍ଷା ସହ ସମସ୍ତ ANC ପରିଦର୍ଶନ ସମ୍ପୂର୍ଣ୍ଣ କରିବା।",
        },
        {
          title: "ଉଚ୍ଚ-ବିପଦ ଗର୍ଭାବସ୍ଥା ନିରୀକ୍ଷଣ",
          description:
            "ଗୁରୁତର ରକ୍ତହୀନତା, ଉଚ୍ଚ ରକ୍ତଚାପ କିମ୍ବା ଅନ୍ୟ ଜଟିଳତାକୁ ପ୍ରାରମ୍ଭରୁ ଚିହ୍ନଟ କରି ତୁରନ୍ତ ବିଶେଷଜ୍ଞ ଚିକିତ୍ସା ଯୋଗାଇବା।",
        },
        {
          title: "ସମୟୋଚିତ ଡାଏଗ୍ନୋଷ୍ଟିକ୍ ଓ USG ରେଫରାଲ୍",
          description:
            "ନିକଟସ୍ଥ ସରକାରୀ ଓ ତାଲିକାଭୁକ୍ତ ଡାଏଗ୍ନୋଷ୍ଟିକ୍ କେନ୍ଦ୍ର ସହିତ ଯୋଡ଼ି ଅପେକ୍ଷା ସମୟ ଓ ଆର୍ଥିକ ବୋଝ ହ୍ରାସ କରିବା।",
        },
        {
          title: "ପ୍ରସବୋତ୍ତର ଓ ନବଜାତ ନିରୀକ୍ଷଣ",
          description:
            "ପ୍ରସବ ପରେ ମାଆଙ୍କ ଆରୋଗ୍ୟ, ସ୍ତନ୍ୟପାନ, ଶିଶୁର ବୃଦ୍ଧି ଏବଂ ନିୟମିତ ଟିକାକରଣର ସୁସଂଗଠିତ ଅନୁସରଣ କରିବା।",
        },
      ],
    },
    contact: {
      sectionTag: "ସରକାରୀ ଯୋଗାଯୋଗ",
      title: "ଯୋଗାଯୋଗ ଓ ଅନୁସନ୍ଧାନ",
      subtitle:
        "କାର୍ଯ୍ୟକ୍ରମ ସମ୍ବନ୍ଧୀୟ ସୂଚନା, ସହାୟତା କିମ୍ବା ସରକାରୀ ଅନୁସନ୍ଧାନ ପାଇଁ ଜିଲ୍ଲା ସ୍ୱାସ୍ଥ୍ୟ କାର୍ଯ୍ୟାଳୟ, ବଲାଙ୍ଗୀର ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
      notice:
        "ସୂଚନା: ଚୂଡ଼ାନ୍ତ ନିୟୋଜନ ପୂର୍ବରୁ ସମ୍ପୃକ୍ତ ବିଭାଗ ଦ୍ୱାରା ଅନୁମୋଦିତ ଯୋଗାଯୋଗ ନମ୍ବର, ଇମେଲ୍ ଏବଂ କାର୍ଯ୍ୟାଳୟ ବିବରଣୀ ଅଦ୍ୟତନ କରାଯାଇପାରେ।",
      cards: {
        addressTitle: "ସରକାରୀ କାର୍ଯ୍ୟାଳୟ ଠିକଣା",
        addressValue:
          "ଜିଲ୍ଲା ମୁଖ୍ୟ ଚିକିତ୍ସା ଓ ଜନସ୍ୱାସ୍ଥ୍ୟ ଅଧିକାରୀଙ୍କ କାର୍ଯ୍ୟାଳୟ (CDM & PHO), ଜିଲ୍ଲା ମୁଖ୍ୟ ଚିକିତ୍ସାଳୟ ପରିସର, ବଲାଙ୍ଗୀର, ଓଡ଼ିଶା – ୭୬୭୦୦୧",
        phoneTitle: "ଯୋଗାଯୋଗ ନମ୍ବର",
        phoneValue: "+91 6652-232245",
        phoneHours: "ସୋମବାର – ଶନିବାର, ପୂର୍ବାହ୍ନ ୧୦:୦୦ – ଅପରାହ୍ନ ୫:୦୦",
        emailTitle: "ସରକାରୀ ଇମେଲ୍",
        emailValue: "cdmo.balangir@odisha.gov.in",
        emailSub: "ସରକାରୀ ପତ୍ରାଚାର ଓ ଅନୁସନ୍ଧାନ ପାଇଁ",
        helplineTitle: "ସ୍ୱାସ୍ଥ୍ୟ ହେଲ୍ପଲାଇନ୍",
        helplineValue: "104 / 108",
        helplineSub: "୨୪×୭ ରାଜ୍ୟ ସ୍ୱାସ୍ଥ୍ୟ ଓ ଜରୁରୀକାଳୀନ ସହାୟତା",
      },
      mapTitle: "କାର୍ଯ୍ୟାଳୟ ଅବସ୍ଥାନ ମାନଚିତ୍ର",
      mapSubtitle: "ଜିଲ୍ଲା ମୁଖ୍ୟ ଚିକିତ୍ସାଳୟ ପରିସର, ବଲାଙ୍ଗୀର, ଓଡ଼ିଶା",
      openInMaps: "ଗୁଗୁଲ୍ ମ୍ୟାପ୍‌ରେ ଖୋଲନ୍ତୁ",
      form: {
        title: "ଅନୁସନ୍ଧାନ ଦାଖଲ କରନ୍ତୁ",
        subtitle:
          "ନିମ୍ନରେ ଆପଣଙ୍କ ବିବରଣୀ ପୂରଣ କରନ୍ତୁ, ଆମର କାର୍ଯ୍ୟକ୍ରମ ସହାୟତା ଦଳ ଆପଣଙ୍କ ଅନୁସନ୍ଧାନର ସମୀକ୍ଷା କରିବେ।",
        nameLabel: "ସମ୍ପୂର୍ଣ୍ଣ ନାମ",
        namePlaceholder: "ଆପଣଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ନାମ ଲେଖନ୍ତୁ",
        mobileLabel: "ମୋବାଇଲ୍ ନମ୍ବର",
        mobilePlaceholder: "୧୦-ଅଙ୍କ ବିଶିଷ୍ଟ ମୋବାଇଲ୍ ନମ୍ବର ଲେଖନ୍ତୁ",
        emailLabel: "ଇମେଲ୍ ଠିକଣା",
        emailPlaceholder: "ଆପଣଙ୍କ ଇମେଲ୍ ଠିକଣା ଲେଖନ୍ତୁ",
        subjectLabel: "ବିଷୟ",
        subjectPlaceholder: "ଅନୁସନ୍ଧାନର ବିଷୟ ଲେଖନ୍ତୁ",
        messageLabel: "ବାର୍ତ୍ତା",
        messagePlaceholder: "ଆପଣଙ୍କ ଅନୁସନ୍ଧାନ କିମ୍ବା ମତାମତ ବିସ୍ତୃତ ଭାବରେ ଲେଖନ୍ତୁ...",
        submitBtn: "ଅନୁସନ୍ଧାନ ଦାଖଲ କରନ୍ତୁ",
        resetBtn: "ଫର୍ମ ସଫା କରନ୍ତୁ",
        requiredNote: "* ଚିହ୍ନିତ ସମସ୍ତ କ୍ଷେତ୍ର ପୂରଣ କରିବା ବାଧ୍ୟତାମୂଳକ।",
        errors: {
          nameRequired: "ଦୟାକରି ଆପଣଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ନାମ ଲେଖନ୍ତୁ।",
          nameMin: "ନାମ ଅତି କମରେ ୨ଟି ଅକ୍ଷରର ହେବା ଆବଶ୍ୟକ।",
          mobileRequired: "ଦୟାକରି ଆପଣଙ୍କ ୧୦-ଅଙ୍କ ବିଶିଷ୍ଟ ମୋବାଇଲ୍ ନମ୍ବର ଲେଖନ୍ତୁ।",
          mobileInvalid: "ଦୟାକରି ଏକ ବୈଧ ୧୦-ଅଙ୍କ ବିଶିଷ୍ଟ ଭାରତୀୟ ମୋବାଇଲ୍ ନମ୍ବର ଲେଖନ୍ତୁ।",
          emailRequired: "ଦୟାକରି ଆପଣଙ୍କ ଇମେଲ୍ ଠିକଣା ଲେଖନ୍ତୁ।",
          emailInvalid: "ଦୟାକରି ଏକ ବୈଧ ଇମେଲ୍ ଠିକଣା ଲେଖନ୍ତୁ।",
          subjectRequired: "ଦୟାକରି ଅନୁସନ୍ଧାନର ବିଷୟ ଲେଖନ୍ତୁ।",
          messageRequired: "ଦୟାକରି ଆପଣଙ୍କ ବାର୍ତ୍ତା ଲେଖନ୍ତୁ।",
          messageMin: "ବାର୍ତ୍ତା ଅତି କମରେ ୧୦ଟି ଅକ୍ଷରର ହେବା ଆବଶ୍ୟକ।",
        },
        success: {
          title: "ଅନୁସନ୍ଧାନ ସଫଳତାର ସହ ଦାଖଲ ହୋଇଛି",
          body: "ବଲାଙ୍ଗୀର MIHMS ସହିତ ଯୋଗାଯୋଗ କରିଥିବାରୁ ଧନ୍ୟବାଦ। ଆପଣଙ୍କ ଅନୁସନ୍ଧାନ ପଞ୍ଜୀକୃତ ହୋଇଛି ଏବଂ ସମ୍ପୃକ୍ତ ଜିଲ୍ଲା ସ୍ୱାସ୍ଥ୍ୟ ସେଲ୍ ଦ୍ୱାରା ସମୀକ୍ଷା କରାଯିବ।",
          referenceLabel: "ରେଫରେନ୍ସ ନମ୍ବର",
          newEnquiryBtn: "ଅନ୍ୟ ଏକ ଅନୁସନ୍ଧାନ ଦାଖଲ କରନ୍ତୁ",
        },
      },
    },
    appDownloadStrip: {
      title: "ଏବେ ଆପ୍ ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
      subtitle:
        "ଆମର ଅଫିସିଆଲ୍ ମୋବାଇଲ୍ ଆପ୍ଲିକେସନ୍ ସହ ସମସ୍ତ ସେବାଗୁଡ଼ିକ ସର୍ବଦା, ସର୍ବତ୍ର ପ୍ରାପ୍ତ କରନ୍ତୁ",
      getItOn: "ଉପଲବ୍ଧ ଅଛି",
      googlePlay: "ଗୁଗଲ୍ ପ୍ଲେ",
      ariaLabel: "ଗୁଗଲ୍ ପ୍ଲେ ଷ୍ଟୋରରୁ ବଲାଙ୍ଗୀର MIHMS ଆପ୍ ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
    },
  footer: {
      govtLabel: "ଓଡ଼ିଶା ସରକାର",
      programmeName: "ବଲାଙ୍ଗୀର MIHMS",
      description:
        "ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟ ନିରୀକ୍ଷଣ ପ୍ରଣାଳୀ (MIHMS) ହେଉଛି ଜିଲ୍ଲା ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶାସନ, ବଲାଙ୍ଗୀର, ଓଡ଼ିଶାର ଏକ ଜନସ୍ୱାସ୍ଥ୍ୟ ଅଭିଯାନ, ଯାହା ସୁରକ୍ଷିତ ମାତୃତ୍ୱ ଏବଂ ସୁସ୍ଥ ନବଜାତ ଶିଶୁଙ୍କ ପାଇଁ ସମର୍ପିତ।",
      helplineLabel: "ରାଜ୍ୟ ସ୍ୱାସ୍ଥ୍ୟ ହେଲ୍ପଲାଇନ୍",
      quickLinksTitle: "ଦ୍ରୁତ ଲିଙ୍କ୍",
      essentialsTitle: "ପୋର୍ଟାଲ୍ ସୂଚନା",
      contactTitle: "ସରକାରୀ ଯୋଗାଯୋଗ",
      privacyPolicy: "ଗୋପନୀୟତା ନୀତି",
      sitemap: "ସାଇଟ୍‌ମ୍ୟାପ୍",
      copyright:
        "ବିଷୟବସ୍ତୁ ଜିଲ୍ଲା ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶାସନ, ବଲାଙ୍ଗୀର, ଓଡ଼ିଶା ସରକାରଙ୍କ ଦ୍ୱାରା ପରିଚାଳିତ ଓ ଅଦ୍ୟତନ କରାଯାଇଛି।",
      attribution:
        "ବଲାଙ୍ଗୀର MIHMS • ଜନସୂଚନା ପୋର୍ଟାଲ୍ • ସୁଗମତା ପାଇଁ ପ୍ରସ୍ତୁତ (English, ଓଡ଼ିଆ, हिंदी)",
      backToTop: "ଉପରକୁ ଯାଆନ୍ତୁ",
    },
    sitemapPage: {
      breadcrumbHome: "ମୁଖ୍ୟ ପୃଷ୍ଠା",
      title: "ୱେବସାଇଟ୍ ସାଇଟ୍‌ମ୍ୟାପ୍",
      subtitle:
        "ବଲାଙ୍ଗୀର MIHMS ପୋର୍ଟାଲ୍‌ରେ ଥିବା ସମସ୍ତ ବିଭାଗ, ସୂଚନା ପୃଷ୍ଠା, ଭାଷା ବିକଳ୍ପ ଏବଂ ସୁଗମତା ସୁବିଧାର ସଂଗଠିତ ତାଲିକା।",
      sectionsHeading: "ପୋର୍ଟାଲ୍ ସଂରଚନା ଓ ବିଭାଗ",
      accessibilityHeading: "ସୁଗମତା ଓ ପରିଦର୍ଶକ ନିୟନ୍ତ୍ରଣ",
      languagesHeading: "ଉପଲବ୍ଧ ଭାଷା",
      backToHome: "ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ",
      groups: [
        {
          title: "ମୁଖ୍ୟ ପୃଷ୍ଠାର ବିଭାଗ",
          description: "ମୁଖ୍ୟ ପୋର୍ଟାଲ୍‌ରେ ଥିବା ପ୍ରମୁଖ ଜନସୂଚନା ବିଭାଗ।",
          links: [
            {
              label: "ମୁଖ୍ୟ ପୃଷ୍ଠା / ହିରୋ ବ୍ୟାନର୍",
              href: "/#home",
              detail:
                "କାର୍ଯ୍ୟକ୍ରମ ପରିଚୟ, ଟ୍ୟାଗ୍‌ଲାଇନ୍, ସଂକ୍ଷିପ୍ତ ପରିଚୟ ଏବଂ ମୁଖ୍ୟ କାର୍ଯ୍ୟାନୁଷ୍ଠାନ ବଟନ୍।",
            },
            {
              label: "ନେତୃତ୍ୱ ଓ ମାର୍ଗଦର୍ଶନ",
              href: "/#leadership",
              detail:
                "ଜାତୀୟ, ରାଜ୍ୟ ଏବଂ ବଲାଙ୍ଗୀର ଜିଲ୍ଲା ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶାସନର ନେତୃତ୍ୱ।",
            },
            {
              label: "ବଲାଙ୍ଗୀର MIHMS ବିଷୟରେ",
              href: "/#about",
              detail:
                "କାର୍ଯ୍ୟକ୍ରମର ପୃଷ୍ଠଭୂମି, ଜିଲ୍ଲା ପରିଚୟ ଏବଂ ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟସେବାର ପ୍ରମୁଖ ବୈଶିଷ୍ଟ୍ୟ।",
            },
            {
              label: "ଉଦ୍ଦେଶ୍ୟ ଓ ସଙ୍କଳ୍ପ",
              href: "/#purpose-vision",
              detail:
                "ଅନୁମୋଦିତ ଉଦ୍ଦେଶ୍ୟ ଓ ସଙ୍କଳ୍ପ ବିବୃତ୍ତି, ଦୀର୍ଘକାଳୀନ ଲକ୍ଷ୍ୟ ଏବଂ ପ୍ରମୁଖ ଧ୍ୟାନ କ୍ଷେତ୍ର।",
            },
            {
              label: "ଯୋଗାଯୋଗ ଓ ଅନୁସନ୍ଧାନ",
              href: "/#contact",
              detail:
                "ସରକାରୀ କାର୍ଯ୍ୟାଳୟ ଠିକଣା, ଫୋନ୍ ନମ୍ବର, ଇମେଲ୍, ମାନଚିତ୍ର ଏବଂ ଅନୁସନ୍ଧାନ ଫର୍ମ।",
            },
          ],
        },
        {
          title: "ପୋର୍ଟାଲ୍ ପୃଷ୍ଠା ଓ ନୀତି",
          description: "ସମସ୍ତ ସ୍କ୍ରିନ୍‌ରୁ ଉପଲବ୍ଧ ସନ୍ଦର୍ଭ ପୃଷ୍ଠା।",
          links: [
            {
              label: "ସାଇଟ୍‌ମ୍ୟାପ୍",
              href: "/sitemap",
              detail: "ୱେବସାଇଟ୍‌ର ସମସ୍ତ ବିଭାଗ ଓ ନେଭିଗେସନ୍ ବିକଳ୍ପର ସଂଗଠିତ ତାଲିକା।",
            },
            {
              label: "ଗୋପନୀୟତା ନୀତି",
              href: "/privacy-policy",
              detail: "ପରିଦର୍ଶକ ଗୋପନୀୟତା, ଅନୁସନ୍ଧାନ ତଥ୍ୟ ଏବଂ ପୋର୍ଟାଲ୍ ବ୍ୟବହାର ସମ୍ବନ୍ଧୀୟ ସୂଚନା।",
            },
          ],
        },
      ],
      accessibilityItems: [
        "କିବୋର୍ଡ୍ Tab ମାଧ୍ୟମରେ ସିଧାସଳଖ 'ମୁଖ୍ୟ ବିଷୟବସ୍ତୁକୁ ଯାଆନ୍ତୁ' ଲିଙ୍କ୍ ଉପଲବ୍ଧ",
        "ଲେଆଉଟ୍ ନ ବିଗାଡ଼ି ଅକ୍ଷର ଆକାର ବଢ଼ାଇବା (କ+), କମାଇବା (କ−) ଏବଂ ରିସେଟ୍ (କ) ସୁବିଧା",
        "ମେନୁ, ଲିଙ୍କ୍ ଏବଂ ଫର୍ମ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ କିବୋର୍ଡ୍ ନେଭିଗେସନ୍ ଏବଂ ସ୍ପଷ୍ଟ ଫୋକସ୍ ସୂଚକ",
        "ଇଂରାଜୀ, ଓଡ଼ିଆ ଏବଂ ହିନ୍ଦୀ — ତିନୋଟି ଭାଷାରେ ସମ୍ପୂର୍ଣ୍ଣ ସହାୟତା",
      ],
    },
    privacyPage: {
      breadcrumbHome: "ମୁଖ୍ୟ ପୃଷ୍ଠା",
      title: "ଗୋପନୀୟତା ନୀତି",
      subtitle:
        "ବଲାଙ୍ଗୀର MIHMS ଜନସୂଚନା ୱେବସାଇଟ୍ ବ୍ୟବହାର କରୁଥିବା ପରିଦର୍ଶକଙ୍କ ପାଇଁ ଗୋପନୀୟତା ନିର୍ଦ୍ଦେଶାବଳୀ।",
      lastUpdated: "ସ୍ଥିତି: ଚୂଡ଼ାନ୍ତ ବିଭାଗୀୟ ଅନୁମୋଦନ ଅପେକ୍ଷାରେ",
      backToHome: "ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ",
      sections: [
        {
          heading: "୧. ସାଧାରଣ ସୂଚନା",
          body: "ବଲାଙ୍ଗୀର MIHMS (ମାତୃ ଓ ଶିଶୁ ସ୍ୱାସ୍ଥ୍ୟ ନିରୀକ୍ଷଣ ପ୍ରଣାଳୀ) ର ଏହି ଜନସୂଚନା ପୋର୍ଟାଲ୍ ଜିଲ୍ଲା ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶାସନ, ବଲାଙ୍ଗୀର, ଓଡ଼ିଶା ସରକାରଙ୍କ ଅଧୀନରେ ଜନସଚେତନତା ଓ ସରକାରୀ ଯୋଗାଯୋଗ ପାଇଁ ପରିଚାଳିତ। ଏହି ୱେବସାଇଟ୍ ପରିଦର୍ଶନ କରିବା ଦ୍ୱାରା କୌଣସି ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ସ୍ୱୟଂଚାଳିତ ଭାବେ ସଂଗ୍ରହ ହୁଏ ନାହିଁ।",
        },
        {
          heading: "୨. ଅନୁସନ୍ଧାନ ଫର୍ମ ତଥ୍ୟ",
          body: "ଯେତେବେଳେ ପରିଦର୍ଶକ ସ୍ୱେଚ୍ଛାରେ ଯୋଗାଯୋଗ ବିଭାଗ ମାଧ୍ୟମରେ ଅନୁସନ୍ଧାନ (ନାମ, ମୋବାଇଲ୍ ନମ୍ବର, ଇମେଲ୍, ବିଷୟ ଏବଂ ବାର୍ତ୍ତା) ଦାଖଲ କରନ୍ତି, ସେହି ତଥ୍ୟ କେବଳ ଆପଣଙ୍କ ପ୍ରଶ୍ନ କିମ୍ବା ମତାମତର ସମୀକ୍ଷା ଓ ଉତ୍ତର ଦେବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।",
        },
        {
          heading: "୩. ପରିଦର୍ଶକ ପସନ୍ଦ ଓ ସୁଗମତା ସେଟିଂ",
          body: "ଆପଣ ବାଛିଥିବା ଭାଷା (ଇଂରାଜୀ, ଓଡ଼ିଆ କିମ୍ବା ହିନ୍ଦୀ) ଏବଂ ଅକ୍ଷର ଆକାର ସେଟିଂ କେବଳ ଆପଣଙ୍କ ବ୍ରାଉଜର୍‌ରେ ସଂରକ୍ଷିତ ରହେ, ଯାହାଦ୍ୱାରା ପ୍ରତ୍ୟେକ ପରିଦର୍ଶନରେ ସୁଗମ ଅନୁଭୂତି ମିଳିପାରିବ।",
        },
        {
          heading: "୪. ଯୋଗାଯୋଗ",
          body: "ଏହି ପୋର୍ଟାଲ୍ କିମ୍ବା ଏହାର ବିଷୟବସ୍ତୁ ସମ୍ବନ୍ଧୀୟ କୌଣସି ପ୍ରଶ୍ନ ପାଇଁ ଦୟାକରି ମୁଖ୍ୟ ପୃଷ୍ଠାର ଯୋଗାଯୋଗ ବିଭାଗ ମାଧ୍ୟମରେ CDM & PHO କାର୍ଯ୍ୟାଳୟ, ବଲାଙ୍ଗୀର ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
        },
      ],
    },
  },

  hi: {
    meta: {
      siteTitle: "बलांगीर MIHMS | मातृ एवं शिशु स्वास्थ्य निगरानी प्रणाली",
      siteDescription:
        "बलांगीर MIHMS — मातृ एवं शिशु स्वास्थ्य निगरानी प्रणाली, जिला स्वास्थ्य प्रशासन, बलांगीर, ओडिशा सरकार का आधिकारिक जन सूचना पोर्टल।",
      languageName: "Hindi",
      languageNative: "हिंदी",
    },
    topBar: {
      govtOfOdisha: "ओडिशा सरकार",
      districtLabel: "जिला प्रशासन, बलांगीर",
      skipToMain: "मुख्य सामग्री पर जाएँ",
      sitemap: "साइटमैप",
      zoomOutLabel: "टेक्स्ट का आकार घटाएँ (ज़ूम आउट)",
      zoomResetLabel: "डिफ़ॉल्ट टेक्स्ट आकार पर लौटें",
      zoomInLabel: "टेक्स्ट का आकार बढ़ाएँ (ज़ूम इन)",
      zoomOutSymbol: "अ-",
      zoomResetSymbol: "अ",
      zoomInSymbol: "अ+",
      selectLanguage: "भाषा चुनें",
    },
    nav: {
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      purposeVision: "उद्देश्य और दृष्टि",
      contact: "संपर्क",
      sitemap: "साइटमैप",
      openMenu: "मेनू खोलें",
      closeMenu: "मेनू बंद करें",
      brandName: "बलांगीर MIHMS",
      brandSubtitle: "मातृ एवं शिशु स्वास्थ्य निगरानी प्रणाली",
      departmentLabel: "स्वास्थ्य एवं परिवार कल्याण विभाग, ओडिशा",
    },
    hero: {
      badge: "जिला स्वास्थ्य पहल • बलांगीर, ओडिशा",
      title: "बलांगीर MIHMS",
      fullName: "मातृ एवं शिशु स्वास्थ्य निगरानी प्रणाली",
      tagline:
        "बलांगीर जिले में सुरक्षित मातृत्व और स्वस्थ शिशु जीवन की शुरुआत को सशक्त बनाना।",
      intro:
        "बलांगीर MIHMS, जिला स्वास्थ्य प्रशासन, बलांगीर के अंतर्गत एक समर्पित जन स्वास्थ्य निगरानी पहल है। यह गर्भवती महिलाओं, आशा/एएनएम स्वास्थ्य कार्यकर्ताओं, स्वास्थ्य केंद्रों और डायग्नोस्टिक केंद्रों को जोड़कर समय पर प्रसवपूर्व देखभाल, उच्च-जोखिम गर्भावस्था की शीघ्र पहचान और सुव्यवस्थित प्रसवोत्तर सहायता सुनिश्चित करती है।",
      primaryCta: "कार्यक्रम के बारे में जानें",
      secondaryCta: "संपर्क एवं पूछताछ",
      slides: [
        {
          imageAlt:
            "ओडिशा के बलांगीर स्थित प्राथमिक स्वास्थ्य केंद्र में सामुदायिक स्वास्थ्य कार्यकर्ता डिजिटल टैबलेट के साथ गर्भवती महिला को परामर्श देती हुई",
          captionTitle: "अंतिम छोर तक डिजिटल स्वास्थ्य देखभाल",
          captionSub:
            "बलांगीर के ग्रामीण और शहरी क्षेत्रों में माताओं एवं नवजात शिशुओं का समन्वित सहयोग",
        },
        {
          imageAlt:
            "बलांगीर जिला क्लिनिक में महिला डॉक्टर गर्भवती महिला की प्रसवपूर्व अल्ट्रासाउंड व स्वास्थ्य जाँच करती हुई",
          captionTitle: "समयबद्ध प्रसवपूर्व व अल्ट्रासाउंड देखभाल",
          captionSub:
            "समन्वित डायग्नोस्टिक रेफरल और उच्च-जोखिम गर्भावस्था की शीघ्र पहचान",
        },
        {
          imageAlt:
            "ओडिशा के ग्रामीण क्षेत्र में स्वास्थ्य कार्यकर्ता मातृ पोषण व जागरूकता शिविर में गर्भवती महिलाओं का मार्गदर्शन करती हुई",
          captionTitle: "सामुदायिक जागरूकता एवं जनसंपर्क",
          captionSub:
            "नियमित ग्राम स्वास्थ्य एवं पोषण दिवस के माध्यम से परिवारों का सशक्तिकरण",
        },
        {
          imageAlt:
            "ओडिशा के जिला अस्पताल मातृत्व वार्ड में नर्स के साथ अपने स्वस्थ नवजात शिशु को गोद में लिए मुस्कुराती माँ",
          captionTitle: "सुरक्षित प्रसव एवं स्वस्थ शुरुआत",
          captionSub:
            "संस्थागत प्रसव सहायता और सुव्यवस्थित प्रसवोत्तर नवजात निगरानी",
        },
      ],
      carouselControls: {
        previousSlide: "पिछली स्लाइड",
        nextSlide: "अगली स्लाइड",
        pauseAutoplay: "स्लाइडशो रोकें",
        resumeAutoplay: "स्लाइडशो चलाएँ",
        goToSlide: "स्लाइड पर जाएँ",
      },
      highlights: [
        { value: "14 ब्लॉक", label: "जिला-स्तरीय कवरेज" },
        { value: "ANC एवं PNC", label: "संपूर्ण स्वास्थ्य ट्रैकिंग" },
        { value: "उच्च-जोखिम", label: "शीघ्र पहचान व निगरानी" },
        { value: "3 भाषाएँ", label: "ओड़िया, हिंदी और अंग्रेज़ी" },
      ],
    },
    leadership: {
      sectionTag: "संरक्षण एवं प्रशासन",
      title: "नेतृत्व एवं मार्गदर्शन",
      subtitle:
        "सुरक्षित मातृत्व हेतु राष्ट्रीय, राज्य एवं बलांगीर जिला स्वास्थ्य नेतृत्व का मार्गदर्शन",
      stateGroupLabel: "राष्ट्रीय एवं राज्य नेतृत्व",
      districtGroupLabel: "जिला प्रशासन एवं स्वास्थ्य नेतृत्व — बलांगीर",
    },
    about: {
      sectionTag: "कार्यक्रम परिचय",
      title: "बलांगीर MIHMS के बारे में",
      subtitle:
        "समन्वित डिजिटल निगरानी के माध्यम से मातृ एवं शिशु स्वास्थ्य सेवाओं का सुदृढ़ीकरण",
      paragraphs: [
        "बलांगीर मातृ एवं शिशु स्वास्थ्य निगरानी प्रणाली (बलांगीर MIHMS) एक जिला-स्तरीय जन स्वास्थ्य कार्यक्रम है, जिसका उद्देश्य यह सुनिश्चित करना है कि बलांगीर की प्रत्येक गर्भवती महिला और नवजात शिशु को पूर्ण, समयबद्ध और सुलभ स्वास्थ्य देखभाल मिले। आशा व एएनएम कार्यकर्ताओं, सरकारी स्वास्थ्य संस्थानों और सूचीबद्ध डायग्नोस्टिक केंद्रों को एक साझा ढाँचे से जोड़कर यह प्रणाली प्रसवपूर्व जाँच, आवश्यक परीक्षण और नियमित फॉलो-अप को सुगम बनाती है।",
        "विशेष रूप से बलांगीर के ग्रामीण, जनजातीय और दुर्गम क्षेत्रों में उच्च-जोखिम गर्भावस्था की प्रारंभिक पहचान और निरंतर निगरानी को प्राथमिकता दी जाती है। डिजिटल ट्रैकिंग, समय पर सूचना और सामुदायिक सहभागिता के माध्यम से बलांगीर MIHMS सुरक्षित गर्भावस्था, संस्थागत प्रसव और हर शिशु के स्वस्थ भविष्य की दिशा में कार्यरत है।",
      ],
      imageAlt:
        "बलांगीर के जिला क्लिनिक में महिला डॉक्टर द्वारा प्रसवोत्तर जाँच के दौरान अपने स्वस्थ नवजात शिशु को गोद में लिए प्रसन्न माँ",
      imageBadgeTitle: "सुरक्षित मातृत्व एवं नवजात देखभाल",
      imageBadgeSub: "समन्वित जिला स्वास्थ्य सहायता",
      highlightsTitle: "प्रमुख कार्यक्रम विशेषताएँ",
      cards: [
        {
          title: "सामुदायिक",
          subtitle: "स्वास्थ्य कार्यकर्ता",
          description:
            "आशा व एएनएम कार्यकर्ताओं को नियमित गृह भ्रमण और सुव्यवस्थित मार्गदर्शन से सशक्त बनाता है।",
        },
        {
          title: "डायग्नोस्टिक",
          subtitle: "अल्ट्रासाउंड व जाँच",
          description:
            "आवश्यक प्रसवपूर्व परीक्षणों, अल्ट्रासाउंड स्कैन और लैब जाँच तक सुलभ पहुँच सुनिश्चित करता है।",
        },
        {
          title: "डिजिटल",
          subtitle: "ट्रैकिंग प्रणाली",
          description:
            "वास्तविक समय में निगरानी के लिए मातृ एवं शिशु स्वास्थ्य रिकॉर्ड को सुरक्षित रखता है।",
        },
        {
          title: "सुव्यवस्थित",
          subtitle: "उच्च-जोखिम फॉलो-अप",
          description:
            "उच्च-जोखिम गर्भावस्था के लिए प्राथमिकता रेफरल और समयबद्ध चिकित्सा हस्तक्षेप सुनिश्चित करता है।",
        },
      ],
    },
    purposeVision: {
      sectionTag: "उद्देश्य और दृष्टि",
      title: "उद्देश्य और दृष्टि",
      headlinePrefix: "बलांगीर में",
      headlineAccent: "मातृ एवं शिशु",
      headlineSuffix: "स्वास्थ्य सेवाओं का रूपांतरण",
      subtitle: "बलांगीर में मातृ एवं शिशु स्वास्थ्य सेवाओं का रूपांतरण",
      purpose: {
        title: "हमारा उद्देश्य",
        statement:
          "डिजिटल निगरानी, स्वास्थ्य कार्यकर्ताओं के समन्वय और सक्रिय सामुदायिक सहयोग के माध्यम से बलांगीर जिले की प्रत्येक गर्भवती महिला व शिशु को समयबद्ध, सुलभ और गुणवत्तापूर्ण प्रसवपूर्व, प्रसवकालीन एवं प्रसवोत्तर स्वास्थ्य सेवाएँ उपलब्ध कराकर मातृ एवं शिशु स्वास्थ्य की रक्षा करना।",
        focusTitle: "प्रमुख केंद्रित क्षेत्र",
        focusAreas: [
          "गर्भावस्था का शीघ्र पंजीकरण और निर्धारित प्रसवपूर्व जाँच (ANC)",
          "उच्च-जोखिम गर्भावस्था की प्रारंभिक पहचान, चिन्हांकन और विशेषज्ञ फॉलो-अप",
          "सुलभ अल्ट्रासाउंड (USG) और आवश्यक मातृ डायग्नोस्टिक रेफरल",
          "आशा, एएनएम, पीएचसी, सीएचसी और जिला अस्पताल के बीच बेहतर समन्वय",
          "माताओं और परिवारों के लिए पोषण, एनीमिया प्रबंधन व खतरे के संकेतों की जागरूकता",
          "ग्रामीण और दुर्गम क्षेत्रों में सुव्यवस्थित प्रसवोत्तर देखभाल व शिशु टीकाकरण ट्रैकिंग",
        ],
      },
      vision: {
        title: "हमारी दृष्टि",
        statement:
          "बलांगीर में एक सशक्त, पारदर्शी और तकनीक-सक्षम मातृ एवं शिशु स्वास्थ्य पारिस्थितिकी तंत्र का निर्माण करना, जहाँ प्रत्येक माँ को सुरक्षित गर्भावस्था का अनुभव हो, हर जटिलता का समय पर उपचार हो और हर नवजात को स्वस्थ जीवन की शुरुआत मिले।",
        goalsTitle: "दीर्घकालिक लक्ष्य",
        goals: [
          "सभी ब्लॉकों में मातृ एवं नवजात स्वास्थ्य जोखिमों में उल्लेखनीय कमी लाना",
          "समयबद्ध संस्थागत प्रसव और कुशल प्रसव सहायता को बढ़ावा देना",
          "स्वास्थ्य कर्मियों व प्रशासकों को वास्तविक समय के डेटा से सशक्त बनाना",
          "दुर्गम एवं वंचित ग्रामों में स्वास्थ्य सेवाओं की पहुँच के अंतर को पाटना",
          "मातृ स्वास्थ्य देखभाल में सामुदायिक भागीदारी व पारिवारिक जागरूकता को प्रोत्साहित करना",
        ],
      },
      viewMore: "विवरण देखें",
      viewLess: "विवरण छिपाएँ",
      gridItems: [
        { title: "फ्रंटलाइन नेटवर्क", subtitle: "आशा एवं एएनएम समन्वय" },
        { title: "डिजिटल रजिस्ट्री", subtitle: "रियल-टाइम स्वास्थ्य ट्रैकिंग" },
        { title: "समयबद्ध जाँच", subtitle: "ANC व अल्ट्रासाउंड सुविधा" },
        { title: "स्वस्थ परिणाम", subtitle: "सुरक्षित मातृत्व एवं शिशु जीवन" },
      ],
      objectivesTitle: "कार्यक्रम के लक्ष्य एवं प्रमुख क्षेत्र",
      objectivesSubtitle:
        "बलांगीर जिले में दैनिक मातृ एवं शिशु स्वास्थ्य निगरानी के प्रमुख स्तंभ",
      objectives: [
        {
          title: "100% प्रसवपूर्व देखभाल कवरेज",
          description:
            "शीघ्र गर्भ पंजीकरण तथा आयरन, कैल्शियम और क्लिनिकल जाँच के साथ सभी अनुशंसित ANC विज़िट पूर्ण करना।",
        },
        {
          title: "उच्च-जोखिम गर्भावस्था निगरानी",
          description:
            "गंभीर एनीमिया, उच्च रक्तचाप या अन्य जटिलताओं की समय रहते पहचान कर त्वरित विशेषज्ञ उपचार सुनिश्चित करना।",
        },
        {
          title: "समयबद्ध डायग्नोस्टिक व USG रेफरल",
          description:
            "निकटवर्ती सरकारी व सूचीबद्ध डायग्नोस्टिक केंद्रों से जोड़कर प्रतीक्षा समय और आर्थिक बोझ को कम करना।",
        },
        {
          title: "प्रसवोत्तर एवं नवजात निगरानी",
          description:
            "प्रसव के बाद माँ के स्वास्थ्य लाभ, स्तनपान, शिशु विकास और नियमित टीकाकरण की निरंतर निगरानी करना।",
        },
      ],
    },
    contact: {
      sectionTag: "आधिकारिक संपर्क",
      title: "संपर्क एवं पूछताछ",
      subtitle:
        "कार्यक्रम संबंधी जानकारी, सहायता या आधिकारिक पूछताछ के लिए जिला स्वास्थ्य कार्यालय, बलांगीर से संपर्क करें।",
      notice:
        "नोट: अंतिम परिनियोजन से पूर्व संबंधित विभाग द्वारा स्वीकृत संपर्क नंबर, ईमेल और कार्यालय विवरण अद्यतन किए जा सकते हैं।",
      cards: {
        addressTitle: "आधिकारिक कार्यालय पता",
        addressValue:
          "मुख्य जिला चिकित्सा एवं जन स्वास्थ्य अधिकारी कार्यालय (CDM & PHO), जिला मुख्यालय अस्पताल परिसर, बलांगीर, ओडिशा – 767001",
        phoneTitle: "संपर्क नंबर",
        phoneValue: "+91 6652-232245",
        phoneHours: "सोमवार – शनिवार, प्रातः 10:00 – सायं 5:00",
        emailTitle: "आधिकारिक ईमेल",
        emailValue: "cdmo.balangir@odisha.gov.in",
        emailSub: "आधिकारिक पत्राचार एवं पूछताछ हेतु",
        helplineTitle: "स्वास्थ्य हेल्पलाइन",
        helplineValue: "104 / 108",
        helplineSub: "24×7 राज्य स्वास्थ्य एवं आपातकालीन सहायता",
      },
      mapTitle: "कार्यालय स्थान मानचित्र",
      mapSubtitle: "जिला मुख्यालय अस्पताल परिसर, बलांगीर, ओडिशा",
      openInMaps: "गूगल मैप्स में खोलें",
      form: {
        title: "पूछताछ दर्ज करें",
        subtitle:
          "नीचे अपना विवरण भरें, हमारी कार्यक्रम सहायता टीम आपकी पूछताछ की समीक्षा करेगी।",
        nameLabel: "पूरा नाम",
        namePlaceholder: "अपना पूरा नाम दर्ज करें",
        mobileLabel: "मोबाइल नंबर",
        mobilePlaceholder: "10 अंकों का मोबाइल नंबर दर्ज करें",
        emailLabel: "ईमेल पता",
        emailPlaceholder: "अपना ईमेल पता दर्ज करें",
        subjectLabel: "विषय",
        subjectPlaceholder: "पूछताछ का विषय दर्ज करें",
        messageLabel: "संदेश",
        messagePlaceholder: "अपनी पूछताछ या प्रतिक्रिया विस्तार से लिखें...",
        submitBtn: "पूछताछ सबमिट करें",
        resetBtn: "फ़ॉर्म साफ़ करें",
        requiredNote: "* चिह्नित सभी फ़ील्ड भरना अनिवार्य है।",
        errors: {
          nameRequired: "कृपया अपना पूरा नाम दर्ज करें।",
          nameMin: "नाम कम से कम 2 अक्षरों का होना चाहिए।",
          mobileRequired: "कृपया अपना 10 अंकों का मोबाइल नंबर दर्ज करें।",
          mobileInvalid: "कृपया एक मान्य 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें।",
          emailRequired: "कृपया अपना ईमेल पता दर्ज करें।",
          emailInvalid: "कृपया एक मान्य ईमेल पता दर्ज करें।",
          subjectRequired: "कृपया अपनी पूछताछ का विषय दर्ज करें।",
          messageRequired: "कृपया अपना संदेश दर्ज करें।",
          messageMin: "संदेश कम से कम 10 अक्षरों का होना चाहिए।",
        },
        success: {
          title: "पूछताछ सफलतापूर्वक सबमिट हो गई",
          body: "बलांगीर MIHMS से संपर्क करने के लिए धन्यवाद। आपकी पूछताछ दर्ज कर ली गई है और संबंधित जिला स्वास्थ्य प्रकोष्ठ द्वारा इसकी समीक्षा की जाएगी।",
          referenceLabel: "संदर्भ संख्या",
          newEnquiryBtn: "नई पूछताछ सबमिट करें",
        },
      },
    },
    appDownloadStrip: {
      title: "अभी ऐप डाउनलोड करें",
      subtitle:
        "हमारे आधिकारिक मोबाइल एप्लिकेशन के साथ सभी सेवाएं कभी भी, कहीं भी प्राप्त करें",
      getItOn: "उपलब्ध है",
      googlePlay: "गूगल प्ले",
      ariaLabel: "गूगल प्ले स्टोर से बलांगीर MIHMS ऐप डाउनलोड करें",
    },
  footer: {
      govtLabel: "ओडिशा सरकार",
      programmeName: "बलांगीर MIHMS",
      description:
        "मातृ एवं शिशु स्वास्थ्य निगरानी प्रणाली (MIHMS) जिला स्वास्थ्य प्रशासन, बलांगीर, ओडिशा की एक जन स्वास्थ्य पहल है, जो सुरक्षित मातृत्व और स्वस्थ नवजात शिशु के लिए समर्पित है।",
      helplineLabel: "राज्य स्वास्थ्य हेल्पलाइन",
      quickLinksTitle: "त्वरित लिंक",
      essentialsTitle: "पोर्टल जानकारी",
      contactTitle: "आधिकारिक संपर्क",
      privacyPolicy: "गोपनीयता नीति",
      sitemap: "साइटमैप",
      copyright:
        "सामग्री का स्वामित्व, रखरखाव और अद्यतन जिला स्वास्थ्य प्रशासन, बलांगीर, ओडिशा सरकार द्वारा किया जाता है।",
      attribution:
        "बलांगीर MIHMS • जन सूचना पोर्टल • सुगम्यता हेतु निर्मित (English, ଓଡ଼ିଆ, हिंदी)",
      backToTop: "शीर्ष पर जाएँ",
    },
    sitemapPage: {
      breadcrumbHome: "मुख्य पृष्ठ",
      title: "वेबसाइट साइटमैप",
      subtitle:
        "बलांगीर MIHMS पोर्टल के सभी अनुभागों, सूचना पृष्ठों, भाषा विकल्पों और सुगम्यता सुविधाओं का संरचित विवरण।",
      sectionsHeading: "पोर्टल संरचना एवं अनुभाग",
      accessibilityHeading: "सुगम्यता एवं आगंतुक नियंत्रण",
      languagesHeading: "उपलब्ध भाषाएँ",
      backToHome: "मुख्य पृष्ठ पर लौटें",
      groups: [
        {
          title: "मुख्य पृष्ठ के अनुभाग",
          description: "मुख्य पोर्टल पर उपलब्ध प्रमुख जन सूचना अनुभाग।",
          links: [
            {
              label: "मुख्य पृष्ठ / हीरो बैनर",
              href: "/#home",
              detail:
                "कार्यक्रम पहचान, टैगलाइन, संक्षिप्त परिचय और प्रमुख कॉल-टू-एक्शन।",
            },
            {
              label: "नेतृत्व एवं मार्गदर्शन",
              href: "/#leadership",
              detail:
                "राष्ट्रीय, राज्य एवं बलांगीर जिला स्वास्थ्य प्रशासन का नेतृत्व।",
            },
            {
              label: "बलांगीर MIHMS के बारे में",
              href: "/#about",
              detail:
                "कार्यक्रम की पृष्ठभूमि, जिला परिचय और मातृ एवं शिशु स्वास्थ्य की प्रमुख विशेषताएँ।",
            },
            {
              label: "उद्देश्य और दृष्टि",
              href: "/#purpose-vision",
              detail:
                "स्वीकृत उद्देश्य व दृष्टि वक्तव्य, दीर्घकालिक लक्ष्य और प्रमुख केंद्रित क्षेत्र।",
            },
            {
              label: "संपर्क एवं पूछताछ",
              href: "/#contact",
              detail:
                "आधिकारिक कार्यालय पता, फोन नंबर, ईमेल, स्थान मानचित्र और पूछताछ फ़ॉर्म।",
            },
          ],
        },
        {
          title: "पोर्टल पृष्ठ एवं नीतियाँ",
          description: "सभी स्क्रीन से सुलभ संदर्भ पृष्ठ।",
          links: [
            {
              label: "साइटमैप",
              href: "/sitemap",
              detail: "वेबसाइट के सभी अनुभागों और नेविगेशन विकल्पों की संरचित सूची।",
            },
            {
              label: "गोपनीयता नीति",
              href: "/privacy-policy",
              detail: "आगंतुक गोपनीयता, पूछताछ डेटा और पोर्टल उपयोग से संबंधित जानकारी।",
            },
          ],
        },
      ],
      accessibilityItems: [
        "कीबोर्ड Tab नेविगेशन द्वारा सीधे 'मुख्य सामग्री पर जाएँ' लिंक तक पहुँच",
        "लेआउट को प्रभावित किए बिना टेक्स्ट आकार बढ़ाने (अ+), घटाने (अ−) और रीसेट (अ) की सुविधा",
        "मेनू, लिंक और फ़ॉर्म के लिए पूर्ण कीबोर्ड नेविगेशन तथा स्पष्ट फ़ोकस संकेतक",
        "अंग्रेज़ी, ओड़िया (ଓଡ଼ିଆ) और हिंदी — तीनों भाषाओं में संपूर्ण समर्थन",
      ],
    },
    privacyPage: {
      breadcrumbHome: "मुख्य पृष्ठ",
      title: "गोपनीयता नीति",
      subtitle:
        "बलांगीर MIHMS जन सूचना पोर्टल का उपयोग करने वाले आगंतुकों के लिए गोपनीयता दिशानिर्देश।",
      lastUpdated: "स्थिति: अंतिम विभागीय स्वीकृति लंबित",
      backToHome: "मुख्य पृष्ठ पर लौटें",
      sections: [
        {
          heading: "1. सामान्य जानकारी",
          body: "बलांगीर MIHMS (मातृ एवं शिशु स्वास्थ्य निगरानी प्रणाली) का यह जन सूचना पोर्टल जिला स्वास्थ्य प्रशासन, बलांगीर, ओडिशा सरकार के अंतर्गत जन जागरूकता एवं आधिकारिक संवाद हेतु संचालित है। इस वेबसाइट को देखने से कोई व्यक्तिगत पहचान योग्य जानकारी स्वचालित रूप से एकत्र नहीं होती है।",
        },
        {
          heading: "2. पूछताछ फ़ॉर्म की जानकारी",
          body: "जब आगंतुक स्वेच्छा से संपर्क अनुभाग के माध्यम से पूछताछ (नाम, मोबाइल नंबर, ईमेल, विषय और संदेश) सबमिट करते हैं, तो उस जानकारी का उपयोग केवल नागरिक के प्रश्न या प्रतिक्रिया की समीक्षा व उत्तर देने के लिए किया जाता है।",
        },
        {
          heading: "3. आगंतुक प्राथमिकताएँ एवं सुगम्यता सेटिंग्स",
          body: "यह पोर्टल केवल गैर-व्यक्तिगत डिस्प्ले प्राथमिकताएँ—जैसे आपकी चुनी हुई भाषा (अंग्रेज़ी, ओड़िया या हिंदी) और टेक्स्ट ज़ूम स्तर—आपके ब्राउज़र में स्थानीय रूप से सहेजता है ताकि हर विज़िट पर सुगम अनुभव मिल सके।",
        },
        {
          heading: "4. गोपनीयता संबंधी संपर्क",
          body: "इस पोर्टल या इसकी सामग्री से संबंधित किसी भी प्रश्न के लिए कृपया मुख्य पृष्ठ के संपर्क अनुभाग के माध्यम से CDM & PHO कार्यालय, बलांगीर से संपर्क करें।",
        },
      ],
    },
  },
};

