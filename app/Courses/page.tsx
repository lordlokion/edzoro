import Curriculam from "../../components/Curriculam";
import Navbar from "@/components/Navbar";
import Approach from "@/components/Approach";
import Roadmap from "@/components/Roadmap";
import Coursetab from "@/components/Coursetab";
import Footer from "@/components/Footer";
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
              <WhatsAppBuyButton
                size="lg"
                message="Hi Edzoro! 👋 I want to buy your online math course. Please share the plans and next steps."
              />
            </div>
          </div>
        </div>
        <Approach />
        <Coursetab />
        <Roadmap />

        <div id="curriculam-section">
          <Curriculam />
        </div>
        <Footer />
      </main>
      <WhatsAppFloatingButton />
    </div>
  );
}
