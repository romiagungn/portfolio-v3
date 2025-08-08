import ReviewCard from "../ui/card/ReviewCard";
import ShinyText from "../ui/text/ShinyText";

const reviews = [
  {
    id: 1,
    reviewText:
      "Skill teknisnya kuat dan komunikasi lancar. Proyek berjalan mulus tanpa hambatan berarti. Sangat direkomendasikan untuk kerja sama jangka panjang.",
    user: {
      avatarUrl: "https://placehold.co/48x48/60A5FA/FFFFFF?text=AN",
      name: "Angeng Nugroho",
      title: "Senior Backend Engineer",
      location: "Jakarta, Indonesia",
      linkedinUrl: "#",
    },
  },
  {
    id: 2,
    reviewText:
      "Kontribusi yang diberikan sangat signifikan dalam pengembangan produk kami. Selalu proaktif dalam memberikan solusi dan ide-ide baru. Mantap!",
    user: {
      avatarUrl: "https://placehold.co/48x48/FBBF24/1F2937?text=AM",
      name: "Asto Miwanda",
      title: "Golang Backend Developer",
      location: "Jakarta, Indonesia",
      linkedinUrl: "#",
    },
  },
  {
    id: 3,
    reviewText:
      "Sangat profesional dan hasilnya melebihi ekspektasi. Romie mampu bekerja dengan baik dalam tim maupun secara mandiri. Kualitas kodenya bersih dan terstruktur.",
    user: {
      avatarUrl: "https://placehold.co/48x48/34D399/FFFFFF?text=RA",
      name: "Albar Moerhamsa",
      title: "Senior Frontend Engineer",
      location: "Jakarta, Indonesia",
      linkedinUrl: "#",
    },
  },
  {
    id: 4,
    reviewText:
      "Kerja sama yang luar biasa! Cepat beradaptasi dengan alur kerja tim kami dan selalu memberikan hasil yang memuaskan tepat waktu.",
    user: {
      avatarUrl: "https://placehold.co/48x48/A78BFA/FFFFFF?text=AA",
      name: "Amilio Ardha",
      title: "Frontend Engineer",
      location: "Jakarta, Indonesia",
      linkedinUrl: "#",
    },
  },
  {
    id: 5,
    reviewText:
      "Selalu memberikan ide-ide segar dan eksekusinya cepat. Kemampuannya dalam memecahkan masalah kompleks sangat membantu progres tim.",
    user: {
      avatarUrl: "https://placehold.co/48x48/F472B6/FFFFFF?text=LD",
      name: "Lala Dinda Pratiwi",
      title: "Project Manager",
      location: "Jakarta, Indonesia",
      linkedinUrl: "#",
    },
  },
  {
    id: 6,
    reviewText:
      "Selalu mau belajar hal baru dan teknologi baru yang membuat project semakin optimal. Romie mempunyai skill komunikasi yang baik antar tim. Kualitas kodenya sangat baik, sangat mementingkan kode yang terstruktur dan rapih",
    user: {
      avatarUrl: "https://placehold.co/48x48/F472B6/FFFFFF?text=AY",
      name: "Ariel Arliyanus",
      title: "Senior Frontend Engineer",
      location: "Jakarta, Indonesia",
      linkedinUrl: "https://www.linkedin.com/in/ariel-arliyanus/",
    },
  },
];

export default function ReviewsGrid() {
  return (
    <div className="min-h-screen dark:bg-neutral-900 p-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="text-left mx-auto space-y-0.5">
          <span className="flex items-center gap-1.5 text-[#BFF163]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BFF163] animate-pluse"></span>
            REVIEWS
          </span>
          <ShinyText
            text="What others say"
            disabled={false}
            speed={3}
            className="text-2xl font-bold tracking-tight sm:text-4xl"
          />
          <p className="text-sm leading-8 text-neutral-400 dark:text-neutral-200">
            I&apos;ve worked with some amazing people over the years, here is
            what they have to say about me.
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
