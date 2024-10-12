import { Card, CardFooter, Button } from "@nextui-org/react";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image"; // Import Image from next/image, not from @nextui-org/react
import alertImage from "@/public/icons/errors.png";

// Define the structure of your animation data
interface LottieAnimationData {
  v: string; // version
  fr: number; // frame rate
  ip: number; // in point
  op: number; // out point
  w: number; // width
  h: number; // height
  nm: string; // name
  ddd: number; // 3D flag
  assets: any[]; // assets used in the animation
  layers: any[]; // layers of the animation
  // Add more properties as needed based on your animation data
}

interface ErrorCardProps {
  errorMessage: string;
  animationData1: LottieAnimationData; // Updated type to match the structure of your animation data
  onRetry: () => void;
}

const ErrorCard: React.FC<ErrorCardProps> = ({
  errorMessage,
  animationData1,
  onRetry,
}) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2"
    >
      <div className="relative -mb-5 -mt-6">
        <Image
          alt="Error"
          className="object-cover rounded-lg"
          src={alertImage}
          width={300}
          height={200}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-2 overflow-hidden py-1 z-10 rounded-xl">
        <div className="flex items-center gap-2">
          <Player
            autoplay
            loop={true}
            src={animationData1} // Ensure this is the correct path or data format
            style={{ height: "30px", width: "30px" }}
          />
          <p className="text-medium text-white font-medium">{errorMessage}</p>
        </div>
        <div>
          <Button
            className="text-tiny text-white font-medium"
            variant="shadow"
            color="danger"
            radius="lg"
            size="sm"
            onPress={onRetry}
          >
            Retry
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
