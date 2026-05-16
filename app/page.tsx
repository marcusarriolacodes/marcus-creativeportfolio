import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";
import ToneSlider from "@/components/ToneSlider";

const projects = [
  {
    title: "World of Wines & Spirits – The Quest for the Finest",
    description:
      "Ultra-high-net-worth drinkers needed to feel special. We made sure they did.",
  },
  {
    title: "iShopChangi – Tax AbsorbMania",
    description:
      "Singapore's only online tax and duty-absorbed shopping destination goes from URL to IRL.",
  },
  {
    title: "National Heritage Board – Contribute to the Founders' Memorial",
    description:
      "The Founders' Memorial needed story and artefact contributions. We made a roving exhibition.",
  },
  {
    title: "Senoko Energy – Lower My Bills",
    description:
      "SG's oldest electricity provider needed a new, modern angle to reach new, modern, bill-conscious homeowners.",
  },
  {
    title: "Noah Singapore – Your Dick by Decade",
    description:
      "A groundbreaking men's health brand needed to build their audience with more entertaining penis-related storytelling.",
  },
  {
    title: "Po Chai Pills – Take Po Chai Pills!",
    description:
      "A household name and traditional diarrhoea remedy needed its other purposes known. I executed this with toilet humour.",
  },
];

export default function Home() {
  return (
    <main>
      <FadeInSection
        immediate
        className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24"
      >
        <ToneSlider />

        <div className="mx-auto mt-16 max-w-2xl text-center md:mt-20">
          <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
            Senior Copywriter. Story builder. Professional overthinker with way
            too many tabs open.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            From luxury theatre launches and retail activations to government
            campaigns and the occasional medically-approved toilet joke.
          </p>
          <Link
            href="/work"
            className="mt-10 inline-flex items-center text-base font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-[6px] transition-colors hover:decoration-neutral-900 md:mt-12"
          >
            See my work ↓
          </Link>
        </div>
      </FadeInSection>

      <Ticker />

      <FadeInSection className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <h2 className="font-serif text-3xl tracking-tight text-neutral-900 md:text-4xl">
          Some of my professionally-approved chaos:
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <article key={project.title} className="group">
              <div className="aspect-[4/3] bg-neutral-200 transition-colors group-hover:bg-neutral-300" />
              <h3 className="mt-5 text-base font-bold leading-snug text-neutral-900 md:text-lg">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {project.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-14 text-center md:mt-16">
          <Link
            href="/work"
            className="text-base font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900 md:text-lg"
          >
            Check out the rest of my portfolio!
          </Link>
        </div>
      </FadeInSection>

      <Footer />
    </main>
  );
}
