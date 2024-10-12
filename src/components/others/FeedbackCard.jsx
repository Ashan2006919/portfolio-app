import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { FaStar } from "react-icons/fa"; // Import star icon

const FeedbackCard = ({ feedback }) => {
  if (!feedback || typeof feedback !== "object") {
    return <p>No feedback available</p>;
  }

  const {
    comment = "",
    name = "",
    job = "",
    image = "",
    rating = 0,
  } = feedback;

  const renderStars = (rating) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-orange-500" : "text-gray-300"}
      />
    ));
  };

  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={image || "https://nextui.org/avatars/avatar-1.png"}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {job}
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-1">{renderStars(rating)}</div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <div
          className="h-20 overflow-y-auto" // Set fixed height and enable vertical scroll
          style={{ maxHeight: "80px", overflowY: "auto" }} // Adjust height as needed
        >
          <p>{comment}</p>
        </div>
      </CardBody>
      <CardFooter className="gap-3">
        <Button
          aria-label={isFollowed ? "Unfollow" : "Follow"} // Accessibility
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;
