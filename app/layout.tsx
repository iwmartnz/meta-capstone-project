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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="logo.png" />
        <meta property="og:url" content="https://littlelemon/" />
        <meta
          property="og:description"
          content="Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
        />
      </Head>
      <body className={karla.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
