// src/components/CustomCursor.tsx
"use client"; // This component uses client-side hooks

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent", // Set a default color
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      transition: { duration: 0.2 }, // Optional transition for smoother animation
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="title">
        Hello World
      </h1>
      {/* Custom cursor */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none bg-yellow-500 rounded-full`}
        variants={variants}
        animate={cursorVariant}
        style={{ height: "32px", width: "32px" }} // Adjust size as needed
      />
    </>
  );
};

export default CustomCursor;
