import Link from "next/link"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">SustainTech4Good AB</p>
            <p className="mt-4 text-2xl font-semibold text-white">Industriell omställning med klimatet i fokus.</p>
            <p className="mt-4 text-sm text-slate-400">
              Strategisk rådgivning, CCUS-analys och interim ledning för tillverkande företag som vill förena
              klimatmål och konkurrenskraft.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">Navigering</h3>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/about" className="text-slate-200 transition hover:text-white">
                Om oss
              </Link>
              <Link href="/services" className="text-slate-200 transition hover:text-white">
                Tjänster
              </Link>
              <Link href="/contact" className="text-slate-200 transition hover:text-white">
                Kontakt
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">Kontakt</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-slate-100">ingrid.engstrom@stfgab.se</li>
              <li className="text-slate-100">Org.nr 559549-1761</li>
              <li className="text-slate-400">Tillverkande industri · Sverige</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {year} SustainTech4Good AB · www.stfgab.se
        </div>
      </div>
    </footer>
  )
}
