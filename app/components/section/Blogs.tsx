import FeatureCard from "../ui/card/FeatureCard";
import TargetCursor from "../ui/TargetCursor";
import ShinyText from "../ui/text/ShinyText";

interface FeatureCardProps {
  imageUrl: string;
  caption: string;
}

const features: FeatureCardProps[] = [
  {
    imageUrl: "https://placehold.co/600x400/171717/999999?text=UI+Preview",
    caption: "Run your code against tests and instantly preview your output",
  },
  {
    imageUrl: "https://placehold.co/600x400/171717/999999?text=Workspace",
    caption: "Resize and customize the workspace as you like",
  },
  {
    imageUrl: "https://placehold.co/600x400/171717/999999?text=Keyboard",
    caption: "Syntax highlighting, theming and shortcuts",
  },
];

export default function Blogs() {
  return (
    <div>
      <TargetCursor spinDuration={3} hideDefaultCursor={true} />
      <section className="dark:text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header Section */}
          <div className="text-left mx-auto space-y-0.5">
            <span className="flex items-center gap-1.5 text-[#BFF163]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BFF163] animate-pluse"></span>
              Sharing
            </span>
            <ShinyText
              text="The Concepts"
              disabled={false}
              speed={3}
              className="text-2xl font-bold tracking-tight sm:text-4xl"
            />
            <p className="text-sm leading-8 text-neutral-400 dark:text-neutral-200">
              a blog diary of my tech experience
            </p>
          </div>

          {/* Grid untuk Kartu Fitur */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                imageUrl={feature.imageUrl}
                caption={feature.caption}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
