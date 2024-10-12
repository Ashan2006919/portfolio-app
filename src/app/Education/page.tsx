"use client"; // Keep this line at the top

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData2 from "@/public/assets/Animations/right-arrow.json";

const Education: React.FC = () => {
  return (
    <div className="h-[811px] p-20 flex flex-col md:flex-row justify-start items-center gap-20">
      {/* Image Columns */}
      <div className="grow shrink basis-0 h-[651px] flex -mt-20 flex-wrap justify-around gap-4">
        {/* Individual columns for images */}
        {Array.from({ length: 4 }).map((_, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col justify-start items-center gap-4"
          >
            {Array.from({ length: 3 }).map((_, imgIndex) => (
              <img
                key={imgIndex}
                className="w-32 h-auto rounded-[5px] shadow"
                src={`https://via.placeholder.com/128x${
                  150 + colIndex * 20 + imgIndex * 5
                }`}
                alt={`Placeholder ${colIndex * 3 + imgIndex + 1}`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-8">
        <div className="w-16 h-16 relative"></div>
        <div className="self-stretch h-[470px] flex-col justify-start items-start gap-8 flex">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Education :
          </h2>
          <span>
            " I am currently pursuing my{" "}
            <span className="font-bold">Pearson HND in Data Analytics</span>,
            where I am developing skills in{" "}
            <span className="font-bold">statistical analysis</span>,{" "}
            <span className="font-bold">data manipulation</span>, and{" "}
            <span className="font-bold">machine learning</span>. I also studied
            my <span className="font-bold">A/Ls</span> in{" "}
            <span className="font-bold">Mathematics</span>,{" "}
            <span className="font-bold">Physics</span>, and{" "}
            <span className="font-bold">ICT</span> from the Science stream,
            which equipped me with critical thinking and problem-solving
            abilities. This academic journey has fueled my passion for{" "}
            <span className="font-bold">data science</span>, inspiring me to
            apply my knowledge to real-world projects and explore the impact of
            data-driven decisions in solving complex problems. "
          </span>

          {/* Awards and Certificates Link */}
          <div className="mt-8 self-start">
            <a
              href="your-link-here"
              className="text-blue-600 text-xl sm:text-2xl font-semibold leading-normal flex items-center"
            >
              My Awards and Certificates
              <Player
                autoplay
                loop={true}
                src={animationData2}
                style={{ height: "60px", width: "60px", marginLeft: "10px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
