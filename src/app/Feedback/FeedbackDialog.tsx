import { FaStar } from "react-icons/fa";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@nextui-org/react";

export default function FeedbackDialog() {
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

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
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
      setFormData({
        name: "",
        jobTitle: "",
        review: "",
        image: null,
        rating: 0,
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button color="primary" variant="shadow">
          Add a Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold dark:text-gray-200">
            Write Review About Me:
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Explain your experience with me and give a honest rating!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label
              htmlFor="name"
              className="block text-secondary-foreground pb-1 pl-1"
            >
              Name:
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <Label
              htmlFor="jobTitle"
              className="block text-secondary-foreground pb-1 pl-1"
            >
              Job Title:
            </Label>
            <Input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <Label
              htmlFor="review"
              className="block text-secondary-foreground pb-1 pl-1"
            >
              Review:
            </Label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <Label className="block text-secondary-foreground pb-2 pl-1">
              Rating:
            </Label>
            <div className="flex ml-1">
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
            <Label
              htmlFor="image"
              className="block text-secondary-foreground pb-1 pl-1"
            >
              Image:
            </Label>
            <Input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full p-2 border border-border rounded-md"
            />
          </div>

          <DialogFooter>
            <Button type="submit" color="primary" variant="shadow">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
