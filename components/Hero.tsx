export default function Hero() {
  return (
    <div className="relative overflow-hidden max-w-6xl mx-auto">
      {/* Cloud decorations */}

      <div className="bg-gradient-to-b from-[#f5f7ff] to-[#e4e9ff] px-6 py-12 md:px-8 lg:px-12 rounded-xl" >
        <div className="absolute left-0 top-0 h-32 w-32 opacity-50"  >
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
          Building Math Confidence with {" "}
            <span className="block text-[#f15a29] md:inline">
              Practice <span className="text-[#333]">&</span> Support
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-12 text-xl text-[#666] md:text-2xl">
          Guiding Students to Success in Math.          </p>

          {/* Achievement badges */}
          <div className="mb-16 flex flex-wrap items-center justify-center gap-8">
            {/* Trustpilot badge */}
            <div className="flex flex-col items-center rounded-lg bg-white/80 p-4 backdrop-blur-sm">
              <div className="mb-2 text-lg font-bold">Great</div>
              <div className="mb-1 flex">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-[#00b67a]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg className="h-5 w-5 fill-[#00b67a]/50" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <div className="text-sm text-[#666]"> 800+ reviews by</div>
              <div className="font-bold">Students</div>
            </div>

            {/* Media platforms badge */}
            <div className="flex flex-col items-center rounded-lg bg-white/80 p-4 backdrop-blur-sm">
              <div className="mb-2 text-lg font-bold">We Have</div>
              <div className="text-3xl font-bold text-[#f15a29]">100+</div>
              <div className="text-[#666]">Passionate Trainers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="relative mt-8 rounded-2xl bg-indigo-100 text-center max-w-6xl mx-auto p-6 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-[#333] md:text-3xl">
        Interactive Online Math Classes for Students from{" "}
          <span className="text-[#f15a29]">1st-10th</span>
        </h2>

        
      </div>
    </div>
  );
}
