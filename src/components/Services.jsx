import { Code2, Brain, LineChart, Shield, Sparkles } from 'lucide-react'

const cards = [
  {
    icon: Brain,
    title: 'AI Strategy',
    desc: 'Roadmaps, feasibility, and ROI models to align AI with business outcomes.'
  },
  {
    icon: Code2,
    title: 'Product Engineering',
    desc: 'Design systems, model integration, and scalable app development.'
  },
  {
    icon: LineChart,
    title: 'Data & Analytics',
    desc: 'Pipelines, evaluation, and observability for production-grade AI.'
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    desc: 'Guardrails, policy, and governance built into your stack.'
  }
]

export default function Services() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur transition hover:bg-white/10">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500/70 to-cyan-400/70 text-white ring-1 ring-white/20">
              <Icon className="h-5 w-5" />
            </div>
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-blue-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />
            <h3 className="relative z-10 text-base font-semibold text-white">{title}</h3>
          </div>
          <p className="text-sm text-white/70">{desc}</p>
        </div>
      ))}
    </div>
  )
}
