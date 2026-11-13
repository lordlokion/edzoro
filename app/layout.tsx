import type { Metadata } from "next";
import defaultMetadata from './metadata'
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  ...defaultMetadata,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Edzoro",
  url: "https://www.edzoro.com",
  logo: "https://www.edzoro.com/LOGO.png",
  image: "https://www.edzoro.com/og-image.jpg",
  description:
    "Edzoro offers live, interactive online math classes for students in grades 1–10 across India, with expert tutors, structured practice, and personal support.",
  slogan: "One lesson at a time",
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Free Demo Math Class",
      price: "0",
      priceCurrency: "INR",
      itemOffered: {
        "@type": "Course",
        name: "Online Math Classes (Grade 1–10)",
        description:
          "Live, interactive online math classes for students from grade 1 to grade 10, aligned with CBSE, ICSE and state boards.",
        inLanguage: "en",
        offers: {
          "@type": "Offer",
          category: "Paid",
          priceCurrency: "INR",
        },
      },
    },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Edzoro",
  url: "https://www.edzoro.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.edzoro.com/Courses?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
