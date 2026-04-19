import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '../constants'

function Stars({ rating, uid }) {
  return (
    <div className="flex items-center gap-0.5 mb-2">
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.min(1, Math.max(0, rating - (star - 1)))
        const gradId = `sg-${uid}-${star}`
        return (
          <svg key={star} width="13" height="13" viewBox="0 0 24 24">
            <defs>
              <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
                <stop offset={`${fill * 100}%`} stopColor="#FFD700" />
                <stop offset={`${fill * 100}%`} stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill={`url(#${gradId})`}
            />
          </svg>
        )
      })}
      <span className="ml-1 text-[11px] text-[#9AA3B8] font-medium">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [perView, setPerView] = useState(4)
  const timerRef = useRef(null)

  const total = Math.ceil(TESTIMONIALS.length / perView)

  useEffect(() => {
    const updatePer = () => {
      if (window.innerWidth < 640) setPerView(1)
      else if (window.innerWidth < 1024) setPerView(2)
      else setPerView(4)
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
            Client Love
          </motion.span>
          <motion.h2
            className="font-head font-black mt-4 mb-4 tracking-tight text-[#0A0F2C]"
            style={{ fontSize: 'clamp(28px,4.5vw,52px)' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            What Our Clients <span className="grad-text">Say About Us</span>
          </motion.h2>
          <motion.div className="w-20 h-1 bg-grad-primary rounded-full mx-auto mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} />
          <motion.p
            className="text-[#3D4466] text-[16px] sm:text-[17px] leading-[1.75] max-w-[520px] mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Real results, real relationships. Here's what business owners say about partnering with Grow More.
          </motion.p>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="grid gap-4 grid-cols-1 sm:grid-cols-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            >
              {visible.map((t, i) => (
                <motion.div
                  key={i}
                  className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col"
                  whileHover={{ y: -4, borderColor: 'rgba(91,82,232,0.25)', boxShadow: '0 16px 40px rgba(91,82,232,0.09)', transition: { duration: 0.2 } }}
                >
                  <Stars rating={t.rating} uid={`${current}-${i}`} />
                  <p className="text-[#3D4466] text-[13px] sm:text-[14px] leading-[1.8] italic flex-1 mb-4">{t.text}</p>
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-head font-black text-[15px] text-white flex-shrink-0`}>
                      {t.initial}
                    </div>
                    <div>
                      <div className="font-head font-bold text-[13px] sm:text-[14px] text-[#0A0F2C]">{t.name}</div>
                      <div className="text-[11px] text-[#9AA3B8] mt-[1px]">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => goTo(current - 1)}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#E2E5F0] bg-[#F6F8FD] text-[#0A0F2C] text-[18px] flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-200"
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
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#E2E5F0] bg-[#F6F8FD] text-[#0A0F2C] text-[18px] flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-200"
            aria-label="Next"
          >→</button>
        </div>

        <div className="flex justify-center mt-7">
          <motion.a
            href="https://g.page/r/Ce4QF4SVCYxFEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl border-2 border-[rgba(66,133,244,0.35)] bg-white text-[#0A0F2C] font-bold text-[13px] sm:text-[14px] hover:border-[#4285F4] hover:shadow-lg transition-all duration-200 shadow-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Review Us on Google
          </motion.a>
        </div>
      </div>
    </section>
  )
}
