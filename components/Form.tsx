"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/Input";

import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FORMSPREE_ID = "xvzvweyb";

const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long"),
  email: z.string().email("Invalid email address"),
  childName: z.string().min(2, "Child's name must be at least 2 characters"),
  grade: z.string().min(1, "Please select a grade"),
  whatsappUpdates: z.boolean().default(true),
});

type FormData = z.infer<typeof formSchema>;

export default function BookFreeClass() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      email: "",
      childName: "",
      grade: "",
      whatsappUpdates: true,
    },
  });

  async function onSubmit(values: FormData) {
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "🎓 New Free Demo Booking — edzoro.com",
          ...values,
          whatsappUpdates: values.whatsappUpdates ? "Yes" : "No",
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      id="book-demo"
      className="mx-auto max-w-6xl scroll-mt-24 overflow-hidden rounded-3xl bg-white shadow-lg"
    >
      <div className="grid md:grid-cols-2">
        {/* Left Panel */}
        <div className="relative bg-[#f15a29] p-8 text-white md:p-12">
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
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-4xl">
                ✅
              </div>
              <h2 className="mb-2 text-2xl font-bold text-[#2d2d2d]">
                You&apos;re booked!
              </h2>
              <p className="mb-6 text-sm text-[#666]">
                Thank you! Our team will reach out shortly to schedule your
                child&apos;s free demo class.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-sm font-semibold text-[#f15a29] underline-offset-4 hover:underline"
              >
                Book for another child
              </button>
            </div>
          ) : (
            <>
              <h1 className="mb-2 text-2xl font-bold text-[#2d2d2d]">
                Book a <span className="text-[#f15a29]">FREE Class</span> for
                your child!
              </h1>
              <p className="mb-6 text-sm text-[#666]">
                Enter your details below
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Parent's Mobile Number"
                            type="tel"
                            inputMode="numeric"
                            className="border-gray-300"
                            {...field}
                          />
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
                            type="email"
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
                    name="grade"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full border-gray-300 bg-white">
                              <SelectValue placeholder="Child's Grade (1st - 10th)" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "1st Grade",
                              "2nd Grade",
                              "3rd Grade",
                              "4th Grade",
                              "5th Grade",
                              "6th Grade",
                              "7th Grade",
                              "8th Grade",
                              "9th Grade",
                              "10th Grade",
                            ].map((g) => (
                              <SelectItem key={g} value={g}>
                                {g}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again, or call us
                      directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="md:block bg-[#f15a29] text-white font-bold py-2 px-6 rounded-full shadow-[0_4px_0_0_#d94e22] hover:shadow-[0_2px_0_0_#d94e22] hover:translate-y-[2px] transition-all duration-200 active:shadow-none active:translate-y-[4px] disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? "Booking…" : "Book Free Demo"}
                  </button>
                </form>
              </Form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
