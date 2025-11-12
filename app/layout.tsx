import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tuniverse - Your Life in Music",
  description: "Track, rate and review your favorite songs and albums in your music universe. The Letterboxd for music lovers.",
  keywords: ["music", "social network", "letterboxd for music", "music diary", "track music", "rate songs"],
  authors: [{ name: "Tuniverse Team" }],
  openGraph: {
    title: "Tuniverse - Your Life in Music",
    description: "Track, rate and review your favorite songs and albums",
    type: "website",
    url: "https://tuniverseapp.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuniverse - Your Life in Music",
    description: "Track, rate and review your favorite songs and albums",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
