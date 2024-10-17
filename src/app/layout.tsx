import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar"; // Ensure the path to NavBar is correct
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Ashan Niwantha",
  description: "Portfolio of a institutional Sri Lankan student!",
  keywords:
    "application, portfolio, student, data science, data analytics, web developmnt, programming, software engineering, Ashan Niwantha, Next.js, React, Timeline, Projects, Tailwind css",
  authors: [{ name: "Ashan Niwantha", url: "https://github.com/Ashan2006919" }],
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* NavBar component */}
          <NavBar />
          {/* Main content */}
          <main className="min-h-screen">
            {/* Inject the children (the content of the page) */}
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
