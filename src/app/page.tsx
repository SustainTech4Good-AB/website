import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Leaf,
  Factory,
  Briefcase,
  LineChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const heroStats = [
  { value: "30+ år", label: "Operativ erfarenhet i industrin" },
  { value: "100%", label: "Fokus på minskat klimatavtryck" },
]

const services = [
  {
    title: "Klimatstrategi & färdplaner",
    description:
      "Konkreta vägar mot klimatneutralitet genom analys, rådgivning och ledning – från nuläge till realiserad plan.",
    Icon: Leaf,
  },
  {
    title: "CCUS & energianalys",
    description:
      "Tekniska och ekonomiska analyser för CO₂-infångning, energieffektivisering och processoptimering.",
    Icon: Factory,
  },
  {
    title: "Projektledning & interim",
    description:
      "Tillfällig ledningskompetens inom operativ verksamhet, hållbarhet och teknik baserat på över 30 års erfarenhet.",
    Icon: Briefcase,
  },
]

const pillars = [
  { title: "Teknik", description: "Robusta lösningar inom CCUS, energi och digitalisering." },
  { title: "Strategi", description: "Affärsnära rådgivning som förankrar hållbarhet i ledningen." },
  { title: "Hållbarhet", description: "Mätbara resultat och rapportering mot klimatmål." },
]

const process = [
  "Datadriven nulägesanalys av klimatpåverkan och affärskritiska processer.",
  "Prioriterad färdplan med tydliga delmål, budget och beslutspunkter.",
  "Implementering och projektledning tillsammans med interna team.",
  "Uppföljning, rapportering och handover för en självgående organisation.",
]

const focusAreas = [
  {
    title: "Industrifokus",
    description: "Tillverkande företag med behov av att kombinera klimatnytta och konkurrenskraft.",
  },
  {
    title: "Ledningsstöd",
    description: "Executive briefings, beslutsunderlag och investeringscase för styrelse och ägare.",
  },
  {
  title: "Praktiskt genomförbara åtgärder",
  description: "Effektivisering, investeringar och konkreta förbättringsinsatser som snabbt skapar värde i verksamheten."
},
{
  title: "Rådgivare för industri och offentlig verksamhet",
  description: "Specialiserad rådgivning baserat på 30 års erfarenhet inom pappers- och massaindustrin som stödjer företag och offentliga verksamheter."
}


]

export default function Home() {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden rounded-[32px] border border-white/40 bg-slate-950 text-white shadow-[0_35px_120px_rgba(15,23,42,0.4)]">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Rapsfält"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-slate-900/60 to-slate-950/70" />
          <div className="absolute left-1/2 top-1/2 size-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>
        <div className="relative grid gap-10 px-8 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-emerald-100">
              SustainTech4Good AB
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Industriell omställning med klimatet i fokus
              </h1>
              <p className="text-lg text-slate-200 md:text-xl">
                SustainTech4Good AB hjälper tillverkande företag att nå klimatneutralitet genom analys, rådgivning och
                projektledning. Teknik, strategi och hållbarhet vävs samman till färdplaner som går att verkställa.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-emerald-500 px-8 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                <Link href="/contact">Kontakta mig</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/40 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10"
              >
                <Link href="/services" className="flex items-center gap-2">
                  Se tjänsterna
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/5 p-4 text-left">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 p-4">
              <Sparkles className="size-10 rounded-2xl bg-emerald-500/20 p-2 text-emerald-200" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Uppdrag</p>
                <p className="text-lg font-semibold text-white">Datadrivna beslut</p>
                <p className="text-sm text-slate-200">
                  Konkreta färdplaner med tydliga KPI:er
                </p>
                <p className="text-lg font-semibold text-white">Projektledning</p>
                <p className="text-sm text-slate-200">
                  Med kompetens inom CCUS.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">
                Vad du får
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-100">
                <li className="flex gap-3">
                  <ShieldCheck className="size-5 flex-none text-emerald-300" />
                  Handfasta beslutspunkter och investeringscase för ledningar.
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="size-5 flex-none text-emerald-300" />
                  Workshops och interimt ledarskap som driver förändringen.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8" id="tjanster">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600">
            Teknik · Strategi · Hållbarhet
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Jag erbjuder strategisk rådgivning inom industriell omställning och klimatstrategi för tillverkande företag
            som vill nå sina hållbarhetsmål.
          </h2>
          <p className="text-base text-slate-600">
            Genom datadriven analys och erfarenhet från industrin skapas praktiskt genomförbara färdplaner mot
            klimatneutralitet. Nedan ser du kärntjänsterna.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 rounded-[32px] border border-white/70 bg-white/90 p-10 shadow-xl lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Arbetssätt</p>
          <h2 className="text-3xl font-semibold text-slate-900">En process som tar ansvar hela vägen</h2>
          <p className="text-base text-slate-600">
            Varje uppdrag startar med en tydlig baseline och målbild. Jag leder arbetet genom iterativa steg där
            beslutspunkter, investeringar och KPI:er visualiseras för ledning och team.
          </p>
          <ol className="space-y-4">
            {process.map((step, index) => (
              <li key={step} className="flex gap-4">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-semibold text-emerald-700">
                  0{index + 1}
                </div>
                <p className="text-sm text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-5 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Fokus</p>
          <div className="space-y-4">
            {focusAreas.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 p-10 text-white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-100">Nästa steg</p>
            <h2 className="text-3xl font-semibold leading-tight">
              Låt oss skapa en färdplan mot klimatneutral svensk industri med bibehållen konkurrenskraft.
            </h2>
            <p className="text-base text-emerald-50">
              Boka ett förutsättningslöst samtal så går vi igenom nuläget, möjliga arbetssätt och hur vi snabbt kan
              komma igång med ert viktigaste initiativ.
            </p>
          </div>
          <div className="rounded-3xl border border-white/30 bg-white/10 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-emerald-100">Direktkontakt</p>
                <p className="mt-2 text-xl font-semibold">Ingrid Engström</p>
                <p className="text-sm text-emerald-100">Grundare · SustainTech4Good AB</p>
              </div>
              <ShieldCheck className="size-14 rounded-3xl bg-white/10 p-3 text-white" />
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <p className="text-emerald-50">ingrid.engstrom@stfgab.se</p>
              <p className="text-emerald-50">Org.nr 559549-1761</p>
              <p className="text-emerald-50">Bas i Örebro · Tillverkande industri i Norden</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-white px-8 text-base font-semibold text-emerald-700">
                <Link href="/contact">Boka samtal</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/80 bg-white/90 px-8 text-base font-semibold text-emerald-800 hover:bg-white"
              >
                <Link href="/about">Läs mer om oss</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
