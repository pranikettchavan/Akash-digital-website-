import { useState } from 'react'
import { motion } from 'framer-motion'
import { PHONE, WHATSAPP, WHATSAPP_URL, EMAIL, ADDRESS, FORM_LINK, SOCIALS } from '../constants'
import Stats from '../sections/Stats'
import CTABanner from '../sections/CTABanner'

const SOCIAL_ICONS = {
  Instagram: {
    bg: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
  },
  LinkedIn: {
    bg: '#0A66C2',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  Facebook: {
    bg: 'linear-gradient(to bottom, #18acfe 0%, #0163e0 100%)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
}

const IconMail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)
const IconWhatsApp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.535 5.87L0 24l6.341-1.535A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.952 0-3.771-.538-5.32-1.47l-.38-.226-3.764.912.946-3.657-.249-.389A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)
const IconPhone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.9-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
  </svg>
)
const IconPin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const contactMethods = [
  { icon: <IconMail />, label: 'Email Us', value: EMAIL, href: `mailto:${EMAIL}`, bg: 'rgba(91,82,232,0.08)', border: 'rgba(91,82,232,0.16)', color: '#5B52E8' },
  { icon: <IconWhatsApp />, label: 'Chat on WhatsApp', value: `+${WHATSAPP}`, href: WHATSAPP_URL, bg: 'rgba(37,211,102,0.08)', border: 'rgba(37,211,102,0.18)', color: '#25D366', external: true },
  { icon: <IconPhone />, label: 'Call Us Directly', value: PHONE, href: `tel:${PHONE}`, bg: 'rgba(255,107,53,0.08)', border: 'rgba(255,107,53,0.18)', color: '#FF6B35' },
  { icon: <IconPin />, label: 'Our Office', value: ADDRESS, href: null, bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.16)', color: '#0EA5E9' },
]

const faqs = [
  { q: 'How quickly can you start?', a: 'We typically onboard new clients within 3-5 business days. After our discovery call, we\'ll have a strategy draft ready within the first week.' },
  { q: 'What is your minimum budget?', a: 'We work with budgets starting from ₹10,000/month for focused services. We\'ll recommend a package that maximizes impact for your specific goals.' },
  { q: 'How do you measure results?', a: 'We provide detailed monthly reports covering all agreed KPIs — from impressions and engagement to leads, conversions, and revenue impact. Full transparency.' },
  { q: 'Do you offer flexible contracts?', a: 'We offer both monthly and quarterly options. We believe results should keep you, not contracts — which is why most clients stay with us for years.' },
]

