import React, { useEffect, useState } from "react";
import Feedback from "./Feedback"; // Import Feedback component
import WriteFeedback from "./WriteFeedback"; // Import WriteFeedback component
import axios from "axios"; // Import axios

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]); // State to store feedback data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    // Function to fetch feedback data
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("http://localhost:3000/reviews"); // Replace with your server URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFeedbacks(data); // Set feedback data in state
      } catch (error) {
        setError(error); // Handle error
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchFeedbacks(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev); // Toggle modal visibility
  };

  const addFeedback = async (newFeedback) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/reviews",
        newFeedback
      );
      // Update the feedback list after adding new feedback
      setFeedbacks((prev) => [
        ...prev,
        { ...newFeedback, id: response.data.id }, // Ensure your backend returns an ID
      ]);
      toggleModal(); // Close the modal after submission
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  if (loading) {
    return <p>Loading feedback...</p>; // Display loading message
  }

  if (error) {
    return <p>Error fetching feedback: {error.message}</p>; // Display error message
  }

  return (
    <div>
      <WriteFeedback
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        addFeedback={addFeedback} // Pass addFeedback correctly
      />
      <Feedback feedbacks={feedbacks} />{" "}
      {/* Pass feedbacks to Feedback component */}
    </div>
  );
};

export default FeedbackList;
