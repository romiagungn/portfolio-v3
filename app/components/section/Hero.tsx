import { Link } from "@remix-run/react";

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

const WebAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
        <defs>
            <linearGradient id="webAppGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" /> 
                <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
        </defs>
        {/* Mengganti path dengan bentuk monitor */}
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            stroke="url(#webAppGradient)"
            strokeWidth={1.5}
            fill="none"
            d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm15 12-4-4h-6l-4 4" 
        />
    </svg>
);

const MobileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
        <defs>
            <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
        </defs>
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            stroke="url(#mobileGradient)"
            strokeWidth={1.5}
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" 
        />
    </svg>
);

const ApiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
        <defs>
            <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
        </defs>
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            stroke="url(#apiGradient)"
            strokeWidth={1.5}
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" 
        />
    </svg>
);


export default function HeroSection() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Banner Pengumuman */}
          <Link
            to="/advertise"
            className="mb-8 inline-flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 px-2 py-1.5 text-sm transition-colors hover:border-neutral-600"
          >
            <span className="rounded-full bg-lime-300 dark:bg-lime-300/20 px-2 py-0.5 text-xs font-medium dark:text-lime-300">
              New
            </span>
            <span className="mx-3 dark:text-neutral-300">
              Available for work
            </span>
          </Link>

          {/* Headline Utama */}
          <h1 className="md:max-w-4xl text-4xl font-bold tracking-tight md:text-7xl">
            Great ideas deserve great execution.
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
            I believe that code is a medium for creativity. My expertise is in
            turning great ideas into beautiful, functional, and memorable
            digital experiences.{" "}
            <br/>
            <span className="text-sm mt-2 inline-flex items-center gap-1.5 font-semibold text-neutral-200">
              <WebAppIcon /> Web App
            </span>
            ,{" "}
            <span className="text-sm mt-2 inline-flex items-center gap-1.5 font-semibold text-neutral-200">
              <MobileIcon /> Mobile
            </span>
            , &{" "}
            <span className="text-sm mt-2 inline-flex items-center gap-1.5 font-semibold text-neutral-200">
              <ApiIcon /> APIS
            </span>
          </p>

          <div className="mt-10 flex flex-col items-center gap-y-8 sm:gap-y-10 lg:flex-row lg:gap-x-12">
            <div className="flex flex-col items-center">
              <Link
                to="/about"
                className="cursor-target inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-8 py-4 text-lg font-semibold text-black shadow-sm transition-transform hover:scale-105"
              >
                <span>Know me more</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
