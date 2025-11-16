import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const Item = ({ id, label, onClick }) => (
    <a
      href={`#${id}`}
      onClick={() => onClick?.()}
      className="group relative inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/90 hover:text-white"
    >
      <span>{label}</span>
      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
      <span className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </a>
  )

  return (
    <div className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/5 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="relative">
              <motion.div
                className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-blue-500/80 to-cyan-400/80 ring-1 ring-white/20"
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              >
                <Sparkles className="h-4 w-4 text-white drop-shadow" />
              </motion.div>
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-blue-500/10 blur-xl" />
            </div>
            <span className="text-sm font-semibold tracking-wider text-white/90">AURORA AI</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((n) => (
              <Item key={n.id} {...n} />
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 shadow-sm backdrop-blur hover:bg-white/10 transition">
              Start a project
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/90"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="grid gap-1">
                {navItems.map((n) => (
                  <Item key={n.id} {...n} onClick={() => setOpen(false)} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
