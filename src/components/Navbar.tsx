"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const links = [
  { href: "/about", label: "Om oss" },
  { href: "/services", label: "Tjänster" },
  { href: "/contact", label: "Kontakt" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group flex items-center gap-4 transition hover:opacity-100">
          <div className="flex items-center justify-center rounded-[24px] border border-white bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.15)] ring-1 ring-black/5">
            <Image src="/logo.png" alt="SustainTech4Good AB" width={64} height={64} className="object-contain" priority />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900 leading-tight">SustainTech4Good AB</p>
            <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-600">
              Industriell omställning
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <Button
            asChild
            size="sm"
            className="rounded-full bg-emerald-500 px-5 text-xs font-semibold text-white shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            <Link href="/contact">Boka samtal</Link>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700 sm:hidden"
          aria-label="Öppna meny"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden border-t border-slate-100 bg-white/95 shadow-xl">
          <div className="flex flex-col items-center gap-3 py-5 text-sm font-medium text-slate-700">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} onClick={() => setIsOpen(false)} />
            ))}
            <Button
              asChild
              size="sm"
              className="rounded-full bg-emerald-500 px-6 text-white shadow-lg shadow-emerald-500/30"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Boka samtal
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-slate-700 transition-colors duration-200 hover:text-emerald-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </Link>
  )
}
