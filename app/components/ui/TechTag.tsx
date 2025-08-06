import { FC } from "react";

const TechTag: FC<{ label: string }> = ({ label }) => (
  <div className="rounded-full bg-neutral-800 border border-neutral-700 px-4 py-1.5 text-sm text-neutral-300">
    {label}
  </div>
);

export default TechTag