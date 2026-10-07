import { getProject } from "@/data/projects";
import { socialImage } from "@/lib/social";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Maissara Selim — Selected system case study";
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  return socialImage(project?.name ?? "Selected Systems", "WORK / CASE STUDY");
}
