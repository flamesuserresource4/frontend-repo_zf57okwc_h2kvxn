import { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0005,
      vy: (Math.random() - 0.5) * 0.0005,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.6 + 0.2,
    }))

    function resize() {
      canvas.width = canvas.clientWidth * DPR
      canvas.height = canvas.clientHeight * DPR
    }
    resize()

    function step() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'lighter'

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -0.05 || p.x > 1.05) p.vx *= -1
        if (p.y < -0.05 || p.y > 1.05) p.vy *= -1

        const x = p.x * canvas.width
        const y = p.y * canvas.height

        const grd = ctx.createRadialGradient(x, y, 0, x, y, p.r * 10 * DPR)
        grd.addColorStop(0, `rgba(59,130,246,${p.a})`)
        grd.addColorStop(1, 'rgba(59,130,246,0)')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(x, y, p.r * 8 * DPR, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(step)
    }

    window.addEventListener('resize', resize)
    step()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
}
