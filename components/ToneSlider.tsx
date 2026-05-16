"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TONES = [
  {
    name: "LinkedIn Professional",
    headline:
      "Developing integrated creative solutions designed to drive meaningful audience engagement.",
  },
  {
    name: "Corporate Drone",
    headline:
      "Building campaigns, stories, and experiences that people genuinely want to engage with.",
  },
  {
    name: "Senior Creative",
    headline: "Creating things that people just can't ignore.",
  },
  {
    name: "Confident Nonconformist",
    headline: "Making work people actually give a damn about.",
  },
  {
    name: "Creative Wild Child",
    headline: "LOOK AT MY THING. FEEL SOMETHING. AHHH!!!!",
  },
] as const;

const DEFAULT_INDEX = 2;

export default function ToneSlider() {
  const [index, setIndex] = useState(DEFAULT_INDEX);
  const tone = TONES[index];

  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-8 flex justify-center md:mb-10">
        <AnimatePresence mode="wait">
          <motion.span
            key={tone.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-full border border-neutral-300 px-3 py-1 text-xs tracking-wide text-neutral-600 md:text-sm"
          >
            {tone.name}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="mb-12 flex min-h-[9rem] items-center justify-center md:mb-16 md:min-h-[11rem] lg:min-h-[12rem]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="font-serif text-3xl leading-[1.15] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl"
          >
            {tone.headline}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="w-full">
        <input
          type="range"
          min={0}
          max={TONES.length - 1}
          step={1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
          aria-label="Tone of voice"
          aria-valuetext={tone.name}
          className="tone-slider w-full cursor-pointer"
        />
        <div className="mt-3 flex justify-between gap-4 text-xs text-neutral-500 md:text-sm">
          <span className="text-left">LinkedIn Professional</span>
          <span className="text-right">Creative Wild Child</span>
        </div>
      </div>
    </div>
  );
}
