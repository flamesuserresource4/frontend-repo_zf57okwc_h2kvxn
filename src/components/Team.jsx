import { motion } from 'framer-motion'

const team = [
  { name: 'Ava Chen', role: 'Founder & CEO' },
  { name: 'Liam Patel', role: 'Head of Engineering' },
  { name: 'Maya Ruiz', role: 'Design Director' },
  { name: 'Ethan Park', role: 'ML Lead' },
]

export default function Team() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
      {team.map((p) => (
        <motion.div
          key={p.name}
          whileHover={{ y: -3 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
        >
          <div className="mb-4 h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500/70 to-cyan-400/70 ring-1 ring-white/20" />
          <div className="text-white">{p.name}</div>
          <div className="text-sm text-white/60">{p.role}</div>
          <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-blue-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  )
}
