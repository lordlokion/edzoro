"use client";

import * as React from "react";
import Reveal from "./Reveal";
import { Sparkle, OpenBook } from "./Doodles";

const VIDEO_ID = "mGAZyLiRpZw";

export default function ClassVideo() {
  const [play, setPlay] = React.useState(false);

  return (
    <section className="relative mx-auto mt-8 max-w-6xl overflow-hidden rounded-[2rem] bg-[#2d2d2d] px-4 py-14 text-white md:px-12">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-15" />
      <OpenBook className="pointer-events-none absolute -left-3 top-8 h-20 w-20 opacity-10" />
      <Sparkle className="pointer-events-none absolute right-10 top-10 h-5 w-5 animate-wiggle opacity-50" />

      <Reveal className="relative mb-10 text-center">
        <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-[#ff8a5c]">
          🎬 Watch a real class
        </span>
        <h2 className="text-3xl font-bold md:text-4xl">
          See How an Edzoro Class <span className="text-[#f15a29]">Feels</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-300">
          A free 10-day live math marathon from our YouTube channel — the same
          energy your child gets in every session.
        </p>
      </Reveal>

      <Reveal direction="zoom" delay={150} className="relative mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-2xl border-4 border-white/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.01]">
          {play ? (
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Edzoro live math class sample"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlay(true)}
              className="group relative block aspect-video w-full"
              aria-label="Play the Edzoro class video"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Edzoro live math class thumbnail"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f15a29] shadow-xl transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-8 w-8 md:h-10 md:w-10" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                FREE 10-Day Math Marathon · Class 10
              </span>
            </button>
          )}
        </div>
      </Reveal>
    </section>
  );
}
