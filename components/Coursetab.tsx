"use client";

import * as React from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import {
  WhatsAppBuyButton,
  waLink,
  WhatsAppIcon,
} from "@/components/WhatsApp";
import { Calculator, Pencil } from "@/components/Doodles";

type Plan = {
  title: string;
  price: string;
  originalPrice: string;
  duration: string;
  sessions: string;
  features: string[];
  popular?: boolean;
};

const pricingData: Record<string, Plan[]> = {
  "UKG-1": [
    {
      title: "Apprentice Ninja",
      price: "6,999",
      originalPrice: "15,999",
      duration: "3 months",
      sessions: "40 Sessions",
      features: [
        "Develop Basic Skill",
        "Introduction to math",
        "Progressive Learning Modules",
      ],
    },
    {
      title: "Warrior Ninja",
      price: "13,999",
      originalPrice: "28,999",
      duration: "6 months",
      sessions: "80 Sessions",
      features: [
        "Advanced topics",
        "Weekly Practice",
        "Skill Enhancement Exercises",
        "Comprehensive Coverage",
      ],
    },
    {
      title: "Master Ninja",
      price: "21,999",
      originalPrice: "44,999",
      duration: "9 months",
      sessions: "120 Sessions",
      features: [
        "Speed Math Techniques",
        "Advanced Techniques",
        "Real World Maths",
        "Cognitive skill mastery",
      ],
      popular: true,
    },
  ],
  "2-3": [
    {
      title: "Apprentice Ninja",
      price: "6,999",
      originalPrice: "15,999",
      duration: "3 months",
      sessions: "40 Sessions",
      features: [
        "Intermediate Math Concepts",
        "Problem Solving Techniques",
        "Intro to Logical Reasoning",
      ],
    },
    {
      title: "Warrior Ninja",
      price: "13,999",
      originalPrice: "28,999",
      duration: "6 months",
      sessions: "80 Sessions",
      features: [
        "Complex Problem Analysis",
        "Weekly Math Puzzles",
        "Introduction to Algebra",
      ],
    },
    {
      title: "Master Ninja",
      price: "21,999",
      originalPrice: "44,999",
      duration: "9 months",
      sessions: "120 Sessions",
      features: [
        "Speed Math Mastery",
        "Geometry Basics",
        "Critical Thinking & Application",
      ],
      popular: true,
    },
  ],
  "4-6": [
    {
      title: "Apprentice Ninja",
      price: "6,999",
      originalPrice: "15,000",
      duration: "3 months",
      sessions: "40 Sessions",
      features: [
        "Basic Arithmetic Skills",
        "Simple Problem Solving",
        "Introduction to Shapes",
      ],
    },
    {
      title: "Warrior Ninja",
      price: "13,999",
      originalPrice: "28,999",
      duration: "6 months",
      sessions: "80 Sessions",
      features: [
        "Intermediate Math Concepts",
        "Problem Solving Techniques",
        "Intro to Logical Reasoning",
      ],
    },
    {
      title: "Master Ninja",
      price: "21,999",
      originalPrice: "44,999",
      duration: "9 months",
      sessions: "120 Sessions",
      features: [
        "Speed Math Mastery",
        "Geometry Basics",
        "Critical Thinking & Application",
      ],
      popular: true,
    },
  ],
  "7-8": [
    {
      title: "Apprentice Ninja",
      price: "6,999",
      originalPrice: "15,999",
      duration: "3 months",
      sessions: "40 Sessions",
      features: [
        "Intermediate Algebra & Geometry",
        "Advanced Word Problems",
        "Pre-Algebra Foundations",
      ],
    },
    {
      title: "Warrior Ninja",
      price: "13,999",
      originalPrice: "28,999",
      duration: "6 months",
      sessions: "80 Sessions",
      features: [
        "Advanced Math Concepts",
        "Problem-Solving for Complex Problems",
        "Advanced Logical Reasoning",
      ],
    },
    {
      title: "Master Ninja",
      price: "21,999",
      originalPrice: "44,999",
      duration: "9 months",
      sessions: "120 Sessions",
      features: [
        "Speed Math Mastery",
        "Advanced Geometry Techniques",
        "Critical Thinking & Advanced Problem Solving",
      ],
      popular: true,
    },
  ],
  "9-10": [
    {
      title: "Apprentice Ninja",
      price: "6,999",
      originalPrice: "15,999",
      duration: "3 months",
      sessions: "40 Sessions",
      features: [
        "Board-Exam Foundations",
        "Algebra & Geometry Strengthening",
        "Chapter-wise Practice",
      ],
    },
    {
      title: "Warrior Ninja",
      price: "13,999",
      originalPrice: "28,999",
      duration: "6 months",
      sessions: "80 Sessions",
      features: [
        "Complete Board Syllabus Coverage",
        "Previous-Year Paper Practice",
        "Exam Strategy & Time Management",
      ],
    },
    {
      title: "Master Ninja",
      price: "21,999",
      originalPrice: "44,999",
      duration: "9 months",
      sessions: "120 Sessions",
      features: [
        "Full Syllabus + Revision Cycles",
        "Sample-Paper Mock Tests",
        "1-on-1 Doubt Sessions",
      ],
      popular: true,
    },
  ],
};

const planStyles = [
  {
    card: "bg-white border-[#f15a29]/15",
    check: "text-[#f15a29]",
    badge: "bg-[#f5f7ff] text-[#5b6cff]",
    emoji: "🌱",
  },
  {
    card: "bg-white border-[#f15a29]/15",
    check: "text-[#f15a29]",
    badge: "bg-[#fff5f2] text-[#f15a29]",
    emoji: "⚡",
  },
  {
    card: "bg-white border-2 border-[#f15a29] shadow-[0_18px_40px_-18px_rgba(241,90,41,0.4)]",
    check: "text-[#f15a29]",
    badge: "bg-[#f15a29] text-white",
    emoji: "🏆",
  },
];

