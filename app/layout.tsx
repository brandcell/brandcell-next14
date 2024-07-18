import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrandCell Studio - Building E-Commerce Engines",
  description: "We are a Malaysian digital marketing agency specialising in branding, e-commerce website design and builds, Facebook ad creative testing and optimisation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className}`}>

        <Navbar />

        {children}

        <Footer />

      </body>


    </html>
  );
}
