import { motion } from 'framer-motion'
import { PHONE, WHATSAPP_URL, FORM_LINK } from '../constants'

export default function CTABanner({
  title = "Ready to 10X Your Brand's",
  titleHighlight = 'Digital Presence?',
  subtitle = "Join 500+ businesses that trust Grow More to power their growth. Let's build your success story — starting today.",
  showAll = true,
  primaryBtn = null,
}) {
  return (
    <section className="py-28 relative overflow-hidden text-center bg-grad-cta">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-[120px] opacity-[0.07] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="section-tag-pill inline-flex mb-7">
            <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
            Ready to Grow?
          </span>

          <h2
            className="font-head font-black tracking-tight leading-[1.1] mb-5 text-[#0A0F2C]"
            style={{ fontSize: 'clamp(30px,5vw,58px)' }}
          >
            {title}{' '}
            <span className="grad-text">{titleHighlight}</span>
          </h2>

          <p className="text-[#3D4466] text-[18px] leading-[1.8] max-w-[540px] mx-auto mb-12">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {primaryBtn ? (
              <motion.a
                href={primaryBtn.href}
                target={primaryBtn.external !== false ? '_blank' : undefined}
                rel={primaryBtn.external !== false ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 bg-grad-yellow text-[#1A1A1A] font-bold px-8 py-4 rounded-full text-[16px] btn-glow-yellow hover:-translate-y-[3px] transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {primaryBtn.label}
              </motion.a>
            ) : (
              <motion.a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-grad-yellow text-[#1A1A1A] font-bold px-8 py-4 rounded-full text-[16px] btn-glow-yellow hover:-translate-y-[3px] transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                📋 Get a Quote 
              </motion.a>
            )}

            {showAll && (
              <>
                <motion.a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 bg-grad-phone text-white font-semibold px-7 py-4 rounded-full text-[16px] btn-glow-phone hover:-translate-y-[3px] transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  📞 Call Us Now
                </motion.a>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-grad-green text-white font-semibold px-7 py-4 rounded-full text-[16px] btn-glow-green hover:-translate-y-[3px] transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  💬 WhatsApp Us
                </motion.a>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
