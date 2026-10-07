import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://saravananadv.world'),
  title: {
    default: "SARAVANAN.N | Advocate, Supreme Court of India",
    template: "%s | SARAVANAN.N"
  },
  description: "Providing legal representation and advisory services. Chamber No. 214, Block D, Additional Building, Supreme Court of India, New Delhi.",
  keywords: ["Advocate", "Supreme Court of India", "New Delhi Law Chamber", "Legal Representation", "Legal Advisory", "SARAVANAN.N"],
  authors: [{ name: "SARAVANAN.N" }],
  creator: "SARAVANAN.N",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "SARAVANAN.N | Advocate, Supreme Court of India",
    description: "Providing legal representation and advisory services. Chamber No. 214, Block D, Additional Building, Supreme Court of India, New Delhi.",
    siteName: "SARAVANAN.N, Advocate",
    images: [
      {
        url: '/hero-sketch-compressed.jpg',
        width: 1200,
        height: 630,
        alt: 'SARAVANAN.N, Advocate, Supreme Court of India',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SARAVANAN.N | Advocate, Supreme Court of India",
    description: "Providing legal representation and advisory services. Chamber No. 214, Block D, Additional Building, Supreme Court of India, New Delhi.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'SARAVANAN.N | Advocate, Supreme Court of India',
    description: 'Providing legal representation and advisory services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chamber No. 214, Block D, Additional Building, Supreme Court of India',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110001',
      addressCountry: 'IN'
    },
    telephone: '+916381528329',
    email: 'advocatesaravananlaw@gmail.com',
    url: 'https://saravananadv.world'
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
