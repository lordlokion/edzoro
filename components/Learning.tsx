"use client";

import Image from "next/image"


import * as React from "react";
import { ChevronLeft, ChevronRight, Star} from "lucide-react";

const slides = [
  {
    title: "Empowering Educators ",
    subtitle: "for Exceptional Learning",
    image:"/Time Quiz (6).png",
    features: [
      {
        title: "Continuous Quality Assurance:",
        description:
          "Ongoing monitoring and evaluation to maintain the highest teaching standards.",
      },
      {
        title: "Student Engagement Focus:",
        description:
          "Empowering teachers to connect with and engage every student effectively.",
      },
      {
        title: "Data-Driven Feedback:",
        description:
          "Providing real-time insights to help teachers refine their teaching strategies.",
      },
      {
        title: "Teaching Excellence:",
        description:
          "Ensuring that all lessons are designed for maximum student success and growth.",
      },
    ],
  },
  {
    title: "Enhancing Students",
    subtitle: "with Personalized support",
    image:"/Time Quiz (4).png",
    features: [
      {
        title: "Personalised Learning:",
        description:
          "Customizing lessons to meet the unique needs and pace of each student.",
      },
      {
        title: "Real-Time Performance Insights:",
        description:
          "Instant feedback helps students track their progress and stay motivated.",
      },
      {
        title: "Engaging Learning Activities:",
        description:
          "Dynamic exercises and challenges keep students excited about learning.",
      },
      {
        title: "Focused Skill Building:",
        description:
          "Identifying gaps and providing targeted exercises to master every concept.",
      },
    ],
  },
];

export default function Component() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
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
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl bg-[#2d2d2d] px-8 py-12 text-white md:px-12 mx-auto max-w-6xl mt-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            Next-Gen Learning
          </h2>
          <p className="text-lg">
            With <span className="text-[#f15a29]">Edzoro AI</span> Ecosystem
          </p>
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
            {slides.map((slide, index) => (
              <div className="w-full flex-shrink-0" key={index}>
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  {/* Left Content */}
                  <div>
                    <div className="mb-8">
                      <h3 className="mb-1 text-2xl font-bold md:text-3xl">
                        {slide.title.split(" ").map((word, i) =>
                          i === 0 ? (
                            <span key={i}>{word} </span>
                          ) : (
                            <span key={i} className="text-[#f15a29]">
                              {word}{" "}
                            </span>
                          )
                        )}
                      </h3>
                      <p className="text-gray-400">{slide.subtitle}</p>
                    </div>

                    <div className="space-y-6">
                      {slide.features.map((feature, featureIndex) => (
                        <div
                          className="flex items-start gap-3"
                          key={featureIndex}
                        >
                          <Star className="h-6 w-6 flex-shrink-0 fill-[#f15a29] text-[#f15a29]" />
                          <div>
                            <h4 className="font-semibold">{feature.title}</h4>
                            <p className="text-sm text-gray-400">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Content - Illustration */}
                  <div className="relative">
                    <div className="relative mx-auto max-w-sm">
                      {/* Teacher illustration */}
                      <div className="relative">
                        <div className="absolute -right-4 top-4 z-10">
                          <div className="rounded-lg bg-[#f15a29] px-3 py-1 text-2xl font-bold">
                            A+
                          </div>
                        </div>
                        <div className="relative z-0 overflow-hidden rounded-3xl ">
                          <Image
                            src={slide.image}
                            width={500}
                            height={300}
                            alt="Teacher illustration"
                            className="w-full"
                          />
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -right-4 top-0">
                        <Star className="h-6 w-6 fill-[#f15a29] text-[#f15a29]" />
                      </div>
                      <div className="absolute -left-4 top-12">
                        <div className="h-8 w-2 rotate-45 rounded-full bg-purple-500"></div>
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

        {/* Navigation Dots */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            className="rounded-full p-2 transition-colors hover:bg-white/10"
            aria-label="Previous slide"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
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
