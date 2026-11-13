import Image from "next/image";
import Reveal from "./Reveal";
import { OpenBook, Sparkle } from "./Doodles";

type Review = {
  name: string;
  context: string;
  stars: number;
  image: string;
  quote: string;
};

const reviews: Review[] = [
  {
    name: "Radhika Kataria",
    context: "Mother of Rashmi · Grade 5 · Malaysia",
    stars: 5,
    image: "/students/student6.png",
    quote:
      "Edzoro has been an incredible support for our child's math journey. The engaging lessons and nurturing environment helped Rashmi become more confident and clear in math. Her grades — and her overall enthusiasm for the subject — have improved significantly. Thank you, Edzoro!",
  },
  {
    name: "Meena Iyer",
    context: "Math teacher · 14 years experience · Bengaluru",
    stars: 5,
    image: "/students/student3.png",
    quote:
      "As a math teacher myself, I was skeptical of yet another online platform. Edzoro won me over: the tutors actually diagnose why a child is stuck instead of repeating the same explanation louder. The weekly reports are detailed enough that I recommend it to my own students' parents.",
  },
  {
    name: "Lata Sharma",
    context: "Mother of Panchil · Grade 5 · New Delhi",
    stars: 5,
    image: "/students/student7.png",
    quote:
      "Panchil always showed a natural interest in math, and Edzoro has been the perfect platform for nurturing that curiosity. The interactive games, puzzles, and stories keep her excited to learn, and the trainer's simple, effective teaching makes concepts easy to grasp. Highly recommend!",
  },
  {
    name: "Rajesh Verma",
    context: "Father of Aarav · Grade 8 · Pune",
    stars: 5,
    image: "/students/student2.png",
    quote:
      "We shifted Aarav from offline tuition to Edzoro last year. Biggest difference? He doesn't need us to remind him about math class anymore — the quizzes and streaks turned practice into a habit he actually enjoys. His unit-test scores went from 62% to 89% in two terms.",
  },
  {
    name: "Sunita Deshmukh",
    context: "Secondary school teacher · CBSE · Nashik",
    stars: 5,
    image: "/students/student4.png",
    quote:
      "I've seen many students come to class with weak basics, and Edzoro is one of the few platforms that fixes the foundation before racing ahead. Their grade-wise structure and unlimited practice align well with what CBSE expects. The trial class is genuinely worth it for any parent.",
  },
  {
    name: "Lata Patel",
    context: "Mother of Monik · Grade 6 · Chennai",
    stars: 5,
    image: "/students/Untitled design (36).png",
    quote:
      "Monik has always been passionate about math, and finding Edzoro was a game changer. The use of real-life scenarios, storytelling, and quizzes makes learning enjoyable and impactful. Edzoro truly stands out from other platforms — I strongly recommend it to parents seeking the best.",
  },
];

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-0.5" aria-label={`Rated ${n} out of 5 stars`}>
    {Array.from({ length: n }).map((_, i) => (
      <svg key={i} className="h-4 w-4 fill-[#ffb400]" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

export default function Component() {
  return (
    <section className="relative mx-auto mt-6 max-w-6xl overflow-hidden rounded-[2rem] py-16">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-30 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]" />
      <OpenBook className="pointer-events-none absolute -right-4 bottom-8 h-20 w-20 opacity-10" />
      <Sparkle className="pointer-events-none absolute left-10 top-14 h-5 w-5 animate-wiggle opacity-60" />
      <Sparkle
        className="pointer-events-none absolute right-16 top-24 h-4 w-4 animate-wiggle opacity-50"
        style={{ animationDelay: "-1.6s" }}
      />

      <div className="container px-4 md:px-6">
        <Reveal className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#fff5f2] px-4 py-1.5 text-sm font-semibold text-[#f15a29] shadow-sm">
            ⭐ 4.5/5 · 800+ reviews
          </span>
          <h2 className="text-3xl font-bold text-[#2d2d2d] md:text-4xl">
            What Parents <span className="text-[#333]">&amp;</span>{" "}
            <span className="squiggle-underline text-[#f15a29]">Teachers Say</span>
          </h2>
          <p className="mt-2 text-[#666]">
            Real stories of success and transformation
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={(i % 3) * 110}
              className="card-lift flex h-full flex-col rounded-3xl border border-[#f15a29]/10 bg-white p-7 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <Stars n={r.stars} />
                <svg
                  className="h-7 w-7 fill-[#f15a29]/20"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M6.5 10c-.9 0-1.7.3-2.3.8.3-2.7 1.9-4.6 4.5-5.6L8 3C4 4.4 1.6 7.7 1.6 12.3 1.6 15.5 3.6 18 6.4 18c2.4 0 4.2-1.8 4.2-4 0-2.3-1.7-4-4.1-4zm11 0c-.9 0-1.7.3-2.3.8.3-2.7 1.9-4.6 4.5-5.6L19 3c-4 1.4-6.4 4.7-6.4 9.3 0 3.2 2 5.7 4.8 5.7 2.4 0 4.2-1.8 4.2-4 0-2.3-1.7-4-4.1-4z" />
                </svg>
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-[#444]">
                {r.quote}
              </p>

              <div className="flex items-center gap-3 border-t border-dashed border-[#f15a29]/20 pt-4">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md">
                  <Image
                    src={r.image}
                    alt={`${r.name} — Edzoro review`}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-[#2d2d2d]">
                    {r.name}
                  </div>
                  <div className="text-xs leading-snug text-[#666]">{r.context}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <a
            href="#book-demo"
            className="inline-flex items-center gap-2 rounded-full bg-[#f15a29] px-8 py-3.5 text-lg font-bold text-white shadow-[0_5px_0_0_#d94e22] transition-all duration-200 hover:shadow-[0_2px_0_0_#d94e22] hover:translate-y-[3px] active:shadow-none active:translate-y-[5px]"
          >
            Join 800+ happy families — Book a Free Demo
            <svg
              className="h-5 w-5"
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
        </Reveal>
      </div>
    </section>
  );
}
