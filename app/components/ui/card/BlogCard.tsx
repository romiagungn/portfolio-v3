import type { FC } from "react";
import SpotlightCard from "./SpotlightCard";
import ShinyText from "../text/ShinyText";
import { Link } from "@remix-run/react";

interface BlogCardProps {
  id: number
  imageUrl: string;
  caption: string;
}

const BlogCard: FC<BlogCardProps> = ({id, imageUrl, caption }) => {
  return (
    <Link to={`/blogs/${id}`}>
      <SpotlightCard
        className="cursor-target custom-spotlight-card flex flex-col gap-6"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <ShinyText text="Just some shiny text!" disabled={false} speed={3} />
        <img
          src={imageUrl}
          alt={caption}
          className="w-full h-full object-cover rounded-md"
        />
      </SpotlightCard>
    </Link>
  );
};

export default BlogCard;
