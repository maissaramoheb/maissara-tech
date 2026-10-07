import { socialImage } from "@/lib/social";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Maissara Selim — PROFESSIONAL PROFILE";
export default function Image() {
  return socialImage("Practice informs the system.", "PROFESSIONAL PROFILE");
}
