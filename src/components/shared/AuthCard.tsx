import type { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <div className="w-[380px] space-y-7">
      {children}
    </div>
  );
};

export default AuthCard;