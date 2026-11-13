"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DialogTitle, Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/Input";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const {
    register,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <nav className="py-4 rounded-xl mt-4 mb-4 bg-[#fff5f2] px-6 mx-auto max-w-6xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-[#333]">
            EDZORO
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link className="text-[#333] hover:text-[#f15a29]" href="/">
            Home
          </Link>
          <Link className="text-[#333] hover:text-[#f15a29]" href="/Courses">
            Courses
          </Link>
          <Link
            className="text-[#333] hover:text-[#f15a29]"
            href="https://app.edzoro.com/"
          >
            Student Dashboard
          </Link>
        </div>

        <button
          onClick={() => setIsBookingOpen(true)}
          className="hidden md:block bg-[#f15a29] text-white font-bold py-2 px-6 rounded-full shadow-[0_4px_0_0_#d94e22] hover:shadow-[0_2px_0_0_#d94e22] hover:translate-y-[2px] transition-all duration-200 active:shadow-none active:translate-y-[4px]"
        >
          Book Free Demo
        </button>

        <button
          className="md:hidden text-[#333]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link className="block text-[#333] hover:text-[#f15a29]" href="/">
            Home
          </Link>
          <Link
            className="block text-[#333] hover:text-[#f15a29]"
            href="/Courses"
          >
            Courses
          </Link>

          <Link
            className="block text-[#333] hover:text-[#f15a29]"
            href="https://app.edzoro.com"
          >
            Student Dashboard
          </Link>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="w-full bg-[#f15a29] text-white font-bold py-2 px-6 rounded-full shadow-[0_4px_0_0_#d94e22] hover:shadow-[0_2px_0_0_#d94e22] hover:translate-y-[2px] transition-all duration-200 active:shadow-none active:translate-y-[4px]"
          >
            Book Free Demo
          </button>
        </div>
      )}

      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent>
          <DialogTitle className="mb-2 text-2xl font-bold text-[#2d2d2d]">
            Book a <span className="text-[#f15a29]">FREE Class</span> for your
            child!
          </DialogTitle>
          <p className="mb-6 text-sm text-[#666]">Enter your details below</p>

          <form
            method="POST"
            action="https://formspree.io/f/xvzvweyb"
            className="space-y-4"
          >
            <div>
              <Input
                placeholder="Parent's Mobile Number"
                id="name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">
                  {errors.name.message as string}
                </p>
              )}
            </div>
            <div>
              <Input
                placeholder="Parent's Email Address"
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.message as string}
                </p>
              )}
            </div>
            <div>
              <Input
                placeholder="Child's Name"
                id="phone"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">
                  {errors.phone.message as string}
                </p>
              )}
            </div>
            <button className="w-full bg-[#f15a29] text-white font-bold py-2 px-6 rounded-full shadow-[0_4px_0_0_#d94e22] hover:shadow-[0_2px_0_0_#d94e22] hover:translate-y-[2px] transition-all duration-200 active:shadow-none active:translate-y-[4px]">
              Book Free Demo
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
