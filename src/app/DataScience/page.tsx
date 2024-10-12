"use client"; // Add this line at the top

import React from "react";
import { motion } from "framer-motion";
import CoursesSection from "@/components/others/CoursesSection";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData1 from "@/public/assets/Animations/success.json";
import animationData2 from "@/public/assets/Animations/right-arrow.json";
import Image from "next/image";
import Python from "@/public/Small-Icons/Python.svg";
import MySQL from "@/public/Small-Icons/MySQL.svg";
import powerBi from "@/public/Small-Icons/power-bi.svg";
import Matplotlib from "@/public/Small-Icons/Matplotlib.svg";
import NumPy from "@/public/Small-Icons/NumPy.svg";
import scikitLearn from "@/public/Small-Icons/scikit-learn.svg";
import Pandas from "@/public/Small-Icons/Pandas.svg";
import Jupyter from "@/public/Small-Icons/Jupyter.svg";

// Animation variants
const fadeFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const DataScienceComponent = () => {
  // Data Science specific cards data
  const cardsData = [
    {
      tag: "Featured",
      tagColor: "bg-purple-100 text-purple-800",
      title: "The map of mathematics",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      link: "your-link-here",
    },
    {
      tag: "Popular",
      tagColor: "bg-blue-100 text-blue-800",
      title: "Data Science for Everyone",
      description:
        "Aliquam ut euismod condimentum elementum ultricies volutpat sit non.",
      link: "your-link-here",
    },
    {
      tag: "New",
      tagColor: "bg-green-100 text-green-800",
      title: "Advanced Machine Learning",
      description:
        "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.",
      link: "your-link-here",
    },
  ];

  return (
    <div className="h-auto sm:h-[711px] p-5 md:p-20 flex flex-col md:flex-row justify-start items-center gap-10 md:gap-20 lg:mt-20 sm:-mt-32 sm:-mb-20">
      {/* Left Section (Text and Data) */}
      <motion.div
        className="grow shrink basis-0 flex-col justify-start items-start gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        variants={fadeFromLeft}
      >
        <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Data Science:
        </h2>

        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          {/* List of Skills with Lottie Animations */}
          <SkillItem label="Programming Languages" skills="Python, R, SQL" />
          <SkillItem
            label="Data Visualization"
            skills="Matplotlib, Seaborn, Power BI"
          />
          <SkillItem label="Data Manipulation" skills="Pandas, NumPy" />
          <SkillItem
            label="Machine Learning"
            skills="Scikit-learn, TensorFlow"
          />
          <SkillItem label="Statistical Analysis" skills="Hypothesis testing" />
          <SkillItem label="Environment" skills="Jupyter Notebook" />

          {/* Button Section with Arrow Animation */}
          <div className="px-2 ml-72 rounded-lg justify-center items-center flex">
            <a
              href="your-link-here"
              className="text-blue-600 text-xl sm:text-2xl font-semibold font-['Roboto'] leading-normal tracking-wide flex items-center -ml-72 mt-1"
            >
              My Data Science Projects
              <Player
                autoplay
                loop={true}
                src={animationData2}
                style={{ height: "60px", width: "60px", marginLeft: "10px" }}
              />
            </a>
          </div>

          {/* Skill Icons */}
          <div className="hidden lg:block">
            <div className="justify-start items-center gap-10 inline-flex -ml-4 mt-5 md:mb-44">
              <Image src={Python} className="w-10 h-auto" alt="Python" />
              <Image src={MySQL} className="w-10 h-auto" alt="MySQL" />
              <Image src={powerBi} className="w-10 h-auto" alt="Power BI" />
              <Image
                src={Matplotlib}
                className="w-10 h-auto"
                alt="Matplotlib"
              />
              <Image src={NumPy} className="w-10 h-auto" alt="NumPy" />
              <Image
                src={scikitLearn}
                className="w-10 h-auto"
                alt="Scikit-learn"
              />
              <Image src={Pandas} className="w-10 h-auto" alt="Pandas" />
              <Image src={Jupyter} className="w-10 h-auto" alt="Jupyter" />
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
        variants={fadeFromRight}
      >
        <CoursesSection />
      </motion.div>
    </div>
  );
};

interface SkillItemProps {
  label: string;
  skills: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ label, skills }) => {
  return (
    <div className="self-stretch justify-start items-center gap-4 inline-flex">
      <Player
        autoplay
        loop={true}
        src={animationData1}
        style={{ height: "40px", width: "40px" }}
      />
      <div className="text-slate-900 text-base sm:text-xl font-normal font-['Roboto'] leading-6 sm:leading-9">
        <span>{label}: </span>
        <span className="font-semibold text-orange-600">{skills}</span>
      </div>
    </div>
  );
};

export default DataScienceComponent;
