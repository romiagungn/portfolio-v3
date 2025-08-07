import type { FC } from "react";
import AreaOfExpertise from "~/components/section/AreaOfExpertise";

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard: FC<SkillCardProps> = ({ title, skills }) => (
  <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 p-6">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function AboutMePage() {
  const skills = {
    languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    frameworks: ["React", "Next.js", "Remix", "Vue.js", "Node.js"],
    styling: [
      "Tailwind CSS",
      "SASS/SCSS",
      "Styled Components",
      "Framer Motion",
    ],
    tools: ["Git", "Figma", "Vite", "Webpack", "Jest", "Vercel"],
  };

  return (
    <div className="dark:text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Bagian 1: Intro */}
        <AreaOfExpertise />

        {/* Bagian 2: Narasi / Cerita */}
        <div className="mx-auto  text-lg leading-8 text-gray-700 dark:text-neutral-300 space-y-6">
          <p>
            My journey into web development began with a simple curiosity about how an idea could be transformed into something interactive on a screen. For me, frontend development is the perfect blend of problem-solving logic and design creativity. I find immense satisfaction in building products that are not only technically solid but also easy and enjoyable for many people to use.
          </p>
          <p>
            With over 4 years of experience, I focus on writing clean, maintainable, and scalable code. I believe that web performance and accessibility are not afterthoughts but are core to a great user experience. I am always enthusiastic about learning new technologies and collaborating within a team to turn a shared vision into reality.
          </p>
        </div>

        {/* Bagian 3: Keahlian */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Technology Stack
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCard
              title="Language & Framework"
              skills={[...skills.languages, ...skills.frameworks]}
            />
            <SkillCard
              title="Styling & Tools"
              skills={[...skills.styling, ...skills.tools]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
