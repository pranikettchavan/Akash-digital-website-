import LegalLayout from '../components/LegalLayout'

const sections = [
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

export default function TermsConditions() {
  return (
    <LegalLayout
      active="/terms-and-conditions"
      heading={<>Terms &amp; <span className="grad-text">Conditions</span></>}
      intro={<>Welcome to <span className="font-semibold text-[#0A0F2C]">Grow More Digi Solutions</span>. These Terms and Conditions govern your use of our website and services. Please read them carefully before engaging with us.</>}
      sections={sections}
    />
  )
}
