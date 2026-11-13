"use client";

import * as React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { Sparkle, OpenBook } from "./Doodles";

type Testimonial = {
  /** Person quoted */
  name: string;
  /** e.g. "Mother of Panchil, Grade 5 · New Delhi" */
  context: string;
  role: "Parent" | "Teacher";
  stars: number;
  image: string;
  quote: string;
  bgColor: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Radhika Kataria",
    context: "Mother of Rashmi · Grade 5 · Malaysia",
    role: "Parent",
    stars: 5,
    image: "/students/student6.png",
    quote:
      "Edzoro has been an incredible support for our child's math journey. The engaging lessons and nurturing environment helped Rashmi become more confident and clear in math. Her grades — and her overall enthusiasm for the subject — have improved significantly. Thank you, Edzoro!",
    bgColor: "bg-[#fff5f2]",
  },
  {
    name: "Meena Iyer",
    context: "Math teacher · 14 years experience · Bengaluru",
    role: "Teacher",
    stars: 5,
    image: "/students/student3.png",
    quote:
      "As a math teacher myself, I was skeptical of yet another online platform. Edzoro won me over: the tutors actually diagnose *why* a child is stuck instead of repeating the same explanation louder. The weekly reports are detailed enough that I recommend it to my own students' parents.",
    bgColor: "bg-[#f5f7ff]",
  },
  {
    name: "Lata Sharma",
    context: "Mother of Panchil · Grade 5 · New Delhi",
    role: "Parent",
    stars: 5,
    image: "/students/student7.png",
    quote:
      "Panchil always showed a natural interest in math, and Edzoro has been the perfect platform for nurturing that curiosity. The interactive games, puzzles, and stories keep her excited to learn, and the trainer's simple, effective teaching makes concepts easy to grasp. Highly recommend!",
    bgColor: "bg-[#fff0f0]",
  },
  {
    name: "Rajesh Verma",
    context: "Father of Aarav · Grade 8 · Pune",
    role: "Parent",
    stars: 5,
    image: "/students/student2.png",
    quote:
      "We shifted Aarav from offline tuition to Edzoro last year. Biggest difference? He doesn't need us to remind him about math class anymore — the quizzes and streaks turned practice into a habit he actually enjoys. His unit-test scores went from 62% to 89% in two terms.",
    bgColor: "bg-[#f5f7ff]",
  },
  {
    name: "Sunita Deshmukh",
    context: "Secondary school teacher · CBSE · Nashik",
    role: "Teacher",
    stars: 5,
    image: "/students/student4.png",
    quote:
      "I've seen many students come to class with weak basics, and Edzoro is one of the few platforms that fixes the foundation before racing ahead. Their grade-wise structure and unlimited practice align well with what CBSE expects. The trial class is genuinely worth it for any parent.",
    bgColor: "bg-[#fff5f2]",
  },
  {
    name: "Lata Patel",
    context: "Mother of Monik · Grade 6 · Chennai",
    role: "Parent",
    stars: 5,
    image: "/students/Untitled design (36).png",
    quote:
      "Monik has always been passionate about math, and finding Edzoro was a game changer. The use of real-life scenarios, storytelling, and quizzes makes learning enjoyable and impactful. Edzoro truly stands out from other platforms — I strongly recommend it to parents seeking the best for their children.",
    bgColor: "bg-[#f5f7ff]",
  },
];

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: n }).map((_, i) => (
      <svg key={i} className="h-4 w-4 fill-[#ffb400]" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

export default function Component() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  // Auto-rotate every 6s unless the user is interacting
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide();
    if (touchStart - touchEnd < -75) prevSlide();
  };


  return (
    <section className="relative mx-auto mt-6 max-w-6xl overflow-hidden rounded-[2rem] py-16">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-30 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]" />
      <OpenBook className="pointer-events-none absolute -right-4 bottom-8 h-20 w-20 opacity-10" />

      <div className="container px-4 md:px-6">
        <Reveal className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#fff5f2] px-4 py-1.5 text-sm font-semibold text-[#f15a29] shadow-sm">
            💬 4.5/5 from 800+ students & parents
          </span>
          <h2 className="text-3xl font-bold text-[#2d2d2d] md:text-4xl">
            Why Parents <span className="squiggle-underline text-[#f15a29]">and Teachers</span> Love Edzoro
          </h2>
          <p className="mt-2 text-[#666]">
            Real stories of success and transformation — from both sides of the classroom
          </p>
        </Reveal>

        <Reveal
          direction="zoom"
          className="relative mx-auto max-w-4xl"
        >
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item, index) => (
                <div key={item.name + index} className="w-full flex-shrink-0 px-1">
                  <div
                    className={`rounded-3xl ${item.bgColor} p-8 md:flex md:items-start md:gap-8`}
                  >
                    {/* Photo with role badge */}
                    <div className="mb-6 flex justify-center md:mb-0 md:w-44 md:shrink-0">
                      <div className="relative">
                        <div className="overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                          <Image
                            src={item.image}
                            width={300}
                            height={300}
                            alt={`${item.name} — ${item.role} testimonial for Edzoro`}
                            className="object-cover"
                          />
                        </div>
                        <span
                          className={`absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold text-white shadow-md ${
                            item.role === "Teacher" ? "bg-[#5b6cff]" : "bg-[#f15a29]"
                          }`}
                        >
                          {item.role === "Teacher" ? "👩‍🏫 Teacher" : "👨‍👩‍👦 Parent"}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="mb-2 flex justify-center md:justify-start">
                        <Stars n={item.stars} />
                      </div>
                      <svg
                        className="mx-auto mb-3 h-8 w-8 fill-[#f15a29]/25 md:mx-0"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path d="M6.5 10c-.9 0-1.7.3-2.3.8.3-2.7 1.9-4.6 4.5-5.6L8 3C4 4.4 1.6 7.7 1.6 12.3 1.6 15.5 3.6 18 6.4 18c2.4 0 4.2-1.8 4.2-4 0-2.3-1.7-4-4.1-4zm11 0c-.9 0-1.7.3-2.3.8.3-2.7 1.9-4.6 4.5-5.6L19 3c-4 1.4-6.4 4.7-6.4 9.3 0 3.2 2 5.7 4.8 5.7 2.4 0 4.2-1.8 4.2-4 0-2.3-1.7-4-4.1-4z" />
                      </svg>
                      <p className="mb-5 text-[#2d2d2d]">{item.quote}</p>
                      <div>
                        <h3 className="text-lg font-bold text-[#2d2d2d]">{item.name}</h3>
                        <p className="text-sm text-[#666]">{item.context}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2.5 shadow-lg transition-transform hover:scale-110 active:scale-95 md:-left-5"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5 text-[#2d2d2d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2.5 shadow-lg transition-transform hover:scale-110 active:scale-95 md:-right-5"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5 text-[#2d2d2d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-[#f15a29]" : "w-2.5 bg-[#f15a29]/30 hover:bg-[#f15a29]/50"
                }`}
              />
            ))}
          </div>
        </Reveal>

        <Sparkle className="pointer-events-none absolute left-8 top-16 h-5 w-5 animate-wiggle opacity-60" />
      </div>
    </section>
  );
}
