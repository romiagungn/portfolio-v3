import ReviewCard from "../ui/card/ReviewCard";
import ShinyText from "../ui/text/ShinyText";

const reviews = [
  {
    id: 1,
    companyLogoUrl: "https://placehold.co/40x40/F87171/FFFFFF?text=M",
    companyName: "Mastercard",
    date: "Sep 2023",
    reviewText:
      "GreatFrontEnd has been a great help to me for prepping front end focussed interviews. Lot of focus on JavaScript utility and React/Vanilla implementations. The system design questions asked in interviews are slightly different in front end interviews and GreatFrontEnd really shines here. I will continue to use this amazing platform!",
    user: {
      avatarUrl: "https://placehold.co/48x48/cccccc/1f2937?text=AD",
      name: "Anand Dharne",
      title: "Senior Software Engineer",
      location: "Boston, US",
      linkedinUrl: "#",
    },
  },
  {
    id: 2,
    companyLogoUrl: "https://placehold.co/40x40/34D399/FFFFFF?text=G",
    companyName: "Google",
    date: "Apr 2023",
    reviewText:
      "The quizzes were like little lightbulb moments, illuminating crucial concepts I didn't even realize I was missing. This isn't just a 'nice-to-have'—it's a seriously important part of interview prep.",
    user: {
      avatarUrl: "https://placehold.co/48x48/A78BFA/FFFFFF?text=AK",
      name: "Anubhav Khanna",
      title: "Software Engineer",
      location: "Bengaluru, IN",
      linkedinUrl: "#",
    },
  },
  {
    id: 3,
    companyLogoUrl: "https://placehold.co/40x40/60A5FA/FFFFFF?text=S",
    companyName: "Snap",
    date: "Feb 2023",
    reviewText:
      "This was the first time I gave full stack/front-end interviews. Coming from Web3, working at front-end for 6 years, I still felt that I had a lot of loopholes in basics of JavaScript, HTML... The questions on GFE cover almost everything that might ever be asked in front-end interviews for companies including startups and FAANG.",
    user: {
      avatarUrl: "https://placehold.co/48x48/F472B6/FFFFFF?text=RD",
      name: "Ravali Davande",
      title: "Software Engineer",
      location: "Los Angeles, US",
      linkedinUrl: "#",
    },
  },
  {
    id: 4,
    companyLogoUrl: "https://placehold.co/40x40/FBBF24/FFFFFF?text=A",
    companyName: "Amazon",
    date: "Jan 2023",
    reviewText:
      "The practice problems are spot on and mimic real interview questions. The explanations are clear and concise, making it easy to understand even the toughest concepts.",
    user: {
      avatarUrl: "https://placehold.co/48x48/34D399/FFFFFF?text=JS",
      name: "Jessica Smith",
      title: "Frontend Developer",
      location: "Seattle, US",
      linkedinUrl: "#",
    },
  },
  {
    id: 5,
    companyLogoUrl: "https://placehold.co/40x40/6366F1/FFFFFF?text=F",
    companyName: "Facebook",
    date: "Dec 2022",
    reviewText:
      "I landed my dream job thanks to the structured learning path and mock interviews. Highly recommended for anyone serious about frontend interviews.",
    user: {
      avatarUrl: "https://placehold.co/48x48/F87171/FFFFFF?text=MT",
      name: "Michael Tan",
      title: "UI Engineer",
      location: "Singapore",
      linkedinUrl: "#",
    },
  },
  {
    id: 6,
    companyLogoUrl: "https://placehold.co/40x40/10B981/FFFFFF?text=N",
    companyName: "Netflix",
    date: "Nov 2022",
    reviewText:
      "The coding challenges are well curated and the feedback is invaluable. I felt much more confident going into my interviews.",
    user: {
      avatarUrl: "https://placehold.co/48x48/60A5FA/FFFFFF?text=LS",
      name: "Liam Scott",
      title: "Software Engineer II",
      location: "London, UK",
      linkedinUrl: "#",
    },
  },
  {
    id: 7,
    companyLogoUrl: "https://placehold.co/40x40/EF4444/FFFFFF?text=A",
    companyName: "Airbnb",
    date: "Oct 2022",
    reviewText:
      "GreatFrontEnd's system design section is a game changer. It helped me understand how to approach open-ended problems in interviews.",
    user: {
      avatarUrl: "https://placehold.co/48x48/FBBF24/FFFFFF?text=EC",
      name: "Emily Chen",
      title: "Frontend Engineer",
      location: "San Francisco, US",
      linkedinUrl: "#",
    },
  },
  {
    id: 8,
    companyLogoUrl: "https://placehold.co/40x40/3B82F6/FFFFFF?text=M",
    companyName: "Microsoft",
    date: "Sep 2022",
    reviewText:
      "The community support and peer reviews made a huge difference in my preparation. I could see my progress week by week.",
    user: {
      avatarUrl: "https://placehold.co/48x48/6366F1/FFFFFF?text=RA",
      name: "Rohan Agarwal",
      title: "Software Developer",
      location: "Hyderabad, IN",
      linkedinUrl: "#",
    },
  },
  {
    id: 9,
    companyLogoUrl: "https://placehold.co/40x40/8B5CF6/FFFFFF?text=U",
    companyName: "Uber",
    date: "Aug 2022",
    reviewText:
      "I appreciated the real-world scenarios and the focus on practical skills. The platform is intuitive and easy to use.",
    user: {
      avatarUrl: "https://placehold.co/48x48/10B981/FFFFFF?text=SK",
      name: "Sara Kim",
      title: "Frontend Engineer",
      location: "Seoul, KR",
      linkedinUrl: "#",
    },
  },
  {
    id: 10,
    companyLogoUrl: "https://placehold.co/40x40/F472B6/FFFFFF?text=T",
    companyName: "Tesla",
    date: "Jul 2022",
    reviewText:
      "The bite-sized lessons fit perfectly into my busy schedule. I could practice anytime, anywhere, and track my improvement.",
    user: {
      avatarUrl: "https://placehold.co/48x48/EF4444/FFFFFF?text=JP",
      name: "Julia Perez",
      title: "Web Developer",
      location: "Madrid, ES",
      linkedinUrl: "#",
    },
  },
  {
    id: 11,
    companyLogoUrl: "https://placehold.co/40x40/22D3EE/FFFFFF?text=P",
    companyName: "PayPal",
    date: "Jun 2022",
    reviewText:
      "The interview tips and resume reviews were extremely helpful. I felt well prepared and confident during my interviews.",
    user: {
      avatarUrl: "https://placehold.co/48x48/3B82F6/FFFFFF?text=AB",
      name: "Amit Bansal",
      title: "Frontend Engineer",
      location: "New Delhi, IN",
      linkedinUrl: "#",
    },
  },
];

// --- Komponen Grid Ulasan ---
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
            I&apos;ve worked with some amazing people over the years, here is what they have to say about me.
          </p>
        </div>
        {/* Menggunakan 'columns' untuk membuat layout masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
