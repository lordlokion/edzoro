"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import Reveal from "./Reveal"
import { Pencil } from "./Doodles"

const tabsData = [
  {
    id: "storytime-math",
    title: "Interactive Math Adventures",
    description: "We bring math to life with engaging stories, real-world examples, and fun activities that turn learning into an exciting adventure.",
    image: "/slide1.png",
  },
  {
    id: "real-time-quizzes",
    title: "Live & Dynamic Quizzes",
    description: "Test your skills in real-time with interactive quizzes designed to make math challenges feel like a game. Compete, learn, and grow with instant feedback!",
    image: "/Time Quiz.png",
  },
  {
    id: "endless-practice",
    title: "Unlimited Practice",
    description: "Never stop learning! Edzoro provides unlimited access to practice sessions, allowing students to sharpen their skills whenever they want and at their own pace.",
    image: "/Time Quiz (1).png",
  },
  {
    id: "tailored-learning",
    title: "Engaging Learning Environment",
    description: "Our live sessions and group activities create a vibrant and collaborative space where students work together, challenge each other, and celebrate successes.",
    image: "/Time Quiz (2).png",
  },
]

export default function Component() {
  const [activeTab, setActiveTab] = React.useState(tabsData[0].id)

  return (
    <section className="mx-auto mt-8 max-w-6xl rounded-[2rem] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#fff5f2] px-4 py-1.5 text-sm font-semibold text-[#f15a29] shadow-sm">
            🎒 What makes classes fun
          </span>
          <h2 className="text-3xl font-bold text-[#2d2d2d] md:text-4xl">
            How Edzoro Makes Math{" "}
            <span className="squiggle-underline text-[#f15a29]">Fun and Engaging</span>
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          {/* Left side - Image */}
          <Reveal direction="left" className="relative">
            <div className="pointer-events-none absolute -left-4 -top-4 z-10 w-14 animate-float-slow">
              <Pencil />
            </div>
            <div className="relative rounded-2xl border-4 border-white bg-white p-3 shadow-[0_18px_40px_-18px_rgba(45,45,45,0.35)] transition-transform duration-500 hover:rotate-[-1.2deg] hover:scale-[1.01]">
              <Image
                src={tabsData.find(tab => tab.id === activeTab)?.image || ''}
                alt={`Demonstrating ${tabsData.find(tab => tab.id === activeTab)?.title}`}
                width={500}
                height={300}
                layout="responsive"
                className="rounded-xl"
              />
            </div>
          </Reveal>

          {/* Right side - Features */}
          <div className="space-y-5">
            {tabsData.map((tab, i) => (
              <Reveal
                key={tab.id}
                direction="right"
                delay={i * 90}
                className={cn(
                  "rounded-2xl p-4 shadow-sm backdrop-blur-sm cursor-pointer transition-all card-lift",
                  activeTab === tab.id
                    ? "border-2 border-[#f15a29]/60 bg-white"
                    : "border-2 border-transparent bg-white/80 hover:bg-white"
                )}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                tabIndex={0}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "mt-1 flex h-6 w-6 items-center justify-center rounded-full transition-colors",
                    activeTab === tab.id ? "bg-[#f15a29] text-white" : "border-2 border-gray-300"
                  )}>
                    {activeTab === tab.id && (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d2d2d]">{tab.title}</h3>
                    <p className="text-sm text-[#666]">
                      {tab.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}