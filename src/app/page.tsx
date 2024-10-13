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
import WriteFeedback from "@/components/others/WriteFeedback"; // Import WriteFeedback

export default function MainPage() {
  const addFeedback = (newFeedback: any) => {
    // Implement the logic to handle the new feedback
    console.log("New feedback received:", newFeedback);
    // You can also store it in state if needed
  };

  return (
    <ModalContextProvider>
      <main className="relative">
        <div className="relative z-10 scroll-snap-container scroll-smooth">
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

          {/* Footer Section */}
          <section
            id="footer"
            className="min-h-screen scroll-snap-start bg-transparent"
          >
            <Footer />
          </section>
        </div>

        {/* WriteFeedback Modal should always be rendered */}
        <WriteFeedback addFeedback={addFeedback} />
      </main>
    </ModalContextProvider>
  );
}
