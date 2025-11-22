import { ArrowRight, Briefcase, Factory, Leaf } from "lucide-react"

const services = [
  {
    title: "Klimatstrategi & färdplaner",
    description: "Hjälp att skapa konkreta vägar mot klimatneutralitet genom analys, rådgivning och ledning.",
    Icon: Leaf,
    outcomes: ["Nulägesanalys och KPI:er", "Prioriterad färdplan", "Ledningsstöd & rapportering"],
  },
  {
    title: "CCUS & energianalys",
    description: "Tekniska och ekonomiska analyser för CO₂-infångning, energieffektivisering och processoptimering.",
    Icon: Factory,
    outcomes: ["Teknik- och investeringscase", "Energibalanser & scenarier", "Processoptimering"],
  },
  {
    title: "Projektledning & interim",
    description:
      "Tillfällig ledningskompetens inom operativ verksamhet, hållbarhet och teknik, baserat på över 30 års erfarenhet.",
    Icon: Briefcase,
    outcomes: ["Styrgrupp och PMO", "Operativ förändringsledning", "Kunskapsöverföring"],
  },
]

const engagementModels = [
  {
    title: "Accelerator (4–6 veckor)",
    description: "Snabb etablering av klimatstrategi eller CCUS-roadmap – med handover till ert team.",
    deliverables: ["Baseline & KPI:er", "Färdplan & business case", "Workshop med ledningen"],
  },
  {
    title: "Managed transformation",
    description: "Löpande partnerskap där jag driver implementation, utbildning och rapportering.",
    deliverables: ["Programledning", "Implementering och uppföljning", "Dashboards & rapporter"],
  },
  {
    title: "Advisory on demand",
    description: "Flexibelt stöd för beslutsunderlag, tekniska granskningar och styrelsepresentationer.",
    deliverables: ["Executive briefs", "Tekniska analyser", "Coachning av team"],
  },
]

const metrics = [
  { label: "CO₂-reduktion", value: "-45% i snitt" },
  { label: "Time-to-impact", value: "8–12 veckor" },
  { label: "Ledningsstöd", value: "C-level & styrelse" },
  { label: "Industriprojekt", value: "50+" },
]

export default function Services() {
  return (
    <div className="space-y-16">
      <section className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600">Tjänster</p>
        <h1 className="text-4xl font-semibold text-slate-900">Expertis för klimatneutral industri</h1>
        <p className="mx-auto max-w-3xl text-base text-slate-600">
          Jag designar och leder program som förenar klimatmål och affärsnytta. All rådgivning utgår från tydliga KPI:er,
          investeringskrav och uppföljning mot CSRD och andra regelverk.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {services.map(({ title, description, Icon, outcomes }) => (
          <div
            key={title}
            className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <Icon className="size-6" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-3 text-sm text-slate-600">{description}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-2">
                  <ArrowRight className="size-4 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="grid gap-6 rounded-[32px] border border-white/60 bg-white/90 p-8 shadow-xl lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Resultat</p>
          <h2 className="text-3xl font-semibold text-slate-900">Från arkitektur till realiserad nytta</h2>
          <p className="text-base text-slate-600">
            Varje uppdrag startar med en tydlig baseline och målbild. Vi arbetar i korta iterationer och visualiserar
            framsteg och ROI genom dashboards och rapporter.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white/90 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{metric.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-900/90 p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Blueprint</p>
          <ul className="space-y-4 text-sm text-slate-100">
            <li className="flex gap-3">
              <ArrowRight className="size-4 flex-none text-emerald-300" />
              Modulariserade ramverk som gör att ni kan växa utan att bygga om grunden.
            </li>
            <li className="flex gap-3">
              <ArrowRight className="size-4 flex-none text-emerald-300" />
              Dashboard för ekonomi, adoption och hållbarhet i samma vy.
            </li>
            <li className="flex gap-3">
              <ArrowRight className="size-4 flex-none text-emerald-300" />
              Automatiserade guardrails i hela organisationen.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-slate-900">Samarbetsmodeller</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {engagementModels.map(({ title, description, deliverables }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">{title}</p>
              <p className="mt-3 text-sm text-slate-600">{description}</p>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                {deliverables.map((item) => (
                  <p key={item} className="flex gap-2">
                    <ArrowRight className="size-4 text-emerald-500" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
