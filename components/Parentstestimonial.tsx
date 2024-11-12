"use client";

import * as React from "react";
import Image from "next/image"

const testimonials = [
  {
    studentName: "Rashmi Kataria",
    grade: "Grade 5, Malaysia",
    image: "/students/student6.png",
    testimonial:
      "Edzoro has been an incredible support for our child's math journey. The engaging lessons and nurturing environment have helped Rashmi become more confident and clear in math. Her grades and overall enthusiasm for the subject have improved significantly. Thank you, Edzoro!",
    parent: "Radhika (mother of Rashmi)",
    accentColor: "bg-[#ffd700]",
    bgColor: "bg-[#fff5f2]",
  },
  {
    studentName: "Panchil Sharma",
    grade: "Grade 5, New Delhi",
    image: "/students/student7.png",
    testimonial:
      "Panchil always showed a natural interest in math, and Edzoro has been the perfect platform for nurturing that curiosity. The interactive games, puzzles, and stories keep her excited to learn, and the trainer's simple, effective teaching makes concepts easy to grasp. Highly recommend Edzoro!",
    parent: "Lata Sharma (mother of Panchil)",
    accentColor: "bg-[#4c7bff]",
    bgColor: "bg-[#fff0f0]",
  },
  {
    studentName: "Monik Patel",
    grade: "Grade 6, Chennai",
    image: "/students/Untitled design (36).png",
    testimonial:
      "Monik has always been passionate about math, and finding Edzoro was a game changer. The use of real-life scenarios, storytelling, and quizzes makes learning enjoyable and impactful. Edzoro truly stands out from other platforms. I strongly recommend it to parents seeking the best for their children.",
    parent: "Lata Patel (mother of Monik)",
    accentColor: "bg-[#f15a29]",
    bgColor: "bg-[#f5f7ff]",
  },
  
  // Add more testimonials as needed
];



export default function Component() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
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

  return (
    <section className="py-16 relative overflow-hidden max-w-6xl mx-auto mt-6 rounded-xl">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold text-[#2d2d2d] md:text-4xl">
              Why Parents <span className="text-[#f15a29]">Love Edzoro?</span>
            </h2>
            <p className="text-[#666]">
              Real Stories of Success and Transformation
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
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 md:w-full"
                >
                  <div
                    className={`rounded-3xl ${testimonial.bgColor} p-8 md:flex md:items-start md:gap-8`}
                  >
                    {/* Image with colored border */}
                    <div className="mb-6 flex justify-center md:mb-0 md:w-48">
                      <div
                        className={`relative object-cover overflow-hidden `}
                      >
                        <Image
                          src={testimonial.image}
                          width={500}
                height={300}
                          alt={testimonial.studentName}
                          className=""
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="mb-1 text-xl font-bold text-[#2d2d2d]">
                        {testimonial.studentName}
                      </h3>
                      <p className="mb-4 text-sm text-[#666]">
                        {testimonial.grade}
                      </p>
                      <p className="mb-4 text-[#2d2d2d]">
                        {testimonial.testimonial}
                      </p>
                      <p className="italic text-[#666]">{testimonial.parent}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg
                className="h-6 w-6 text-[#2d2d2d]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg
                className="h-6 w-6 text-[#2d2d2d]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
        </div>
      </div>
    </section>
  );
}
