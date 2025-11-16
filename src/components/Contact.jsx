import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks — we will be in touch within 24 hours.')
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Name" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none backdrop-blur focus:ring-2 focus:ring-blue-500/40" />
        <input required type="email" placeholder="Email" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none backdrop-blur focus:ring-2 focus:ring-blue-500/40" />
      </div>
      <input placeholder="Company" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none backdrop-blur focus:ring-2 focus:ring-blue-500/40" />
      <textarea required placeholder="What can we build together?" rows={5} className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none backdrop-blur focus:ring-2 focus:ring-blue-500/40" />
      <div className="flex items-center justify-between">
        <button type="submit" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90">Request consultation</button>
        <span className="text-sm text-white/60">{status}</span>
      </div>
    </form>
  )
}
