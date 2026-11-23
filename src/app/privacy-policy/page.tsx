import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Balangir MIHMS",
  description:
    "Privacy policy for the Balangir MIHMS public information landing page.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}

