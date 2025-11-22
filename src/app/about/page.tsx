import Image from "next/image"
import { CheckCircle2, Compass, Lightbulb, ShieldCheck } from "lucide-react"

const values = [
  {
    title: "Djup industrikompetens",
    description: "30+ år i ledande roller inom produktion, hållbarhet och affärsutveckling.",
    Icon: ShieldCheck,
  },
  {
    title: "Praktiskt genomförbart",
    description: "Rekommendationer som bygger på faktiska processer och investeringskrav.",
    Icon: CheckCircle2,
  },
  {
    title: "Partnerskap i ögonhöjd",
    description: "Vi arbetar tillsammans med ditt team och lämnar efter oss en självgående organisation.",
    Icon: Compass,
  },
  {
    title: "Innovation med ansvar",
    description: "Hållbarhet och konkurrenskraft kombineras genom mätbara KPI:er.",
    Icon: Lightbulb,
  },
]

export default function About() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 rounded-[32px] border border-white/70 bg-white/90 p-10 shadow-xl md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600">Om SustainTech4Good AB</p>
          <h1 className="text-4xl font-semibold text-slate-900">Strategisk rådgivning inom industriell omställning</h1>
          <p className="text-base text-slate-600">
            SustainTech4Good AB erbjuder strategisk rådgivning inom industriell omställning och klimatstrategi för
            tillverkande företag som vill nå sina hållbarhetsmål. Kombinationen av teknisk förståelse och
            hållbarhetsexpertis gör att rekommendationerna blir både genomförbara och lönsamma.
          </p>
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-700">Vision</p>
            <p className="mt-3 text-lg text-slate-900">
              Att bidra till en klimatneutral svensk industri med bibehållen konkurrenskraft.
            </p>
          </div>
        </div>
        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
          <Image
            src="/ingrid.jpg"
            alt="Ingrid Engström"
            width={520}
            height={640}
            className="rounded-2xl border border-white/70 shadow-xl"
          />
          <div className="mt-6 space-y-2 text-center">
            <p className="text-xl font-semibold text-slate-900">Ingrid Engström</p>
            <p className="text-sm text-slate-500">Grundare · SustainTech4Good AB</p>
            <p className="text-sm text-slate-600">
              Över 30 års erfarenhet inom industri, hållbarhet och ledarskap.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-slate-900">Värderingar som styr varje uppdrag</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="flex gap-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Icon className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-[32px] border border-slate-200 bg-slate-900/90 p-10 text-white md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">Arbetssätt</p>
          <h2 className="text-3xl font-semibold">Metodiskt men flexibelt partnerskap</h2>
          <p className="text-sm text-slate-200">
            Varje uppdrag inleds med en gemensam målbild och ett tydligt mandat. Jag arbetar nära ledning och
            produktion för att säkerställa både affärsresultat och klimatnytta.
          </p>
          <ul className="space-y-4 text-sm text-slate-100">
            <li className="flex gap-3">
              <ShieldCheck className="size-5 flex-none text-emerald-300" />
              Säkerställande av beslutspunkter, investeringscase och KPI:er för styrelse och ägare.
            </li>
            <li className="flex gap-3">
              <ShieldCheck className="size-5 flex-none text-emerald-300" />
              Kunskapsöverföring som gör organisationen självgående efter uppdraget.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">Grundpelare</p>
          <div className="mt-4 grid gap-4">
            {[
              "Affärsvärde och klimatnytta väger lika tungt.",
              "Transparens i hela processen – från analys till rapportering.",
              "Flexibla engagemang: accelerator, transformation eller rådgivning on-demand.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/20 bg-white/5 p-4 text-sm text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
