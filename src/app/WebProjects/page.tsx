"use client"; // Add this line at the top

import { motion, useInView } from "framer-motion"; // Import useInView from framer-motion
import { useRef } from "react"; // Import useRef to create a ref for the container
import { ProjectCard } from "../WebProjects/ProjectCard"; // Adjust the import based on your file structure
import projects from "../WebProjects/ProjectData"; // Import the project data

const container = {
  hidden: { opacity: 0, scale: 0.8 }, // Start slightly smaller and transparent
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.5, // Adjust duration for smoother overall animation
      ease: "easeInOut", // Add easing function for a smoother effect
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4, // Adjust item transition duration for smoother entry
      ease: "easeInOut", // Add easing for item animation
    },
  },
};

export default function WebProjects() {
  const ref = useRef(null); // Create a ref to attach to the container
  const isInView = useInView(ref, { once: true }); // Check if the container is in the viewport

  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-[#121212]">
      <motion.div
        ref={ref} // Attach the ref to the container
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-24 p-4"
        variants={container} // Apply the container animation
        initial="hidden" // Set initial state
        animate={isInView ? "visible" : "hidden"} // Animate to visible when in view
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            {/* Wrap each ProjectCard with motion.div */}
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
