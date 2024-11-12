export default function Component() {
  return (
    <section className="bg-[#f5f7ff] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#2d2d2d] md:text-4xl">
          Join Edzoro in <span className="text-[#f15a29]">3 Easy Steps!</span>
        </h2>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="relative overflow-hidden rounded-2xl bg-[#e8e5ff] p-6">
            <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/50">
              01
            </div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/80">
                <svg
                  className="h-8 w-8 text-[#f15a29]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2d2d2d]">
                Schedule Your Free Demo:{" "}
              </h3>
              <p className="text-sm text-[#666]">
                Click Book Free Demo and get started.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative overflow-hidden rounded-2xl bg-[#e8e5ff] p-6">
            <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/50">
              02
            </div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/80">
                <svg
                  className="h-8 w-8 text-[#f15a29]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2d2d2d]">
                Experience Edzoro Learning:
              </h3>
              <p className="text-sm text-[#666]">
                Dive into a dynamic, hands-on session with our passionate
                educators, and see how Edzoro makes math fun and impactful.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative overflow-hidden rounded-2xl bg-[#e8e5ff] p-6">
            <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/50">
              03
            </div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/80">
                <svg
                  className="h-8 w-8 text-[#f15a29]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2d2d2d]">
                Get Ready to Learn:{" "}
              </h3>
              <p className="text-sm text-[#666]">
                Our academic counselor will guide you through your course
                selection and set you up for a smooth learning experience.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-[#4c7bff] p-8 text-center text-white">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold md:text-3xl">
              Join Edzoro Today And Make Math A Fun,
              <br />
              Exciting Journey!
            </h3>
          </div>

          {/* Decorative elements */}
         
          <div className="absolute right-4 top-4">
            <svg
              className="h-6 w-6 text-yellow-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <div className="absolute right-12 top-8">
            <svg
              className="h-4 w-4 text-yellow-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
