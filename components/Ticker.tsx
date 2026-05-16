const TICKER_ITEMS = [
  "Retail",
  "Toys",
  "Campaign",
  "UX",
  "Consumer Tech",
  "Brand Launch",
  "OoH",
  "TVC",
  "Exhibitions",
  "Product Launch",
  "Luxury",
  "Government",
];

const TICKER_LINE = `${TICKER_ITEMS.join(" · ")} · `;

function TickerSegment() {
  return (
    <span className="inline-block shrink-0 whitespace-nowrap px-6 text-sm uppercase tracking-[0.2em] text-neutral-600 md:px-8 md:text-base">
      {TICKER_LINE}
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-neutral-200 bg-neutral-50 py-5">
      <div className="flex w-max animate-marquee">
        <TickerSegment />
        <TickerSegment />
        <TickerSegment />
        <TickerSegment />
      </div>
    </div>
  );
}
