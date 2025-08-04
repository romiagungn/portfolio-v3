import type { FC } from "react";
import { Link } from "@remix-run/react";
import AreaOfExpertise from "~/components/section/AreaOfExpertise";

const GitHubIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66Z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

// --- Komponen Kartu Keahlian ---
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

// --- Komponen Utama Halaman "Tentang Saya" ---
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
    <div className="bg-white dark:bg-black text-gray-800 dark:text-neutral-200">
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
            Dengan pengalaman lebih dari [Jumlah] tahun, saya berfokus pada
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

        {/* Bagian 4: Ajakan Bertindak (CTA) */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Punya proyek menarik?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-neutral-400">
            Mari kita wujudkan ide hebat Anda bersama.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-8 py-4 text-base font-semibold text-white dark:text-black shadow-sm transition-transform hover:scale-105"
            >
              <span>Hubungi Saya</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
