import { useEffect, useState } from "react";
import { EmailDetailsHeader } from "@/features/email/components/EmailDetailsHeader";
import { EmailDetailsSkeleton } from "@/features/email/components/EmailDetailsSkeleton";
import { emailDetailSeed } from "@/features/email/data";

export function EmailDetailsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 350);
    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <EmailDetailsSkeleton />;
  }

  return (
    <div className="flex flex-col bg-white">
      <EmailDetailsHeader email={emailDetailSeed} />
    </div>
  );
}
