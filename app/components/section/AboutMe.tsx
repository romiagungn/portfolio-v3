import { useRef } from "react";
import VariableProximity from "../ui/text/VariableProximityText";

const AboutMe = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col justify-center items-center text-center space-y-5 p-10" 
    >
      <span className="flex items-center gap-1.5 text-[#BFF163]">
        <span className="w-1.5 h-1.5 rounded-full font-bold bg-[#BFF163] animate-pluse"></span>
        ABOUT ME
      </span>
      <VariableProximity
        label="I'm Romie Agung Nugraha, a Software Engineer with over 4+ years of experience in crafting high-quality and impactful digital experiences. I have a strong focus on turning complex problems into elegant, user-friendly interfaces."
        className={"max-w-7xl text-2xl md:text-5xl font-bold tracking-tight md:leading-[50px]"}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />
    </div>
  );
};

export default AboutMe;
