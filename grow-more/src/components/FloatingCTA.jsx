import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PHONE, WHATSAPP_URL } from '../constants'

function Tooltip({ text }) {
  return (
    <motion.span
      className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-white border border-[#E2E5F0] text-[#0A0F2C] text-[13px] font-semibold px-3 py-[6px] rounded-lg whitespace-nowrap pointer-events-none shadow-[0_4px_16px_rgba(91,82,232,0.1)]"
      initial={{ opacity: 0, x: 6 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 6 }}
      transition={{ duration: 0.18 }}
    >
      {text}
    </motion.span>
  )
}

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [wpHover, setWpHover] = useState(false)
  const [phHover, setPhHover] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="hidden md:flex fixed bottom-7 right-7 z-50 flex-col gap-3"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {/* WhatsApp */}
          <motion.div className="relative" onHoverStart={() => setWpHover(true)} onHoverEnd={() => setWpHover(false)}>
            <AnimatePresence>{wpHover && <Tooltip text="WhatsApp Us" />}</AnimatePresence>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-14 h-14 rounded-full bg-grad-green flex items-center justify-center text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)]"
              whileHover={{ scale: 1.12, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.133 1.535 5.87L0 24l6.341-1.535A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.952 0-3.771-.538-5.32-1.47l-.38-.226-3.764.912.946-3.657-.249-.389A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </motion.a>
          </motion.div>

          {/* Phone */}
          <motion.div className="relative" onHoverStart={() => setPhHover(true)} onHoverEnd={() => setPhHover(false)}>
            <AnimatePresence>{phHover && <Tooltip text="Call Now" />}</AnimatePresence>
            <motion.a
              href={`tel:${PHONE}`}
              aria-label="Call us"
              className="w-14 h-14 rounded-full bg-grad-phone flex items-center justify-center text-white shadow-[0_8px_24px_rgba(255,107,53,0.35)]"
              whileHover={{ scale: 1.12, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
