import { socialImage } from "@/lib/social";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Maissara Selim — CONTACT";
export default function Image() {
  return socialImage(
    "Complex problem? Start with the system around it.",
    "CONTACT",
  );
}
