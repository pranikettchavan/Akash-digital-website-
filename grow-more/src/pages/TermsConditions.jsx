import { motion } from 'framer-motion'
import { EMAIL, PHONE } from '../constants'

const sections = [
  {
    num: '1',
    title: 'Acceptance of Terms',
    content: <p>By accessing or using the Grow More Digi Solutions website and services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our Website and services immediately.</p>,
  },
  {
    num: '2',
    title: 'Services',
    content: (
      <>
        <p className="mb-3">Grow More Digi Solutions provides digital marketing services including but not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Social Media Marketing</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Influencer Marketing</li>
          <li>Web Development</li>
          <li>Email Marketing</li>
          <li>Performance Advertising</li>
        </ul>
        <p className="mt-3">We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.</p>
      </>
    ),
  },
  {
    num: '3',
    title: 'Client Responsibilities',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>You agree to provide accurate, current, and complete information when engaging our services.</li>
        <li>You are responsible for maintaining the confidentiality of any login credentials associated with your account.</li>
        <li>You agree not to use our services for any unlawful or prohibited purpose.</li>
        <li>You are responsible for ensuring all materials provided to us (images, content, branding) do not infringe on any third-party intellectual property rights.</li>
      </ul>
    ),
  },
  {
    num: '4',
    title: 'Payments and Billing',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>All fees for services are as agreed upon in the service proposal or invoice.</li>
        <li>Payments are due as per the timeline specified in your agreement with us.</li>
        <li>Late payments may result in suspension or termination of services.</li>
        <li>All payments are processed securely through our trusted third-party payment gateways.</li>
        <li>Fees once paid are non-refundable unless otherwise agreed in writing.</li>
      </ul>
    ),
  },
  {
    num: '5',
    title: 'Intellectual Property',
    content: (
      <>
        <p className="mb-3">All content, designs, strategies, and deliverables created by Grow More Digi Solutions remain our intellectual property until full payment is received, at which point ownership transfers to the client as specified in the service agreement.</p>
        <p>The Grow More Digi Solutions name, logo, and website content are protected by applicable intellectual property laws. You may not reproduce or use them without our written consent.</p>
      </>
    ),
  },
  {
    num: '6',
    title: 'Confidentiality',
    content: <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This obligation survives the termination of any service agreement.</p>,
  },
  {
    num: '7',
    title: 'Results and Guarantees',
    content: <p>While we are committed to delivering the best possible results, Grow More Digi Solutions does not guarantee specific outcomes such as rankings, follower counts, or revenue figures. Digital marketing results depend on numerous factors outside our control, including market conditions, platform algorithms, and client-side factors.</p>,
  },
  {
    num: '8',
    title: 'Limitation of Liability',
    content: <p>To the maximum extent permitted by law, Grow More Digi Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or Website. Our total liability to you shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>,
  },
  {
    num: '9',
    title: 'Termination',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Either party may terminate a service agreement with 30 days' written notice unless otherwise specified.</li>
        <li>We reserve the right to terminate services immediately if you breach these Terms or engage in conduct harmful to Grow More Digi Solutions or its clients.</li>
        <li>Upon termination, all outstanding payments become immediately due.</li>
      </ul>
    ),
  },
  {
    num: '10',
    title: 'Third-Party Services',
    content: <p>Our services may involve the use of third-party platforms (e.g., Meta, Google, Instagram). Your use of such platforms is subject to their own terms and conditions, and we are not responsible for any changes, restrictions, or actions taken by these platforms.</p>,
  },
  {
    num: '11',
    title: 'Governing Law',
    content: <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.</p>,
  },
  {
    num: '12',
    title: 'Changes to These Terms',
    content: <p>We reserve the right to update these Terms and Conditions at any time. The revised version will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the updated Terms.</p>,
  },
]

export default function TermsConditions() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 text-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #F2F4FD 0%, #EAECF8 60%, #E4E7F8 100%)' }}>
        <div className="absolute w-[420px] h-[420px] rounded-full bg-primary blur-[100px] opacity-[0.07] -top-[100px] -right-[80px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Legal</motion.span>
          <motion.h1 className="font-head font-black mt-5 mb-4 tracking-tight text-[#0A0F2C]" style={{ fontSize: 'clamp(32px,5vw,58px)' }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Terms &amp; <span className="grad-text">Conditions</span>
          </motion.h1>
          <motion.p className="text-[#697386] text-[15px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Effective Date: April 2026 &nbsp;·&nbsp; Grow More Digi Solutions
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[860px] mx-auto px-6">
          {/* Intro */}
          <motion.div className="glass-card rounded-2xl p-8 mb-10 text-[15px] text-[#3D4466] leading-[1.85]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            Welcome to <span className="font-semibold text-[#0A0F2C]">Grow More Digi Solutions</span>. These Terms and Conditions govern your use of our website and services. Please read them carefully before engaging with us.
          </motion.div>

          {/* Sections */}
          <div className="flex flex-col gap-8">
            {sections.map((s, i) => (
              <motion.div
                key={s.num}
                className="glass-card rounded-2xl p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-grad-primary flex items-center justify-center text-white text-[13px] font-black flex-shrink-0">{s.num}</span>
                  <h2 className="font-head font-black text-[19px] text-[#0A0F2C]">{s.title}</h2>
                </div>
                <div className="text-[#3D4466] text-[15px] leading-[1.85]">{s.content}</div>
              </motion.div>
            ))}
          </div>

          {/* Contact box */}
          <motion.div className="mt-10 rounded-2xl p-8 text-center" style={{ background: '#F6F8FD', border: '1px solid #E2E5F0' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#697386] text-[15px] mb-1">For any questions regarding these Terms, contact us at</p>
            <a href={`mailto:${EMAIL}`} className="text-primary font-semibold text-[16px] hover:underline">{EMAIL}</a>
            <p className="text-[#9AA3B8] text-[14px] mt-1">{PHONE}</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
