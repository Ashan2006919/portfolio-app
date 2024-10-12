"use client"; // Add this line at the top

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData2 from "@/public/assets/Animations/right-arrow.json";

const Education = () => {
  return (
    <div className="h-[811px] p-20 justify-start items-center gap-20 inline-flex">
      <div className="grow shrink basis-0 h-[651px] justify-start items-center gap-4 flex -mt-20">
        {/* Column 1 */}
        <div className="pt-20 flex-col justify-center items-end gap-4 inline-flex">
          <img
            className="w-32 h-48 rounded-[5px] shadow"
            src="https://via.placeholder.com/128x192"
            alt="Placeholder 1"
          />
          <img
            className="w-[172px] h-[258px] rounded-[5px] shadow"
            src="https://via.placeholder.com/172x258"
            alt="Placeholder 2"
          />
        </div>

        {/* Column 2 */}
        <div className="pt-8 flex-col justify-start items-start gap-4 inline-flex">
          <img
            className="w-32 h-[212px] rounded-[5px] shadow"
            src="https://via.placeholder.com/128x212"
            alt="Placeholder 3"
          />
          <img
            className="w-32 h-[215px] rounded-[5px] shadow"
            src="https://via.placeholder.com/128x215"
            alt="Placeholder 4"
          />
          <img
            className="w-32 h-40 rounded-[5px] shadow"
            src="https://via.placeholder.com/128x160"
            alt="Placeholder 5"
          />
        </div>

        {/* Column 3 */}
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <img
            className="w-32 h-[171px] rounded-[5px] shadow"
            src="https://via.placeholder.com/128x171"
            alt="Placeholder 6"
          />
          <img
            className="w-32 h-[172px] rounded-[5px] shadow"
            src="https://via.placeholder.com/128x172"
            alt="Placeholder 7"
          />
          <img
            className="w-32 h-48 rounded-[5px] shadow"
            src="https://via.placeholder.com/128x192"
            alt="Placeholder 8"
          />
        </div>

        {/* Column 4 */}
        <div className="flex-col justify-center items-start gap-4 inline-flex">
          <img
            className="w-40 h-[255px] rounded-[5px] shadow"
            src="https://via.placeholder.com/160x255"
            alt="Placeholder 9"
          />
          <img
            className="w-32 h-[165px] rounded-[5px] shadow"
            src="https://via.placeholder.com/128x165"
            alt="Placeholder 10"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
        <div className="w-16 h-16 relative"></div>

        {/* Education Heading */}
        <div className="self-stretch h-[470px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-[62px] flex-col justify-start items-start gap-2 flex">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Education :
              </h2>
              <span>
                " I am currently pursuing my{" "}
                <span className="font-bold">Pearson HND in Data Analytics</span>
                , where I am developing skills in{" "}
                <span className="font-bold">statistical analysis</span>,{" "}
                <span className="font-bold">data manipulation</span>, and{" "}
                <span className="font-bold">machine learning</span>. I also
                studied my <span className="font-bold">A/Ls</span> in{" "}
                <span className="font-bold">Mathematics</span>,{" "}
                <span className="font-bold">Physics</span>, and{" "}
                <span className="font-bold">ICT</span> from the Science stream,
                which equipped me with critical thinking and problem-solving
                abilities. This academic journey has fueled my passion for{" "}
                <span className="font-bold">data science</span>, inspiring me to
                apply my knowledge to real-world projects and explore the impact
                of data-driven decisions in solving complex problems. "
              </span>
            </div>

            {/* Awards and Certificates Section */}
            <div className="mt-8 self-start">
              <a
                href="your-link-here"
                className="text-blue-600 text-xl sm:text-2xl font-semibold font-['Roboto'] leading-normal tracking-wide flex items-center"
              >
                My Awards and Certificates
                <Player
                  autoplay
                  loop={true}
                  src={animationData2}
                  style={{
                    height: "60px",
                    width: "60px",
                    marginLeft: "10px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
