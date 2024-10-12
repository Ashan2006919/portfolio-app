// ProjectCard.jsx
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import PropTypes from "prop-types"; // Import PropTypes for type checking

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
  tags,
}: ProjectCardProps) {
  return (
    <Card className="pb-5">
      <CardHeader className="pb-0 -mt-3 px-0 flex-col items-start">
        <Image
          alt={title}
          className="object-cover rounded-t-xl" // Rounded top corners
          src={image}
          width="100%" // Set width to 100% of the card
        />
        <p className="text-tiny uppercase font-bold mt-2 px-3 pt-1">Project</p>
        <h4 className="font-bold text-large px-3">{title}</h4>
        {tags && (
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

// Define prop types for type checking
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ProjectCard.defaultProps = {
  tags: [],
};
