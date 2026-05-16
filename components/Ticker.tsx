const TICKER_ITEMS = [
  "Luxury",
  "Campaign",
  "UX",
  "Government",
  "Consumer Tech",
  "Brand Launch",
  "OoH",
  "TVC",
  "Exhibitions",
  "Product Launch",
];

function TickerContent() {
  return (
    <span className="flex shrink-0 items-center whitespace-nowrap px-8 text-sm uppercase tracking-[0.2em] text-neutral-600 md:text-base">
      {TICKER_ITEMS.map((item, index) => (
        <span key={item} className="flex items-center">
          {index > 0 && <span className="mx-4 text-neutral-400">·</span>}
          {item}
        </span>
      ))}
      <span className="mx-4 text-neutral-400">·</span>
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-neutral-200 bg-neutral-50 py-5">
      <div className="flex w-max animate-marquee">
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
}
