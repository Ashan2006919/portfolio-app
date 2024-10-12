"use client"; // Ensures this component is treated as a client component

import Home from "@/app/Home/page";
import About from "@/app/About/page";
import DataScience from "@/app/DataScience/page";
import WebDevelopment from "@/app/WebDevelopment/page";
import Feedback from "@/app/Feedback/page"; // Make sure Feedback component is imported correctly
import Contact from "@/app/Contact/page";
import Footer from "@/app/Footer/page";
import DAProjects from "@/app/DAProjects/page";
import WebProjects from "@/app/WebProjects/page";

export default function MainPage() {
  return (
    <main className="relative">
      <div className="relative z-10 scroll-snap-container">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen scroll-snap-start bg-transparent relative overflow-hidden"
        >
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
