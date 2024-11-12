"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const pricingData = {
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
        "Basic Calculus Concepts",
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
  "9+": [
    {
      title: "Apprentice Ninja",
      price: "6,999",
      originalPrice: "15,999",
      duration: "3 months",
      sessions: "40 Sessions",
      features: [
        "Advanced Speed Math",
        "Calculus & Advanced Algebra",
        "Mathematical Modelling & Applications",
      ],
    },
    {
      title: "Warrior Ninja",
      price: "13,999",
      originalPrice: "28,999",
      duration: "6 months",
      sessions: "80 Sessions",
      features: [
        "Mastery in Differential Equations",
        "Complex Problem Solving & Innovation",
        "Advanced Mathematical Theories",
      ],
    },
    {
      title: "Master Ninja",
      price: "21,999",
      originalPrice: "44,999",
      duration: "9 months",
      sessions: "120 Sessions",
      features: [
        "Mathematical Research & Innovation",
        "Real-world Mathematical Application",
        "Advanced Mathematical Programming",
      ],
      popular: true,
    },
  ],
};

export default function Component() {
  const [activeTab, setActiveTab] = React.useState("UKG-1");

  return (
    <section className="py-16 relative overflow-hidden max-w-6xl mx-auto border-2 border-black mt-6 rounded-xl">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Course <span className="text-[#f15a29]">Modules</span>
          </h2>
          <p className="mx-auto text-gray-600 md:text-lg/relaxed">
            At Edzoro, we design our course Modules with care and precision to
            meet the needs of students across all grade levels. Each learning
            experience is tailored to match a childs individual abilities and
            pace, ensuring that every student thrives. Our interactive and
            innovative programs make math enjoyable and engaging, fostering
            academic success and instilling lasting confidence in their math
            skills.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-center text-lg font-medium">Select Class</h3>
          <Tabs value={activeTab} className="mx-auto max-w-4xl">
            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-full border-2 border-[#f15a29] p-1">
                {Object.keys(pricingData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                      activeTab === tab
                        ? "bg-[#f15a29] text-white"
                        : "text-[#f15a29] hover:bg-[#f15a29]/10"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            {Object.entries(pricingData).map(([grade, plans]) => (
              <TabsContent key={grade} value={grade} className="mt-8">
                <div className="grid gap-6 md:grid-cols-3">
                  {plans.map((plan, index) => (
                    <Card
                      key={index}
                      className={`relative overflow-hidden ${
                        index === 0
                          ? "bg-red-50 border-red-100"
                          : index === 1
                          ? "bg-yellow-50 border-yellow-100"
                          : "bg-blue-50 border-blue-100"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute right-4 top-4 rounded-full bg-[#f15a29] px-3 py-1 text-xs text-white">
                          Most popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{plan.title}</CardTitle>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-sm text-gray-500 line-through">
                            {plan.originalPrice} INR
                          </span>
                          <span className="text-3xl font-bold">
                            {plan.price} INR
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="font-medium">{plan.sessions}</span>
                            <span className="text-gray-500">|</span>
                            <span className="font-medium">{plan.duration}</span>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium">Your learnings:</h4>
                            <ul className="space-y-2">
                              {plan.features.map((feature, featureIndex) => (
                                <li
                                  key={featureIndex}
                                  className="flex items-center space-x-2"
                                >
                                  <Check
                                    className={`h-4 w-4 ${
                                      index === 0
                                        ? "text-red-500"
                                        : index === 1
                                        ? "text-yellow-500"
                                        : "text-blue-500"
                                    }`}
                                  />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href="/Courses/#curriculam-section">
                          <Button
                            className={`w-full ${
                              index === 0
                                ? "bg-red-100 text-red-600 hover:bg-red-200"
                                : index === 1
                                ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                                : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                            }`}
                          >
                            View Curriculum
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
