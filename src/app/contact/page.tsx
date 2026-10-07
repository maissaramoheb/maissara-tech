import { ContactSection } from "@/components/v2/editorial";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact",
  "Professional routes for research, advisory, collaboration, training and technology.",
  "/contact",
);
export default function ContactPage() {
  return <ContactSection deep />;
}
