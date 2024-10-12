"use client"; // Mark this as a Client Component

import { useEffect, useState } from "react";
import FeedbackCard from "@/components/others/FeedbackCard";
import FeedbackSkeleton from "@/components/others/FeedbackSkeleton";
import ErrorCard from "@/components/others/ErrorCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WriteFeedback from "@/components/others/WriteFeedback";
import { Button } from "@nextui-org/react";
import animationData1 from "@/public/assets/Animations/error.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

interface Feedback {
  _id: string;
  name: string;
  message: string;
}

interface FeedbackProps {
  feedbacks: Feedback[]; // Include feedbacks prop
  isModalOpen: boolean;
  toggleModal: () => void;
  addFeedback: (feedback: Feedback) => void;
}

const Feedback: React.FC<FeedbackProps> = ({
  feedbacks, // Get feedbacks from props
  isModalOpen,
  toggleModal,
  addFeedback,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1 });

  // Optional: If you still want to fetch feedbacks when the component mounts
  useEffect(() => {
    if (feedbacks.length === 0) {
      setLoading(true);
      // Optionally fetch feedbacks here
      setLoading(false);
    }
  }, [feedbacks]);

  const handleDeleteAllFeedback = async () => {
    try {
      await axios.delete("http://localhost:3000/reviews");
      // You can trigger a prop function to notify parent for re-fetching or updating feedbacks
    } catch (error) {
      console.error("Error deleting all feedback:", error);
    }
  };

  const handleRetry = () => {
    // Retry logic if needed
  };

  // Animation variants for the entire container
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
        Here&apos;s what those who have worked with me are saying about their
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
          className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={toggleModal}
        >
          Add Feedback
        </Button>
        <Button
          className="mt-5 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={handleDeleteAllFeedback}
        >
          Delete All Feedback
        </Button>
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
