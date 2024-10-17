"use client"; // Add this line at the top

import React from "react";
import Image from "next/image";
import Github from "@/public/Small-Icons/GitHub.svg";

const Navigation = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Data Science", href: "/#datascience" },
  { name: "Web Development", href: "/#webdevelopment" },
  { name: "Education", href: "/#education" },
  { name: "Feedback", href: "/#feedback" },
  { name: "Contact", href: "/#contact" },
];

// Define the type for social links
interface SocialLink {
  name: string;
  href: string;
  icon: string; // Change to string if using Image
}

// Define the socialLinks array with the correct TypeScript syntax
const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com", icon: Github.src }, // Use .src if using Image
  {
    name: "Tailwind",
    href: "https://tailwindcss.com/docs/customizing-colors",
    icon: Tailwind.src, // Use .src if using Image
  },
];

export default function Footer() {
  return (
    <div className="w-full bg-white dark:bg-gray-800">
      {" "}
      {/* Added a background color to the footer */}
      <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
      {/* Footer section */}
      <footer className="w-full py-14 overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full mx-auto">
            <div className="flex justify-center text-3xl font-bold text-gray-800 dark:text-gray-200">
              Ashan Niwantha
            </div>
            <ul className="text-lg w-screen flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-center gap-7 md:gap-12 transition-all duration-500 pt-8 pb-14 mb-10 border-b border-gray-200">
              {Navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-800 dark:text-gray-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-10 justify-center items-center mb-14">
              {socialLinks.map((link, index) => (
                <a
                  key={index} // Added a key for each element in the list
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center" // Added flex for better alignment
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
            <span className="text-lg text-gray-500 text-center block">
              ©<a href="https://pagedone.io/">Ashan Niwantha</a> 2024, All
              rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
