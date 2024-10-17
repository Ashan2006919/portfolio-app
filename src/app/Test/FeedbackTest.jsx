import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { FaStar } from "react-icons/fa"; // Assuming you're using Font Awesome for stars

export default function FeedbackTest({ addFeedback, closeModal }) {
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

    if (formData.review.length < 60) {
      alert("Review must be at least 60 characters long.");
      return;
    }

    const newFeedback = {
      name: formData.name,
      job: formData.jobTitle,
      comment: formData.review,
      rating: formData.rating,
    };

    try {
      const response = await axios.post(
        "https://review-app-production.up.railway.app/reviews",
        newFeedback
      );
      console.log("Feedback submitted:", response.data);
      addFeedback(response.data);
      setFormData({
        name: "",
        jobTitle: "",
        review: "",
        image: null,
        rating: 0,
      });
      closeModal(); // Close modal after successful submission
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <Label htmlFor="name" className="block text-gray-700">
          Name:
        </Label>
        <Input
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
        <Label htmlFor="jobTitle" className="block text-gray-700">
          Job Title:
        </Label>
        <Input
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
        <Label htmlFor="review" className="block text-gray-700">
          Review:
        </Label>
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
        <Label className="block text-gray-700">Rating:</Label>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`cursor-pointer ${
                index < formData.rating ? "text-orange-500" : "text-gray-300"
              }`}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="image" className="block text-gray-700">
          Image:
        </Label>
        <Input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="button"
          className="mr-2 bg-gray-300"
          onClick={closeModal} // Use closeModal for cancelling
        >
          Cancel
        </Button>
        <Button type="submit" className="bg-blue-500 text-white">
          Submit
        </Button>
      </div>
    </form>
  );
}
