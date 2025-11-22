import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CookieBanner } from "@/components/CookieBanner"

export const metadata = {
  title: "SustainTech4Good AB",
  description: "Strategisk rådgivning för industriell omställning och klimatstrategi – www.stfgab.se",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="flex flex-col min-h-screen bg-[#f9fafb] text-[#374151]">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 py-20">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
