"use client"; // Add this line at the top

import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
      {/* Footer section */}
      <footer className="bg-white py-3 dark:bg-gray-900">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center">
          <a href="#" className="flex items-center mb-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ashan Niwantha
            </span>
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            © 2024-2025{" "}
            <a href="#" className="hover:underline">
              Ashan Niwantha™
            </a>
            . All Rights Reserved. Built with .
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
