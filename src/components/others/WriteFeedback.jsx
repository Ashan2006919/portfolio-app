import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

const WriteFeedback = ({ isOpen, toggleModal, addFeedback }) => {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    review: "",
    image: null,
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleStarClick = (index) => {
    setFormData((prev) => ({
      ...prev,
      rating: index + 1,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for minimum 60 characters
    if (formData.review.length < 60) {
      alert("Review must be at least 60 characters long.");
      return;
    }

    const newFeedback = {
      name: formData.name,
      job: formData.jobTitle,
      comment: formData.review,
      rating: formData.rating,
      // Handle image upload logic here if needed
    };

    try {
      const response = await axios.post(
        "https://review-app-production.up.railway.app/reviews",
        newFeedback
      ); // Updated URL
      console.log("Feedback submitted:", response.data);
      addFeedback(response.data); // Call addFeedback function passed as a prop

      // Reset form data and close modal
      setFormData({
        name: "",
        jobTitle: "",
        review: "",
        image: null,
        rating: 0,
      });
      toggleModal(); // Close the modal after submission
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  // Only reset the form when the modal is opened
  React.useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        jobTitle: "",
        review: "",
        image: null,
        rating: 0,
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="hs-review-modal"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      tabIndex="-1"
      aria-labelledby="hs-review-modal-label"
      onClick={toggleModal} // Close modal on background click
    >
      <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div
          className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3
              id="hs-review-modal-label"
              className="font-bold text-gray-800 flex items-center"
            >
              Write a Feedback:
            </h3>
            <button
              type="button"
              className="h-8 w-8 inline-flex justify-center items-center rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200"
              aria-label="Close"
              onClick={toggleModal} // Close modal on button click
            >
              <svg
                className="shrink-0 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="jobTitle" className="block text-gray-700">
                Job Title:
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="review" className="block text-gray-700">
                Review:
              </label>
              <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Rating:</label>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`cursor-pointer ${
                      index < formData.rating
                        ? "text-orange-500"
                        : "text-gray-300"
                    }`}
                    onClick={() => handleStarClick(index)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700">
                Image:
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="mr-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                onClick={toggleModal} // Close modal on button click
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteFeedback;
