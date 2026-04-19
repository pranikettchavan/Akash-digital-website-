import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SERVICES, FORM_LINK } from '../constants'
import Stats from '../sections/Stats'
import CTABanner from '../sections/CTABanner'

function PageHero() {
  return (
    <section className="relative pt-40 pb-24 text-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #F2F4FD 0%, #EAECF8 60%, #E4E7F8 100%)' }}>
      <div className="absolute w-[420px] h-[420px] rounded-full bg-primary blur-[100px] opacity-[0.07] -top-[100px] -right-[80px] pointer-events-none" />
      <div className="absolute w-[320px] h-[320px] rounded-full bg-accent blur-[100px] opacity-[0.05] -bottom-[80px] -left-[60px] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Our Services</motion.span>
        <motion.h1 className="font-head font-black mt-5 mb-5 tracking-tight leading-[1.08] text-[#0A0F2C]" style={{ fontSize: 'clamp(36px,6vw,68px)' }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Solutions That <span className="grad-text">Power Your Growth</span>
        </motion.h1>
        <motion.p className="text-[#3D4466] text-[18px] max-w-[520px] mx-auto leading-[1.8]" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Comprehensive, data-driven digital marketing services designed to transform your online presence and drive measurable business results.
        </motion.p>
      </div>
    </section>
  )
}

function ServicesOverview() {
  return (
    <section className="py-20 bg-[#F6F8FD]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <motion.a
              key={svc.id}
              href={`#${svc.id}`}
              className="glass-card rounded-2xl p-6 flex flex-col gap-3 group"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, borderColor: 'rgba(91,82,232,0.25)', boxShadow: '0 16px 40px rgba(91,82,232,0.1)', transition: { duration: 0.22 } }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[26px]" style={{ background: svc.iconBg, border: `1px solid ${svc.iconBorder}` }}>{svc.icon}</div>
              <div>
                <h3 className="font-head font-bold text-[15px] mb-1 text-[#0A0F2C]">{svc.name}</h3>
                <p className="text-[#697386] text-[13px] leading-[1.6] line-clamp-2">{svc.short}</p>
              </div>
              <span className="text-[13px] font-bold text-primary group-hover:text-secondary transition-colors mt-auto">Learn More →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceDetail({ svc, index }) {
  const isFlipped = index % 2 !== 0
  return (
    <div id={svc.id} className="py-20 border-b border-[#E2E5F0] last:border-none scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            className={`relative rounded-3xl overflow-hidden h-[400px] shadow-card ${isFlipped ? 'lg:order-2' : ''}`}
            initial={{ opacity: 0, x: isFlipped ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.4,0,0.2,1] }}
          >
            <img src={svc.img} alt={svc.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent pointer-events-none" />
          </motion.div>

          <motion.div
            className={isFlipped ? 'lg:order-1' : ''}
            initial={{ opacity: 0, x: isFlipped ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.4,0,0.2,1] }}
          >
            <span className="section-tag-pill mb-4 inline-flex">
              <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
              Service {String(index + 1).padStart(2, '0')}
            </span>
            <div className="w-20 h-20 rounded-[22px] flex items-center justify-center text-[38px] mb-6 mt-4" style={{ background: svc.iconBg, border: `1px solid ${svc.iconBorder}` }}>{svc.icon}</div>
            <h2 className="font-head font-black tracking-tight leading-[1.1] mb-4 text-[#0A0F2C]" style={{ fontSize: 'clamp(28px,3.5vw,38px)' }}>
              {svc.name.split(' ').slice(0,-1).join(' ')}{' '}
              <span className="grad-text">{svc.name.split(' ').slice(-1)[0]}</span>
            </h2>
            <p className="text-[#3D4466] text-[16px] leading-[1.85] mb-7">{svc.desc}</p>

            <div className="flex flex-col gap-3 mb-9">
              {svc.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-[15px] text-[#3D4466]">
                  <div className="w-[22px] h-[22px] rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[12px] font-bold flex-shrink-0">✓</div>
                  {b}
                </div>
              ))}
            </div>

            <a href={FORM_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-grad-primary text-white font-semibold px-7 py-4 rounded-full text-[15px] btn-glow-primary hover:-translate-y-[3px] transition-all duration-200">
              {svc.cta} →
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <>
      <PageHero />
      <ServicesOverview />
      <section className="bg-white">
        {SERVICES.map((svc, i) => <ServiceDetail key={svc.id} svc={svc} index={i} />)}
      </section>
      <Stats />
      <CTABanner title="Which Service Will" titleHighlight="Transform Your Business?" subtitle="Book a free strategy consultation and discover exactly which services will drive the fastest, highest-impact growth for your brand." />
    </>
  )
}
