import { Link } from "@remix-run/react";
import { FC } from "react";

interface ReviewCardProps {
  reviewText: string;
  user: {
    avatarUrl: string;
    name: string;
    title: string;
    location: string;
    linkedinUrl: string;
  };
}

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25ZM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66Z"></path>
  </svg>
);


const ReviewCard: FC<ReviewCardProps> = ({
  reviewText,
  user,
}) => {
  return (
    // Menambahkan class untuk layout masonry
    <div className="max-w-md w-full rounded-2xl bg-white dark:bg-neutral-800 p-6 flex flex-col gap-6 dark:text-white font-sans break-inside-avoid mb-6">
      {/* Teks Ulasan */}
      <p className="text-base leading-relaxed dark:text-neutral-300">{reviewText}</p>

      {/* Footer Kartu (Info Pengguna) */}
      <div className="flex items-center gap-4 mt-2">
        <img
          src={user.avatarUrl}
          alt={`Avatar of ${user.name}`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="font-bold dark:text-white">{user.name}</h3>
            <Link
              to={user.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label={`${user.name}'s LinkedIn Profile`}
            >
              <LinkedInIcon />
            </Link>
          </div>
          <p className="text-sm text-neutral-400">
            {user.title}, {user.location}
          </p>
        </div>
      </div>
    </div>
  );
};


export default ReviewCard