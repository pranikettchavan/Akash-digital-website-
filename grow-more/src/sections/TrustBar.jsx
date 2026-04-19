const items = [
  'Social Media Marketing', 'Search Engine Optimization', 'Influencer Campaigns',
  'Web Development', 'Email Marketing', 'Performance Ads', 'Brand Strategy',
  'Content Creation', 'Lead Generation', 'E-Commerce Growth',
]

export default function TrustBar() {
  const doubled = [...items, ...items]
  return (
    <div className="bg-[#EDEEF8] border-y border-[#E2E5F0] py-7 overflow-hidden">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#9AA3B8] mb-5">
        Trusted by brands across industries
      </p>
      <div className="flex">
        <div className="flex gap-14 animate-marquee whitespace-nowrap w-max">
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[#697386] hover:text-[#0A0F2C] transition-colors text-[14px] font-semibold cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
