import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EMAIL, PHONE } from '../constants'

const privacySections = [
  {
    num: '1', title: 'Information We Collect',
    content: (
      <>
        <p className="mb-3">We may collect the following types of information:</p>
        <p className="font-semibold text-[#0A0F2C] mb-1">Personal Information</p>
        <p className="mb-3">When you interact with our Website or services, such as making a payment, we may collect personal details including but not limited to:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1"><li>Name</li><li>Email address</li><li>Phone number</li><li>Billing address</li></ul>
        <p className="font-semibold text-[#0A0F2C] mb-1">Non-Personal Information</p>
        <p className="mb-3">We may collect non-identifiable data such as:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1"><li>Browser type and version</li><li>IP address</li><li>Device information</li><li>Usage data (e.g., pages visited, time spent on the Website)</li></ul>
        <p className="font-semibold text-[#0A0F2C] mb-1">Payment-Related Information</p>
        <p>When you use our payment gateway, we collect transaction details necessary to process payments securely. Sensitive payment data (e.g., card numbers) is handled by our trusted third-party payment processors and is not stored directly by us.</p>
      </>
    ),
  },
  {
    num: '2', title: 'How We Collect Information',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li><span className="font-semibold text-[#0A0F2C]">Directly from You:</span> When you provide details during account creation, payment transactions, or form submissions.</li>
        <li><span className="font-semibold text-[#0A0F2C]">Automatically:</span> Through cookies, web beacons, and similar technologies that track your interaction with our Website.</li>
        <li><span className="font-semibold text-[#0A0F2C]">Third Parties:</span> From payment gateway providers or analytics services to facilitate transactions and improve our offerings.</li>
      </ul>
    ),
  },
  {
    num: '3', title: 'How We Use Your Information',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Process and complete payment transactions securely.</li>
        <li>Provide, maintain, and improve our Website and services.</li>
        <li>Communicate with you, including responding to inquiries or sending transactional emails.</li>
        <li>Ensure the security of our Website and prevent fraudulent activities.</li>
        <li>Comply with legal obligations and resolve disputes.</li>
        <li>Analyze usage trends to enhance user experience.</li>
      </ul>
    ),
  },
  {
    num: '4', title: 'Sharing Your Information',
    content: (
      <>
        <p className="mb-3">We do not sell or rent your personal information. We may share your information with:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-semibold text-[#0A0F2C]">Payment Processors:</span> Third-party payment gateway providers (e.g., Razorpay, Stripe, PayPal) to process transactions securely.</li>
          <li><span className="font-semibold text-[#0A0F2C]">Service Providers:</span> Trusted partners who assist us in operating our Website, under strict confidentiality agreements.</li>
          <li><span className="font-semibold text-[#0A0F2C]">Legal Authorities:</span> When required by law, regulation, or legal process.</li>
        </ul>
      </>
    ),
  },
  {
    num: '5', title: 'Security of Your Information',
    content: <p>We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no online system is 100% secure.</p>,
  },
  {
    num: '6', title: 'Cookies and Tracking Technologies',
    content: <p>We use cookies and similar technologies to enhance your experience, analyze usage, and facilitate payment processes. You can manage your cookie preferences through your browser settings, though disabling cookies may affect Website functionality.</p>,
  },
  {
    num: '7', title: 'Your Rights and Choices',
    content: (
      <>
        <p className="mb-3">Depending on your jurisdiction, you may have rights such as:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Accessing or correcting your personal information.</li>
          <li>Requesting deletion of your data (subject to legal obligations).</li>
          <li>Opting out of marketing communications.</li>
        </ul>
        <p>To exercise these rights, please contact us at <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>.</p>
      </>
    ),
  },
  {
    num: '8', title: 'Third-Party Links',
    content: <p>Our Website may contain links to third-party sites (e.g., payment gateways). We are not responsible for the privacy practices or content of these external sites.</p>,
  },
  {
    num: '9', title: 'International Data Transfers',
    content: <p>If you are located outside India, your information may be transferred to and processed in India or other countries where our service providers operate. We ensure appropriate safeguards are in place to protect your data.</p>,
  },
  {
    num: '10', title: 'Retention of Information',
    content: <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, or resolve disputes.</p>,
  },
  {
    num: '11', title: 'Changes to This Privacy Policy',
    content: <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Effective Date." We encourage you to review this policy periodically.</p>,
  },
]

