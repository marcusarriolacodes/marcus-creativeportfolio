import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";
import ToneSlider from "@/components/ToneSlider";

const projects = [
  {
    title: "World of Wines & Spirits -",
subtitle: "The Quest for the Finest",
    description:
      "Ultra-high-net-worth drinkers needed to feel special. We made sure they did.",
    deliverables: "(Campaign, activation, brand launch, live theatre performance script, brand & style guide, etc.)",
    cta: "Curious? View the work here!",
    image: "/images/wows.png",
  },
  {
    title: "iShopChangi -",
    subtitle: "Tax AbsorbMania",
    description:
      "Singapore's only online tax and duty-absorbed shopping destination goes from URL to IRL.",
    deliverables: "(Campaign, activation, physical collateral, digital, social, KOL content with concept, storyboard, talking points, and script)",
    cta: "What's this about? View the work here!",
    image: "/images/tax-absorbmania.jpg",
  },
  {
    title: "National Heritage Board -",
    subtitle: "The Founders' Memorial",
    description:
      "The Founders' Memorial needed story and artefact contributions. We made a roving exhibition.",
    deliverables: "(Campaign, activation, exhibition content, social media posts, video storyboard, interview pointers, script)",
    cta: "Wanna know more? View the work here!",
    image: "/images/nhb.jpg",
  },
  {
    title: "Senoko Energy -",
    subtitle: "Lower My Bills",
    description:
      "SG's oldest electricity provider needed a new, modern angle to reach new, modern, bill-conscious homeowners.",
    deliverables: "(Campaign, concept & direction, social ideas & samples, pitch-winning presentation deck)",
    cta: "How we did it: View the work here!",
    image: "/images/senoko.png",
  },
  {
    title: "Noah Singapore -",
    subtitle: "Your Dick by Decade",
    description:
      "A groundbreaking men's health brand needed to build their audience with more entertaining penis-related storytelling.",
    deliverables: "(Social media post)",
    cta: "Be entertained! View the work here!",
    image: "/images/noah.jpg",
  },
  {
    title: "Po Chai Pills -",
    subtitle: "Take Po Chai Pills!",
    description:
      "A household name and traditional diarrhoea remedy needed its other purposes known. I executed this with toilet humour.",
    deliverables: "(Video concept, storyboard, animated video/ad)",
    cta: "Fellow fan of Po Chai? View the work here!",
    image: "/images/po-chai.png",
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
        <h2 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
          Some of my professionally-approved chaos:
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <article key={project.title} className="group">
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-200 transition-colors group-hover:bg-neutral-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-base font-bold leading-snug text-neutral-900 md:text-lg">
                {project.title}<br />
                {project.subtitle}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {project.description}
              </p>
              <p className="mt-2 text-sm italic text-neutral-400">
                {project.deliverables}
              </p>
              <Link
                href="/work"
                className="mt-3 inline-block text-sm underline text-neutral-600 decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-600"
              >
                {project.cta}
              </Link>
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