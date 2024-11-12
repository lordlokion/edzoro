import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <footer className="bg-[#2d2d2d] py-12 text-white flex justify-center items-center">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Media */}
          <div className="flex gap-6">
            <Link
              href="https://www.instagram.com/edzoro_"
              className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/edzoro_"
              className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.youtube.com/@edzoro"
              className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
              aria-label="Follow us on LinkedIn"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>

          {/* Customer Support */}
          <div className="text-center">
            <h3 className="mb-2 text-sm font-semibold">Customer Support:</h3>
            <Link
              href="mailto:helo@edzoro.com"
              className="flex items-center justify-center gap-2 text-sm text-white/80 transition-colors hover:text-[#f15a29]"
            >
              <Mail className="h-4 w-4" />
              hello@edzoro.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
