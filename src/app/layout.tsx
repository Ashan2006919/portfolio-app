import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar"; // Ensure the path to NavBar is correct

// Load custom fonts using localFont
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO and browser tab titles
export const metadata: Metadata = {
  title: "Create Next App",
  description: "A Next.js application created with Next.js.",
  keywords: "Next.js, React, application",
  authors: [{ name: "Ashan Niwantha", url: "https://yourwebsite.com" }], // Change to your name/website
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 text-gray-800`}
      >
        {/* NavBar component */}
        <NavBar />

        {/* Main content */}
        <main className="min-h-screen">
          {/* Inject the children (the content of the page) */}
          {children}
        </main>
      </body>
    </html>
  );
}
