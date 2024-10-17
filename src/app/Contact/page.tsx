"use client"; // Mark this as a Client Component

import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import BoxReveal from "@/components/ui/box-reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const ref = useRef<HTMLDivElement | null>(null); // Ref to the component

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // This will handle the form submission logic.
    // Add further submission logic here (e.g., API call)
  };

  // Animation variants for the contact information and form
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Fade in to original position
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Fade in to original position
  };

  // Use an effect to set up the intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in view
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    const currentRef = ref.current; // Store the current ref in a variable

    if (currentRef) {
      observer.observe(currentRef); // Observe the component
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <div className="w-full h-full mx-auto bg-white px-8 py-8 -my-10 dark:bg-[#121212]">
      {/* Main container for form and contact details */}
      <div
        className="flex flex-col md:flex-row justify-center items-start gap-12 ml-10"
        ref={ref}
      >
        {/* Contact Information Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"} // Animate based on visibility
          variants={fadeInLeft}
          className="w-full lg:w-1/2 flex-col justify-start items-start gap-10"
        >
          <div className="flex-col justify-start items-start gap-3 mb-10">
            <BoxReveal boxColor={"#f97316"} duration={0.75}>
              <div className="text-lg font-semibold text-orange-500">
                Contact Me
              </div>
            </BoxReveal>
            <div className="flex-col justify-start items-start gap-3">
              <BoxReveal boxColor={"#f97316"} duration={0.75}>
                <h2 className="mb-4 text-3xl lg:text-5xl font-extrabold tracking-tight dark:text-white">
                  Get in touch with Me:
                </h2>
              </BoxReveal>
              <BoxReveal boxColor={"#f97316"} duration={0.75}>
                <div className="text-base leading-normal dark:text-gray-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do <br />
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
                  <br />
                  enim adiqua minim veniam, quis nostrud exercitation ullamco.
                </div>
              </BoxReveal>
            </div>
          </div>

          {/* Address, Phone, Email */}
          <div className="flex-col justify-start items-start gap-6">
            <div className="flex items-start gap-6 mb-10">
              <div className="w-[70px] h-[70px] flex justify-center items-center bg-orange-500 rounded-lg shadow-lg">
                <FaMapMarkerAlt className="text-black dark:text-white text-3xl" />
              </div>
              <div className="flex-col justify-start items-start gap-2.5 mt-2">
                <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  My Location
                </div>
                <div className="text-lg font-semibold text-orange-500">
                  Sri Lanka
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 mb-10">
              <div className="w-[70px] h-[70px] flex justify-center items-center bg-orange-500 rounded-lg shadow-lg">
                <FaPhone className="text-black dark:text-white text-3xl" />
              </div>
              <div className="flex-col justify-start items-start gap-2.5 mt-2">
                <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  Phone Number
                </div>
                <div className="text-lg font-semibold text-orange-500">
                  (+94) 75 2006 932
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 mb-10">
              <div className="w-[70px] h-[70px] flex justify-center items-center bg-orange-500 rounded-lg shadow-lg">
                <FaEnvelope className="text-black dark:text-white text-3xl" />
              </div>
              <div className="flex-col justify-start items-start gap-2.5 mt-2">
                <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  Email Address
                </div>
                <div className="text-lg font-semibold text-orange-500">
                  mrasnik99@gmail.com
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"} // Animate based on visibility
          variants={fadeInRight}
          className="w-full lg:w-1/2 bg-background px-6 py-8 mx-auto text-center text-foreground border border-border rounded-lg shadow xl:p-8 lg:mt-14"
        >
          <div className="flex-col justify-start items-start gap-8">
            <div className="w-full flex flex-col gap-5">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-background rounded-md border border-border text-foreground placeholder:text-placeholder focus:outline-none focus:border-accent"
                placeholder="Your Name"
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-background rounded-md border border-border text-foreground placeholder:text-placeholder focus:outline-none focus:border-accent"
                placeholder="Your Email"
              />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-background rounded-md border border-border text-foreground placeholder:text-placeholder focus:outline-none focus:border-accent"
                placeholder="Your Phone"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-3 h-[130px] bg-background rounded-md border border-border text-foreground placeholder:text-placeholder focus:outline-none focus:border-accent"
                placeholder="Your Message"
              />
            </div>
            <Button
              type="submit"
              className="w-full py-5 mt-5 bg-orange-600 text-white rounded-md font-semibold hover:bg-orange-500 transition-all"
            >
              Send Message
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
