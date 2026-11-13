import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import { Notebook, Sparkle } from "./Doodles";

export default function Component() {
  return (
    <footer className="relative overflow-hidden bg-[#2d2d2d] py-14 text-white">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-10" />
      <Notebook className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 opacity-10" />
      <Sparkle className="pointer-events-none absolute left-10 top-10 h-5 w-5 animate-wiggle opacity-40" />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <svg className="h-9 w-9" viewBox="0 0 64 64" aria-hidden>
                <rect x="14" y="8" width="36" height="48" rx="5" fill="#faf9f9" stroke="#faf9f9" strokeWidth="3" />
                <text x="30" y="40" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#f15a29" fontFamily="Georgia, serif">Σ</text>
                <rect x="42" y="8" width="8" height="48" rx="3" fill="#f15a29" />
              </svg>
              <span className="text-2xl font-extrabold tracking-tight">EDZORO</span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              One lesson at a time. Live, interactive online math classes for
              students from grade 1–10 across India.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 transition-colors hover:text-[#f15a29]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Courses" className="text-white/80 transition-colors hover:text-[#f15a29]">
                  Courses &amp; Curriculum
                </Link>
              </li>
              <li>
                <a href="https://app.edzoro.com/" className="text-white/80 transition-colors hover:text-[#f15a29]">
                  Student Dashboard
                </a>
              </li>
              <li>
                <a href="#book-demo" className="text-white/80 transition-colors hover:text-[#f15a29]">
                  Book a Free Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Social + support */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">
              Stay in touch
            </h3>
            <div className="mb-4 flex justify-center gap-4 md:justify-start">
              <Link
                href="https://www.instagram.com/edzoro_"
                className="rounded-full border border-white/20 p-2 transition-all hover:-translate-y-0.5 hover:border-[#f15a29] hover:bg-white/10"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@edzoro"
                className="rounded-full border border-white/20 p-2 transition-all hover:-translate-y-0.5 hover:border-[#f15a29] hover:bg-white/10"
                aria-label="Our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/edzoro_"
                className="rounded-full border border-white/20 p-2 transition-all hover:-translate-y-0.5 hover:border-[#f15a29] hover:bg-white/10"
                aria-label="Our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
            <Link
              href="mailto:hello@edzoro.com"
              className="flex items-center justify-center gap-2 text-sm text-white/80 transition-colors hover:text-[#f15a29] md:justify-start"
            >
              <Mail className="h-4 w-4" />
              hello@edzoro.com
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Edzoro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
