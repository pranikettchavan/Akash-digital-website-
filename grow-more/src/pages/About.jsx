import { motion } from 'framer-motion'
import WhyChooseUs from '../sections/WhyChooseUs'
import Stats from '../sections/Stats'
import CTABanner from '../sections/CTABanner'
import { VALUES, EMAIL, SOCIALS } from '../constants'

function PageHero() {
  return (
    <section className="relative pt-40 pb-24 text-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #F2F4FD 0%, #EAECF8 60%, #E4E7F8 100%)' }}>
      <div className="absolute w-[420px] h-[420px] rounded-full bg-primary blur-[100px] opacity-[0.07] -top-[100px] -right-[80px] pointer-events-none" />
      <div className="absolute w-[320px] h-[320px] rounded-full bg-accent blur-[100px] opacity-[0.05] -bottom-[80px] -left-[60px] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>About Us</motion.span>
        <motion.h1 className="font-head font-black mt-5 mb-5 tracking-tight leading-[1.08] text-[#0A0F2C]" style={{ fontSize: 'clamp(36px,6vw,68px)' }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          We're the Team That <span className="grad-text">Grows Brands</span>
        </motion.h1>
        <motion.p className="text-[#3D4466] text-[18px] max-w-[520px] mx-auto leading-[1.8]" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          Data-driven. Creatively bold. Results-obsessed. Meet the agency that turns your digital ambitions into measurable reality.
        </motion.p>
      </div>
    </section>
  )
}

function OurStory() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div className="relative" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.4,0,0.2,1] }}>
            <img src="/images/img-team.jpg" alt="Our team" className="w-full h-[500px] object-cover rounded-3xl shadow-card" />
            <div className="absolute -top-5 -left-5 bg-grad-accent rounded-2xl p-5 text-center shadow-glow-cyan">
              <span className="block font-head font-black text-[32px] leading-none text-white">6+</span>
              <span className="block text-[11px] text-white/80 font-bold mt-2">Years of<br/>Excellence</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.4,0,0.2,1] }}>
            <span className="section-tag-pill">
              <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />Who We Are
            </span>
            <h2 className="font-head font-black mt-5 mb-4 tracking-tight leading-[1.1] text-[#0A0F2C]" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
              Your Trusted Partner in <span className="grad-text">Digital Growth</span>
            </h2>
            <div className="w-20 h-1 bg-grad-primary rounded-full mb-6" />
            <p className="text-[#3D4466] text-[15px] leading-[1.85] mb-4">
              Grow More Digital Solutions was born from a single conviction: every brand — regardless of size — deserves world-class digital marketing. Since our founding, we've helped over 500 businesses across India build powerful online presences that generate real, sustainable growth.
            </p>
            <p className="text-[#3D4466] text-[15px] leading-[1.85] mb-8">
              We're not a vendor. We're a growth partner. Our team works as an extension of your business, driven by one goal: your success. We combine agency creativity with analytical rigor — giving you the best of both worlds.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: '🏆', text: 'Award-winning campaigns across 15+ industries' },
                { icon: '🌍', text: 'Headquartered in India, serving clients worldwide' },
                { icon: '👥', text: 'Expert team of 25+ certified digital specialists' },
                { icon: '📊', text: '500+ brands scaled to market leadership' },
                { icon: '🚀', text: '1,200+ projects delivered with measurable ROI' },
              ].map((h, i) => (
                <motion.div key={i} className="flex items-center gap-3 p-4 glass-card rounded-xl" whileHover={{ x: 4, borderColor: 'rgba(91,82,232,0.22)', transition: { duration: 0.2 } }}>
                  <span className="text-[22px]">{h.icon}</span>
                  <span className="text-[15px] font-semibold text-[#0A0F2C]">{h.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MissionVision() {
  return (
    <section className="py-28 bg-[#F6F8FD]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Our North Star</motion.span>
          <motion.h2 className="font-head font-black mt-4 mb-4 tracking-tight text-[#0A0F2C]" style={{ fontSize: 'clamp(30px,4.5vw,52px)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Mission & <span className="grad-text">Vision</span>
          </motion.h2>
          <motion.div className="w-20 h-1 bg-grad-primary rounded-full mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <motion.div className="rounded-3xl p-12 glass-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="text-[52px] mb-5">🎯</div>
            <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary mb-3">Our Mission</div>
            <h3 className="font-head font-black text-[26px] mb-4 text-[#0A0F2C]">Empowering Every Brand to Grow</h3>
            <p className="text-[#3D4466] text-[15px] leading-[1.85]">To deliver measurable, transformative digital marketing solutions that empower businesses of all sizes to build powerful online presences, generate consistent leads, and achieve sustainable revenue growth. We commit to transparency, integrity, and relentless innovation in every strategy we build.</p>
          </motion.div>
          <motion.div className="rounded-3xl p-12 glass-card" style={{ borderColor: 'rgba(14,165,233,0.18)' }} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="text-[52px] mb-5">🌟</div>
            <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-accent mb-3">Our Vision</div>
            <h3 className="font-head font-black text-[26px] mb-4 text-[#0A0F2C]">India's Most Trusted Digital Growth Partner</h3>
            <p className="text-[#3D4466] text-[15px] leading-[1.85]">To be recognized as India's most trusted and results-driven digital marketing agency — known for turning ambitious brands into market leaders through the perfect fusion of strategic thinking, creative excellence, and cutting-edge technology. We envision a future where every Indian business thrives online.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>What Drives Us</motion.span>
          <motion.h2 className="font-head font-black mt-4 mb-4 tracking-tight text-[#0A0F2C]" style={{ fontSize: 'clamp(30px,4.5vw,52px)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Our Core <span className="grad-text">Values</span>
          </motion.h2>
          <motion.div className="w-20 h-1 bg-grad-primary rounded-full mx-auto mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />
          <motion.p className="text-[#697386] text-[17px] leading-[1.75] max-w-[520px] mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            These aren't just words on a wall — they're the principles guiding every campaign, every strategy, every client interaction.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-3xl p-10 text-center"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.08 }}
              whileHover={{ y: -8, borderColor: 'rgba(91,82,232,0.25)', boxShadow: '0 20px 48px rgba(91,82,232,0.1)', transition: { duration: 0.25 } }}
            >
              <div className="text-[52px] mb-5">{v.icon}</div>
              <h3 className="font-head font-bold text-[19px] mb-3 text-[#0A0F2C]">{v.title}</h3>
              <p className="text-[#697386] text-[14px] leading-[1.75]">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="py-14 md:py-28 bg-[#F6F8FD]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>The Minds Behind Your Growth</motion.span>
          <motion.h2 className="font-head font-black mt-4 tracking-tight text-[#0A0F2C]" style={{ fontSize: 'clamp(30px,4.5vw,52px)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            A Team That Truly <span className="grad-text">Gets Digital</span>
          </motion.h2>
        </div>
        <motion.div className="relative rounded-3xl overflow-hidden h-[420px] shadow-card" initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <img src="/images/img-digital-marketing.jpg" alt="Our Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-10">
            <h3 className="font-head font-black text-[26px] mb-2 text-white">25+ Digital Specialists. One Goal: Your Growth.</h3>
            <p className="text-white/70 text-[15px]">Strategy • Creative • Technology • Analytics</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const SOCIAL_META = {
  Instagram: {
    iconBg: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    shadow: 'rgba(220,39,67,0.35)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  LinkedIn: {
    iconBg: '#0A66C2',
    shadow: 'rgba(10,102,194,0.35)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  Facebook: {
    iconBg: 'linear-gradient(to bottom, #18acfe 0%, #0163e0 100%)',
    shadow: 'rgba(1,99,224,0.35)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
}

function SocialConnect() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Stay Connected</motion.span>
        <motion.h2 className="font-head font-black mt-4 mb-3 tracking-tight text-[#0A0F2C]" style={{ fontSize: 'clamp(26px,4vw,44px)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Follow Us on <span className="grad-text">Social Media</span>
        </motion.h2>
        <motion.p className="text-[#697386] text-[16px] mb-10 max-w-[460px] mx-auto leading-[1.75]" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          Tips, campaigns, client wins, and behind-the-scenes — all in your feed.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          {SOCIALS.map((s, i) => {
            const meta = SOCIAL_META[s.label]
            return (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 pl-2 pr-6 py-2 rounded-2xl font-semibold text-[15px] bg-white border border-[#E8EAF0] text-[#0A0F2C] shadow-sm"
                whileHover={{ y: -4, scale: 1.04, boxShadow: `0 14px 36px ${meta?.shadow || 'rgba(0,0,0,0.12)'}` }}
                whileTap={{ scale: 0.97 }}
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: meta?.iconBg || '#ccc' }}
                >
                  {meta?.icon}
                </span>
                {s.label}
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageHero />
      <OurStory />
      <MissionVision />
      <ValuesSection />
      <WhyChooseUs flip badge={{ num: '500+', label: 'Brands Grown' }} showCta={false} />
      <Stats />
      <TeamSection />
      <SocialConnect />
      <CTABanner
        title="Ready to Write Your"
        titleHighlight="Growth Success Story?"
        subtitle="Let's have a conversation about your brand, your goals, and how we can engineer your digital growth together."
        showAll={false}
        primaryBtn={{ label: '✉️ Send a Mail', href: `mailto:${EMAIL}`, external: false }}
      />
    </>
  )
}
