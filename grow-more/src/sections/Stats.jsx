import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { STATS } from '../constants'

function StatCounter({ end, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = null
    const duration = 2000
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, end])

  return (
    <span ref={ref} className="block font-head font-black grad-text leading-none" style={{ fontSize: 'clamp(32px,5vw,64px)' }}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-10 md:py-20 border-y border-[#E2E5F0]" style={{ background: 'linear-gradient(135deg, rgba(91,82,232,0.04) 0%, #FFFFFF 50%, rgba(14,165,233,0.03) 100%)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E2E5F0]">
          {STATS.map((s, i) => (
            <div key={i} className="text-center py-8 px-3 overflow-hidden">
              <StatCounter end={s.count} suffix={s.suffix} />
              <span className="block text-[#697386] text-[15px] font-medium mt-3">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
