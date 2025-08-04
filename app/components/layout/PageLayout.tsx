import type { FC, ReactNode } from "react";
import ClickSpark from "../ui/ClickSpark";

interface LayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col flex-grow min-h-screen">
      <ClickSpark>
        {children}
      </ClickSpark>
    </div>
  );
};
