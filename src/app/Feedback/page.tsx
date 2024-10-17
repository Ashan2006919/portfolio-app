import Marquee from "@/components/ui/marquee";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FeedbackCard from "@/components/others/FeedbackCard";
import FeedbackSkeleton from "@/components/others/FeedbackSkeleton";
import ErrorCard from "@/components/others/ErrorCard";
import { Button } from "@nextui-org/react";
import { useModal } from "@/components/others/ModalContext";
import { motion } from "framer-motion";
import BoxReveal from "@/components/ui/box-reveal";
import { useInView } from "react-intersection-observer";
import animationData1 from "@/public/assets/Animations/error.json";
import FeedbackDialog from "@/app/Feedback/FeedbackDialog";

// Define the Feedback type
type Feedback = {
  _id: string;
  comment: string;
  name: string;
  job: string;
  image: string;
  rating: number;
};

const Feedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { openModal } = useModal();
  const { ref, inView } = useInView({ threshold: 0.1 });

  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://review-app-production.up.railway.app/reviews"
      );
      setFeedbacks(response.data ?? []); // Ensure feedbacks is an array
      setError(null);
    } catch (error: unknown) {
      console.error("An error occurred while fetching feedback:", error);
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
      }
      setError("An error occurred while fetching feedback.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleDeleteAllFeedback = async () => {
    try {
      await axios.delete(
        "https://review-app-production.up.railway.app/reviews"
      );
      setFeedbacks([]);
      console.log("All feedback deleted");
    } catch (error: unknown) {
      console.error("Error deleting all feedback:", error);
    }
  };

  const handleRetry = () => {
    fetchFeedbacks();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skeletonCount = 2; // Number of skeleton cards to display while loading

  return (
    <div className="mb-10 bg-white dark:bg-black">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="h-auto p-10 flex flex-col justify-center items-center gap-10 relative overflow-hidden"
      >
        <BoxReveal boxColor={"#f97316"} duration={0.75}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Feedback of Others:
          </h2>
        </BoxReveal>
        <BoxReveal boxColor={"#f97316"} duration={0.75}>
          <p className="font-semibold lg:text-lg text-gray-600 dark:text-gray-100">
            Here's what those who have worked with me are saying about their
            experience:
          </p>
        </BoxReveal>

        <div className="relative flex h-[500px] w-screen flex-col items-center justify-center overflow-hidden -my-10">
          {loading ? (
            <div>
              <Marquee pauseOnHover className="[--duration:20s]">
                {[...Array(skeletonCount)].map((_, index) => (
                  <FeedbackSkeleton key={index} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {[...Array(skeletonCount)].map((_, index) => (
                  <FeedbackSkeleton key={index} />
                ))}
              </Marquee>
            </div>
          ) : error ? (
            <div>
              <Marquee pauseOnHover className="[--duration:20s]">
                {[...Array(skeletonCount)].map((_, index) => (
                  <ErrorCard
                    key={index}
                    errorMessage={error}
                    animationData1={animationData1}
                    onRetry={handleRetry}
                  />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {[...Array(skeletonCount)].map((_, index) => (
                  <ErrorCard
                    key={index}
                    errorMessage={error}
                    animationData1={animationData1}
                    onRetry={handleRetry}
                  />
                ))}
              </Marquee>
            </div>
          ) : (
            <>
              <Marquee pauseOnHover className="[--duration:20s]">
                {feedbacks.slice(0, feedbacks.length / 2).map((review) => (
                  <FeedbackCard key={review._id} feedback={review} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {feedbacks.slice(feedbacks.length / 2).map((review) => (
                  <FeedbackCard key={review._id} feedback={review} />
                ))}
              </Marquee>
            </>
          )}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
        <div className="flex items-center space-x-4 bg-transparent">
          <FeedbackDialog />
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={handleDeleteAllFeedback}
          >
            Delete All Feedback
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Feedback;
