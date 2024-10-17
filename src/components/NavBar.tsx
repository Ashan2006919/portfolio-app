"use client";

import Link from "next/link"; // Import Link from react-router-dom
import {
  FaHome,
  FaInfo,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaComment,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import { cn } from "@/lib/utils"; // Ensure this utility is working properly
import { buttonVariants } from "@/components/ui/button"; // Ensure this utility is working properly
import { Separator } from "@/components/ui/separator"; // Ensure this utility is working properly
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import ModeToggle from "@/components/others/ModeToggle"; // Import the ModeToggle component

// Navigation items
const DATA = {
  navigation: [
    { name: "Home", href: "/#home", icon: FaHome },
    { name: "About", href: "/#about", icon: FaInfo },
    { name: "Data Science", href: "/#datascience", icon: FaCode },
    { name: "Web Development", href: "/#webdevelopment", icon: FaLaptopCode },
    { name: "Education", href: "/#education", icon: FaGraduationCap },
    { name: "Feedback", href: "/#feedback", icon: FaComment },
    { name: "Contact", href: "/#contact", icon: FaEnvelope },
  ],
  socialLinks: [{ name: "GitHub", href: "https://github.com", icon: FaGithub }],
};

export default function NavBar() {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = event.currentTarget.getAttribute("href")?.replace("#", "");
    const targetElement = document.querySelector(`#${targetId}`);

    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-background dark:border-white md:shadow-xl">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="fixed -top-6 left-1/2 transform -translate-x-1/2 z-50 border-gray-300 dark:border-white"
        >
          {/* Render navigation items */}
          {DATA.navigation.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    onClick={handleScroll}
                    aria-label={item.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4 text-black dark:text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          {/* Add separator */}
          <Separator
            orientation="vertical"
            className="h-full bg-gray-300 dark:bg-white"
          />

          {/* Render social icons */}
          {DATA.socialLinks.map((social) => (
            <DockIcon key={social.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.href}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-4 text-black dark:text-white" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          {/* Add ModeToggle button to the navbar */}
          <DockIcon key="mode-toggle">
            <ModeToggle />
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
