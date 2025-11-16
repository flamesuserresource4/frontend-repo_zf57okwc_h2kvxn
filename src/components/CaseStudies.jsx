import { motion } from 'framer-motion'

const cases = [
  {
    brand: 'Helios Bank',
    result: '–38% support load',
    summary: 'Deployed an LLM assistant that resolves 72% of tickets end-to-end.'
  },
  {
    brand: 'Nova Retail',
    result: '+22% conversion',
    summary: 'Personalized merchandising using real‑time embeddings.'
  },
  {
    brand: 'Orion Health',
    result: '97% accuracy',
    summary: 'Clinical note QA with domain‑tuned models and audits.'
  }
]

export default function CaseStudies() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cases.map((c) => (
        <motion.a
          key={c.brand}
          href="#contact"
          whileHover={{ y: -4 }}
          className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 text-white/90 backdrop-blur transition"
        >
          <div className="mb-6 flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-white">{c.brand}</h3>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">{c.result}</span>
          </div>
          <p className="text-sm text-white/70">{c.summary}</p>
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-white/20 transition group-hover:opacity-100" />
        </motion.a>
      ))}
    </div>
  )
}
