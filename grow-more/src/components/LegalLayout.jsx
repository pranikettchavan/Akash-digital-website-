import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { EMAIL, PHONE } from '../constants'
import { refundSections } from '../data/refundPolicy'

const tabs = [
  { to: '/terms-of-service', label: 'Terms & Conditions' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/cancellation', label: 'Cancellation & Refund' },
]

function SectionCard({ num, title, content, delay = 0 }) {
  return (
    <motion.div
      className="glass-card rounded-2xl p-8"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-8 rounded-lg bg-grad-primary flex items-center justify-center text-white text-[13px] font-black flex-shrink-0">{num}</span>
        <h2 className="font-head font-black text-[19px] text-[#0A0F2C]">{title}</h2>
      </div>
      <div className="text-[#3D4466] text-[15px] leading-[1.85]">{content}</div>
    </motion.div>
  )
}

export default function LegalLayout({ active, heading, intro, sections, showRefund = true }) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 text-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #F2F4FD 0%, #EAECF8 60%, #E4E7F8 100%)' }}>
        <div className="absolute w-[420px] h-[420px] rounded-full bg-primary blur-[100px] opacity-[0.07] -top-[100px] -right-[80px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Legal</motion.span>
          <motion.h1 className="font-head font-black mt-5 mb-6 tracking-tight text-[#0A0F2C]" style={{ fontSize: 'clamp(32px,5vw,58px)' }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {heading}
          </motion.h1>

          {/* Tabs */}
          <motion.div className="inline-flex flex-wrap justify-center items-center gap-1 bg-white rounded-2xl p-1.5 shadow-sm border border-[#E2E5F0] max-w-full" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {tabs.map((t) => {
              const isActive = t.to === active
              return (
                <Link
                  key={t.to}
                  to={t.to}
                  className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-[13px] sm:text-[14px] font-bold whitespace-nowrap transition-all duration-250 ${isActive ? 'text-white' : 'text-[#697386] hover:text-[#0A0F2C]'}`}
                >
                  {isActive && <span className="absolute inset-0 bg-grad-primary rounded-xl" style={{ zIndex: 0 }} />}
                  <span className="relative z-10">{t.label}</span>
                </Link>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[860px] mx-auto px-6">
          {/* Intro */}
          <motion.div className="glass-card rounded-2xl p-8 mb-10 text-[15px] text-[#3D4466] leading-[1.85]" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            {intro}
          </motion.div>

          {/* Sections */}
          <div className="flex flex-col gap-8">
            {sections.map((s, i) => (
              <SectionCard key={s.num} num={s.num} title={s.title} content={s.content} delay={i * 0.03} />
            ))}
          </div>

          {/* Refund & Cancellation Policy */}
          {showRefund && (
          <div id="refund-cancellation-policy" className="scroll-mt-32">
            <motion.div className="mt-16 mb-8 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-tag-pill">Refund &amp; Cancellation</span>
              <h2 className="font-head font-black mt-4 tracking-tight text-[#0A0F2C]" style={{ fontSize: 'clamp(26px,3.4vw,36px)' }}>
                Refund &amp; <span className="grad-text">Cancellation Policy</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-8">
              {refundSections.map((s, i) => (
                <SectionCard key={`refund-${s.num}`} num={s.num} title={s.title} content={s.content} delay={i * 0.03} />
              ))}
            </div>
          </div>
          )}

          {/* Contact box */}
          <motion.div className="mt-10 rounded-2xl p-8 text-center" style={{ background: '#F6F8FD', border: '1px solid #E2E5F0' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#697386] text-[15px] mb-1">Questions? Reach us at</p>
            <a href={`mailto:${EMAIL}`} className="text-primary font-semibold text-[16px] hover:underline">{EMAIL}</a>
            <p className="text-[#9AA3B8] text-[14px] mt-1">{PHONE}</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
