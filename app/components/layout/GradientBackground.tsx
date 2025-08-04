import type { FC, ReactNode } from "react";

interface GradienBackgroundProps {
  children: ReactNode;
  className?: string;
}

const GradienBackground: FC<GradienBackgroundProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`relative w-full min-h-screen bg-white dark:bg-neutral-900 p-5 py-40 md:p-40 ${className}`}
    >
      {/* Lapisan Latar Belakang dengan dan Gradien */}
      <div
        className="absolute inset-0 h-full w-full bg-white dark:bg-neutral-900 
                   bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
                   bg-[size:24px_24px] 
                   [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
      />

      {/* Lapisan Gradien Cahaya */}
      <div
        className="absolute inset-0 h-full w-full 
                   bg-[radial-gradient(circle_farthest-side_at_50%_0,rgba(124,58,237,0.15),rgba(255,255,255,0))]"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradienBackground;
