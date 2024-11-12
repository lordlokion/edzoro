"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const achievements = [
  {
    name: "Rashmi Kataria",
    title: "Mastering Speed in Multiplications",
    description:
      "Hrivvaan has excelled in solving 100 multiplication sums in just 90 seconds! His quick thinking and passion for puzzles have made him a standout performer in math.",
    image: "/students/student6.png",
  },
  {
    name: "Vetrivelan",
    title: "From Slow to Swift",
    description:
      "Vetri went from being one of the slowest in class to mastering quick calculations! His dedication and consistent practice have made him one of the fastest learners in his class.",
    image: "/students/student2.png",
  },
  {
    name: "Krishnendu",
    title: "Overcoming Math Anxiety",
    description:
      "Krishnendu was once fearful of math, but with Edzoro's guidance and support, she has transformed into a confident math enthusiast, tackling challenges with ease.",
    image: "/students/student3.png",
  },
  {
    name: "Matrika",
    title: "Conquering Math with Confidence",
    description:
      "Matrika's journey with Edzoro helped her overcome initial hesitation towards math, enabling her to tackle problems with confidence and achieve mastery in the subject.",
    image: "/students/student4.png",
  },
];

export default function AchievementsSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + achievements.length) % achievements.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl bg-[#2d2d2d] px-8 py-12 text-white md:px-12 mx-auto max-w-6xl mt-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Achievements of{" "}
            <span className="text-[#f15a29]">
              Our Kids <Star className="ml-2 inline-block h-6 w-6" />
            </span>
          </h2>
        </div>

        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {achievements.map((achievement, index) => (
              <div className="w-full flex-shrink-0" key={index}>
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  <div>
                    <div className="mb-8">
                      <h3 className="mb-1 text-2xl font-bold md:text-3xl">
                        {achievement.name.split(" ").map((word, i) => (
                          <span
                            key={i}
                            className={i === 0 ? "" : "text-[#f15a29]"}
                          >
                            {word}{" "}
                          </span>
                        ))}
                      </h3>
                      <p className="text-gray-400">{achievement.title}</p>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <Star className="h-6 w-6 flex-shrink-0 fill-[#f15a29] text-[#f15a29]" />
                        <p className="text-sm text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative mx-auto max-w-sm">
                      <div className="relative">
                        <div className="absolute -right-4 top-4 z-10">
                          <div className="rounded-lg bg-[#f15a29] px-3 py-1 text-2xl font-bold">
                            A+
                          </div>
                        </div>
                        <div className="relative z-0 overflow-hidden rounded-3xl ">
                          <Image
                            src={achievement.image}
                            alt={achievement.name}
                            width={500}
                            height={300}
                            className="w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="absolute -right-4 top-0">
                        <Star className="h-6 w-6 fill-[#f15a29] text-[#f15a29]" />
                      </div>
                      <div className="absolute -left-4 top-12">
                        <div className="h-8 w-2 rotate-45 rounded-full "></div>
                      </div>
                      <div className="absolute right-8 top-16">
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            className="rounded-full p-2 transition-colors hover:bg-white/10"
            aria-label="Previous slide"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex gap-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentSlide ? "bg-[#f15a29]" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>

          <button
            className="rounded-full p-2 transition-colors hover:bg-white/10"
            aria-label="Next slide"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
