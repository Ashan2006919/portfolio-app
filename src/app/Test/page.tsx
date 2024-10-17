"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Ensure to import your Textarea component
import { Button } from "@nextui-org/react";

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = React.useState(true);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <Button onClick={toggleTheme} className="mb-4">
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  );
}
