export default function Component() {
  return (
    <section className="hidden md:block relative overflow bg-[#fff5f2] py-16  mt-6 rounded-xl">
      {/* Decorative paper planes */}
      <svg
        className="absolute left-4 top-4 h-12 w-12 text-[#f15a29]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M2.6,9.3L2.6,9.3c0.1-0.2,0.2-0.3,0.4-0.4l18-7c0.3-0.1,0.6-0.1,0.9,0.1C22.1,2.2,22.2,2.5,22.2,2.8 l-2,17c0,0.3-0.2,0.5-0.4,0.7c-0.2,0.1-0.4,0.1-0.6,0.1c-0.1,0-0.3,0-0.4-0.1l-5.1-2.4l-3.5,3.5c-0.2,0.2-0.4,0.3-0.7,0.3 c-0.1,0-0.2,0-0.3-0.1c-0.4-0.1-0.6-0.5-0.6-0.9v-4.4l-6.1-2.9C2.2,13.5,2,13.2,2,12.9C2,12.6,2.2,12.3,2.6,12L13.8,6.1L3.2,9.7 C2.9,9.8,2.5,9.6,2.6,9.3z" />
      </svg>
      <svg
        className="absolute right-4 top-4 h-12 w-12 rotate-45 text-[#f15a29]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M2.6,9.3L2.6,9.3c0.1-0.2,0.2-0.3,0.4-0.4l18-7c0.3-0.1,0.6-0.1,0.9,0.1C22.1,2.2,22.2,2.5,22.2,2.8 l-2,17c0,0.3-0.2,0.5-0.4,0.7c-0.2,0.1-0.4,0.1-0.6,0.1c-0.1,0-0.3,0-0.4-0.1l-5.1-2.4l-3.5,3.5c-0.2,0.2-0.4,0.3-0.7,0.3 c-0.1,0-0.2,0-0.3-0.1c-0.4-0.1-0.6-0.5-0.6-0.9v-4.4l-6.1-2.9C2.2,13.5,2,13.2,2,12.9C2,12.6,2.2,12.3,2.6,12L13.8,6.1L3.2,9.7 C2.9,9.8,2.5,9.6,2.6,9.3z" />
      </svg>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-16 text-center text-3xl font-bold text-[#2d2d2d] md:text-4xl">
          Edzoros Unique <span className="text-[#f15a29]">Math Approach</span>
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Concept First */}
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-full w-full text-[#f15a29]"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                  fill="currentColor"
                />
                <path
                  d="M12 8v4l3 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#2d2d2d]">
              Deep Learning
            </h3>
            <p className="text-sm text-[#666]">
              Mastering the why before the how
            </p>
          </div>

          {/* Real-Life Examples */}
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-full w-full text-[#f15a29]"
              >
                <path
                  d="M4 7h16M4 7v10M4 7L8 3h8l4 4M20 7v10M20 17H4m16 0-4 4H8l-4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7v10M8 7v10m8-10v10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#2d2d2d]">
              Real Life Application{" "}
            </h3>
            <p className="text-sm text-[#666]">
              Apply math to everyday scenarios{" "}
            </p>
          </div>

          {/* Growth Mindset */}
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-full w-full text-[#f15a29]"
              >
                <path
                  d="M12 2v6m0 14v-6m10-4h-6M8 12H2m17.5-5.5L14 12m5.5 5.5L14 12m-4 0L4.5 6.5m5.5 11L4.5 17.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#2d2d2d]">
              Passion for Learning{" "}
            </h3>
            <p className="text-sm text-[#666]">
              Cultivate curiosity and inspire growth{" "}
            </p>
          </div>

          {/* Personalised Attention */}
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-full w-full text-[#f15a29]"
              >
                <path
                  d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#2d2d2d]">
              Personalized Support
            </h3>
            <p className="text-sm text-[#666]">
              Tailored teaching for each student
            </p>
          </div>

          {/* Competitive Learning */}
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-full w-full text-[#f15a29]"
              >
                <path
                  d="M8 21h8m-4-4v4m-9-8h2.5c1.5 0 2.5-2 2.5-4V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4c0 2 1 4 2.5 4H19M12 7H7.5M12 7h4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#2d2d2d]">
              Instant Feedback{" "}
            </h3>
            <p className="text-sm text-[#666]">
              Real time assessment and improvement{" "}
            </p>
          </div>

          {/* Accelerate Learning */}
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-full w-full text-[#f15a29]"
              >
                <path
                  d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#2d2d2d]">
              Fast-Track Mastery{" "}
            </h3>
            <p className="text-sm text-[#666]">
              Accelerated learning for quick results{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
