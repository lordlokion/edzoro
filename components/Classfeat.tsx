"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Image from 'next/image'

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
    <section className="py-16 max-w-6xl mx-auto mt-8 rounded-xl">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#2d2d2d] md:text-4xl">
          How Edzoro Makes Math <span className="text-[#f15a29]">Fun and Engaging</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl p-4">
              <Image
                src={tabsData.find(tab => tab.id === activeTab)?.image || ''}
                alt={`Demonstrating ${tabsData.find(tab => tab.id === activeTab)?.title}`}
                width={500}
                height={300}
                layout="responsive"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-6">
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className={cn(
                  "rounded-xl p-4 shadow-sm backdrop-blur-sm cursor-pointer transition-colors",
                  activeTab === tab.id ? "bg-white/80" : "bg-white hover:bg-white/70"
                )}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                tabIndex={0}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full",
                    activeTab === tab.id ? "bg-blue-500 text-white" : "border-2 border-gray-400"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}