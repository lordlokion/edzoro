import Reveal from "./Reveal";
import {
  OpenBook,
  Pencil,
  Diary,
  Ruler,
  Calculator,
  Compass,
  IdeaBulb,
  Notebook,
  Sparkle,
  PiDoodle,
  BookStack,
} from "./Doodles";

export default function Hero() {
  return (
    <div className="relative mx-auto max-w-6xl px-2">
      {/* ===== Layered background ===== */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#f5f7ff] to-[#e4e9ff] px-6 py-16 md:px-12 md:py-20">
        {/* animated blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 animate-blob bg-[#f15a29]/10" />
        <div
          className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 animate-blob bg-indigo-300/20"
          style={{ animationDelay: "-6s" }}
        />
        {/* notebook dot grid */}
        <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        {/* ===== Floating stationery ===== */}
        <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
          <div
            className="absolute left-[6%] top-[14%] w-16 animate-float lg:w-20"
            style={{ ["--ez-rot" as string]: "-10deg" }}
          >
            <OpenBook />
          </div>
          <div
            className="absolute right-[7%] top-[10%] w-14 animate-float-slow lg:w-16"
            style={{ ["--ez-rot" as string]: "8deg", animationDelay: "-2s" }}
          >
            <Pencil />
          </div>
          <div
            className="absolute left-[10%] bottom-[16%] w-14 animate-float lg:w-16"
            style={{ animationDelay: "-3.2s" }}
          >
            <Diary />
          </div>
          <div
            className="absolute right-[12%] bottom-[12%] w-14 animate-float-slow lg:w-16"
            style={{ ["--ez-rot" as string]: "-6deg", animationDelay: "-1.4s" }}
          >
            <Calculator />
          </div>
          <div
            className="absolute left-[24%] top-[6%] w-12 animate-bob lg:w-14"
            style={{ animationDelay: "-1s" }}
          >
            <Ruler />
          </div>
          <div
            className="absolute right-[30%] top-[24%] hidden w-12 animate-float lg:block"
            style={{ ["--ez-rot" as string]: "14deg", animationDelay: "-4s" }}
          >
            <Compass />
          </div>
          <div
            className="absolute left-[28%] bottom-[2%] hidden w-12 animate-float-slow xl:block"
            style={{ animationDelay: "-5s" }}
          >
            <BookStack />
          </div>
          <div
            className="absolute right-[6%] top-[42%] hidden w-11 animate-bob lg:block"
            style={{ animationDelay: "-0.6s" }}
          >
            <IdeaBulb />
          </div>
          <div
            className="absolute left-[4%] top-[48%] hidden w-10 animate-float lg:block"
            style={{ ["--ez-rot" as string]: "10deg", animationDelay: "-2.6s" }}
          >
            <Notebook />
          </div>
          <Sparkle className="absolute right-[18%] top-[6%] h-6 w-6 animate-wiggle" />
          <Sparkle className="absolute left-[18%] top-[38%] h-4 w-4 animate-wiggle" style={{ animationDelay: "-1.2s" }} />
          <div className="absolute right-[38%] bottom-[6%] w-8 animate-bob opacity-70" style={{ animationDelay: "-2s" }}>
            <PiDoodle />
          </div>
        </div>

        {/* ===== Content ===== */}
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f15a29]/25 bg-white/80 px-4 py-1.5 text-sm font-semibold text-[#f15a29] shadow-sm backdrop-blur-sm">
              <Sparkle className="h-4 w-4" />
              Live online math classes · Grade 1–10 · India
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mb-6 text-4xl font-bold text-[#2d2d2d] md:text-6xl lg:text-[4.25rem] lg:leading-[1.1]">
              Building{" "}
              <span className="relative whitespace-nowrap">
                <span className="text-[#f15a29]">Math Confidence</span>
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 300 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    className="animate-draw"
                    d="M4 9 C 60 3, 120 12, 170 7 S 260 4, 296 8"
                    stroke="#f15a29"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              with{" "}
              <span className="squiggle-underline text-[#2d2d2d]">Practice</span>{" "}
              <span className="text-[#333]">&amp;</span>{" "}
              <span className="text-[#f15a29]">Support</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mb-10 max-w-xl text-lg text-[#666] md:text-xl">
              Live, interactive classes with expert tutors, structured weekly
              practice, and personal attention — so math finally{" "}
              <em className="font-semibold not-italic text-[#2d2d2d]">
                clicks
              </em>
              .
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mb-14 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#book-demo"
                className="group inline-flex items-center gap-2 rounded-full bg-[#f15a29] px-8 py-3.5 text-lg font-bold text-white shadow-[0_6px_0_0_#d94e22] transition-all duration-200 hover:shadow-[0_3px_0_0_#d94e22] hover:translate-y-[3px] active:shadow-none active:translate-y-[6px]"
              >
                Book a Free Demo
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="/Courses"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#2d2d2d]/15 bg-white/80 px-8 py-3.5 text-lg font-bold text-[#2d2d2d] backdrop-blur-sm transition-all hover:border-[#f15a29] hover:text-[#f15a29]"
              >
                Explore Courses
              </a>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 pr-6 shadow-sm backdrop-blur-sm">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-[#00b67a]" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <svg className="h-5 w-5 fill-[#00b67a]/50" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-[#2d2d2d]">
                    4.5/5 · 800+ reviews
                  </div>
                  <div className="text-xs text-[#666]">by students &amp; parents</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 pr-6 shadow-sm backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#f15a29]">100+</div>
                <div className="text-left">
                  <div className="text-sm font-bold text-[#2d2d2d]">
                    Passionate Trainers
                  </div>
                  <div className="text-xs text-[#666]">math specialists</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===== Bottom strip ===== */}
      <Reveal delay={200} className="relative mt-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#2d2d2d] px-6 py-5 text-center shadow-lg">
          <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-20" />
          <Sparkle className="pointer-events-none absolute left-6 top-1/2 hidden h-5 w-5 -translate-y-1/2 animate-wiggle md:block" />
          <Sparkle className="pointer-events-none absolute right-6 top-1/2 hidden h-5 w-5 -translate-y-1/2 animate-wiggle md:block" />
          <h2 className="relative text-xl font-bold text-white md:text-2xl">
            Interactive online math classes for students from{" "}
            <span className="text-[#ff8a5c]">1st–10th</span> — aligned with
            CBSE, ICSE &amp; state boards
          </h2>
        </div>
      </Reveal>
    </div>
  );
}
