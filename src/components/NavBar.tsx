"use client"; // Add this line at the top

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

// Navigation items
const DATA = {
  navigation: [
    { name: "Home", href: "/#home", icon: FaHome }, // Add leading slash for routing
    { name: "About", href: "/#about", icon: FaInfo },
    { name: "Data Science", href: "/#datascience", icon: FaCode },
    { name: "Web Development", href: "/#webdevelopment", icon: FaLaptopCode },
    { name: "Education", href: "/#education", icon: FaGraduationCap },
    { name: "Feedback", href: "/#feedback", icon: FaComment },
    { name: "Contact", href: "/#contact", icon: FaEnvelope },
  ],

  // Social links
  socialLinks: [
    { name: "GitHub", href: "https://github.com", icon: FaGithub },
    { name: "Email", href: "mailto:example@example.com", icon: FaEnvelope },
  ],
};

export default function NavBar() {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = event.currentTarget.getAttribute("href")?.replace("#", "");
    const targetElement = document.querySelector(`#${targetId}`);

    if (targetElement) {
      event.preventDefault(); // Prevent default anchor behavior
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-background md:shadow-xl">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 z-50"
        >
          {/* Render navigation items */}
          {DATA.navigation.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href} // Use Link for navigation
                    onClick={handleScroll} // Smooth scroll on click
                    aria-label={item.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          {/* Add separator */}
          <Separator orientation="vertical" className="h-full" />

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
                    <social.icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
