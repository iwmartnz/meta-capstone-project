import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little Lemon Restaurant",
  description: "Family owned Mediterranean restaurant",
  openGraph: {
    title: "Little Lemon Restaurant",
    description: "Family owned Mediterranean restaurant",
    url: "https://littlelemon.com",
    siteName: "Little Lemon",
    images: [
      {
        url: "https://littlelemon.com",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
