import Link from "next/link"
import { Linkedin, Mail, Phone, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"

const contactChannels = [
  {
    title: "E-post",
    detail: "ingrid.engstrom@stfgab.se",
    href: "mailto:ingrid.engstrom@stfgab.se",
    Icon: Mail,
  },
  {
    title: "Telefon",
    detail: "+46 (0)70 618 42 08",
    href: "tel:+46706184208",
    Icon: Phone,
  },
  {
    title: "LinkedIn",
    detail: "linkedin.com/in/engstroemingrid",
    href: "https://www.linkedin.com/in/engstroemingrid",
    Icon: Linkedin,
  },
]

export default function Contact() {
  return (
    <div className="space-y-12">
      <section className="rounded-[32px] border border-white/70 bg-white/90 p-10 shadow-xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600">Kontakt</p>
            <h1 className="text-4xl font-semibold text-slate-900">Låt oss prata om ert nästa steg</h1>
            <p className="text-base text-slate-600">
              Har du frågor eller vill diskutera ett samarbete? Du är varmt välkommen att höra av dig. Jag återkommer
              vanligtvis samma dag med ett förslag på hur vi tar dialogen vidare.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {contactChannels.map(({ title, detail, href, Icon }) => (
                <Link
                  key={title}
                  href={href}
                  className="flex flex-col gap-2 rounded-3xl border border-slate-200 bg-white/80 p-4 text-sm text-slate-600 transition hover:-translate-y-1 hover:border-emerald-200"
                >
                  <div className="flex items-center gap-2 text-slate-900">
                    <Icon className="size-4 text-emerald-600" />
                    <span className="font-semibold">{title}</span>
                  </div>
                  <span>{detail}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Grundare</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">Ingrid Engström</p>
            <p className="text-sm text-slate-500">SustainTech4Good AB</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>Över 30 års erfarenhet av industriell omställning.</li>
              <li>Specialist på klimatstrategier och CCUS-program.</li>
              <li>Närvarande stöd från analys till implementering.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-emerald-500 px-8 text-base text-white">
                <Link href="mailto:info@stfgab.se">Skicka e-post</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-slate-300 px-8 text-base text-slate-700"
              >
                <Link href="https://www.linkedin.com/in/engstroemingrid" target="_blank">
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-[32px] border border-slate-200 bg-slate-900/95 p-10 text-white md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">Varför kontakta oss</p>
          <h2 className="mt-4 text-3xl font-semibold">Snabb respons och tydliga beslutspunkter</h2>
          <p className="mt-3 text-sm text-slate-200">
            Jag tar fram nästa steg redan i vårt första samtal och sätter upp en gemensam agenda för hur vi kan hjälpa
            er att nå hållbarhetsmålen.
          </p>
        </div>
        <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">SustainTech4Good AB</p>
              <p className="mt-2 text-lg font-semibold text-white">Org.nr 559549-1761</p>
            </div>
            <ShieldCheck className="size-12 rounded-3xl bg-white/10 p-3 text-white" />
          </div>
          <dl className="mt-6 space-y-4 text-sm text-slate-100">
            <div className="flex justify-between">
              <dt>Plats</dt>
              <dd>Bas i Örebro · Sverige · Remote</dd>
            </div>
            <div className="flex justify-between">
              <dt>Kunder</dt>
              <dd>Tillverkande industri</dd>
            </div>
            <div className="flex justify-between">
              <dt>Projekt</dt>
              <dd>CCUS · Energi · Klimatstrategi</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  )
}
