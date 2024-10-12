"use client"; // This ensures the component is treated as a client component

import React, { useEffect, useState } from "react";
import FeedbackCard from "@/components/others/FeedbackCard"; // Adjusted import path as needed
import FeedbackSkeleton from "@/components/others/FeedbackSkeleton"; // Adjusted import path as needed
import ErrorCard from "@/components/others/ErrorCard"; // Adjusted import path as needed
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WriteFeedback from "@/components/others/WriteFeedback";
import axios from "axios";
import { Button } from "@nextui-org/react";
import animationData1 from "@/public/assets/Animations/error.json"; // Adjusted import path as needed
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Feedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { ref, inView } = useInView({ threshold: 0.1 });

  // Fetch feedbacks from the server
  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/reviews");
      setFeedbacks(response.data);
      setError(null);
    } catch (error) {
      setError("An error occurred while fetching feedback.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Function to delete all feedback
  const handleDeleteAllFeedback = async () => {
    try {
      await axios.delete("http://localhost:3000/reviews");
      setFeedbacks([]);
      console.log("All feedback deleted");
    } catch (error) {
      console.error("Error deleting all feedback:", error);
    }
  };

  // Function to handle adding new feedback
  const addFeedback = async (newFeedback: any) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/reviews",
        newFeedback
      );
      setFeedbacks((prev) => [
        ...prev,
        { ...newFeedback, id: response.data.id },
      ]);
      toggleModal();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const handleRetry = () => {
    fetchFeedbacks();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="h-auto p-10 flex flex-col justify-center items-center gap-10 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      <h2 className="mb-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
        Feedback of Others:
      </h2>
      <p className="font-light lg:text-lg">
        Here's what those who have worked with me are saying about their
        experience:
      </p>

      <Carousel opts={{ align: "start" }} className="w-full max-w-4xl mx-auto">
        <CarouselContent className="flex justify-between">
          {loading ? (
            <div className="flex justify-between w-full">
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index} className="flex justify-center w-1/3">
                  <FeedbackSkeleton />
                </CarouselItem>
              ))}
            </div>
          ) : error ? (
            <div className="flex justify-center w-full">
              <ErrorCard
                errorMessage={error}
                animationData1={animationData1}
                onRetry={handleRetry}
              />
            </div>
          ) : (
            feedbacks.map((feedback) => (
              <CarouselItem
                key={feedback._id}
                className="flex justify-center w-1/3"
              >
                <div className="p-4">
                  <FeedbackCard feedback={feedback} />
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex space-x-4">
        <Button
          color="primary"
          variant="shadow"
          className="mt-5 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 font-semibold"
          onClick={toggleModal}
        >
          Write a Review
        </Button>
        <button
          className="mt-5 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={handleDeleteAllFeedback}
        >
          Delete All Feedback
        </button>
      </div>

      <WriteFeedback
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        addFeedback={addFeedback}
      />
    </motion.div>
  );
};

export default Feedback;
