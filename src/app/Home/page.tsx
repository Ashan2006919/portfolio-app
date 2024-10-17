"use client"; // Add this line at the top

import React from "react";
import { FaDownload } from "react-icons/fa";
import ShineBorder from "@/components/ui/shine-border";
import ViewProject from "@/components/others/ViewProject";
import { motion } from "framer-motion";
import Image from "next/image";
import Placeholder from "@/public/My photos/Placeholder.png";
import Whatappicon from "@/public/icons/whatsapp 3d.png";
import Telegramicon from "@/public/icons/telegram.png";
import Instagramicon from "@/public/icons/instagram.png";
import LinkedInicon from "@/public/icons/linkedin.png";
import TikTokicon from "@/public/icons/tiktok.png";
import GitHubicon from "@/public/icons/github.png";
import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@nextui-org/react";
import RetroGrid from "@/components/ui/retro-grid";

export default function Home() {
  return (
    <div>
      <RetroGrid />{" "}
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto -mt-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="container mx-auto">
            <motion.h1
              className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white text-left"
              initial={{ opacity: 0, scale: 0.8 }} // Fades in on refresh
              whileInView={{ opacity: 1, scale: 1 }} // Fades in on scroll
              viewport={{ once: true }} // Ensures it only happens once
              transition={{ duration: 0.5 }}
            >
              <BoxReveal boxColor={"#f97316"} duration={0.75}>
                <div>Ashan Niwantha</div>
              </BoxReveal>
            </motion.h1>

            <motion.div
              className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-left"
              initial={{ opacity: 0, scale: 0.8 }} // Fades in on refresh
              whileInView={{ opacity: 1, scale: 1 }} // Fades in on scroll
              viewport={{ once: true }} // Ensures it only happens once
              transition={{ duration: 0.5 }}
            >
              <BoxReveal boxColor={"#f97316"} duration={0.75}>
                <div className="text-gray-500 dark:text-gray-400">
                  A passionate IT student from Sri Lanka, committed to shaping
                  the future of technology with creativity and dedication!
                </div>
              </BoxReveal>
            </motion.div>
          </div>

          <motion.div
            className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BoxReveal boxColor={"#f97316"} duration={0.75}>
              <Button
                color="primary"
                variant="shadow"
                className="hover:bg-orange-500 shadow-md"
              >
                <a
                  href="/path-to-your-resume.pdf"
                  download
                  className="inline-flex items-center justify-center w-full text-sm font-medium"
                >
                  <FaDownload className="w-4 h-4 mr-2" />
                  <div>Download Resume</div>
                </a>
              </Button>
            </BoxReveal>
            <BoxReveal boxColor={"#f97316"} duration={0.75}>
              <ViewProject />
            </BoxReveal>
          </motion.div>
        </div>

        <div className="lg:mt-0 lg:col-span-5 flex justify-center items-center">
          <motion.div
            className="relative flex w-full max-w-md lg:max-w-none flex-col items-center justify-center overflow-hidden rounded-lg border border-transparent bg-transparent md:shadow-xl p-0 m-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BoxReveal boxColor={"#f97316"} duration={0.75}>
              <ShineBorder
                borderWidth={4}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="p-0"
              >
                <Image
                  className="w-full h-auto mx-auto m-0 p-0"
                  src={Placeholder}
                  alt="hero"
                  width={0} // Set to 0 for auto width
                  height={0} // Set to 0 for auto height
                />
              </ShineBorder>
            </BoxReveal>
          </motion.div>
        </div>
      </div>
      <div className="bg-transparent py-8">
        <motion.div
          className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 mb-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/94752006932"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <div className="hover:text-gray-900 dark:hover:text-white">
                <Image
                  src={Whatappicon}
                  className="w-auto h-auto max-w-full max-h-28"
                  alt="WhatsApp"
                />
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/AshanNiwantha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <div className="hover:text-gray-900 dark:hover:text-white">
                <Image
                  src={Telegramicon}
                  className="w-auto h-auto max-w-full max-h-28"
                  alt="Telegram"
                />
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mr.ashan_99/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <div className="hover:text-gray-900 dark:hover:text-white">
                <Image
                  src={Instagramicon}
                  className="w-auto h-auto max-w-full max-h-28"
                  alt="Instagram"
                />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ashan-niwantha-13052927b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <div className="hover:text-gray-900 dark:hover:text-white">
                <Image
                  src={LinkedInicon}
                  className="w-auto h-auto max-w-full max-h-28"
                  alt="LinkedIn"
                />
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@ashan.niwantha0?_t=8qRqDBVXMCD&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <div className="hover:text-gray-900 dark:hover:text-white">
                <Image
                  src={TikTokicon}
                  className="w-auto h-auto max-w-full max-h-28"
                  alt="TikTok"
                />
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Ashan2006919"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <div className="hover:text-gray-900 dark:hover:text-white">
                <Image
                  src={GitHubicon}
                  className="w-auto h-auto max-w-full max-h-28"
                  alt="GitHub"
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
