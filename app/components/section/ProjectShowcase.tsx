import { Link } from "@remix-run/react";
import ProjectCard from "../ui/card/ProjectCard";
import ShinyText from "../ui/text/ShinyText";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  backgroundColor: string;
  href: string;
}

const projects: ProjectCardProps[] = [
  {
    title: "Localoka",
    category: "Development Frontend",
    year: "2025",
    imageUrl: "/images/project/localoka-cover.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/localoka",
  },
  {
    title: "Imigrasi SSO",
    category: "Development Frontend",
    year: "2025",
    imageUrl: "/images/project/sso-3.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/sso",
  },
  {
    title: "Sistem Pembinaan Karir Imigrasi (SISBINKAR)",
    category: "Development Frontend",
    year: "2025",
    imageUrl: "/images/project/sisbinkar-1.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/sisbinkar",
  },
  {
    title: "APOA Dirjen Imigrasi",
    category: "Development Frontend",
    year: "2024",
    imageUrl: "/images/project/apoa-map.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/apoa",
  },
  {
    title: "Delima BRI",
    category: "Development Frontend",
    year: "2023",
    imageUrl: "/images/project/delima-cover.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/delima",
  },
  {
    title: "Interactive Static Map",
    category: "Design & Fullstack Development",
    year: "2023",
    imageUrl: "/images/project/ISMHousing.png",
    backgroundColor: "bg-neutral-800",
    href: "/projects/ism",
  },
];

export default function ProjectShowcase() {
  return (
    <section className="dark:text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:items-center justify-between w-full">
          <div className="text-left space-y-0.5">
            <span className="flex items-center gap-1.5 text-[#BFF163]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BFF163] animate-pluse"></span>
              Workspaces
            </span>
            <ShinyText
              text="Selected Projects"
              disabled={false}
              speed={3}
              className="text-2xl font-bold tracking-tight sm:text-4xl"
            />
            <p className="text-sm leading-8 text-neutral-400 dark:text-neutral-200">
              Here&apos;s a curated selection showcasing my expertise and the
              achieved results.
            </p>
          </div>
          <Link to="/projects" className="cursor-target p-2 px-4 border rounded-lg w-max">See all projects</Link>
        </section>

        {/* Grid untuk Kartu Proyek */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
