import type { FC, ReactNode } from "react";
import ClickSpark from "../ui/ClickSpark";

interface LayoutProps {
  children: ReactNode;
  className?: string
}

export const PageLayout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <main className={`flex flex-col flex-grow min-h-screen ${className}`}>
      <ClickSpark>
        {children}
      </ClickSpark>
    </main>
  );
};