function PageHero() {
  return (
    <section className="relative pt-40 pb-28 text-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #F2F4FD 0%, #EAECF8 60%, #E4E7F8 100%)' }}>
      <div className="absolute w-[420px] h-[420px] rounded-full bg-primary blur-[100px] opacity-[0.07] -top-[100px] -right-[80px] pointer-events-none" />
      <div className="absolute w-[320px] h-[320px] rounded-full bg-accent blur-[100px] opacity-[0.05] -bottom-[80px] -left-[60px] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Contact Us</motion.span>
        <motion.h1 className="font-head font-black mt-5 mb-5 tracking-tight text-[#0A0F2C]" style={{ fontSize: 'clamp(36px,6vw,68px)' }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Let's Start Your <span className="grad-text">Growth Journey</span>
        </motion.h1>
        <motion.p className="text-[#3D4466] text-[18px] max-w-[520px] mx-auto leading-[1.8] mb-10" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Ready to transform your digital presence? Reach out and let's discuss how we can engineer measurable growth for your brand.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 bg-grad-phone text-white font-semibold px-6 py-3 rounded-full text-[15px] btn-glow-phone hover:-translate-y-[2px] transition-all">📞 Call Us Now</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-grad-green text-white font-semibold px-6 py-3 rounded-full text-[15px] btn-glow-green hover:-translate-y-[2px] transition-all">💬 WhatsApp Us</a>
        </motion.div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [fields, setFields] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})

  const inputClass = "w-full bg-[#F6F8FD] border border-[#E2E5F0] rounded-xl px-[18px] py-[14px] text-[#0A0F2C] text-[15px] placeholder:text-[#9AA3B8] focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/[0.08] transition-all duration-200 outline-none"

  const validate = () => {
    const e = {}
    if (!fields.name.trim()) e.name = 'Full name is required'
    if (!fields.phone.trim()) {
      e.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(fields.phone.replace(/[\s\-+]/g, '').replace(/^91/, ''))) {
      e.phone = 'Please enter a valid 10-digit phone number'
    }
    if (!fields.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSend = () => {
    if (!validate()) return
    const text = `Hi! 👋 I came across your website and would love to connect.

Name: ${fields.name.trim()}
Phone: ${fields.phone.trim()}
Message: ${fields.message.trim()}`

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const set = (key) => (e) => {
    setFields(f => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors(er => ({ ...er, [key]: '' }))
  }

  return (
    <div className="space-y-5">
      {/* Full Name */}
      <div>
        <label className="block text-[11px] font-bold text-[#9AA3B8] uppercase tracking-[0.06em] mb-2">Full Name *</label>
        <input
          value={fields.name}
          onChange={set('name')}
          placeholder="John Smith"
          className={`${inputClass} ${errors.name ? 'border-red-400 bg-red-50' : ''}`}
        />
        {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-[11px] font-bold text-[#9AA3B8] uppercase tracking-[0.06em] mb-2">Phone Number *</label>
        <input
          type="tel"
          value={fields.phone}
          onChange={(e) => {
            const val = e.target.value.replace(/[^\d+\s\-]/g, '')
            const digits = val.replace(/[\s\-+]/g, '').replace(/^91/, '')
            if (digits.length <= 10) set('phone')({ target: { value: val } })
          }}
          maxLength={13}
          placeholder="+91 9876543210"
          className={`${inputClass} ${errors.phone ? 'border-red-400 bg-red-50' : ''}`}
        />
        {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-[11px] font-bold text-[#9AA3B8] uppercase tracking-[0.06em] mb-2">Message *</label>
        <textarea
          value={fields.message}
          onChange={set('message')}
          placeholder="Tell us about your business, goals, and what you're looking to achieve..."
          rows={5}
          className={`${inputClass} resize-none ${errors.message ? 'border-red-400 bg-red-50' : ''}`}
        />
        {errors.message && <p className="text-red-500 text-[12px] mt-1">{errors.message}</p>}
      </div>

      {/* WhatsApp Button */}
      <button
        type="button"
        onClick={handleSend}
        className="w-full flex items-center justify-center gap-3 bg-grad-green text-white font-bold py-4 rounded-full text-[16px] btn-glow-green hover:-translate-y-[2px] transition-all duration-200"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.535 5.87L0 24l6.341-1.535A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.952 0-3.771-.538-5.32-1.47l-.38-.226-3.764.912.946-3.657-.249-.389A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        Send on WhatsApp
      </button>
      <p className="text-[12px] text-[#9AA3B8] text-center leading-[1.6]">Opens WhatsApp with your details pre-filled. We respond within 24 hours.</p>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero />

      <section className="py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 items-start">

            {/* Left: Info */}
            <motion.div className="glass-card rounded-3xl p-12" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
              <h2 className="hidden lg:block font-head font-black text-[28px] mb-3 text-[#0A0F2C]">Get In <span className="grad-text">Touch</span></h2>
              <p className="hidden lg:block text-[#697386] text-[15px] leading-[1.8] mb-10">We'd love to hear about your business. Reach us through any channel — we respond fast.</p>

              <div className="hidden lg:flex flex-col gap-4 mb-10">
                {contactMethods.map(({ icon, label, value, href, bg, border, color, external }) => {
                  const content = (
                    <div className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-200" style={{ background: '#F6F8FD', border: '1px solid #E2E5F0' }}>
                      <div className="w-[54px] h-[54px] rounded-[15px] flex items-center justify-center flex-shrink-0" style={{ background: bg, border: `1px solid ${border}`, color }}>{icon}</div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-[#9AA3B8] uppercase tracking-[0.06em] mb-1">{label}</div>
                        <div className="text-[16px] font-bold text-[#0A0F2C] break-all">{value}</div>
                      </div>
                    </div>
                  )
                  return href ? (
                    <motion.a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
                      className="block hover:translate-x-[6px] transition-transform duration-200" whileHover={{ x: 6 }}>
                      {content}
                    </motion.a>
                  ) : <div key={label}>{content}</div>
                })}
              </div>

              <h3 className="font-head font-bold text-[16px] mb-4 text-[#0A0F2C]">Instant Connect</h3>
              <div className="flex flex-col gap-3 mb-8">
                <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 bg-grad-phone text-white font-semibold py-3 px-4 rounded-2xl text-[13px] lg:text-[14px] lg:justify-start hover:-translate-y-[2px] transition-all whitespace-nowrap overflow-hidden text-ellipsis">📞 Call Now — {PHONE}</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-grad-green text-white font-semibold py-3 px-4 rounded-2xl text-[13px] lg:text-[14px] lg:justify-start hover:-translate-y-[2px] transition-all whitespace-nowrap overflow-hidden text-ellipsis">💬 WhatsApp — +{WHATSAPP}</a>
                <a href={`mailto:${EMAIL}`} className="flex items-center justify-center gap-2 bg-grad-primary text-white font-semibold py-3 px-4 rounded-2xl text-[13px] lg:text-[14px] lg:justify-start hover:-translate-y-[2px] transition-all whitespace-nowrap overflow-hidden text-ellipsis">✉️ Send a Mail</a>
                <a href={FORM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-grad-yellow text-[#1A1A1A] font-bold py-3 px-4 rounded-2xl text-[13px] lg:text-[14px] lg:justify-start hover:-translate-y-[2px] transition-all whitespace-nowrap overflow-hidden text-ellipsis">📋 Fill Consultation Form</a>
              </div>

              <h3 className="font-head font-bold text-[16px] mb-3 text-[#0A0F2C]">Follow Us</h3>
              <div className="grid grid-cols-3 gap-2">
                {SOCIALS.map(s => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 py-3 rounded-xl glass-card"
                    whileHover={{ y: -4, boxShadow: `0 10px 28px ${s.bg}`, transition: { duration: 0.2 } }}
                  >
                    <span className="w-9 h-9 rounded-[10px] flex items-center justify-center" style={{ background: SOCIAL_ICONS[s.label]?.bg }}>
                      {SOCIAL_ICONS[s.label]?.icon}
                    </span>
                    <span className="text-[10px] text-[#9AA3B8] font-semibold leading-tight text-center">{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
              <div className="glass-card rounded-3xl p-12 mb-6">
                <h2 className="font-head font-black text-[24px] mb-2 text-[#0A0F2C]">Send Us a <span className="grad-text">Message</span></h2>
                <p className="text-[#697386] text-[14px] mb-9"></p>
                <ContactForm />
              </div>

              <div className="rounded-2xl p-7" style={{ background: '#F6F8FD', border: '1px solid #E2E5F0' }}>
                <p className="font-head font-bold text-[16px] mb-2 text-[#0A0F2C]">🎯 Prefer Our Official Consultation Form?</p>
                <p className="text-[#697386] text-[14px] leading-[1.75] mb-5">Fill our detailed Google Form and get a completely free, no-obligation digital marketing strategy report for your business.</p>
                <a href={FORM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-grad-yellow text-[#1A1A1A] font-bold py-4 px-6 rounded-xl text-[15px] btn-glow-yellow hover:-translate-y-[2px] transition-all w-full">📋 Open Free Consultation Form</a>
              </div>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div className="mt-14 rounded-3xl h-[320px] flex flex-col items-center justify-center gap-3" style={{ background: '#F6F8FD', border: '1px solid #E2E5F0' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[52px]">📍</div>
            <h3 className="font-head font-bold text-[18px] text-[#3D4466]">Find Us at Our Office</h3>
            <p className="text-[#9AA3B8] text-[14px]">{ADDRESS}</p>
            <a href={`https://maps.google.com/?q=${ADDRESS}`} target="_blank" rel="noopener noreferrer" className="mt-3 border border-[#E2E5F0] bg-white text-[#697386] hover:text-primary text-[13px] font-semibold px-5 py-2 rounded-full transition-all hover:border-primary/30">Open in Google Maps →</a>
          </motion.div>
        </div>
      </section>

      <Stats />

      <section className="py-28 bg-[#F6F8FD]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-14">
            <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Quick Answers</motion.span>
            <motion.h2 className="font-head font-black mt-4 tracking-tight text-[#0A0F2C]" style={{ fontSize: 'clamp(30px,4.5vw,52px)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              Frequently Asked <span className="grad-text">Questions</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <motion.div key={i} className="glass-card rounded-2xl p-8" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08 }} whileHover={{ y: -5, borderColor: 'rgba(91,82,232,0.22)', transition: { duration: 0.2 } }}>
                <h3 className="font-head font-bold text-[17px] mb-3 text-[#0A0F2C]">{faq.q}</h3>
                <p className="text-[#697386] text-[14px] leading-[1.75]">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Every Great Partnership Starts" titleHighlight="With a Conversation" subtitle="Don't let competitors get ahead. Let's talk today and map out your path to digital dominance — for free." />
    </>
  )
}
