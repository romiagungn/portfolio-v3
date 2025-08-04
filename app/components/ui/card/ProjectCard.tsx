import type { FC } from "react";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  backgroundColor: string;
  href: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  category,
  year,
  imageUrl,
  backgroundColor,
  href,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Link to={href} className="block group">
        <div
          className={`rounded-3xl p-6 transition-all duration-300 group-hover:scale-[1.02] ${backgroundColor}`}
        >
          <div className="relative object-contain w-full overflow-hidden rounded-xl bg-[#e7e5e4] p-10">
            <img
              src={imageUrl}
              alt={`Showcase of ${title}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-neutral-400 mt-1">{category}</p>
            </div>
            <p className="text-sm text-neutral-500">{year}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
