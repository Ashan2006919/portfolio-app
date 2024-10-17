"use client"; // Ensures this component is treated as a client component

import { ModalContextProvider } from "@/components/others/ModalContext"; // Import the ModalContextProvider
import Home from "@/app/Home/page";
import About from "@/app/About/page";
import DataScience from "@/app/DataScience/page";
import WebDevelopment from "@/app/WebDevelopment/page";
import Feedback from "@/app/Feedback/page"; // Ensure Feedback component is imported correctly
import Contact from "@/app/Contact/page";
import Footer from "@/app/Footer/page";
import DAProjects from "@/app/DAProjects/page";
import WebProjects from "@/app/WebProjects/page";
import Test from "@/app/Test/page"; // Import AlertDialogDemo
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import AnimatedCursor from "react-animated-cursor";

export default function MainPage() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <ModalContextProvider>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <main className="relative">
        <div className="relative z-10 scroll-snap-container scroll-smooth bg-gray-50 dark:bg-[#121212]">
          {/* Home Section */}
          <section
            id="home"
            className="min-h-screen scroll-snap-start bg-transparent relative overflow-hidden"
          >
            <div className="relative z-10">
              <Home />
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="min-h-screen scroll-snap-start bg-transparent"
          >
            <About />
          </section>

          {/* DataScience Section */}
          <section
            id="datascience"
            className="min-h-screen scroll-snap-start bg-transparent relative"
          >
            <div className="relative z-10">
              <DataScience />
            </div>
          </section>

          <section id="daprojects" className="scroll-snap-start bg-transparent">
            <DAProjects />
          </section>

          {/* WebDevelopment Section */}
          <section
            id="webdevelopment"
            className="min-h-screen scroll-snap-start bg-transparent relative"
          >
            <div className="relative z-10">
              <WebDevelopment />
            </div>
          </section>

          <section
            id="webprojects"
            className="scroll-snap-start bg-transparent"
          >
            <WebProjects />
          </section>

          {/* Feedback Section */}
          <section
            id="feedback"
            className="min-h-screen scroll-snap-start bg-transparent"
          >
            <Feedback />
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="min-h-screen scroll-snap-start bg-transparent"
          >
            <Contact />
          </section>
          {/* AlertDialogDemo for testing */}
          <section
            id="test"
            className="min-h-screen scroll-snap-start bg-transparent"
          >
            <Test />
          </section>
          {/* Footer Section */}
          <section id="footer" className="scroll-snap-start bg-transparent">
            <Footer />
          </section>
        </div>
      </main>
    </ModalContextProvider>
  );
}
