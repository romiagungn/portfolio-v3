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

const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
      fill="#4285F4"
    />
    <path
      d="M12 23c3.24 0 5.95-1.08 7.93-2.91l-3.57-2.77c-1.08.73-2.45 1.16-4.36 1.16-3.31 0-6.11-2.25-7.12-5.26H1.29v2.86C3.26 20.44 7.25 23 12 23Z"
      fill="#34A853"
    />
    <path
      d="M4.88 14.24c-.21-.63-.32-1.3-.32-2s.11-1.37.32-2V7.38H1.29C.47 8.94 0 10.42 0 12s.47 3.06 1.29 4.62l3.59-2.86Z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.5c1.77 0 3.35.61 4.62 1.83l3.15-3.15C17.95.91 15.24 0 12 0 7.25 0 3.26 2.56 1.29 6.13l3.59 2.86c1.01-3.01 3.81-5.26 7.12-5.26Z"
      fill="#EA4335"
    />
  </svg>
);

const AmazonIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.133 21.999H18.73v-1.534c0-1.897 1.48-2.883 3.14-2.883.22 0 .41.018.59.045V13.43c-.19-.027-.4-.045-.63-.045-3.34 0-5.63 2.11-5.63 5.11v3.499H1.866V3.999h14.266v9.19c.19-.027.4-.045.63-.045 3.34 0 5.63 2.11 5.63 5.11v3.744zM18.49 4.418c-1.34 0-2.43 1.09-2.43 2.43s1.09 2.43 2.43 2.43 2.43-1.09 2.43-2.43-1.09-2.43-2.43-2.43z" />
  </svg>
);

const MetaIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6z" />
    <path d="M12 6.6c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 9.6c-1.988 0-3.6-1.612-3.6-3.6s1.612-3.6 3.6-3.6 3.6 1.612 3.6 3.6-1.612 3.6-3.6 3.6z" />
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
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Great ideas deserve great execution.
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
            I believe that code is a medium for creativity. My expertise is in
            turning great ideas into beautiful, functional, and memorable
            digital experiences.{" "}
            <span className="inline-flex items-center gap-1.5 font-semibold text-neutral-200">
              <GoogleIcon /> Google
            </span>
            ,{" "}
            <span className="inline-flex items-center gap-1.5 font-semibold text-neutral-200">
              <AmazonIcon /> amazon
            </span>
            , &{" "}
            <span className="inline-flex items-center gap-1.5 font-semibold text-neutral-200">
              <MetaIcon /> Meta
            </span>
          </p>

          <div className="mt-10 flex flex-col items-center gap-y-8 sm:gap-y-10 lg:flex-row lg:gap-x-12">
            <div className="flex flex-col items-center">
              <Link
                to="/start"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-8 py-4 text-lg font-semibold text-black shadow-sm transition-transform hover:scale-105"
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
