import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/data/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Maissara Selim — Research, Systems, Practice",
  description: site.description,
  alternates: { canonical: "/" },
  applicationName: "maissara.tech",
  openGraph: {
    type: "profile",
    title: "Maissara Selim — Research, Systems, Practice",
    description: site.description,
    url: site.url,
    siteName: "Maissara Selim",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Maissara Selim — From complex environments to better decisions and practical systems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maissara Selim — Research, Systems, Practice",
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
