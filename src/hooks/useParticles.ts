import { useEffect } from 'react'

export const useParticles = (containerId: string) => {
  useEffect(() => {
    const container = document.getElementById(containerId)
    if (!container) return

    const canvas = document.createElement('canvas')
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.zIndex = '0'
    canvas.style.opacity = '0.3'
    container.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particleCount = window.innerWidth < 768 ? 30 : 80
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      color: `rgba(100, 200, 255, ${Math.random() * 0.5 + 0.1})`
    }))

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          p.x = Math.random() * canvas.width
          p.y = Math.random() * canvas.height
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      canvas.remove()
    }
  }, [containerId])
}