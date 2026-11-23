import { Language } from "./translations";

export type OfficialTier = "national" | "state" | "district";

export interface OfficialProfile {
  id: string;
  tier: OfficialTier;
  active: boolean;
  /**
   * Drop approved square-cropped portrait photos into `public/images/officials/`
   * and set `image: "/images/officials/<filename>.jpg"`.
   * Leave undefined to render a clean official monogram avatar until approved photos arrive.
   */
  image?: string;
  initials: string;
  accentFrom: string;
  accentTo: string;
  name: Record<Language, string>;
  designation: Record<Language, string>;
}

/**
 * Single source of truth for dignitaries displayed in the Leadership & Guidance band.
 * Update names, designations, photos, or toggle `active: false` here — no UI code edits needed.
 * Fallback gradient tokens reference global CSS variables in `src/app/globals.css`.
 */
export const OFFICIALS: OfficialProfile[] = [
  {
    id: "pm-india",
    tier: "national",
    active: true,
    image: "/images/officials/pm.jpg",
    initials: "NM",
    accentFrom: "var(--brand-accent-light)",
    accentTo: "var(--brand-topbar)",
    name: {
      en: "Shri Narendra Modi",
      or: "ଶ୍ରୀ ନରେନ୍ଦ୍ର ମୋଦୀ",
      hi: "श्री नरेन्द्र मोदी",
    },
    designation: {
      en: "Hon'ble Prime Minister, India",
      or: "ମାନ୍ୟବର ପ୍ରଧାନମନ୍ତ୍ରୀ, ଭାରତ",
      hi: "माननीय प्रधानमंत्री, भारत",
    },
  },
  {
    id: "cm-odisha",
    tier: "state",
    active: true,
    image: "/images/officials/cm-odisha.png",
    initials: "MM",
    accentFrom: "var(--brand-accent)",
    accentTo: "var(--brand-topbar)",
    name: {
      en: "Shri Mohan Charan Majhi",
      or: "ଶ୍ରୀ ମୋହନ ଚରଣ ମାଝି",
      hi: "श्री मोहन चरण माझी",
    },
    designation: {
      en: "Hon'ble Chief Minister, Odisha",
      or: "ମାନ୍ୟବର ମୁଖ୍ୟମନ୍ତ୍ରୀ, ଓଡ଼ିଶା",
      hi: "माननीय मुख्यमंत्री, ओडिशा",
    },
  },
  {
    id: "deputy-cm-1",
    tier: "state",
    active: true,
    image: "/images/officials/deputy-cm-1.jpg",
    initials: "KV",
    accentFrom: "var(--brand-accent-dark)",
    accentTo: "var(--brand-topbar)",
    name: {
      en: "Shri K. V. Singh Deo",
      or: "ଶ୍ରୀ କେ.ଭି. ସିଂହ ଦେଓ",
      hi: "श्री के. वी. सिंह देव",
    },
    designation: {
      en: "Hon'ble Deputy Chief Minister, Odisha",
      or: "ମାନ୍ୟବର ଉପ-ମୁଖ୍ୟମନ୍ତ୍ରୀ, ଓଡ଼ିଶା",
      hi: "माननीय उप-मुख्यमंत्री, ओडिशा",
    },
  },
  {
    id: "deputy-cm-2",
    tier: "state",
    active: true,
    image: "/images/officials/deputy-cm-2.jpg",
    initials: "PP",
    accentFrom: "var(--brand-accent)",
    accentTo: "var(--brand-accent-dark)",
    name: {
      en: "Smt. Pravati Parida",
      or: "ଶ୍ରୀମତୀ ପ୍ରଭାତୀ ପରିଡ଼ା",
      hi: "श्रीमती प्रभाती परिडा",
    },
    designation: {
      en: "Hon'ble Deputy Chief Minister, Odisha",
      or: "ମାନ୍ୟବର ଉପ-ମୁଖ୍ୟମନ୍ତ୍ରୀ, ଓଡ଼ିଶା",
      hi: "माननीय उप-मुख्यमंत्री, ओडिशा",
    },
  },
  {
    id: "health-minister-odisha",
    tier: "state",
    active: true,
    image: "/images/officials/health-minister.jpg",
    initials: "MM",
    accentFrom: "var(--hub-blue-icon-from)",
    accentTo: "var(--brand-primary)",
    name: {
      en: "Dr. Mukesh Mahaling",
      or: "ଡଃ ମୁକେଶ ମହାଲିଙ୍ଗ",
      hi: "डॉ. मुकेश महालिंग",
    },
    designation: {
      en: "Hon'ble Minister of Health & Family Welfare, Odisha",
      or: "ମାନ୍ୟବର ସ୍ୱାସ୍ଥ୍ୟ ଓ ପରିବାର କଲ୍ୟାଣ ମନ୍ତ୍ରୀ, ଓଡ଼ିଶା",
      hi: "माननीय स्वास्थ्य एवं परिवार कल्याण मंत्री, ओडिशा",
    },
  },
  {
    id: "collector-balangir",
    tier: "district",
    active: true,
    image: "/images/officials/collector-balangir.jpg",
    initials: "DM",
    accentFrom: "var(--brand-primary)",
    accentTo: "var(--brand-primary-dark)",
    name: {
      en: "Collector & DM, IAS",
      or: "ଜିଲ୍ଲାପାଳ, ଆଇଏଏସ୍",
      hi: "जिलाधिकारी, आईएएस",
    },
    designation: {
      en: "Collector & District Magistrate, Balangir",
      or: "ଜିଲ୍ଲାପାଳ ଓ ଜିଲ୍ଲା ମାଜିଷ୍ଟ୍ରେଟ୍, ବଲାଙ୍ଗୀର",
      hi: "कलेक्टर एवं जिला मजिस्ट्रेट, बलांगीर",
    },
  },
  {
    id: "cdmo-balangir",
    tier: "district",
    active: true,
    image: "/images/officials/cdmo-balangir.jpg",
    initials: "CD",
    accentFrom: "var(--brand-secondary)",
    accentTo: "var(--brand-primary)",
    name: {
      en: "CDM & PHO, Balangir",
      or: "ଜିଲ୍ଲା ମୁଖ୍ୟ ଚିକିତ୍ସା ଅଧିକାରୀ",
      hi: "मुख्य जिला चिकित्सा अधिकारी",
    },
    designation: {
      en: "Chief District Medical & Public Health Officer, Balangir",
      or: "ଜିଲ୍ଲା ମୁଖ୍ୟ ଚିକିତ୍ସା ଓ ଜନସ୍ୱାସ୍ଥ୍ୟ ଅଧିକାରୀ, ବଲାଙ୍ଗୀର",
      hi: "मुख्य जिला चिकित्सा एवं जन स्वास्थ्य अधिकारी, बलांगीर",
    },
  },
];
