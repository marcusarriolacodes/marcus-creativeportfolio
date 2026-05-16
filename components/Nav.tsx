import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="border-b border-neutral-200/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-neutral-900 transition-opacity hover:opacity-70 md:text-xl"
        >
          Marcus Arriola
        </Link>
        <nav className="flex items-center gap-6 md:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-700 transition-colors hover:text-neutral-900 md:text-base"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="mailto:marcusarriola@gmail.com"
            className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white md:px-5 md:py-2"
          >
            Let&apos;s Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
