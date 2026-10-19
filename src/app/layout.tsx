import type { Metadata } from "next";
import localFont from "next/font/local";
const GeistSans = localFont({
  src: "./Geist-Latin.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const GeistMono = localFont({
  src: "./GeistMono-Latin.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: false,
});
const Newsreader = localFont({
  src: "./Newsreader-Latin.woff2",
  variable: "--font-editorial",
  weight: "400",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
import { EditorialMotion } from "@/components/v2/EditorialMotion";
import { site } from "@/data/site";
import "./globals.css";
import "./v2-full.css";
import "./v2-premium.css";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/v2/editorial";
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${Newsreader.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        <main id="main" tabIndex={-1}>
          <EditorialMotion>{children}</EditorialMotion>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
