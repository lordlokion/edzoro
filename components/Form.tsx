"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/Input";

import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  childName: z.string().min(2, "Child's name must be at least 2 characters"),
  grade: z.string().min(1, "Please select a grade"),
  whatsappUpdates: z.boolean().default(true),
});

export default function BookFreeClass() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      email: "",
      childName: "",
      grade: "",
      whatsappUpdates: true,
    },
  });

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2">
        {/* Left Panel */}
        <div className="bg-[#f15a29] p-8 text-white md:p-12">
          <h2 className="mb-8 text-4xl font-bold leading-tight">
            One lesson at a time
          </h2>
          <p className="mb-4 text-lg">
            Every student has the potential to master math and unlock their
            inner superpower.
          </p>
          <div>
            <p>— Edzoro —</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-[#faf9f9] p-8 md:p-12">
          <h1 className="mb-2 text-2xl font-bold text-[#2d2d2d]">
            Book a <span className="text-[#f15a29]">FREE Class</span> for your
            child!
          </h1>
          <p className="mb-6 text-sm text-[#666]">Enter your details below</p>

          <Form {...form}>
            <form
              method="POST"
              action="https://formspree.io/f/xoqggypz"
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex rounded-md">
                        <Input
                          placeholder="Parent's Mobile Number"
                          className="rounded-l-none border-gray-300"
                          {...field}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Parent's Email Address"
                        className="border-gray-300"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="childName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Child's Name"
                        className="border-gray-300"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsappUpdates"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-[#f15a29]"
                        />
                        <label className="text-sm text-[#666]">
                          Get OTP & updates on WhatsApp
                        </label>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <button className="md:block bg-[#f15a29] text-white font-bold py-2 px-6 rounded-full shadow-[0_4px_0_0_#d94e22] hover:shadow-[0_2px_0_0_#d94e22] hover:translate-y-[2px] transition-all duration-200 active:shadow-none active:translate-y-[4px]">
                Book Free Demo
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
