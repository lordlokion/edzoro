"use client";

import * as React from "react";
import { Check, Rocket, School, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const curriculumData = {
  apprenticeNinja: {
    title: "Apprentice Ninja",
    sessions: "(40 sessions) Includes 4 modules",
    modules: [
      {
        number: 1,
        title: "Numbers and Comparison",
        icon: "📱",
        learnings: [
          "History of Math",
          "Number Line",
          "Place Value",
          "Missing Numbers",
          "Comparing Numbers",
          "Ascending & Descending",
        ],
      },
      {
        number: 2,
        title: "Kingdom of Addition",
        icon: "👑",
        learnings: [
          "Counting on Number line",
          "Addition on Number Line",
          "Addition Pattern",
          "Introduction to Addition",
          "edzoro's method of Addition",
          "Visualisation Bubble",
        ],
      },
      {
        number: 3,
        title: "Mastering Tables",
        icon: "📝",
        learnings: [
          "Counting in Groups",
          "Intro to Multiplication",
          "Multiplication Properties",
          "Distributive Property",
          "Jumping on Number Line",
          "Multiplication Tables",
        ],
      },
      {
        number: 4,
        title: "Multiplication Maestro",
        icon: "🎯",
        learnings: [
          "Repeated Addition",
          "Expanded Form",
          "Intro to Step Operator",
          "Step Multiplication",
          "Two Observations",
          "Multiplication",
        ],
      },
    ],
  },
  warriorNinja: {
    title: "Warrior Ninja",
    sessions: "(80 sessions) Everything on Apprentice Ninja +",
    modules: [
      {
        number: 5,
        title: "Super Subtraction",
        icon: "🏅",
        learnings: [
          "Back-Counting on Number line",
          "Subtraction on Number Line",
          "Number Pattern in Subtraction",
          "Introduction to Subtraction",
          "Introduction to Subtraction",
          "Visualisation Bubble",
        ],
      },
      {
        number: 6,
        title: "Shapes and Units of Measurement",
        icon: "📐",
        learnings: [
          "Shapes Around the World",
          "Open Shapes",
          "Closed shapes",
          "Degrees of Comparison",
          "Units to Measurement",
          "Perimeter and Area",
        ],
      },
      {
        number: 7,
        title: "Fractions and Division",
        icon: "🥧",
        learnings: [
          "Intro to Fractions",
          "Like, Unlike Fractions",
          "Equivalent Fractions",
          "Intro to Division",
          "Division - Grouping",
        ],
      },
      {
        number: 8,
        title: "Solving Practical Questions",
        icon: "📚",
        learnings: [
          "Practicing Higher order thinking skills of past 7 modules",
        ],
      },
    ],
  },
  masterNinja: {
    title: "Master Ninja",
    sessions: "(120 sessions) Everything on Warrior Ninja +",
    modules: [
      {
        number: 9,
        title: "Math in Colors",
        icon: "🎨",
        learnings: [
          "Types of Numbers",
          "Closure Property",
          "Commutative Property",
          "Associative Property",
          "Identity Property",
          "Distributive Property",
        ],
      },
      // Add remaining modules 10-15 similarly
    ],
  },
};

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="mb-2 text-center text-4xl font-bold">
        <span className="text-gray-800">Detailed</span>{" "}
        <span className="text-[#f15a29]">Math Syllabus</span>
      </h1>
      <p className="mb-12 text-center text-gray-600">
        practice session are included in each Module
      </p>

      {/* Math Star Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          {curriculumData.apprenticeNinja.title}
        </h2>
        <p className="mb-6 text-gray-600">
          {curriculumData.apprenticeNinja.sessions}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {curriculumData.apprenticeNinja.modules.map((module) => (
            <Card key={module.number} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{module.icon}</span>
                  <div>
                    <div className="text-sm text-gray-500">
                      Module {module.number}
                    </div>
                    <CardTitle>{module.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-500">You Learn:</div>
                <ul className="mt-2 space-y-2">
                  {module.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Foundation Banner */}
      <div className="mb-8 rounded-lg bg-blue-500 p-4 text-white">
        <div className="flex items-center gap-3">
          <Rocket className="h-6 w-6" />
          <p>
            It establishes a foundation in essential concepts, prioritizing
            real-world applications to ensure learners gain practical, hands-on
            experience.
          </p>
        </div>
      </div>

      {/* Math Champion Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          {curriculumData.warriorNinja.title}
        </h2>
        <p className="mb-6 text-gray-600">
          {curriculumData.warriorNinja.sessions}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {curriculumData.warriorNinja.modules.map((module) => (
            <Card key={module.number} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{module.icon}</span>
                  <div>
                    <div className="text-sm text-gray-500">
                      Module {module.number}
                    </div>
                    <CardTitle>{module.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-500">You Learn:</div>
                <ul className="mt-2 space-y-2">
                  {module.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* School Banner */}
      <div className="mb-8 rounded-lg bg-yellow-400 p-4 text-gray-800">
        <div className="flex items-center gap-3">
          <School className="h-6 w-6" />
          <p>
            Edzoro builds a strong foundation in key concepts, empowering
            students to excel in their school studies and achieve academic
            success.
          </p>
        </div>
      </div>

      {/* Math Wizard Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          {curriculumData.masterNinja.title}
        </h2>
        <p className="mb-6 text-gray-600">
          {curriculumData.masterNinja.sessions}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {curriculumData.masterNinja.modules.map((module) => (
            <Card key={module.number} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{module.icon}</span>
                  <div>
                    <div className="text-sm text-gray-500">
                      Module {module.number}
                    </div>
                    <CardTitle>{module.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-500">You Learn:</div>
                <ul className="mt-2 space-y-2">
                  {module.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Advanced Math Banner */}
      <div className="rounded-lg bg-[#f15a29] p-4 text-white">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6" />
          <p>
            Edzoro offers advanced speed math courses, helping students master
            quick calculations and understand the practical applications of math
            in everyday life.
          </p>
        </div>
      </div>

      {/* Book Demo Button */}
    </div>
  );
}
