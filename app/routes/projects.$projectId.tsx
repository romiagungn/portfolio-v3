import { useLoaderData, Link } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { PageLayout } from "~/components/layout/PageLayout";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { BACKUP_PROJECTS, getProject, Project } from "~/services/project.services";
import TechTag from "~/components/ui/TechTag";
import invariant from "tiny-invariant";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.projectId, "Missing projectId param");
  const project: Project = await getProject(params.projectId);
  
  const result = project

  console.log("result <<<>>>>", BACKUP_PROJECTS,"res", result)


  return { project: project };
};

export default function ProjectDetail() {
  const { project } = useLoaderData<typeof loader>();

  const techStack = project ? JSON.parse(project?.techStack) : []
  const responsibilities = project ? JSON.parse(project?.responsibility) : []

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
                  to="/projects"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <ArrowLeftIcon />
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
                  {/* <Link
                    to={project?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neutral-600 px-8 py-3 text-base font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Live 
                  </Link> */}
                </div>
              </div>

              {/* Tumpukan Teknologi */}
              <div className="mt-12 flex flex-wrap gap-3">
                {techStack?.map((tech:string) => (
                  <TechTag key={tech} label={tech} />
                ))}
              </div>
            </div>
          </header>

          {/* Main Image */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-neutral-800 shadow-lg">
            <img
              src={project?.thumbnail}
              alt={project?.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Live Site Links */}
          <div className="flex justify-center gap-4 mt-8">
            <Link
              to={project?.url}
              target="_blank"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              rel="noreferrer"
            >
              View Live Site <ArrowRightIcon />
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
                  {project?.brief}
                </p>
              </section>

              <section id="responsibility">
                <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-neutral-700 pb-2 mb-4">
                  Responsibility
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-lg leading-8 text-gray-600 dark:text-neutral-300">
                  {responsibilities?.map((item:string, index:number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              <section id="result">
                <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-neutral-700 pb-2 mb-4">
                  Result
                </h2>
                <p className="text-lg leading-8 text-gray-600 dark:text-neutral-300">
                  {project?.result}
                </p>
              </section>
            </main>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
