import { EMAIL } from '../constants'

export const refundSections = [
  {
    num: '1', title: 'Overview',
    content: <p>We at Grow More Digi Solutions aim to deliver our SEO, social media marketing, web design, and branding services to a high standard. This policy sets out how cancellations and refund requests are handled.</p>,
  },
  {
    num: '2', title: 'Cancelling a Service',
    content: <p>Clients may request to cancel an ongoing engagement by providing written notice, as specified in their service agreement. Cancellation takes effect from the notice period agreed at the start of the engagement, and any work already completed remains payable.</p>,
  },
  {
    num: '3', title: 'Refund Eligibility',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Advance payments for work not yet started may be refunded, minus any administrative costs already incurred.</li>
        <li>Fees for work already delivered, such as completed website builds, campaigns, or content, are generally non-refundable.</li>
        <li>Retainer-based services are billed for the period they cover and are not refundable once that period has begun.</li>
      </ul>
    ),
  },
  {
    num: '4', title: 'Non-Refundable Items',
    content: <p>Third-party costs paid on a client's behalf — such as ad spend, domain registration, software licences, or stock assets — are non-refundable once incurred, as these are typically paid to external providers.</p>,
  },
  {
    num: '5', title: 'How to Request a Refund',
    content: <p>To request a refund or raise a cancellation, please contact us at <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a> with your project details. We will review the request and respond within a reasonable time.</p>,
  },
  {
    num: '6', title: 'Refund Timeline',
    content: <p>Where a refund is approved, it will typically be processed to the original payment method within 7–14 business days.</p>,
  },
]
