import type { Metadata } from "next"

import "./globals.css"
import { CookieBanner } from "@/components/CookieBanner"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

const siteUrl = "https://www.stfgab.se"
const siteName = "SustainTech4Good AB"
const description =
  "Strategisk rådgivning för industriell omställning, klimatstrategi och CCUS. Datadrivna färdplaner, beslutsunderlag och projektledning."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/logo.png", type: "image/png", sizes: "256x256" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    locale: "sv_SE",
    type: "website",
    images: [{ url: "/logo.png", width: 256, height: 256, alt: siteName }],
  },
  twitter: {
    card: "summary",
    title: siteName,
    description,
    images: ["/logo.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="flex min-h-screen flex-col bg-[#f9fafb] text-[#374151]">
        <Navbar />
        <main className="container mx-auto flex-1 px-6 py-20">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
