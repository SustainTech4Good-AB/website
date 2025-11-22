"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setVisible(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 flex flex-col md:flex-row items-center justify-between gap-3 z-50">
      <p className="text-sm text-gray-700 text-center md:text-left">
        Vi använder cookies för att förbättra din upplevelse. 
        Inga spårningscookies används. Läs mer i vår integritetspolicy.
      </p>
      <div className="flex gap-3">
        <Button onClick={rejectCookies} variant="outline" size="sm">Endast nödvändiga</Button>
        <Button onClick={acceptCookies} size="sm" className="bg-green-600 hover:bg-green-700">
          Acceptera alla
        </Button>
      </div>
    </div>
  )
}
