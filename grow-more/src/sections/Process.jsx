import { motion } from 'framer-motion'
import { PROCESS } from '../constants'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay } },
})

export default function Process() {
  return (
    <section className="py-28 bg-[#F6F8FD]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-4">
          <motion.span className="section-tag-pill" variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <span className="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
            Our Process
          </motion.span>
          <motion.h2
            className="font-head font-black mt-4 mb-4 tracking-tight text-[#0A0F2C]"
            style={{ fontSize: 'clamp(30px,4.5vw,52px)' }}
            variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            From Strategy to <span className="grad-text">Success</span>
          </motion.h2>
          <motion.div className="w-20 h-1 bg-grad-primary rounded-full mx-auto mb-5" variants={fadeUp(0.15)} initial="hidden" whileInView="show" viewport={{ once: true }} />
          <motion.p
            className="text-[#3D4466] text-[17px] leading-[1.75] max-w-[520px] mx-auto"
            variants={fadeUp(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            A proven 4-step process that transforms your digital presence into a measurable, scalable growth engine.
          </motion.p>
        </div>

        <div className="relative mt-16">
          <div
            className="hidden lg:block absolute top-[44px] h-[2px] opacity-15 rounded-full"
            style={{ left: '12%', right: '12%', background: 'linear-gradient(90deg, #5B52E8, #0EA5E9)' }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {PROCESS.map((step, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-3xl p-10 text-center relative"
                variants={fadeUp(i * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{
                  y: -8,
                  borderColor: 'rgba(91,82,232,0.25)',
                  boxShadow: '0 20px 48px rgba(91,82,232,0.11)',
                  transition: { duration: 0.25 },
                }}
              >
                <div
                  className="absolute -top-[22px] left-1/2 -translate-x-1/2 w-11 h-11 rounded-full flex items-center justify-center font-head font-black text-[15px] text-white shadow-glow"
                  style={{ background: 'linear-gradient(135deg, #5B52E8, #7C3AED)', border: '3px solid #F6F8FD' }}
                >
                  {step.num}
                </div>
                <div className="text-[44px] mb-5 mt-2">{step.icon}</div>
                <h3 className="font-head font-bold text-[18px] mb-3 text-[#0A0F2C]">{step.title}</h3>
                <p className="text-[#697386] text-[14px] leading-[1.75]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
