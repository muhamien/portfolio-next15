import type { Metadata } from "next";
import { Public_Sans, DM_Serif_Text } from "next/font/google";
import { Navbar } from "../templates/navbar";
import Footer from "../components/Footer";
import "./globals.css";

const PublicSans = Public_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const DMSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "Muhammad Amien",
  description: "Welcome to my porfolio site as software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PublicSans.variable} ${DMSerifText.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
