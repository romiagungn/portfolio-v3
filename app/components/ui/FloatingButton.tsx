import { useState } from "react";
import { Link } from "@remix-run/react";
import { motion, AnimatePresence } from "framer-motion";

const XIcon = () => (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 inline-block ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <div className="relative max-w-72 cursor-pointer group overflow-hidden flex items-center gap-4 rounded-lg text-sm border border-neutral-200 bg-white/30  dark:border-white/10 dark:bg-neutral-800/60 p-2.5 shadow-2xl backdrop-blur-md">
            {/* EFEK GRADIENT LIGHT BARU */}
            <div
              className="absolute top-0 left-0 -translate-x-1/2 w-[150%] h-[200%]
              bg-[radial-gradient(circle_farthest-side_at_50%_0,#444A38,rgba(68,74,56,0))]
              opacity-0 group-hover:opacity-40 transition-opacity duration-500"
            />

            {/* Konten diletakkan di atas lapisan gradien */}
            <div className="relative z-10 flex items-center gap-4">
              {/* Bagian Kiri (Gambar dengan Border) */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8NIj7-RhUNTxQe-Fpv1m5zc68Kdrxjw6yNzhBRhww8sZsg6QHgGBujkesLGc5bGbAGA&usqp=CAU"
                alt="Promo"
                className="w-10 h-10 rounded-lg border-2 border-white/20 bg-black/20 aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />

              {/* Bagian Tengah (Teks Aksi) */}
              <div className="max-w-sm text-xs dark:text-neutral-200">
                <p>
                  Complete simple social tasks.{" "}
                  <Link
                    to="/social-tasks"
                    className="font-semibold dark:text-white hover:underline"
                  >
                    Check it out
                    <ArrowRightIcon />
                  </Link>
                </p>
              </div>

              {/* Bagian Kanan (Tombol Tutup) */}
              <div className="ml-4">
                <button
                  onClick={() => setIsVisible(false)}
                  className="rounded-full p-1.5 dark:text-neutral-400 transition-colors hover:bg-white/10 dark:hover:text-white"
                  aria-label="Tutup promosi"
                >
                  <XIcon />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
