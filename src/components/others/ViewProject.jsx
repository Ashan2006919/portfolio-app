import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FaCode, FaLaptopCode } from "react-icons/fa"; // Import the icons
import { Link } from "react-scroll"; // Import Link from react-scroll
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

// Navigation items
const DATA = {
  navigation: [
    { name: "Data Science", to: "daprojects", icon: FaCode }, // Use "to" instead of "href"
    { name: "Web Development", to: "webprojects", icon: FaLaptopCode },
  ],
};

export default function ViewProject() {
  return (
    <Popover
      showArrow
      offset={10}
      placement="bottom"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            duration: 0.1,
            transition: {
              opacity: {
                duration: 0.15,
              },
            },
          },
          exit: {
            y: "10%",
            opacity: 0,
            duration: 0,
            transition: {
              opacity: {
                duration: 0.1,
              },
            },
          },
        },
      }}
    >
      <PopoverTrigger>
        <Button
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-center">
            <span>✨ View Projects</span>
            <ArrowRightIcon className="ml-2 size-5 mt-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4 border border-gray-100">
        <div className="flex flex-col space-y-2">
          {DATA.navigation.map((item, index) => (
            <Link
              key={index}
              to={item.to} // Use the "to" prop to specify section ID for scrolling
              smooth={true} // Enable smooth scroll
              duration={500} // Set scroll duration
              className="flex items-center space-x-2 p-2 text-gray-600 font-semibold hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <item.icon className="text-lg" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
