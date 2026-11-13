import Reveal from "./Reveal";
import { Compass, IdeaBulb, OpenBook, Pencil, Sparkle } from "./Doodles";

const items = [
  {
    title: "Deep Learning",
    desc: "Mastering the why before the how",
    Doodle: OpenBook,
    rot: "-8deg",
  },
  {
    title: "Real Life Application",
    desc: "Apply math to everyday scenarios",
    Doodle: IdeaBulb,
    rot: "6deg",
  },
  {
    title: "Passion for Learning",
    desc: "Cultivate curiosity and inspire growth",
    Doodle: Sparkle,
    rot: "0deg",
  },
  {
    title: "Personalized Support",
    desc: "Tailored teaching for each student",
    Doodle: Pencil,
    rot: "12deg",
  },
  {
    title: "Instant Feedback",
    desc: "Real time assessment and improvement",
    Doodle: Compass,
    rot: "-5deg",
  },
  {
    title: "Fast-Track Mastery",
    desc: "Accelerated learning for quick results",
    Doodle: OpenBook,
    rot: "7deg",
  },
];

export default function Component() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-[2rem] bg-[#fff5f2] py-16">
      {/* dotted paper backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      {/* floating paper planes */}
      <svg
        className="absolute left-6 top-6 h-12 w-12 animate-float text-[#f15a29]/70"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ ["--ez-rot" as string]: "-12deg" }}
        aria-hidden
      >
        <path d="M2.6,9.3L2.6,9.3c0.1-0.2,0.2-0.3,0.4-0.4l18-7c0.3-0.1,0.6-0.1,0.9,0.1C22.1,2.2,22.2,2.5,22.2,2.8 l-2,17c0,0.3-0.2,0.5-0.4,0.7c-0.2,0.1-0.4,0.1-0.6,0.1c-0.1,0-0.3,0-0.4-0.1l-5.1-2.4l-3.5,3.5c-0.2,0.2-0.4,0.3-0.7,0.3 c-0.1,0-0.2,0-0.3-0.1c-0.4-0.1-0.6-0.5-0.6-0.9v-4.4l-6.1-2.9C2.2,13.5,2,13.2,2,12.9C2,12.6,2.2,12.3,2.6,12L13.8,6.1L3.2,9.7 C2.9,9.8,2.5,9.6,2.6,9.3z" />
      </svg>
      <svg
        className="absolute right-6 top-6 h-12 w-12 animate-float-slow text-[#f15a29]/70"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ ["--ez-rot" as string]: "30deg", animationDelay: "-3s" }}
        aria-hidden
      >
        <path d="M2.6,9.3L2.6,9.3c0.1-0.2,0.2-0.3,0.4-0.4l18-7c0.3-0.1,0.6-0.1,0.9,0.1C22.1,2.2,22.2,2.5,22.2,2.8 l-2,17c0,0.3-0.2,0.5-0.4,0.7c-0.2,0.1-0.4,0.1-0.6,0.1c-0.1,0-0.3,0-0.4-0.1l-5.1-2.4l-3.5,3.5c-0.2,0.2-0.4,0.3-0.7,0.3 c-0.1,0-0.2,0-0.3-0.1c-0.4-0.1-0.6-0.5-0.6-0.9v-4.4l-6.1-2.9C2.2,13.5,2,13.2,2,12.9C2,12.6,2.2,12.3,2.6,12L13.8,6.1L3.2,9.7 C2.9,9.8,2.5,9.6,2.6,9.3z" />
      </svg>

      {/* Main content */}
      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#f15a29] shadow-sm">
            ✏️ Our teaching method
          </span>
          <h2 className="text-3xl font-bold text-[#2d2d2d] md:text-4xl">
            Edzoro&apos;s Unique <span className="squiggle-underline text-[#f15a29]">Math Approach</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 text-center shadow-sm card-lift"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#f15a29] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mx-auto mb-4 h-20 w-20 animate-bob transition-transform duration-300 group-hover:scale-110" style={{ animationDelay: `${i * -0.7}s`, ["--ez-rot" as string]: item.rot }}>
                <item.Doodle className="h-full w-full" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#2d2d2d]">
                {item.title}
              </h3>
              <p className="text-sm text-[#666]">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
