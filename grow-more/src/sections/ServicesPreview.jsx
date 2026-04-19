import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SERVICES } from '../constants'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay } },
})

export default function ServicesPreview() {
  return (
    <section className="py-28 bg-[#F6F8FD]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="section-tag-pill"
            variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
            What We Do Best
          </motion.span>
          <motion.h2
            className="font-head font-black mt-4 mb-4 tracking-tight text-[#0A0F2C]"
            style={{ fontSize: 'clamp(30px,4.5vw,52px)' }}
            variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            Services That Drive <span className="grad-text">Real Results</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-grad-primary rounded-full mx-auto mb-5"
            variants={fadeUp(0.15)} initial="hidden" whileInView="show" viewport={{ once: true }}
          />
          <motion.p
            className="text-[#3D4466] text-[17px] leading-[1.75] max-w-[540px] mx-auto"
            variants={fadeUp(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            From social media to search engines, comprehensive digital marketing solutions
            tailored to your brand's unique growth goals.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              className="glass-card rounded-3xl p-9 cursor-pointer group relative overflow-hidden"
              variants={fadeUp(i * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{
                y: -8,
                borderColor: 'rgba(91,82,232,0.28)',
                boxShadow: '0 20px 56px rgba(91,82,232,0.12)',
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute inset-0 bg-grad-primary opacity-0 group-hover:opacity-[0.025] transition-opacity duration-500 rounded-3xl" />

              <motion.div
                className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center text-[30px] mb-6 relative z-10 flex-shrink-0"
                style={{ background: svc.iconBg, border: `1px solid ${svc.iconBorder}` }}
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {svc.icon}
              </motion.div>

              <h3 className="font-head font-bold text-[19px] mb-3 text-[#0A0F2C] relative z-10">{svc.name}</h3>
              <p className="text-[#697386] text-[14px] leading-[1.75] mb-6 relative z-10">{svc.short}</p>

              <Link
                to={`/services#${svc.id}`}
                className="inline-flex items-center gap-2 text-[14px] font-bold text-primary group-hover:text-secondary transition-colors relative z-10"
                onClick={(e) => e.stopPropagation()}
              >
                Explore Service
                <motion.span
                  className="text-[16px]"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          variants={fadeUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-grad-primary text-white font-semibold px-8 py-4 rounded-full text-[15px] btn-glow-primary hover:-translate-y-[3px] transition-all duration-200"
          >
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
