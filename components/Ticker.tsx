const TICKER_ITEMS = [
  "Campaign",
  "Activation",
  "UX",
  "Retail",
  "Toys",
  "Collectibles",
  "Consumer Tech",
  "Brand Launch",
  "OoH",
  "TVC",
  "Exhibition",
  "Product Launch",
  "Luxury",
  "Government",
];

const TICKER_LINE = TICKER_ITEMS.join("\u00A0·\u00A0") + "\u00A0·\u00A0";
const REPETITIONS = 4;

function TickerSegment() {
  return (
    <span className="inline-block shrink-0 whitespace-nowrap text-sm uppercase tracking-[0.2em] text-neutral-600 md:text-base">
      {TICKER_LINE}
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-neutral-200 bg-neutral-50 py-5">
      <div className="flex w-max animate-marquee will-change-transform">
        {Array.from({ length: REPETITIONS }, (_, index) => (
          <TickerSegment key={index} />
        ))}
      </div>
    </div>
  );
}
