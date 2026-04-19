import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PHONE, WHATSAPP, WHATSAPP_URL, FORM_LINK, BRAND } from '../constants'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/contact', label: 'Contact Us' },
]

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => { setOpen(false) }, [location.pathname])

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E2E5F0] shadow-[0_2px_12px_rgba(91,82,232,0.06)]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/logo.jpeg"
              alt="Grow More"
              className="h-16 w-16 object-contain bg-white rounded-xl p-[3px] shadow-[0_2px_8px_rgba(91,82,232,0.1)]"
            />
            <div className="leading-snug">
              <span className="block font-head font-black text-[16px] tracking-tight grad-text">{BRAND.name}</span>
              <span className="block font-head font-black text-[16px] tracking-tight grad-text">{BRAND.sub}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`relative text-[15px] font-medium transition-colors duration-200 group ${
                    isActive(to) ? 'text-[#0A0F2C]' : 'text-[#697386] hover:text-[#0A0F2C]'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-grad-text rounded-full transition-all duration-300 ${
                      isActive(to) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 text-[13px] font-semibold text-[#697386] hover:text-[#0A0F2C] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.535 5.87L0 24l6.341-1.535A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.952 0-3.771-.538-5.32-1.47l-.38-.226-3.764.912.946-3.657-.249-.389A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grad-primary text-white text-[14px] font-semibold px-5 py-[10px] rounded-full hover:-translate-y-[2px] hover:shadow-glow transition-all duration-200"
            >
              Get a Quote
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <motion.span
              className="block w-6 h-[2px] bg-[#0A0F2C] rounded-full origin-center"
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-[#0A0F2C] rounded-full"
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-[#0A0F2C] rounded-full origin-center"
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#F6F8FD]/98 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full border border-[#E2E5F0] bg-white flex items-center justify-center text-[#0A0F2C] text-xl hover:bg-primary hover:text-white hover:border-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✕
            </motion.button>

            <motion.ul
              className="flex flex-col items-center gap-4 mb-8"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {links.map(({ to, label }) => (
                <motion.li key={to} variants={itemVariants}>
                  <Link
                    to={to}
                    className={`font-head font-black text-[22px] tracking-tight transition-all ${
                      isActive(to) ? 'grad-text' : 'text-[#0A0F2C] hover:text-primary'
                    }`}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="flex flex-col gap-2 w-full max-w-xs px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 bg-grad-phone text-white font-semibold py-2.5 rounded-full text-[14px]"
              >
                📞 Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-grad-green text-white font-semibold py-2.5 rounded-full text-[14px]"
              >
                💬 WhatsApp Us
              </a>
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-grad-primary text-white font-semibold py-2.5 rounded-full text-[14px]"
              >
                ✦ Get a Quote
              </a>
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-[11px] text-[#9AA3B8]">© 2026 Grow More Digi Solutions</p>
              <Link to="/legal" onClick={() => setOpen(false)} className="text-[11px] text-[#9AA3B8] hover:text-primary transition-colors">
                Terms &amp; Conditions · Privacy Policy
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
