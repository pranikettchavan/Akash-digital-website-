import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PHONE, WHATSAPP, WHATSAPP_URL, FORM_LINK } from '../constants'

const SLIDES = [
  '/images/img-slide-1.jpg',
  '/images/img-slide-2.jpg',
  '/images/img-slide-3.jpg',
  '/images/img-slide-4.jpg',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

export default function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-grad-hero overflow-hidden pt-28 pb-20">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[650px] h-[650px] bg-primary rounded-full blur-[100px] opacity-[0.09] -top-[200px] -right-[120px] animate-float" />
        <div className="absolute w-[450px] h-[450px] bg-accent rounded-full blur-[100px] opacity-[0.07] -bottom-[150px] -left-[100px] animate-float-slow" />
        <div className="absolute w-[300px] h-[300px] bg-secondary rounded-full blur-[80px] opacity-[0.05] top-[40%] left-[38%] animate-float" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(91,82,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(91,82,232,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
              <span className="section-tag-pill">
                <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot flex-shrink-0" />
                🏆 India’s #1 Digital Marketing Agency 
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-head font-black leading-[1.07] tracking-tight mb-6 text-[#0A0F2C]"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              <span className="block">Transforming Online Presence Into</span>
              <span className="block grad-text">Measurable Business Growth.</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={item} className="text-[#3D4466] text-[17px] leading-[1.85] max-w-[520px] mb-10">
              We don't just run campaigns — we engineer growth. From strategy to execution,
              Grow More powers your brand's digital journey with data-driven precision
              and creative brilliance that converts.
            </motion.p>

            {/* CTA Buttons — hidden on mobile, shown on md+ */}
            <motion.div variants={item} className="hidden md:flex flex-wrap gap-3 mb-14">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 bg-grad-phone text-white font-semibold px-6 py-[14px] rounded-full text-[15px] btn-glow-phone hover:-translate-y-[3px] transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-grad-green text-white font-semibold px-6 py-[14px] rounded-full text-[15px] btn-glow-green hover:-translate-y-[3px] transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.535 5.87L0 24l6.341-1.535A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.952 0-3.771-.538-5.32-1.47l-.38-.226-3.764.912.946-3.657-.249-.389A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-grad-primary text-white font-semibold px-6 py-[14px] rounded-full text-[15px] btn-glow-primary hover:-translate-y-[3px] transition-all duration-200"
              >
                ✦ Free Consultation
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="flex gap-10 mb-8">
              {[
                { num: '750+', label: 'Happy Clients' },
                { num: '6+', label: 'Years Experience' },
                { num: '98%', label: 'Satisfaction Rate' },
              ].map(({ num, label }, i) => (
                <div key={i} className="flex items-center gap-4">
                  {i > 0 && <div className="w-px h-8 bg-[#E2E5F0]" />}
                  <div>
                    <div className="font-head font-black text-[28px] leading-none grad-text">{num}</div>
                    <div className="text-[12px] text-[#9AA3B8] font-medium mt-1">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons — mobile only, one line full width */}
            <motion.div variants={item} className="flex md:hidden items-center gap-2 w-full">
              <a
                href={`tel:${PHONE}`}
                className="flex-1 flex items-center justify-center gap-1 bg-grad-phone text-white font-semibold py-2.5 rounded-full text-[12px] btn-glow-phone transition-all duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1 bg-grad-green text-white font-semibold py-2.5 rounded-full text-[12px] btn-glow-green transition-all duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.535 5.87L0 24l6.341-1.535A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.952 0-3.771-.538-5.32-1.47l-.38-.226-3.764.912.946-3.657-.249-.389A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1 bg-grad-primary text-white font-semibold py-2.5 rounded-full text-[12px] btn-glow-primary transition-all duration-200"
              >
                ✦ Consult
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 44 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.25 }}
          >
            {/* Glow behind image */}
            <div className="absolute -inset-[2px] rounded-[26px] bg-grad-primary opacity-20 blur-[18px] -z-10" />

            {/* Slideshow */}
            <div className="rounded-3xl overflow-hidden shadow-card relative h-[460px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide}
                  src={SLIDES[slide]}
                  alt="Digital Marketing"
                  className="w-full h-[460px] object-cover absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === slide ? 'bg-white w-5' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Float Card 1 — bottom left */}
            <motion.div
              className="absolute -bottom-6 -left-10 bg-white border border-[#E2E5F0] rounded-2xl p-4 flex items-center gap-3 shadow-card"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center text-xl flex-shrink-0">
                📈
              </div>
              <div>
                <div className="text-[11px] text-[#9AA3B8] font-medium">Revenue Growth</div>
                <div className="text-[20px] font-head font-black text-[#0A0F2C] leading-tight">+240%</div>
              </div>
            </motion.div>

            {/* Float Card 2 — top right */}
            <motion.div
              className="absolute -top-6 -right-10 bg-white border border-[#E2E5F0] rounded-2xl p-4 flex items-center gap-3 shadow-card"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                🎯
              </div>
              <div>
                <div className="text-[11px] text-[#9AA3B8] font-medium">Average Ad ROI</div>
                <div className="text-[20px] font-head font-black text-[#0A0F2C] leading-tight">8.5x</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
