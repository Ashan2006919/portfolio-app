"use client"; // Add this line at the top

import React from "react";
import CoursesSection from "@/components/others/CoursesSection";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData1 from "@/public/assets/Animations/success.json";
import animationData2 from "@/public/assets/Animations/right-arrow.json";
import Image from "next/image";
import HTML5 from "@/public/small-icons/HTML5.svg";
import CSS3 from "@/public/small-icons/CSS3.svg";
import ReactIcon from "@/public/small-icons/React.svg";
import NodeJS from "@/public/small-icons/Node.js.svg";
import Git from "@/public/small-icons/Git.svg";
import GitHub from "@/public/small-icons/GitHub.svg";
import Tailwind from "@/public/small-icons/Tailwind CSS.svg";
import Bootstrap from "@/public/small-icons/Bootstrap.svg";
import PHP from "@/public/small-icons/PHP.svg";

// Animation variants
const fadeFromLeft = {
  hidden: { opacity: 0, x: -50 }, // Start hidden, move from left
  visible: { opacity: 1, x: 0 }, // Fade in and move to normal position
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 50 }, // Start hidden, move from right
  visible: { opacity: 1, x: 0 }, // Fade in and move to normal position
};

export default function WebDevelopment() {
  // Web Development specific image and cards data
  const imageSrc = "./illustrations/18840617_6042470.jpg";
  const cardsData = [
    {
      tag: "Trending",
      tagColor: "bg-orange-100 text-orange-800",
      title: "React Hooks Deep Dive",
      description: "Learn advanced concepts of React and Hooks.",
      link: "your-link-here",
    },
    {
      tag: "Recommended",
      tagColor: "bg-red-100 text-red-800",
      title: "Mastering CSS Grid",
      description:
        "Become proficient with modern layout techniques using CSS Grid.",
      link: "your-link-here",
    },
    {
      tag: "New",
      tagColor: "bg-yellow-100 text-yellow-800",
      title: "Web Accessibility 101",
      description: "Build accessible websites that cater to everyone.",
      link: "your-link-here",
    },
  ];

  return (
    <div className="h-auto sm:h-[711px] p-5 md:p-20 flex flex-col md:flex-row justify-start items-center gap-10 md:gap-20 lg:mt-20 sm:mt-10 md:pt-36 sm:-mb-16">
      {/* Left Section (Text and Data) */}
      <motion.div
        className="grow shrink basis-0 flex-col justify-start items-start gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        variants={fadeFromLeft} // Fade in from the left
      >
        {/* Title */}
        <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Web Development:
        </h2>

        {/* Data Details Section */}
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          {/* List of Skills with Lottie Animations */}
          <SkillItem
            label="Programming Languages"
            skills="HTML, CSS, JavaScript, Python"
          />
          <SkillItem label="Frameworks" skills="React, Vite" />
          <SkillItem label="Back-end Technologies" skills="Node.js, PHP" />
          <SkillItem label="Database Management" skills="MySQL, MongoDB" />
          <SkillItem label="Version Control" skills="Git, GitHub" />
          <SkillItem
            label="Responsive Design"
            skills="Bootstrap, Tailwind CSS"
          />
          {/* Button Section with Arrow Animation */}
          <div className="px-2 ml-72 rounded-lg justify-center items-center flexx">
            <a
              href="your-link-here"
              className="text-blue-600 text-xl sm:text-2xl font-semibold font-['Roboto'] leading-normal tracking-wide flex items-center -ml-72 mt-1"
            >
              My Web Development Projects
              <Player
                autoplay
                loop={true}
                src={animationData2}
                style={{ height: "60px", width: "60px", marginLeft: "10px" }}
              />
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="justify-start items-center gap-10 inline-flex -ml-4 mt-5 md:mb-44">
              <Image src={HTML5} className="w-10 h-auto relative" alt="HTML5" />
              <Image src={CSS3} className="w-10 h-auto relative" alt="CSS3" />
              <Image
                src={ReactIcon}
                className="w-10 h-auto relative"
                alt="React"
              />
              <Image
                src={NodeJS}
                className="w-10 h-auto relative"
                alt="Node.js"
              />
              <Image src={Git} className="w-10 h-auto relative" alt="Git" />
              <Image
                src={GitHub}
                className="w-10 h-auto relative"
                alt="GitHub"
              />
              <Image
                src={Tailwind}
                className="w-10 h-auto relative"
                alt="Tailwind CSS"
              />
              <Image
                src={Bootstrap}
                className="w-10 h-auto relative"
                alt="Bootstrap"
              />
              <Image src={PHP} className="w-10 h-auto relative" alt="PHP" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Section (Image and Overlapping Cards) */}
      <motion.div
        className="w-auto sm:w-[656px] h-auto md:h-[546.97px] relative -mt-44 pl-16 hidden lg:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        variants={fadeFromRight} // Fade in from the right
      >
        <CoursesSection />
      </motion.div>
    </div>
  );
}

interface SkillItemProps {
  label: string;
  skills: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ label, skills }) => {
  return (
    <div className="self-stretch justify-start items-center gap-4 inline-flex">
      {/* Lottie Animation as Bullet Point */}
      <Player
        autoplay
        loop={true}
        src={animationData1}
        style={{ height: "40px", width: "40px" }} // Adjust size as needed
      />
      <div className="text-slate-900 text-base sm:text-xl font-normal font-['Roboto'] leading-6 sm:leading-9">
        <span>{label}: </span>
        <span className="font-semibold text-orange-600">{skills}</span>
      </div>
    </div>
  );
};
