"use client"; // Ensures this component is treated as a client component

import { useState } from "react";
import Home from "@/app/Home/page";
import About from "@/app/About/page";
import DataScience from "@/app/DataScience/page";
import WebDevelopment from "@/app/WebDevelopment/page";
import Feedback from "@/app/Feedback/page"; // Make sure Feedback component is imported correctly
import Contact from "@/app/Contact/page";
import Footer from "@/app/Footer/page";
import DAProjects from "@/app/DAProjects/page";
import WebProjects from "@/app/WebProjects/page";
import Spline from "@splinetool/react-spline";

interface FeedbackType {
  _id: string;
  name: string;
  message: string;
}

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackList, setFeedbackList] = useState<FeedbackType[]>([]);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const addFeedback = (newFeedback: FeedbackType) => {
    setFeedbackList((prev) => [...prev, newFeedback]);
  };

  return (
    <main className="relative">
      <div className="relative z-10 scroll-snap-container">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen scroll-snap-start bg-transparent relative overflow-hidden"
        >
          <Spline
            scene="https://prod.spline.design/KqUAfsmO3JW7ZsUW/scene.splinecode"
            className="absolute top-0 left-0 w-full h-full z-0"
          />

          <div className="relative z-10">
            <Home />
          </div>
        </section>

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
          <Spline
            scene="https://prod.spline.design/yQYRvO8QdXn4pFND/scene.splinecode"
            className="absolute top-0 left-0 w-full h-full z-0"
          />

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
          <Spline
            scene="https://prod.spline.design/yQYRvO8QdXn4pFND/scene.splinecode"
            className="absolute top-0 left-0 w-full h-full z-0"
          />
          <div className="relative z-10">
            <WebDevelopment />
          </div>
        </section>

        <section id="webprojects" className="scroll-snap-start bg-transparent">
          <WebProjects />
        </section>

        {/* Feedback Section */}
        <section
          id="feedback"
          className="min-h-screen scroll-snap-start bg-transparent"
        >
          <Feedback />
        </section>

        <section
          id="contact"
          className="min-h-screen scroll-snap-start bg-transparent"
        >
          <Contact />
        </section>

        <section
          id="footer"
          className="min-h-screen scroll-snap-start bg-transparent"
        >
          <Footer />
        </section>
      </div>
    </main>
  );
}
