import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PurposeVisionSection } from "@/components/PurposeVisionSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PurposeVisionSection />
      <ContactSection />
    </>
  );
}
