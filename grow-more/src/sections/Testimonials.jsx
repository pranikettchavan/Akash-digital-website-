import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '../constants'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [perView, setPerView] = useState(3)
  const timerRef = useRef(null)

  const total = Math.ceil(TESTIMONIALS.length / perView)

  useEffect(() => {
    const updatePer = () => {
      if (window.innerWidth < 640) setPerView(1)
      else if (window.innerWidth < 1024) setPerView(2)
      else setPerView(3)
    }
    updatePer()
    window.addEventListener('resize', updatePer)
    return () => window.removeEventListener('resize', updatePer)
  }, [])

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % total)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [total])

  const goTo = (idx) => {
    clearInterval(timerRef.current)
    setCurrent(((idx % total) + total) % total)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 5000)
  }

  const visible = TESTIMONIALS.slice(current * perView, current * perView + perView)

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
            Client Love
          </motion.span>
          <motion.h2
            className="font-head font-black mt-4 mb-4 tracking-tight text-[#0A0F2C]"
            style={{ fontSize: 'clamp(30px,4.5vw,52px)' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            What Our Clients <span className="grad-text">Say About Us</span>
          </motion.h2>
          <motion.div className="w-20 h-1 bg-grad-primary rounded-full mx-auto mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} />
          <motion.p
            className="text-[#3D4466] text-[17px] leading-[1.75] max-w-[520px] mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Real results, real relationships. Here's what business owners say about partnering with Grow More.
          </motion.p>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={`grid gap-6 grid-cols-1 ${perView >= 2 ? 'sm:grid-cols-2' : ''} ${perView >= 3 ? 'lg:grid-cols-3' : ''}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            >
              {visible.map((t, i) => (
                <motion.div
                  key={i}
                  className="glass-card rounded-3xl p-9 flex flex-col"
                  whileHover={{ y: -5, borderColor: 'rgba(91,82,232,0.25)', boxShadow: '0 20px 48px rgba(91,82,232,0.1)', transition: { duration: 0.2 } }}
                >
                  <div className="text-[52px] text-primary/20 font-serif leading-none mb-4">"</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => <span key={s} className="text-[#FFD700] text-[13px]">★</span>)}
                  </div>
                  <p className="text-[#3D4466] text-[15px] leading-[1.85] italic flex-1 mb-7">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-head font-black text-[18px] text-white flex-shrink-0`}>
                      {t.initial}
                    </div>
                    <div>
                      <div className="font-head font-bold text-[15px] text-[#0A0F2C]">{t.name}</div>
                      <div className="text-[12px] text-[#9AA3B8] mt-[2px]">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={() => goTo(current - 1)}
            className="w-12 h-12 rounded-full border border-[#E2E5F0] bg-[#F6F8FD] text-[#0A0F2C] text-[20px] flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-200"
            aria-label="Previous"
          >←</button>
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-7 bg-primary' : 'w-2 bg-[#E2E5F0]'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo(current + 1)}
            className="w-12 h-12 rounded-full border border-[#E2E5F0] bg-[#F6F8FD] text-[#0A0F2C] text-[20px] flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-200"
            aria-label="Next"
          >→</button>
        </div>
      </div>
    </section>
  )
}
