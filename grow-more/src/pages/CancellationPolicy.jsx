import LegalLayout from '../components/LegalLayout'
import { refundSections } from '../data/refundPolicy'

export default function CancellationPolicy() {
  return (
    <LegalLayout
      active="/cancellation"
      heading={<>Cancellation &amp; <span className="grad-text">Refund Policy</span></>}
      intro={<>This Cancellation &amp; Refund Policy applies to all services provided by <span className="font-semibold text-[#0A0F2C]">Grow More Digi Solutions</span>. Please read it alongside our Terms &amp; Conditions before engaging with us.</>}
      sections={refundSections}
      showRefund={false}
    />
  )
}
