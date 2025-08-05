import { Monitor, Network, PaintRoller, Smartphone } from "lucide-react";
import type { FC, ReactNode } from "react";
import ShinyText from "../ui/text/ShinyText";
import CountUp from "../ui/text/CountUp";

// --- Tipe Data dan Data ---
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Monitor />,
    title: "Web Apps",
    description:
      "Get connected with a mentor that will help you pave your career path.",
  },
  {
    icon: <Smartphone />,
    title: "Mobile Apps",
    description:
      "Get Internships and Job opportunities and gain experience while you learn.",
  },
  {
    icon: <PaintRoller />,
    title: "UI/UX",
    description:
      "Get Free resources related to Designing and Development from the community.",
  },
  {
    icon: <Network />,
    title: "API",
    description:
      "Get your portfolio and projects reviewed by industry experts and mentors.",
  },
];

// --- Komponen Kartu Fitur Individual ---
const FeatureCard: FC<Feature> = ({ icon, title, description }) => (
  <div className="rounded-2xl dark:bg-neutral-800/50 p-6 border border-neutral-700/80">
    <div className="flex items-center justify-center w-12 h-12 rounded-lg dark:bg-neutral-800 dark:border dark:border-neutral-700 text-[#BFF163]">
      {icon}
    </div>
    <h3 className="mt-4 font-semibold dark:text-white">{title}</h3>
    <p className="mt-2 text-sm text-neutral-400">{description}</p>
  </div>
);

// --- Komponen Utama ---
export default function AreaOfExpertise() {
  return (
    <section className="dark:text-white py-10">
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
            <div className="flex items-center gap-2 text-sm font-medium text-[#BFF163]">
              <span>COMMUNITY WORK</span>
            </div>
            <ShinyText
              text="Areas of Expertise"
              speed={3}
              className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
            />
            <p className="mt-6 text-base leading-7 text-neutral-400">
              I founded Design & Code which is a global community with a mission
              to connect designers and developers to create a happy community
              eager to learn, innovate and grow together. We welcome all
              designers and developers: beginners, intermediates, and experts
              willing to learn together. We encourage sharing resources and
              learning experiences, organizing events, and providing feedback
              for our members to grow as they learn.
            </p>

            {/* Statistik */}
            <div className="mt-10 flex gap-12">
              <div className="flex flex-col">
                <span className="text-4xl font-bold">
                  <CountUp
                    from={0}
                    to={4}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </span>
                <span className="text-sm text-neutral-400 mt-1">Years</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold">
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </span>
                <span className="text-sm text-neutral-400 mt-1">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold">
                  <CountUp
                    from={0}
                    to={3}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </span>
                <span className="text-sm text-neutral-400 mt-1">Company</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
