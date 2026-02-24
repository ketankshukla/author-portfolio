import type { Metadata, Viewport } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import ImageProtection from "@/components/ImageProtection";
import { BookProvider } from "@/context/BookContext";
import BookModal from "@/components/BookModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ketanshukla.com"),
  title:
    "Ketan Shukla — Author of 22 Books Across 3 Series | Epic Fantasy & Non-Fiction",
  description:
    "Published Amazon author of 22 books across 3 series: Aztec Samurai Adventures (12-book epic fantasy), Repetition: Mother of Mastery (5-book non-fiction on mastery), and Reality Without Belief (5-book non-fiction on philosophy). Available on Kindle, Paperback & Hardcover.",
  keywords: [
    "Ketan Shukla",
    "author",
    "book series",
    "Aztec Samurai Adventures",
    "Repetition Mother of Mastery",
    "Reality Without Belief",
    "fiction",
    "non-fiction",
    "epic fantasy",
    "self-improvement",
    "philosophy",
    "Amazon KDP author",
    "indie author",
    "published author",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ketan Shukla — Author of 22 Books Across 3 Series",
    description:
      "Published Amazon author of 22 books: Aztec Samurai Adventures (epic fantasy), Repetition: Mother of Mastery (non-fiction), and Reality Without Belief (philosophy). Kindle, Paperback & Hardcover.",
    url: "https://www.ketanshukla.com",
    siteName: "Ketan Shukla",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ketan Shukla — Author of 22 Books Across 3 Series",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketan Shukla — Author of 22 Books Across 3 Series",
    description:
      "Published Amazon author of 22 books: Aztec Samurai Adventures (epic fantasy), Repetition: Mother of Mastery (non-fiction), and Reality Without Belief (philosophy).",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${garamond.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Ketan Shukla",
                  url: "https://www.ketanshukla.com",
                  image: "https://www.ketanshukla.com/images/ketan-shukla.jpeg",
                  jobTitle: "Author",
                  description:
                    "Published Amazon author of 22 books across 3 series — epic fantasy, the science of mastery, and the philosophy of reality.",
                  knowsAbout: [
                    "Fiction Writing",
                    "Non-Fiction Writing",
                    "Epic Fantasy",
                    "Self-Improvement",
                    "Philosophy",
                    "Book Series",
                    "Amazon KDP Publishing",
                  ],
                  sameAs: [
                    "https://www.amazon.com/stores/Ketan-Shukla/author/B0GMXQZ7C6",
                    "https://reedsy.com/ketan-shukla",
                    "https://metronagon.com",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Ketan Shukla",
                  url: "https://www.ketanshukla.com",
                },
              ],
            }),
          }}
        />
        <BookProvider>
          <ImageProtection />
          {children}
          <BookModal />
        </BookProvider>
      </body>
    </html>
  );
}
