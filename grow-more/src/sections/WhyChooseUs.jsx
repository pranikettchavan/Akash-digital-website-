import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const SLIDES = [
  '/images/img-slide-1.jpg',
  '/images/img-slide-2.jpg',
  '/images/img-slide-3.jpg',
  '/images/img-slide-4.jpg',
]

const features = [
  { icon: '📊', title: '100% Data-Driven Approach', desc: 'Every decision is backed by analytics, A/B testing, and real-time performance tracking — no guesswork, just results.' },
  { icon: '🎯', title: 'Conversion-Focused Strategy', desc: 'We build funnels that attract traffic and convert visitors into qualified leads and paying customers.' },
  { icon: '🤝', title: 'Dedicated Account Management', desc: 'Your dedicated growth manager is available with transparent reporting, weekly updates, and proactive communication.' },
  { icon: '⚡', title: 'Fast Execution, Real Impact', desc: 'We move fast and adapt faster. Agile teams execute campaigns with speed without sacrificing quality.' },
]

export default function WhyChooseUs({
  flip = false,
  badge = { num: '★ 4.9', label: 'Client Rating' },
  ctaLabel = 'Learn More About Us',
  ctaHref = null,
  ctaLink = '/about',
  showCta = true,
}) {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-14 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary blur-[140px] opacity-[0.04] -top-24 -right-24 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Visual */}
          <motion.div
            className={`relative ${flip ? 'lg:order-2' : ''}`}
            initial={{ opacity: 0, x: flip ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative w-full h-[540px] rounded-3xl overflow-hidden shadow-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide}
                  src={SLIDES[slide]}
                  alt="Why choose Grow More"
                  className="w-full h-[540px] object-cover absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              </AnimatePresence>
              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === slide ? 'bg-white w-5' : 'bg-white/50 w-2'}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-7 -right-7 bg-grad-primary rounded-2xl p-7 text-center shadow-glow min-w-[140px]">
              <span className="block font-head font-black text-[38px] leading-none text-white">{badge.num}</span>
              <span className="block text-[12px] text-white/80 mt-2 font-medium">{badge.label}</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className={`pb-7 ${flip ? 'lg:order-1' : ''}`}
            initial={{ opacity: 0, x: flip ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="section-tag-pill">
              <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
              Why Choose Us
            </span>
            <h2
              className="font-head font-black mt-5 mb-4 tracking-tight leading-[1.1] text-[#0A0F2C]"
              style={{ fontSize: 'clamp(28px,4vw,48px)' }}
            >
              We Don't Just Market.<br />
              We <span className="grad-text">Engineer Growth.</span>
            </h2>
            <div className="w-20 h-1 bg-grad-primary rounded-full mb-5" />
            <p className="text-[#3D4466] text-[16px] leading-[1.8] max-w-[520px]">
              Every strategy we build is backed by data, powered by creativity, and relentlessly
              optimized for results. We treat your business like our own.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex gap-5 items-start p-5 glass-card rounded-xl group"
                  whileHover={{ x: 6, borderColor: 'rgba(91,82,232,0.25)', transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-[14px] bg-primary/[0.08] border border-[#E2E5F0] flex items-center justify-center text-[22px] flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-head font-bold text-[16px] mb-1 text-[#0A0F2C]">{f.title}</h4>
                    <p className="text-[#697386] text-[14px] leading-[1.65]">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {showCta && (
              <div className="mt-10">
                {ctaHref ? (
                  <a href={ctaHref} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-grad-primary text-white font-semibold px-7 py-4 rounded-full text-[15px] btn-glow-primary hover:-translate-y-[3px] transition-all duration-200">
                    {ctaLabel} →
                  </a>
                ) : (
                  <Link to={ctaLink}
                    className="inline-flex items-center gap-2 bg-grad-primary text-white font-semibold px-7 py-4 rounded-full text-[15px] btn-glow-primary hover:-translate-y-[3px] transition-all duration-200">
                    {ctaLabel} →
                  </Link>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
