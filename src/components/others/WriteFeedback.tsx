import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { FaStar } from "react-icons/fa"; // Font Awesome for stars

interface Feedback {
  id: string;
  name: string;
  jobTitle: string;
  review: string;
  image?: string;
  rating: number;
}

interface WriteFeedbackProps {
  closeModal: () => void;
}

export default function WriteFeedback({ closeModal }: WriteFeedbackProps) {
  const [formData, setFormData] = useState<{
    name: string;
    jobTitle: string;
    review: string;
    image: File | null;
    rating: number;
  }>({
    name: "",
    jobTitle: "",
    review: "",
    image: null,
    rating: 0,
  });

  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleStarClick = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      rating: index + 1,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Set loading state

    if (formData.review.length < 60) {
      alert("Review must be at least 60 characters long.");
      setIsSubmitting(false); // Reset loading state
      return;
    }

    const newFeedback = new FormData();
    newFeedback.append("name", formData.name);
    newFeedback.append("job", formData.jobTitle);
    newFeedback.append("comment", formData.review);
    newFeedback.append("rating", formData.rating.toString());

    if (formData.image) {
      newFeedback.append("image", formData.image);
    }

    try {
      const response = await axios.post(
        "https://review-app-production.up.railway.app/reviews",
        newFeedback,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Feedback submitted:", response.data);
      // No need to call addFeedback here anymore

      // Reset form data
      setFormData({
        name: "",
        jobTitle: "",
        review: "",
        image: null,
        rating: 0,
      });
      setImagePreview(null); // Reset image preview
      closeModal(); // Close the modal
    } catch (error) {
      console.error("Error submitting feedback:", error);
      const message =
        (error as any).response?.data?.message ||
        "Failed to submit feedback. Please try again.";
      setError(message);
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      jobTitle: "",
      review: "",
      image: null,
      rating: 0,
    });
    setImagePreview(null); // Reset image preview
    closeModal();
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
          minLength={60}
          required
        />
        {formData.review.length > 0 && formData.review.length < 60 && (
          <p className="text-red-500">
            Review must be at least 60 characters long.
          </p>
        )}
      </div>

      <div className="mb-4">
        <Label className="block text-gray-700">Rating:</Label>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`cursor-pointer transition-colors duration-200 ${
                index < formData.rating ? "text-orange-500" : "text-gray-300"
              }`}
              onClick={() => handleStarClick(index)}
              aria-label={`Rate ${index + 1} star`}
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
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="mt-2 max-w-full" />
        )}
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex justify-end">
        <Button type="button" onClick={handleCancel} className="mr-2">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
