"use client";

import { useState } from "react"; // Import useState to manage modal state
import Home from "@/app/Home/page"; // Import Home component
import About from "@/app/About/page"; // Import About component
import DataScience from "@/app/DataScience/page"; // Import DataScience component
import WebDevelopment from "@/app/WebDevelopment/page"; // Import WebDevelopment component
import Feedback from "@/app/Feedback/page"; // Import Feedback component
import Contact from "@/app/Contact/page"; // Import Contact component
import Footer from "@/app/Footer/page"; // Import Footer component
import DAProjects from "@/app/DAProjects/page"; // Import DAProjects component
import WebProjects from "@/app/WebProjects/page"; // Import WebProjects component
import Spline from "@splinetool/react-spline"; // Import Spline

interface FeedbackType {
  _id: string;
  name: string;
  message: string;
}

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [feedbackList, setFeedbackList] = useState<FeedbackType[]>([]); // State for feedback list

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev); // Toggle modal state
  };

  const addFeedback = (newFeedback: FeedbackType) => {
    setFeedbackList((prev) => [...prev, newFeedback]); // Add new feedback
  };

  return (
    <main className="relative">
      {/* Content sections */}
      <div className="relative z-10 scroll-snap-container">
        {/* Home Section with Spline Animation */}
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

        {/* DataScience Section with Spline Background */}
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

        {/* WebDevelopment Section with Spline Background */}
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
          <Feedback
            feedbacks={feedbackList} // Pass the feedback list
            isModalOpen={isModalOpen} // Pass modal state
            toggleModal={toggleModal} // Pass modal toggle function
            addFeedback={addFeedback} // Pass feedback adding function
          />
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
