import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-scroll";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DATA = {
  navigation: [
    { name: "Data Science", to: "daprojects", icon: FaCode },
    { name: "Web Development", to: "webprojects", icon: FaLaptopCode },
  ],
};

export default function ViewProject() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering

  useEffect(() => {
    setIsClient(true); // Set to true after the first render on client
  }, []);

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
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:bg-transparent"
          )}
        >
          {isClient && // Render based on client-side rendering
            (theme === "light" ? (
              <AnimatedShinyText className="flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-center">
                ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
                <span
                  className={cn(
                    `inline animate-gradient text-lg bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  View Projects
                </span>
                <ArrowRightIcon className="ml-2 size-5 mt-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            ) : (
              <AnimatedGradientText className="flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-center">
                ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
                <span
                  className={cn(
                    `inline animate-gradient text-lg bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  View Projects
                </span>
                <ArrowRightIcon className="ml-2 size-5 mt-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            ))}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4 border border-gray-100">
        <div className="flex flex-col space-y-2">
          {DATA.navigation.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
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
