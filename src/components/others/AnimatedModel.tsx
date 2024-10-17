"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";
import WriteFeedback from "./WriteFeedback";
import Image from "next/image";
import WriteIcon from "/public/icons/write.svg";

interface AnimatedModalProps {
  closeModal: () => void;
}

export const AnimatedModal: React.FC<AnimatedModalProps> = ({ closeModal }) => {
  return (
    <Modal>
      <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Write a Feedback
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          <Image src={WriteIcon} alt={"Write Icon"} className="h-6 w-6" />
        </div>
      </ModalTrigger>
      <ModalBody>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <ModalContent className="w-full max-w-lg">
            {" "}
            {/* Set max width for modal content */}
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Write a review about{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Me!
              </span>{" "}
              <Image src={WriteIcon} alt={"Write Icon"} className="h-8 w-8" />
            </h4>
            <div className="flex justify-center items-center gap-4">
              <WriteFeedback closeModal={closeModal} />
            </div>
          </ModalContent>
        </div>
      </ModalBody>
    </Modal>
  );
};
