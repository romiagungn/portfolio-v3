import type { FC, ReactNode } from 'react';
import { Link } from '@remix-run/react';

// --- Komponen Ikon SVG ---
// Ikon-ikon ini disertakan langsung untuk kemudahan.

const MentoringIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962c.566-.64.709-1.557.479-2.385a17.916 17.916 0 0 1-4.5-2.385C5.462 6.377 6.757 5.25 8.25 5.25c1.493 0 2.787 1.127 3.247 2.639m4.5-2.639a17.916 17.916 0 0 1 4.5 2.385c.23.828.087 1.745-.479 2.385m-7.5-2.962a3.375 3.375 0 0 0-5.741 2.553c.089.43.234.838.417 1.213m5.324-3.766a3.375 3.375 0 0 0-5.741-2.553c-.089-.43-.234-.838-.417-1.213m11.486-2.553a3.375 3.375 0 0 0-5.741-2.553c.089.43.234.838.417 1.213m-5.324 3.766a3.375 3.375 0 0 0 5.741 2.553c.089-.43.234-.838.417-1.213" />
  </svg>
);

const OpportunitiesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25H5.25a2.25 2.25 0 0 1-2.25-2.25v-4.07a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v.75a.75.75 0 0 0 1.5 0v-.75a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v.75a.75.75 0 0 0 1.5 0v-.75a2.25 2.25 0 0 1 2.25-2.25H21a2.25 2.25 0 0 1 2.25 2.25v4.07a2.25 2.25 0 0 1-2.25 2.25H3.75a2.25 2.25 0 0 1-2.25-2.25v-4.07m18-3.37a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3m12 0v9.37m-9-9.37v9.37" />
  </svg>
);

const ResourcesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

const HelpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
  </svg>
);

// --- Tipe Data dan Data ---
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: <MentoringIcon />, title: "Mentoring", description: "Get connected with a mentor that will help you pave your career path." },
  { icon: <OpportunitiesIcon />, title: "Opportunities", description: "Get Internships and Job opportunities and gain experience while you learn." },
  { icon: <ResourcesIcon />, title: "Free Resources", description: "Get Free resources related to Designing and Development from the community." },
  { icon: <HelpIcon />, title: "Help & Reviews", description: "Get your portfolio and projects reviewed by industry experts and mentors." },
];

// --- Komponen Kartu Fitur Individual ---
const FeatureCard: FC<Feature> = ({ icon, title, description }) => (
  <div className="rounded-2xl dark:bg-neutral-800/50 p-6 border border-neutral-700/80">
    <div className="flex items-center justify-center w-12 h-12 rounded-lg dark:bg-neutral-800 dark:border dark:border-neutral-700 text-green-400">
      {icon}
    </div>
    <h3 className="mt-4 font-semibold dark:text-white">{title}</h3>
    <p className="mt-2 text-sm text-neutral-400">{description}</p>
  </div>
);

// --- Komponen Utama ---
export default function CommunitySection() {
  return (
    <section className="dark:text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Kolom Kiri: Grid Kartu Fitur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>

          {/* Kolom Kanan: Deskripsi Komunitas */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-sm font-medium text-green-400">
              <span>COMMUNITY WORK</span>
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Building a Tech Community
            </h2>
            <p className="mt-6 text-base leading-7 text-neutral-400">
              I founded Design & Code which is a global community with a mission to connect designers and developers to create a happy community eager to learn, innovate and grow together. We welcome all designers and developers: beginners, intermediates, and experts willing to learn together. We encourage sharing resources and learning experiences, organizing events, and providing feedback for our members to grow as they learn.
            </p>
            
            {/* Statistik */}
            <div className="mt-10 flex gap-12">
              <div className="flex flex-col">
                <span className="text-4xl font-bold">5k+</span>
                <span className="text-sm text-neutral-400 mt-1">Community Members</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold">25+</span>
                <span className="text-sm text-neutral-400 mt-1">Events conducted</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold">4</span>
                <span className="text-sm text-neutral-400 mt-1">Years</span>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="mt-10">
              <Link to="/community" className="inline-block rounded-full border border-neutral-600 px-6 py-3 text-sm font-semibold hover:bg-neutral-800 transition-colors">
                Join Community
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
