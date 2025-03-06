import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const NavSection = ({ children }: Props) => (
  <div className="flex flex-col gap-0.5 p-4 bg-gray-800 grow overflow-y-auto">
    {children}
  </div>
);