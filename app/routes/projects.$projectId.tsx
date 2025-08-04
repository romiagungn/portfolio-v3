import { useLoaderData, Link } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";

import { getContact } from "../data"; // Assuming getContact fetches your project data
import { PageLayout } from "~/components/layout/PageLayout";
import { FC } from "react";

// --- Helper Icons ---
const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4 ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);

// --- Komponen Ikon SVG ---
const BackArrowIcon = () => (
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
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>
);

const TechTag: FC<{ label: string }> = ({ label }) => (
  <div className="rounded-full bg-neutral-800 border border-neutral-700 px-4 py-1.5 text-sm text-neutral-300">
    {label}
  </div>
);

// --- Loader Function ---
// This function runs on the server to fetch data for the page.
export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.projectId, "Missing projectId param");
  // We're fetching a "project", so let's rename the variable for clarity.
  const project = await getContact(params.projectId);
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  // Let's assume the project data has this structure.
  // You should adapt your `getContact` function to return this shape.
  const mockProjectData = {
    ...project, // Keep existing data
    title: project.title || "Project Title", // Use existing name or a default
    category: "Web Development",
    year: "2024",
    imageUrl: `https://github.com/DevrajDC/iphone/assets/65373279/991f490e-adec-418c-add5-579dfeea59d9`,
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    brief:
      "This is a short but compelling summary of the project. It explains the core problem the project aimed to solve and its main purpose. The goal was to create an intuitive and high-performance web application for managing tasks.",
    responsibility: [
      "Developed the entire frontend architecture from scratch using React and Remix.",
      "Designed and implemented a responsive UI with Tailwind CSS, ensuring a seamless experience across all devices.",
      "Integrated with a REST API for data fetching and state management.",
      "Implemented user authentication and authorization flows.",
      "Wrote unit and integration tests to ensure code quality and reliability.",
    ],
    result:
      "The final product was a highly-performant, user-friendly application that led to a 30% increase in user engagement. The project was delivered on time and received positive feedback for its clean design and intuitive navigation.",
    description:
      "Recreating the Apple iPhone 15 Pro website, with custom animations using GSAP to animated 3D model using Three.js. Along with full Performance & analytics metrics tracking using Sentry.",
    roles: ["Full-stack Developer"],
    client: "Personal Project",
    techStack: ["ReactJS", "GSAP", "Three.js", "Sentry", "TailwindCSS"],
  };

  return { project: mockProjectData };
};

// --- Main Component ---
export default function ProjectDetail() {
  const { project } = useLoaderData<typeof loader>();

  return (
    <PageLayout>
      <div className="bg-white dark:bg-neutral-900 text-gray-900 dark:text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <header className="dark:text-white py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Navigasi Kembali dan Tahun */}
              <div className="flex justify-between items-center mb-12">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <BackArrowIcon />
                  <span className="text-sm font-medium">Back to Projects</span>
                </Link>
                <div className="border border-neutral-700 rounded-md px-3 py-1 text-sm text-neutral-400">
                  {project?.year}
                </div>
              </div>

              {/* Konten Utama */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Kolom Kiri: Judul dan Deskripsi */}
                <div className="md:col-span-2">
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    {project?.title}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-neutral-400 max-w-2xl">
                    {project?.description}
                  </p>
                </div>

                {/* Kolom Kanan: Tombol, Peran, dan Klien */}
                <div className="flex flex-col items-start md:items-end justify-between">
                  <Link
                    to={project?.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-600 px-8 py-3 text-base font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Live 
                  </Link>
                  <div className="text-left md:text-right mt-8 md:mt-0">
                    <p className="text-neutral-500">
                      Roles:{" "}
                      <span className="text-neutral-200 font-medium">
                        {project?.roles.join(", ")}
                      </span>
                    </p>
                    <p className="text-neutral-500 mt-1">
                      Client:{" "}
                      <span className="text-neutral-200 font-medium">
                        {project?.client}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Tumpukan Teknologi */}
              <div className="mt-12 flex flex-wrap gap-3">
                {project?.techStack.map((tech) => (
                  <TechTag key={tech} label={tech} />
                ))}
              </div>
            </div>
          </header>

          {/* Main Image */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-neutral-800 shadow-lg">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Live Site & Repo Links */}
          <div className="flex justify-center gap-4 mt-8">
            <Link
              to={project.liveUrl}
              target="_blank"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              rel="noreferrer"
            >
              View Live Site <ArrowUpRightIcon />
            </Link>
            <Link
              to={project.repoUrl}
              target="_blank"
              className="inline-flex items-center rounded-md bg-gray-100 dark:bg-neutral-800 px-4 py-2 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-neutral-700"
              rel="noreferrer"
            >
              Source Code
            </Link>
          </div>

          {/* Content Section */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sticky Sidebar */}
            <aside className="lg:col-span-1 lg:sticky top-24 h-fit">
              <nav className="space-y-4">
                <a
                  href="#brief"
                  className="block font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Brief
                </a>
                <a
                  href="#responsibility"
                  className="block font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Responsibility
                </a>
                <a
                  href="#result"
                  className="block font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Result
                </a>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3 space-y-12">
              <section id="brief">
                <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-neutral-700 pb-2 mb-4">
                  Brief
                </h2>
                <p className="text-lg leading-8 text-gray-600 dark:text-neutral-300">
                  {project.brief}
                </p>
              </section>

              <section id="responsibility">
                <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-neutral-700 pb-2 mb-4">
                  Responsibility
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-lg leading-8 text-gray-600 dark:text-neutral-300">
                  {project.responsibility.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              <section id="result">
                <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-neutral-700 pb-2 mb-4">
                  Result
                </h2>
                <p className="text-lg leading-8 text-gray-600 dark:text-neutral-300">
                  {project.result}
                </p>
              </section>
            </main>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
