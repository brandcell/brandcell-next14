import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const manrope = Manrope({ subsets: ["latin"] })

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

      <body className={`${manrope.className}`}>

        <Navbar />

        {children}

        <Footer />

      </body>


    </html>
  );
}
