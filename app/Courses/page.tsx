import Curriculam from "../../components/Curriculam";
import Navbar from "@/components/Navbar";
import Approach from "@/components/Approach";
import Roadmap from "@/components/Roadmap";
import Coursetab from "@/components/Coursetab";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Math Courses for Class 1–10 — Live Classes & Curriculum",
  description:
    "Explore Edzoro's online math courses for grades 1–10: live interactive classes, chapter-wise practice, and personal mentor support aligned with CBSE, ICSE and state boards.",
  alternates: { canonical: "https://www.edzoro.com/Courses" },
};

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main>
        <div className="relative bg-gradient-to-b from-[#f5f7ff] to-[#e4e9ff] overflow-hidden max-w-6xl mx-auto">
          {/* Cloud decorations */}

          <div
            className=" px-6 py-12 md:px-8 lg:px-12 rounded-xl"
            style={{
              backgroundImage: "url('/Untitled design (34).png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute left-0 top-0 h-32 w-32 opacity-50">
              <div className="absolute h-16 w-16 rounded-full bg-white blur-lg"></div>
              <div className="absolute left-12 top-8 h-12 w-12 rounded-full bg-white blur-lg"></div>
            </div>
            <div className="absolute right-0 top-0 h-32 w-32 opacity-50">
              <div className="absolute h-16 w-16 rounded-full bg-white blur-lg"></div>
              <div className="absolute right-12 top-8 h-12 w-12 rounded-full bg-white blur-lg"></div>
            </div>

            <div className="mx-auto max-w-7xl text-center">
              {/* Main heading */}
              <h1 className="mb-6 text-4xl font-bold text-[#333] md:text-5xl lg:text-6xl">
                Building Math Confidence with{" "}
                <span className="block text-[#f15a29] md:inline">
                  Practice <span className="text-[#333]">&</span> Support
                </span>
              </h1>

              {/* Subheading */}
              <p className="mb-12 text-xl text-[#666] md:text-2xl pb-40">
                Guiding Students to Success in Math.{" "}
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
        <Footer />
      </main>
    </div>
  );
}
