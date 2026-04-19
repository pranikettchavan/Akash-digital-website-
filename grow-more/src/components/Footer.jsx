import { Link } from 'react-router-dom'

import { PHONE, WHATSAPP, WHATSAPP_URL, EMAIL, ADDRESS, FORM_LINK, BRAND } from '../constants'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/contact', label: 'Contact Us' },
]
const serviceLinks = [
  { to: '/services#social-media', label: 'Social Media Marketing' },
  { to: '/services#digital-marketing', label: 'Digital Marketing' },
  { to: '/services#influencer', label: 'Influencer Marketing' },
  { to: '/services#seo', label: 'SEO Services' },
  { to: '/services#web-dev', label: 'Web Development' },
  { to: '/services#email', label: 'Email Marketing' },
]

const contactItems = [
  {
    label: 'Email Us',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    color: '#5B52E8',
    bg: 'rgba(91,82,232,0.08)',
    border: 'rgba(91,82,232,0.18)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: `+${WHATSAPP}`,
    href: WHATSAPP_URL,
    external: true,
    color: '#25D366',
    bg: 'rgba(37,211,102,0.08)',
    border: 'rgba(37,211,102,0.18)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.535 5.87L0 24l6.341-1.535A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.952 0-3.771-.538-5.32-1.47l-.38-.226-3.764.912.946-3.657-.249-.389A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
  {
    label: 'Call Us',
    value: PHONE,
    href: `tel:${PHONE}`,
    color: '#FF6B35',
    bg: 'rgba(255,107,53,0.08)',
    border: 'rgba(255,107,53,0.18)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.9-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
      </svg>
    ),
  },
  {
    label: 'Office Address',
    value: ADDRESS,
    href: null,
    color: '#0EA5E9',
    bg: 'rgba(14,165,233,0.08)',
    border: 'rgba(14,165,233,0.18)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#EDEEF8] border-t border-[#E2E5F0]">
      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src="/images/logo.jpeg" alt="Grow More" className="h-12 w-12 object-contain bg-white rounded-xl p-1 shadow-[0_2px_8px_rgba(91,82,232,0.1)]" />
              <div className="leading-snug">
                <span className="block font-head font-black text-[16px] grad-text">{BRAND.name}</span>
                <span className="block font-head font-black text-[16px] grad-text">{BRAND.sub}</span>
              </div>
            </Link>
            <p className="text-[14px] text-[#697386] leading-[1.85] max-w-[290px]">
              Transforming online presence into measurable business growth through
              data-driven digital marketing, creative strategy, and relentless execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-head font-bold text-[15px] text-[#0A0F2C] mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-[14px] text-[#697386] hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span className="text-primary text-[12px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {label}
                </Link>
              ))}
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#697386] hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
              >
                <span className="text-primary text-[12px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                Get a Quote
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-head font-bold text-[15px] text-[#0A0F2C] mb-6">Our Services</h4>
            <nav className="flex flex-col gap-3">
              {serviceLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-[14px] text-[#697386] hover:text-primary hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span className="text-primary text-[12px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-head font-bold text-[15px] text-[#0A0F2C] mb-6">Get In Touch</h4>
            <div className="flex flex-col gap-4">
              {contactItems.map(({ icon, label, value, href, color, bg, border, external }) => (
                <div key={label} className="flex gap-3 items-start">
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 mt-[2px]"
                    style={{ background: bg, border: `1px solid ${border}`, color }}
                  >
                    {icon}
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-[#9AA3B8] uppercase tracking-[0.05em] mb-[3px]">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="text-[13px] text-[#697386] hover:text-primary transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-[13px] text-[#697386] leading-[1.5] block">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E2E5F0] py-6 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-[13px] text-[#4A5268]">
            © 2026 Grow More Digi Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[13px]">
            <Link to="/legal" className="text-[#4A5268] hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-[#9AA3B8]">·</span>
            <Link to="/legal" className="text-[#4A5268] hover:text-primary transition-colors">Terms &amp; Conditions</Link>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
