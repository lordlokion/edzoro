import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { OpenBook, Sparkle, BookStack, IdeaBulb } from "./Doodles";
import { WhatsAppBuyButton, waLink } from "./WhatsApp";

const programs = [
  {
    name: "Foundation",
    tag: "Grade UKG–3",
    price: "6,999",
    original: "15,999",
    sessions: "40 Sessions · 3 months",
    blurb: "Counting to confidence — numbers, tables & early problem solving made playful.",
    icon: OpenBook,
    popular: false,
    message:
      "Hi Edzoro! 👋 I want to buy the *Foundation* math plan (40 sessions, 3 months, ₹6,999) for my child in early grades. Please share the next steps.",
  },
  {
    name: "Advanced",
    tag: "Grade 4–8",
    price: "13,999",
    original: "28,999",
    sessions: "80 Sessions · 6 months",
    blurb: "Algebra, geometry & logical reasoning — the school years where marks matter most.",
    icon: IdeaBulb,
    popular: true,
    message:
      "Hi Edzoro! 👋 I want to buy the *Advanced* math plan (80 sessions, 6 months, ₹13,999) for my child in Grade 4–8. Please share the next steps.",
  },
  {
    name: "Board Mastery",
    tag: "Grade 9–10",
    price: "21,999",
    original: "44,999",
    sessions: "120 Sessions · 9 months",
    blurb: "Full board-syllabus coverage, mock tests and 1-on-1 doubt sessions for Class 10.",
    icon: BookStack,
    popular: false,
    message:
      "Hi Edzoro! 👋 I want to buy the *Board Mastery* math plan (120 sessions, 9 months, ₹21,999) for Class 9–10. Please share the next steps.",
  },
];

export default function CoursesHome() {
  return (
    <section className="relative mx-auto mt-8 max-w-6xl px-4 py-12">
      <Reveal className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full bg-[#f5f7ff] px-4 py-1.5 text-sm font-semibold text-[#f15a29] shadow-sm">
          🚀 Enrollments open
        </span>
        <h2 className="text-3xl font-bold text-[#2d2d2d] md:text-4xl">
          One Subject. <span className="text-[#f15a29]">Three Ways to Master It.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[#666]">
          Our online Mathematics course is built grade-wise (UKG–10). Pick a
          plan and buy directly on WhatsApp — your order opens in a chat, no
          forms to fill.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {programs.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 110}
            direction="zoom"
            className={`card-lift relative flex flex-col rounded-3xl p-7 ${
              p.popular
                ? "border-2 border-[#f15a29] bg-white shadow-[0_18px_40px_-18px_rgba(241,90,41,0.4)]"
                : "border border-[#f15a29]/15 bg-white"
            }`}
          >
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#f15a29] px-4 py-1 text-xs font-bold text-white shadow-md">
                ⭐ Most popular
              </div>
            )}
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff5f2]">
              <p.icon className="h-10 w-10" />
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-[#2d2d2d]">{p.name}</h3>
              <span className="rounded-full bg-[#f5f7ff] px-2.5 py-0.5 text-xs font-semibold text-[#5b6cff]">
                {p.tag}
              </span>
            </div>
            <p className="mt-2 text-sm text-[#666]">{p.blurb}</p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-sm text-gray-400 line-through">₹{p.original}</span>
              <span className="text-3xl font-extrabold text-[#2d2d2d]">₹{p.price}</span>
            </div>
            <div className="mt-1 text-sm font-semibold text-[#f15a29]">{p.sessions}</div>

            <ul className="mt-4 space-y-2 text-sm text-[#444]">
              {["Live 1-on-attention classes", "Unlimited practice worksheets", "Weekly quizzes & report cards"].map(
                (f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-[#f15a29]" />
                    {f}
                  </li>
                ),
              )}
            </ul>

            <div className="mt-auto pt-6">
              <WhatsAppBuyButton message={p.message} className="w-full" />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Sparkle className="h-5 w-5 animate-wiggle" />
        <Link
          href="/Courses#buy"
          className="font-semibold text-[#f15a29] underline-offset-4 hover:underline"
        >
          See full curriculum & grade-wise plans →
        </Link>
        <a
          href={waLink("Hi Edzoro! 👋 I want a custom plan for my child. Can you help?")}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#25D366] underline-offset-4 hover:underline"
        >
          or chat with us on WhatsApp
        </a>
        <Sparkle className="h-5 w-5 animate-wiggle" style={{ animationDelay: "-1.4s" }} />
      </Reveal>
    </section>
  );
}
