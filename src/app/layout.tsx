import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/globals.css"
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { CTA } from "@/components/sections/cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Ensures no FOUT (flash of unstyled text)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://accessoxbridge.net"), // Replace with your prod domain
  title: {
    default: "Access Oxbridge | Elite UK University Admissions",
    template: "%s | Access Oxbridge",
  },
  description: "Access Oxbridge is a leading provider of Oxbridge admissions consulting services. We help students get into Oxbridge with a proven 62% success rate.",
  // viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: "Access Oxbridge: Elite UK University Admissions",
    description: "Unlock Oxbridge with our 62% success rate mentoring. From personal statements to interviews—global expertise in Law, Medicine, PPE.",
    url: "/",
    siteName: "Access Oxbridge",
    images: [
      {
        url: "/og-image.jpg", // Placeholder: 1200x630 with Oxbridge imagery + gold accents
        width: 1200,
        height: 630,
        alt: "Access Oxbridge: Your Path to Elite Admissions",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "/", // Prevents duplicate content issues
  },
  // Add Twitter Card if using X for promo
  twitter: {
    card: "summary_large_image",
    title: "Access Oxbridge: Elite UK University Admissions",
    description: "Boost your Oxbridge chances by 400%—expert help for international students.",
    images: ["/twitter-image.jpg"], // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <main>{children}</main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
