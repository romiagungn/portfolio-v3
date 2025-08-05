import type { FC } from "react";
import AreaOfExpertise from "~/components/section/AreaOfExpertise";
import CallToAction from "~/components/ui/cta";

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
            Perjalanan saya ke dunia pengembangan web dimulai dari ketertarikan
            sederhana pada bagaimana sebuah ide bisa diubah menjadi sesuatu yang
            interaktif di layar. Bagi saya, frontend development adalah
            perpaduan sempurna antara logika pemecahan masalah dan kreativitas
            desain. Saya menemukan kepuasan luar biasa dalam membangun produk
            yang tidak hanya solid secara teknis, tetapi juga mudah dan
            menyenangkan untuk digunakan oleh orang banyak.
          </p>
          <p>
            Dengan pengalaman lebih dari 4 tahun, saya berfokus pada
            penulisan kode yang bersih, dapat dipelihara, dan terukur. Saya
            percaya bahwa performa web dan aksesibilitas bukanlah fitur
            tambahan, melainkan inti dari pengalaman pengguna yang hebat. Saya
            selalu antusias untuk mempelajari teknologi baru dan berkolaborasi
            dalam tim untuk mewujudkan visi bersama menjadi kenyataan.
          </p>
        </div>

        {/* Bagian 3: Keahlian */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Keahlian & Teknologi
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCard
              title="Bahasa & Framework"
              skills={[...skills.languages, ...skills.frameworks]}
            />
            <SkillCard
              title="Styling & Tools"
              skills={[...skills.styling, ...skills.tools]}
            />
          </div>
        </section>
      </div>
      {/* Bagian 4: Ajakan Bertindak (CTA) */}
      <CallToAction />
    </div>
  );
}
