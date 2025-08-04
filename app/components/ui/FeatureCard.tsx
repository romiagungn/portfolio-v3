import type { FC } from "react";
import SpotlightCard from "../ui/SpotlightCard";
import ShinyText from "../ui/text/ShinyText";

interface FeatureCardProps {
  imageUrl: string;
  caption: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ imageUrl, caption }) => {
  return (
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
  );
};

export default FeatureCard