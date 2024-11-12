export default function Component() {
  return (
    <section className="bg-[#f5f7ff] py-16 relative overflow-hidden max-w-6xl mx-auto mt-6 rounded-xl">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#2d2d2d] md:text-4xl">
              Learning <span className="text-[#f15a29]">Roadmap</span>
            </h2>
            <p className="mb-12 text-[#666]">
              <span className="font-semibold text-[#2d2d2d]">Develop </span>{" "}
              strong math foundations in 3 months,{" "}
              <span className="font-semibold text-[#2d2d2d]">achieve</span>{" "}
              proficiency in 6 months, and{" "}
              <span className="font-semibold text-[#2d2d2d]">apply</span>{" "}
              advanced math skills across various fields in 9 months.
            </p>
          </div>

          <div className="relative">
            {/* Decorative clouds */}
            <div className="absolute inset-0 z-0">
              <div className="absolute left-1/4 top-0 h-16 w-16 rounded-full bg-white/30"></div>
              <div className="absolute right-1/4 top-12 h-12 w-12 rounded-full bg-white/30"></div>
            </div>

            {/* Roadmap items */}
            <div className="relative z-10 grid gap-8 md:grid-cols-3">
              {/* Math Star */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-[70%_30%_70%_30%] bg-[#4c7bff] opacity-10 transition-all duration-300 group-hover:scale-105"></div>
                <div className="relative rounded-[70%_30%_70%_30%] bg-[#4c7bff] p-8 text-center text-white transition-all duration-300 group-hover:scale-105">
                  <h3 className="mb-4 text-2xl font-bold">Apprentice Ninja</h3>
                  <div className="mb-4 flex items-center justify-center gap-2 text-sm">
                    <span>40 session</span>
                    <span className="text-white/60">|</span>
                    <span>3 months</span>
                  </div>
                  <p className="text-sm">
                    Building Math Confidence with Practice & Support
                  </p>
                </div>
              </div>

              {/* Math Champion */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-[30%_70%_30%_70%] bg-[#ffa726] opacity-10 transition-all duration-300 group-hover:scale-105"></div>
                <div className="relative rounded-[30%_70%_30%_70%] bg-[#ffa726] p-8 text-center text-white transition-all duration-300 group-hover:scale-105">
                  <h3 className="mb-4 text-2xl font-bold">Warrior Ninja</h3>
                  <div className="mb-4 flex items-center justify-center gap-2 text-sm">
                    <span>80 session</span>
                    <span className="text-white/60">|</span>
                    <span>6 months</span>
                  </div>
                  <p className="text-sm">
                    Master advanced concepts with personalized guidance and
                    support.
                  </p>
                </div>
              </div>

              {/* Math Wizard */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-[70%_30%_70%_30%] bg-[#f15a29] opacity-10 transition-all duration-300 group-hover:scale-105"></div>
                <div className="relative rounded-[70%_30%_70%_30%] bg-[#f15a29] p-8 text-center text-white transition-all duration-300 group-hover:scale-105">
                  <h3 className="mb-4 text-2xl font-bold">Master Ninja</h3>
                  <div className="mb-4 flex items-center justify-center gap-2 text-sm">
                    <span>120 session</span>
                    <span className="text-white/60">|</span>
                    <span>9 months</span>
                  </div>
                  <p className="text-sm">
                    Explore math’s real-world applications in technology,
                    business, and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative landscape */}
            <div className="absolute bottom-0 left-0 right-0 h-16">
              <svg
                className="h-full w-full"
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
                fill="white"
                opacity="0.1"
              >
                <path d="M0,0 C300,95 900,95 1200,0 L1200,100 L0,100 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
