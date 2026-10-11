import LegalLayout from '../components/LegalLayout'
import { EMAIL } from '../constants'

const sections = [
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

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      active="/privacy-policy"
      heading={<>Privacy <span className="grad-text">Policy</span></>}
      intro={<>At <span className="font-semibold text-[#0A0F2C]">Grow More Digi Solutions</span> ("Grow More," "we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</>}
      sections={sections}
    />
  )
}
