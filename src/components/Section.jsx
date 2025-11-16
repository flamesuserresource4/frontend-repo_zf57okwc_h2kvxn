import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Section({ id, eyebrow, title, desc, children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20% 0px -20% 0px', once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start('show')
  }, [isInView, controls])

  return (
    <section id={id} ref={ref} className="relative overflow-hidden bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          {eyebrow && (
            <div className="mb-2 text-xs font-semibold tracking-widest text-white/60">{eyebrow}</div>
          )}
          {title && (
            <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
          )}
          {desc && (
            <p className="mt-3 text-white/70">{desc}</p>
          )}
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-12"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