export default function Component() {
  const [activeTab, setActiveTab] = React.useState("4-6");

  return (
    <section
      id="buy"
      className="relative mx-auto mt-6 max-w-6xl scroll-mt-24 overflow-hidden rounded-[2rem] py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <Calculator className="pointer-events-none absolute -right-2 top-8 h-16 w-16 opacity-15" />
      <Pencil className="pointer-events-none absolute -left-2 bottom-10 h-16 w-16 opacity-15" />

      <div className="relative container px-4 md:px-6">
        <Reveal className="flex flex-col items-center space-y-4 text-center">
          <span className="inline-block rounded-full bg-[#fff5f2] px-4 py-1.5 text-sm font-semibold text-[#f15a29] shadow-sm">
            🧮 Online Mathematics Course · Grade UKG–10
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl md:text-5xl">
            Pick a plan. <span className="squiggle-underline text-[#f15a29]">Buy on WhatsApp</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-[#666] md:text-lg">
            One subject — Mathematics — done brilliantly. Choose your
            child&apos;s grade, pick a plan, and enroll in one tap: your order
            opens directly in WhatsApp chat with our team. No forms, no waiting.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#f15a29]/50 bg-gradient-to-r from-[#fff5f2] via-[#fff0d9] to-[#fff5f2] px-6 py-3">
            <span className="text-xl">🪔</span>
            <span className="font-bold text-[#2d2d2d]">
              Diwali Offer: <span className="text-[#f15a29]">50% OFF</span> — pay ₹6,999 / ₹13,999 / ₹21,999 instead of ₹15,999 / ₹28,999 / ₹44,999
            </span>
            <span className="rounded-full bg-[#f15a29] px-2.5 py-0.5 text-xs font-bold text-white">
              Limited seats
            </span>
          </div>
          <a
            href={waLink(
              "Hi Edzoro! 👋 I want to enroll my child in your online math course. Which plan do you recommend?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] underline-offset-4 hover:underline"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Not sure which plan? Ask us on WhatsApp — we reply in minutes
          </a>
        </Reveal>

        <div className="mt-10">
          <Reveal className="mb-8 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border-2 border-[#f15a29] p-1">
              {Object.keys(pricingData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    activeTab === tab
                      ? "bg-[#f15a29] text-white"
                      : "text-[#f15a29] hover:bg-[#f15a29]/10",
                  )}
                >
                  {tab === "UKG-1" ? "Grade UKG–1" : `Grade ${tab}`}
                </button>
              ))}
            </div>
          </Reveal>

          {Object.entries(pricingData).map(
            ([grade, plans]) =>
              activeTab === grade && (
                <div key={grade} className="grid gap-6 pt-4 md:grid-cols-3">
                  {plans.map((plan, index) => (
                    <Reveal
                      key={plan.title}
                      delay={index * 110}
                      direction="zoom"
                      className={`card-lift relative flex flex-col overflow-hidden rounded-3xl border p-6 ${planStyles[index].card}`}
                    >
                      {plan.popular && (
                        <div className="absolute right-4 top-4 rounded-full bg-[#f15a29] px-3 py-1 text-xs font-semibold text-white">
                          Most popular
                        </div>
                      )}
                      <div
                        className={`mb-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${planStyles[index].badge}`}
                      >
                        {planStyles[index].emoji} {plan.title}
                      </div>
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className="text-sm text-gray-400 line-through">
                          ₹{plan.originalPrice}
                        </span>
                        <span className="text-3xl font-extrabold text-[#2d2d2d]">
                          ₹{plan.price}
                        </span>
                        <span className="rounded-full bg-[#f15a29]/10 px-2 py-0.5 text-xs font-bold text-[#f15a29]">
                          50% OFF 🪔
                        </span>
                      </div>
                      <div className="mt-1 flex items-center space-x-2 text-sm text-[#666]">
                        <span className="font-semibold">{plan.sessions}</span>
                        <span>|</span>
                        <span className="font-semibold">{plan.duration}</span>
                      </div>

                      <div className="mt-5 space-y-2">
                        <h4 className="text-sm font-bold uppercase tracking-wide text-[#2d2d2d]">
                          Your child learns
                        </h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start space-x-2">
                              <Check
                                className={`mt-0.5 h-4 w-4 shrink-0 ${planStyles[index].check}`}
                              />
                              <span className="text-sm text-[#444]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-col gap-2 border-t border-dashed border-[#f15a29]/25 pt-4">
                        <WhatsAppBuyButton
                          message={`Hi Edzoro! 👋 I want to buy the *${plan.title}* online math course (${plan.sessions}, ${plan.duration}, ₹${plan.price} — Diwali 50% OFF) for Grade ${grade}. Please share the next steps.`}
                          className="w-full"
                        />
                        <Link
                          href="/Courses/#curriculam-section"
                          className="block w-full rounded-full border-2 border-[#2d2d2d]/10 py-2.5 text-center text-sm font-semibold text-[#2d2d2d] transition-colors hover:border-[#f15a29] hover:text-[#f15a29]"
                        >
                          View Curriculum
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              ),
          )}

          <Reveal delay={150} className="mt-8 text-center text-sm text-[#666]">
            🔒 Enrollment is confirmed personally by our team on WhatsApp — you
            can ask anything before you pay. EMI options available.{" "}
            <a
              href="#book-demo"
              className="font-semibold text-[#f15a29] underline-offset-4 hover:underline"
            >
              Prefer to try a free demo first?
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
