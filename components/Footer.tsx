import FadeInSection from "@/components/FadeInSection";

export default function Footer() {
  return (
    <FadeInSection>
      <footer className="border-t border-neutral-200 px-6 py-20 text-center md:px-10 md:py-28">
        <a
          href="mailto:marcusarriola@gmail.com"
          className="text-2xl font-medium tracking-tight text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900 md:text-3xl"
        >
          Let&apos;s Talk →
        </a>
      </footer>
    </FadeInSection>
  );
}
