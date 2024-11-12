import type { Metadata } from 'next'

const defaultMetadata: Metadata = {
  title: 'Edzoro - Interactive Math Learning',
  description: 'Empowering students through interactive math learning. Making math fun, engaging, and accessible for every student.',
  keywords: ['math', 'education', 'online learning', 'interactive', 'students'],
  authors: [{ name: 'Edzoro Team' }],
  creator: 'Edzoro',
  publisher: 'Edzoro',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.edzoro.com',
    siteName: 'Edzoro',
    images: [
      {
        url: 'https://www.edzoro.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Edzoro - Interactive Math Learning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@edzoro',
    creator: '@edzoro',
  },
}

export default defaultMetadata