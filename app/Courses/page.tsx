import Curriculam from "../../components/Curriculam";
import Navbar from "@/components/Navbar";
import Approach from "@/components/Approach";
import Roadmap from "@/components/Roadmap";
import Coursetab from "@/components/Coursetab";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import { WhatsAppFloatingButton, WhatsAppBuyButton } from "@/components/WhatsApp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Online Math Course (Grade UKG–10) — Plans, Pricing & Curriculum",
  description:
    "Buy Edzoro's online Mathematics course for grades UKG–10. Live interactive classes, chapter-wise practice and mentor support — enroll in one tap on WhatsApp (+91 84271 28631).",
  alternates: { canonical: "https://www.edzoro.com/Courses" },
};

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#f5f7ff] to-[#e4e9ff]">
          <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div
            className="relative px-6 py-12 md:px-8 lg:px-12"
            style={{
              backgroundImage: "url('/Untitled design (34).png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="mx-auto max-w-7xl text-center">
              {/* Main heading */}
              <h1 className="mb-6 text-4xl font-bold text-[#2d2d2d] md:text-5xl lg:text-6xl">
                Buy the Online <span className="text-[#f15a29]">Math Course</span>
                <span className="block text-2xl font-semibold text-[#666] md:text-3xl lg:inline lg:text-2xl">
                  {" "}· Grade UKG–10
                </span>
              </h1>

              {/* Subheading */}
              <p className="mb-8 text-xl text-[#666] md:text-2xl">
                Guiding students to success in math — one subject, taught brilliantly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <WhatsAppBuyButton
                  size="lg"
                  message="Hi Edzoro! 👋 I want to buy your online math course (Diwali 50% OFF). Please share the plans and next steps."
                />
                <a
                  href="#book-demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2d2d2d]/15 bg-white/80 px-7 py-3.5 text-lg font-bold text-[#2d2d2d] backdrop-blur-sm transition-colors hover:border-[#f15a29] hover:text-[#f15a29]"
                >
                  Try a Free Demo first
                </a>
              </div>
              <p className="mt-4 text-sm font-medium text-[#666]">
                🪔 Diwali: 50% OFF on all plans (₹15,999 / ₹28,999 / ₹44,999) · limited seats
              </p>
            </div>
          </div>
        </div>
        <Approach />
        <Coursetab />
        <Roadmap />

        <div id="curriculam-section">
          <Curriculam />
        </div>

        {/* Demo booking — the natural next step after browsing */}
        <div className="relative mt-4 py-6">
          <div className="mx-auto mb-6 max-w-6xl px-4 text-center">
            <h2 className="text-3xl font-bold text-[#2d2d2d] md:text-4xl">
              Not ready to buy? <span className="text-[#f15a29]">Start with a free demo.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[#666]">
              Watch your child solve real problems with our tutors in a 30-minute
              live class — then decide. Zero pressure, zero payment.
            </p>
          </div>
          <Form />
        </div>
        <Footer />
      </main>
      <WhatsAppFloatingButton />
    </div>
  );
}
