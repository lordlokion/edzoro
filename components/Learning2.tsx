
export default function Component() {
  return (
    <section className="bg-[#f5f7ff] px-4 py-16 mx-auto max-w-6xl rounded-xl mt-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#2d2d2d] md:text-4xl">
            Transform Childs Math
          </h2>
          <h3 className="mb-4 text-lg text-[#2d2d2d]">
            Learning{" "}
            <span className="text-[#f15a29]">
              {" "}
              with Edzoros Innovative Platform
            </span>
          </h3>
          <p className="mx-auto max-w-3xl text-[#666]">
            We know you deeply care about your childs educational journey.
            Heres how Edzoro supports them:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Student Dashboard */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <svg
                className="h-6 w-6 text-[#f15a29]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect
                  x="2"
                  y="3"
                  width="20"
                  height="14"
                  rx="2"
                  strokeWidth="2"
                />
                <path d="M8 21h8" strokeWidth="2" />
                <path d="M12 17v4" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">
                Centralized Learning Hub:
              </h4>
              <p className="text-sm text-[#666]">
                Our user-friendly student portal is designed to simplify your
                childs learning experience. Access live classes, recordings,
                assignments, and all course materials in one place for a
                streamlined educational journey.{" "}
              </p>
            </div>
          </div>

          {/* Edzoro Buddy */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <svg
                className="h-6 w-6 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeWidth="2" />
                <circle cx="9" cy="9" r="1" fill="currentColor" />
                <circle cx="15" cy="9" r="1" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">
                Live Demo Sessions for Parents and Students:
              </h4>
              <p className="text-sm text-[#666]">
                Get a firsthand look at Edzoro with our complimentary demo
                sessions. Meet instructors, explore the platform, and witness
                our unique teaching methods in action—no strings attached.{" "}
              </p>
            </div>
          </div>

          {/* Brain Gym */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
              <svg
                className="h-6 w-6 text-pink-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M12 3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7"
                  strokeWidth="2"
                />
                <path
                  d="M12 8.4c-3.5 0-6.3 2.8-6.3 6.3s2.8 6.3 6.3 6.3 6.3-2.8 6.3-6.3"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">
                Real-Time Progress Monitoring:
              </h4>
              <p className="text-sm text-[#666]">
                Stay informed about your childs achievements with detailed
                progress reports. Track class attendance, assignment completion,
                and academic performance with clear, actionable insights.
              </p>
            </div>
          </div>

          {/* Detailed Reports */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <svg
                className="h-6 w-6 text-purple-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M4 15l4-4 4 4 8-8" strokeWidth="2" />
                <path d="M4 20h16" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">
                On-Demand Learning Assistance:
              </h4>
              <p className="text-sm text-[#666]">
                Edzoros 24/7 virtual assistant is always ready to help. Whether
                its clarifying concepts or answering quick questions, our
                interactive assistant ensures your child has support whenever
                they need it.{" "}
              </p>
            </div>
          </div>

          {/* Edzoro Play App */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 12h4m4 0h4M12 6v4m0 4v4" strokeWidth="2" />
                <rect
                  x="2"
                  y="6"
                  width="20"
                  height="12"
                  rx="2"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">
                Engaging Math Challenges and Competitions:
              </h4>
              <p className="text-sm text-[#666]">
                Motivate your child with friendly math competitions and
                interactive challenges. Our gamified learning approach includes
                leaderboards, prizes, and progress badges to encourage continual
                engagement and learning success.
              </p>
            </div>
          </div>

          {/* Edzoro Parent App */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
              <svg
                className="h-6 w-6 text-yellow-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect
                  x="5"
                  y="2"
                  width="14"
                  height="20"
                  rx="2"
                  strokeWidth="2"
                />
                <path d="M12 18h.01" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">
                Customizable Study Plans:
              </h4>
              <p className="text-sm text-[#666]">
                Edzoro offers flexible study schedules that align with your
                childs pace and availability. Adapt learning sessions to fit
                around extracurricular activities, family plans, and schoolwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
