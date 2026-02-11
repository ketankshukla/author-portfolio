import type { Metadata, Viewport } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

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
  title: "Ketan Shukla — Author of Fiction & Non-Fiction Book Series",
  description:
    "Explore the published works of Ketan Shukla: Aztec Samurai Adventures (12-book epic fantasy), Repetition: Mother of Mastery (5-book non-fiction), and Reality Without Belief (5-book non-fiction). Twenty-two books across three series.",
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
  ],
  icons: {
    icon: "/favicon.svg",
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
        {children}
      </body>
    </html>
  );
}
