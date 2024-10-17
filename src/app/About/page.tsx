"use client";

import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image"; // Ensure to import Image from Next.js
import MyImage from "@/public/My photos/IMG_0145.jpg";
import BoxReveal from "@/components/ui/box-reveal";

export default function Features() {
  // Animation variant for fade from left for the image
  const fadeFromLeft = {
    hidden: { opacity: 0, x: -50 }, // Start with opacity 0 and move left
    visible: { opacity: 1, x: 0 }, // Fade in and move to original position
  };

  // Animation variant for fade from right for the text
  const fadeFromRight = {
    hidden: { opacity: 0, x: 50 }, // Start with opacity 0 and move right
    visible: { opacity: 1, x: 0 }, // Fade in and move to original position
  };

  return (
    <section className="bg-white dark:bg-black">
      <div className="max-w-screen-xl px-4 py-4 -mt-16 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* Row 2 */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <motion.div
            className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-transparent bg-transparent p-0 m-0" // Make the container transparent and remove padding/margin
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            variants={fadeFromLeft} // Fade from the left
          >
            <BoxReveal boxColor={"#f97316"} duration={0.75}>
              <ShineBorder
                borderWidth={4}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="p-0 hidden lg:flex"
              >
                <Image
                  className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                  src={MyImage}
                  alt="feature image 2"
                  width={500} // Specify width
                  height={300} // Specify height
                />
              </ShineBorder>
            </BoxReveal>
          </motion.div>

          <motion.div
            className="text-gray-500 sm:text-lg dark:text-gray-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            variants={fadeFromRight} // Fade from the right
          >
            <BoxReveal boxColor={"#f97316"} duration={0.75}>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                About Me:
              </h2>
            </BoxReveal>
            <BoxReveal boxColor={"#f97316"} duration={0.75}>
              <p className="mb-8 font-light lg:text-xl">
                &quot;My name is Ashan Niwantha, a student from Sri Lanka with a
                dream of becoming a Data Scientist with innovative thinking. I
                am currently pursuing my HNDs in Data Analytics and completing
                my A-Levels in the Science stream.&quot;
              </p>
            </BoxReveal>
            {/* List */}
            <ul className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
              <li className="flex space-x-3">
                <FaCheckCircle className="text-purple-500 dark:text-purple-400 w-5 h-5" />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  2nd Year HND Student
                </span>
              </li>
              <li className="flex space-x-3">
                <FaCheckCircle className="text-purple-500 dark:text-purple-400 w-5 h-5" />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  1st Year A/Ls Student
                </span>
              </li>
              <li className="flex space-x-3">
                <FaCheckCircle className="text-purple-500 dark:text-purple-400 w-5 h-5" />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  18 years old
                </span>
              </li>
              <li className="flex space-x-3">
                <FaCheckCircle className="text-purple-500 dark:text-purple-400 w-5 h-5" />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Lives in Sri Lanka
                </span>
              </li>
            </ul>
            <BoxReveal boxColor={"#f97316"} duration={0.75}>
              <p className="font-light lg:text-xl">
                &quot;Alongside my studies, I’m on a mission to gain hands-on
                experience through various IT-related projects. I am confident
                in my ability to achieve my goals and thrive as a successful
                individual in today&#39;s fast-evolving world!&quot;
              </p>
            </BoxReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
