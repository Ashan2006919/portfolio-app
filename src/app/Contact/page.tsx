"use client"; // Mark this as a Client Component

import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    rating: 0, // For star rating (if applicable)
  });

  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const ref = useRef(null); // Ref to the component

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData); // This will handle the form submission logic.
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

    if (ref.current) {
      observer.observe(ref.current); // Observe the component
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto bg-white px-8 py-8">
      {/* Main container for form and contact details */}
      <div
        className="flex flex-col md:flex-row justify-center items-start gap-12"
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
            <div className="text-[#3758f9] text-lg font-semibold">
              Contact Me
            </div>
            <div className="flex-col justify-start items-start gap-3">
              <h2 className="mb-4 text-3xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Get in touch with Me:
              </h2>
              <div className="text-[#637381] text-base leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
                <br />
                enim adiqua minim veniam, quis nostrud exercitation ullamco.
              </div>
            </div>
          </div>

          {/* Address, Phone, Email */}
          <div className="flex-col justify-start items-start gap-6">
            <div className="flex items-start gap-6 mb-10">
              <div className="w-[70px] h-[70px] flex justify-center items-center bg-gray-200 rounded-[5px]">
                <FaMapMarkerAlt className="text-black text-3xl" />
              </div>
              <div className="flex-col justify-start items-start gap-2.5">
                <div className="text-[#111928] text-lg font-semibold">
                  My Location
                </div>
                <div className="text-[#637381] text-base">Sri Lanka</div>
              </div>
            </div>

            <div className="flex items-start gap-6 mb-10">
              <div className="w-[70px] h-[70px] flex justify-center items-center bg-gray-200 rounded-[5px]">
                <FaPhone className="text-black text-3xl" />
              </div>
              <div className="flex-col justify-start items-start gap-2.5">
                <div className="text-[#111928] text-lg font-semibold">
                  Phone Number
                </div>
                <div className="text-[#637381] text-base">
                  (+94) 75 2006 932
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 mb-10">
              <div className="w-[70px] h-[70px] flex justify-center items-center bg-gray-200 rounded-[5px]">
                <FaEnvelope className="text-black text-3xl" />
              </div>
              <div className="flex-col justify-start items-start gap-2.5">
                <div className="text-[#111928] text-lg font-semibold">
                  Email Address
                </div>
                <div className="text-[#637381] text-base">
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
          className="w-full lg:w-1/2 bg-white px-6 py-8 mx-auto text-center text-gray-900 border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white lg:mt-14"
        >
          <div className="flex-col justify-start items-start gap-8">
            <div className="w-full flex flex-col gap-5">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600"
                placeholder="Your Name"
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600"
                placeholder="Your Email"
              />
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600"
                placeholder="Your Phone"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-3 h-[130px] bg-white rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600"
                placeholder="Your Message"
              />
            </div>
            <Button
              type="submit"
              className="w-full py-3 mt-5 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition-all"
            >
              Send Message
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
