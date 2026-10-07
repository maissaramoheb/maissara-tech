import { socialImage } from "@/lib/social";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Maissara Selim — SELECTED WORK";
export default function Image() {
  return socialImage("Different problems. Same discipline.", "SELECTED WORK");
}
