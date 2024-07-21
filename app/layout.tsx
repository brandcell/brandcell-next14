import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrandCell Studio - Building E-Commerce Engines",
  keywords: [
    "Conversion Rate Optimisation, Shopify Development, Shopify Migration, Magento Migration to Shopify, Fb Ad Agency, e-commerce agency",
  ],
  openGraph: {
    description:
      "We are a Malaysian digital marketing agency specialising in branding, Shopify website design and development, performance marketing and conversion-rate optimisation.",
    images: [
      "https://res.cloudinary.com/dl3rdpbpw/image/upload/v1721576957/opengraph_r3r1wq.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon_io/site.webmanifest"></link>
      </head>
      <body className={`${manrope.className}`}>
        <Navbar />
        <div id="padding-provider" className="m-auto max-w-screen-xl px-3">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
