import { motion } from 'framer-motion'
import { EMAIL } from '../constants'

const sections = [
  {
    num: '1',
    title: 'Information We Collect',
    content: (
      <>
        <p className="mb-3">We may collect the following types of information:</p>
        <p className="font-semibold text-[#0A0F2C] mb-1">Personal Information</p>
        <p className="mb-3">When you interact with our Website or services, such as making a payment, we may collect personal details including but not limited to:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Name</li><li>Email address</li><li>Phone number</li><li>Billing address</li>
        </ul>
        <p className="font-semibold text-[#0A0F2C] mb-1">Non-Personal Information</p>
        <p className="mb-3">We may collect non-identifiable data such as:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Browser type and version</li><li>IP address</li><li>Device information</li><li>Usage data (e.g., pages visited, time spent on the Website)</li>
        </ul>
        <p className="font-semibold text-[#0A0F2C] mb-1">Payment-Related Information</p>
        <p>When you use our payment gateway, we collect transaction details necessary to process payments securely. Sensitive payment data (e.g., card numbers) is handled by our trusted third-party payment processors and is not stored directly by us.</p>
      </>
    ),
  },
  {
    num: '2',
    title: 'How We Collect Information',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li><span className="font-semibold text-[#0A0F2C]">Directly from You:</span> When you provide details during account creation, payment transactions, or form submissions.</li>
        <li><span className="font-semibold text-[#0A0F2C]">Automatically:</span> Through cookies, web beacons, and similar technologies that track your interaction with our Website.</li>
        <li><span className="font-semibold text-[#0A0F2C]">Third Parties:</span> From payment gateway providers or analytics services to facilitate transactions and improve our offerings.</li>
      </ul>
    ),
  },
  {
    num: '3',
    title: 'How We Use Your Information',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Process and complete payment transactions securely.</li>
        <li>Provide, maintain, and improve our Website and services.</li>
        <li>Communicate with you, including responding to inquiries or sending transactional emails (e.g., payment confirmations).</li>
        <li>Ensure the security of our Website and prevent fraudulent activities.</li>
        <li>Comply with legal obligations and resolve disputes.</li>
        <li>Analyze usage trends to enhance user experience.</li>
      </ul>
    ),
  },
  {
    num: '4',
    title: 'Sharing Your Information',
    content: (
      <>
        <p className="mb-3">We do not sell or rent your personal information. We may share your information with:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-semibold text-[#0A0F2C]">Payment Processors:</span> Third-party payment gateway providers (e.g., Razorpay, Stripe, PayPal) to process transactions securely. These providers have their own privacy policies, which we encourage you to review.</li>
          <li><span className="font-semibold text-[#0A0F2C]">Service Providers:</span> Trusted partners who assist us in operating our Website, conducting business, or providing analytics, under strict confidentiality agreements.</li>
          <li><span className="font-semibold text-[#0A0F2C]">Legal Authorities:</span> When required by law, regulation, or legal process, or to protect the rights, property, or safety of Grow More, our users, or others.</li>
        </ul>
      </>
    ),
  },
  {
    num: '5',
    title: 'Security of Your Information',
    content: <p>We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no online system is 100% secure, and we cannot guarantee absolute security of data transmitted over the internet.</p>,
  },
  {
    num: '6',
    title: 'Cookies and Tracking Technologies',
    content: <p>We use cookies and similar technologies to enhance your experience, analyze usage, and facilitate payment processes. You can manage your cookie preferences through your browser settings, though disabling cookies may affect Website functionality.</p>,
  },
  {
    num: '7',
    title: 'Your Rights and Choices',
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
    num: '8',
    title: 'Third-Party Links',
    content: <p>Our Website may contain links to third-party sites (e.g., payment gateways). We are not responsible for the privacy practices or content of these external sites. We recommend reviewing their privacy policies before providing any information.</p>,
  },
  {
    num: '9',
    title: 'International Data Transfers',
    content: <p>If you are located outside India, your information may be transferred to and processed in India or other countries where our service providers operate. We ensure appropriate safeguards are in place to protect your data.</p>,
  },
  {
    num: '10',
    title: 'Retention of Information',
    content: <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, or resolve disputes.</p>,
  },
  {
    num: '11',
    title: 'Changes to This Privacy Policy',
    content: <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Effective Date." We encourage you to review this policy periodically.</p>,
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 text-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #F2F4FD 0%, #EAECF8 60%, #E4E7F8 100%)' }}>
        <div className="absolute w-[420px] h-[420px] rounded-full bg-primary blur-[100px] opacity-[0.07] -top-[100px] -right-[80px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.span className="section-tag-pill" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Legal</motion.span>
          <motion.h1 className="font-head font-black mt-5 mb-4 tracking-tight text-[#0A0F2C]" style={{ fontSize: 'clamp(32px,5vw,58px)' }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Privacy <span className="grad-text">Policy</span>
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
            At <span className="font-semibold text-[#0A0F2C]">Grow More Digi Solutions</span> ("Grow More," "we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including payment processing functionalities. By accessing or using our Website and services, you agree to the terms of this Privacy Policy.
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
            <p className="text-[#697386] text-[15px] mb-2">Questions about this policy? Reach us at</p>
            <a href={`mailto:${EMAIL}`} className="text-primary font-semibold text-[16px] hover:underline">{EMAIL}</a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
