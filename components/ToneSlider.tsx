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
const MAX_INDEX = TONES.length - 1;

export default function ToneSlider() {
  const [index, setIndex] = useState(DEFAULT_INDEX);
  const tone = TONES[index];
  const thumbPercent = (index / MAX_INDEX) * 100;

  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mb-12 flex min-h-[9rem] items-center justify-center md:mb-16 md:min-h-[11rem] lg:min-h-[12rem]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="text-3xl font-medium leading-[1.15] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl"
          >
            {tone.headline}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="w-full">
        <div className="relative pb-1 pt-9">
          <div
            className="pointer-events-none absolute top-0 z-10 -translate-x-1/2 whitespace-nowrap"
            style={{ left: `${thumbPercent}%` }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={tone.name}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-full border border-neutral-300 bg-white px-2.5 py-0.5 text-xs tracking-wide text-neutral-600 shadow-sm md:text-sm"
              >
                {tone.name}
              </motion.span>
            </AnimatePresence>
          </div>
          <input
            type="range"
            min={0}
            max={MAX_INDEX}
            step={1}
            value={index}
            onChange={(event) => setIndex(Number(event.target.value))}
            aria-label="Tone of voice"
            aria-valuetext={tone.name}
            className="tone-slider relative z-0 w-full cursor-pointer"
          />
        </div>
        <div className="mt-3 flex justify-between gap-4 text-xs text-neutral-500 md:text-sm">
          <span className="text-left">LinkedIn Professional</span>
          <span className="text-right">Creative Wild Child</span>
        </div>
        <p className="mt-4 text-center text-xs text-neutral-400 md:text-sm">
          ← drag to change the tone →
        </p>
      </div>
    </div>
  );
}
