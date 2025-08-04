import type { FC } from 'react';

// --- Komponen Ikon SVG ---
const SeparatorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" className="w-6 h-6 mx-6 text-neutral-600">
        <path fill="currentColor" d="M148 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20Z"></path>
    </svg>
);

// --- Tipe Data untuk Props ---
interface RunningTextProps {
  items: string[];
  duration?: string; // Durasi animasi, contoh: "40s"
}

// --- Komponen Utama Running Text ---
const RunningText: FC<RunningTextProps> = ({ items, duration = "40s" }) => {
  const content = (
    <div className="flex items-center">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="text-4xl font-bold text-neutral-500 whitespace-nowrap">{item}</span>
          <SeparatorIcon />
        </div>
      ))}
    </div>
  );

  return (
    // Container utama sekarang 'relative' untuk memposisikan bayangan
    <div className="relative w-full h-max overflow-hidden border-y-[0.1px] border-neutral-500 py-10 bg-neutral-900">
      {/* Bayangan Kiri */}
      <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-neutral-900 to-transparent" />
      
      {/* Bayangan Kanan */}
      <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-neutral-900 to-transparent" />

      {/* Konten yang Berjalan */}
      <div 
        className="flex"
        style={{
          animation: `marquee ${duration} linear infinite`,
        }}
      >
        {content}
        {content} {/* Duplikat konten untuk loop yang mulus */}
      </div>
      
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};


// --- Contoh Penggunaan Komponen ---
export default function Marquee() {
    const skills = [
        "Development",
        "Mentor",
        "Websites",
        "Designing",
        "Frontend Engineering",
        "React",
        "TypeScript"
    ];

    return (
        <div className="bg-neutral-900 flex flex-col items-center justify-center">
            <div className="w-full opacity-40">
                <RunningText items={skills} duration="50s" />
            </div>
        </div>
    );
}
