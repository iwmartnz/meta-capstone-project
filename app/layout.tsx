import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little Lemon Restaurant",
  description: "Family owned Mediterranean restaurant",
  openGraph: {
    title: "Our Menu",
    description:
      "Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
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
