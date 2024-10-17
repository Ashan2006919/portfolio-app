// ProjectCard.jsx
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

export function ProjectCard({
  title,
  description,
  image,
  tags = [], // Default value for tags is now handled here
}: ProjectCardProps) {
  return (
    <Card className="w-[350px] shadow-2xl m-5">
      <CardHeader className="pb-0 -mt-3 px-0 flex-col items-start">
        <Image
          alt={title}
          className="object-cover rounded-t-xl" // Rounded top corners
          src={image}
          width="100%" // Set width to 100% of the card
        />
        <p className="text-tiny uppercase font-bold mt-2 px-3 pt-1">Project</p>
        <h4 className="font-bold text-large px-3">{title}</h4>
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1 px-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 rounded px-2 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardHeader>
      <CardBody className="overflow-visible py-2 px-3">
        <p className="mt-2 text-sm">{description}</p>
      </CardBody>
    </Card>
  );
}