const termsSections = [
  {
    num: '1', title: 'Acceptance of Terms',
    content: <p>By accessing or using the Grow More Digi Solutions website and services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our Website and services immediately.</p>,
  },
  {
    num: '2', title: 'Services',
    content: (
      <>
        <p className="mb-3">Grow More Digi Solutions provides digital marketing services including but not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Social Media Marketing</li><li>Search Engine Optimization (SEO)</li><li>Influencer Marketing</li><li>Web Development</li><li>Email Marketing</li><li>Performance Advertising</li>
        </ul>
        <p className="mt-3">We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.</p>
      </>
    ),
  },
  {
    num: '3', title: 'Client Responsibilities',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>You agree to provide accurate, current, and complete information when engaging our services.</li>
        <li>You are responsible for maintaining the confidentiality of any login credentials associated with your account.</li>
        <li>You agree not to use our services for any unlawful or prohibited purpose.</li>
        <li>You are responsible for ensuring all materials provided to us do not infringe on any third-party intellectual property rights.</li>
      </ul>
    ),
  },
  {
    num: '4', title: 'Payments and Billing',
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
    num: '5', title: 'Intellectual Property',
    content: (
      <>
        <p className="mb-3">All content, designs, strategies, and deliverables created by Grow More Digi Solutions remain our intellectual property until full payment is received, at which point ownership transfers to the client as specified in the service agreement.</p>
        <p>The Grow More Digi Solutions name, logo, and website content are protected by applicable intellectual property laws.</p>
      </>
    ),
  },
  {
    num: '6', title: 'Confidentiality',
    content: <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This obligation survives the termination of any service agreement.</p>,
  },
  {
    num: '7', title: 'Results and Guarantees',
    content: <p>While we are committed to delivering the best possible results, Grow More Digi Solutions does not guarantee specific outcomes such as rankings, follower counts, or revenue figures. Digital marketing results depend on numerous factors outside our control.</p>,
  },
  {
    num: '8', title: 'Limitation of Liability',
    content: <p>To the maximum extent permitted by law, Grow More Digi Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or Website.</p>,
  },
  {
    num: '9', title: 'Termination',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Either party may terminate a service agreement with 30 days' written notice unless otherwise specified.</li>
        <li>We reserve the right to terminate services immediately if you breach these Terms.</li>
        <li>Upon termination, all outstanding payments become immediately due.</li>
      </ul>
    ),
  },
  {
    num: '10', title: 'Third-Party Services',
    content: <p>Our services may involve the use of third-party platforms (e.g., Meta, Google, Instagram). Your use of such platforms is subject to their own terms and conditions, and we are not responsible for any changes or actions taken by these platforms.</p>,
  },
  {
    num: '11', title: 'Governing Law',
    content: <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.</p>,
  },
  {
    num: '12', title: 'Changes to These Terms',
    content: <p>We reserve the right to update these Terms and Conditions at any time. The revised version will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the updated Terms.</p>,
  },
]

export default function Legal() {
  const [active, setActive] = useState('terms')

  const sections = active === 'terms' ? termsSections : privacySections
  const title = active === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 text-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #F2F4FD 0%, #EAECF8 60%, #E4E7F8 100%)' }}>
        <div className="absolute w-[420px] h-[420px] rounded-full bg-primary blur-[100px] opacity-[0.07] -top-[100px] -right-[80px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Legal</motion.span>
          <motion.h1 className="font-head font-black mt-5 mb-6 tracking-tight text-[#0A0F2C]" style={{ fontSize: 'clamp(32px,5vw,58px)' }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {active === 'terms' ? <>Terms &amp; <span className="grad-text">Conditions</span></> : <>Privacy <span className="grad-text">Policy</span></>}
          </motion.h1>

          {/* Toggle */}
          <motion.div className="inline-flex items-center bg-white rounded-2xl p-1.5 shadow-sm border border-[#E2E5F0]" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <button
              onClick={() => setActive('terms')}
              className={`relative px-6 py-2.5 rounded-xl text-[14px] font-bold transition-all duration-250 ${active === 'terms' ? 'text-white' : 'text-[#697386] hover:text-[#0A0F2C]'}`}
            >
              {active === 'terms' && (
                <motion.span layoutId="tab-bg" className="absolute inset-0 bg-grad-primary rounded-xl" style={{ zIndex: 0 }} />
              )}
              <span className="relative z-10">Terms &amp; Conditions</span>
            </button>
            <button
              onClick={() => setActive('privacy')}
              className={`relative px-6 py-2.5 rounded-xl text-[14px] font-bold transition-all duration-250 ${active === 'privacy' ? 'text-white' : 'text-[#697386] hover:text-[#0A0F2C]'}`}
            >
              {active === 'privacy' && (
                <motion.span layoutId="tab-bg" className="absolute inset-0 bg-grad-primary rounded-xl" style={{ zIndex: 0 }} />
              )}
              <span className="relative z-10">Privacy Policy</span>
            </button>
          </motion.div>

        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[860px] mx-auto px-6">
          {/* Intro */}
          <motion.div key={active + '-intro'} className="glass-card rounded-2xl p-8 mb-10 text-[15px] text-[#3D4466] leading-[1.85]" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            {active === 'terms'
              ? <>Welcome to <span className="font-semibold text-[#0A0F2C]">Grow More Digi Solutions</span>. These Terms and Conditions govern your use of our website and services. Please read them carefully before engaging with us.</>
              : <>At <span className="font-semibold text-[#0A0F2C]">Grow More Digi Solutions</span> ("Grow More," "we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</>
            }
          </motion.div>

          {/* Sections */}
          <AnimatePresence mode="wait">
            <motion.div key={active} className="flex flex-col gap-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              {sections.map((s, i) => (
                <motion.div
                  key={s.num}
                  className="glass-card rounded-2xl p-8"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-grad-primary flex items-center justify-center text-white text-[13px] font-black flex-shrink-0">{s.num}</span>
                    <h2 className="font-head font-black text-[19px] text-[#0A0F2C]">{s.title}</h2>
                  </div>
                  <div className="text-[#3D4466] text-[15px] leading-[1.85]">{s.content}</div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

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
