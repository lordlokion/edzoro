import type { Metadata } from 'next'

export const SITE_URL = 'https://www.edzoro.com'

const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Edzoro — Online Math Classes for Kids (Class 1–10) | Live 1-on-1 & Small Group Tuition',
    template: '%s | Edzoro',
  },
  description:
    'Edzoro offers live, interactive online math classes for students in grades 1–10 across India. Expert tutors, structured practice, and personal support — book a free demo class today.',
  keywords: [
    'online math classes',
    'online maths tuition India',
    'math classes for kids',
    'online math tutor',
    'class 10 maths online classes',
    'cbse maths online tuition',
    'icse maths tuition online',
    'learn maths online',
    'math learning app for students',
    'free demo math class',
    'edzoro',
  ],
  authors: [{ name: 'Edzoro Team' }],
  creator: 'Edzoro',
  publisher: 'Edzoro',
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Edzoro',
    title: 'Edzoro — Interactive Online Math Classes for Class 1–10',
    description:
      'Live online math classes with expert tutors, structured practice, and personal support. Book a free demo class for your child today.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Edzoro — Interactive Online Math Classes for Students from 1st–10th',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edzoro — Interactive Online Math Classes for Class 1–10',
    description:
      'Live online math classes with expert tutors, structured practice, and personal support. Book a free demo class today.',
    images: ['/og-image.jpg'],
  },
}

export default defaultMetadata
