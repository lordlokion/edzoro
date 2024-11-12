import { Trophy, Zap, Award, BookOpen, Video } from "lucide-react";

export default function Component() {
  return (
    <div className="w-full px-4 py-12 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Impact Section */}
          <div className="rounded-3xl bg-[#f5f7ff] p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Our <span className="text-[#f15a29]">Impact</span>
            </h2>
            <p className="mb-8 text-[#666]">
              At Edzoro, we revolutionize math learning by combining expert
              instruction, creative solutions, and unwavering support. Our
              dedication to excellence is evident in the following key outcomes.
            </p>

            {/* Central Statistic */}
            <div className="relative mb-12 text-center">
              <div className="relative inline-block">
                <div className="absolute -left-8 -right-8 -top-8 -z-10">
                  <div className="flex justify-center space-x-16">
                    <div className="h-16 w-4 rotate-[30deg] rounded-full bg-[#f15a29]/10"></div>
                    <div className="h-16 w-4 -rotate-[30deg] rounded-full bg-[#f15a29]/10"></div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-[#f15a29] md:text-5xl">
                  1000+
                </div>
                <div className="mt-2 text-sm text-[#666]">
                  Students Empowered to Excel in Math
                </div>
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="mb-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[#f15a29]">50,000+</div>
                <div className="text-sm text-[#666]">Teaching Hours</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#f15a29]">10+</div>
                <div className="text-sm text-[#666]">Countries Presence</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#f15a29]">100+</div>
                <div className="text-sm text-[#666]">Expert Teachers</div>
              </div>
            </div>

            {/* Research Stats */}
            <div className="flex items-center justify-center space-x-2">
              <div className="rounded-lg bg-white p-2">
                <BookOpen className="h-5 w-5 text-[#f15a29]" />
              </div>
              <div>
                <span className="font-bold text-[#f15a29]">4+</span> Years of
                Data-Driven Insights Shaping Our Teaching Methods{" "}
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="rounded-3xl bg-[#fff5f2] p-8">
            <div className="relative">
              <div className="mb-8">
                <div className="text-sm text-[#666]">
                  Our Dedicated Teachers Are
                </div>
                <h2 className="mb-2 text-3xl font-bold">Backbone of Edzoro</h2>
                <div className="flex items-center space-x-2 text-[#f15a29]">
                  <Zap className="h-5 w-5" />
                  <span className="font-semibold">
                    Inspiring students to overcome challenges{" "}
                  </span>
                </div>
              </div>

              <p className="mb-8 text-[#666]">
                Our teachers are the heart of our mission to make math
                accessible and enjoyable for all students. With years of
                expertise, passion, and dedication, our team of educators
                inspires young minds to not only learn math but to love it.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="h-5 w-5 text-[#f15a29]" />
                  <span>Customized Learning Plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-[#f15a29]" />
                  <span>Customized Learning Plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-[#f15a29]" />
                  <span>Live Quizzes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Video className="h-5 w-5 text-[#f15a29]" />
                  <span>Recorded Live Sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BBC Quote */}
        <div className="mt-8 rounded-3xl bg-[#2d2d2d] p-6 text-center text-white">
          <div className="mb-4">
            <svg
              className="mx-auto h-12 w-auto"
              viewBox="0 0 84 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="84" height="24" fill="white" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="16"
                fontWeight="bold"
              >f(x)=∣x∣

              </text>
            </svg>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Zap className="h-6 w-6 text-[#f15a29]" />
            <p className="text-xl font-medium">
              Edzoro turns math into a skill, not a subject
            </p>
            <Zap className="h-6 w-6 text-[#f15a29]" />
          </div>
        </div>
      </div>
    </div>
  );
}
