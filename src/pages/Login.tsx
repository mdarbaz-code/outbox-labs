import { useEffect, useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { LoginSkeleton } from "@/components/auth/LoginSkeleton";
import { PageContainer } from "@/components/shared/design-system/PageContainer";

export function LoginPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 400);
    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoginSkeleton />;
  }

  return (
    <PageContainer className="flex min-h-screen items-center justify-center bg-white">
      <section
        aria-labelledby="login-heading"
        className="w-full max-w-[420px] rounded-[20px] border border-[#E5E7EB] bg-white p-8"
      >
        <h1
          id="login-heading"
          className="mb-6 text-center text-4xl font-bold text-[#111827]"
        >
          Login
        </h1>
        <LoginForm />
      </section>
    </PageContainer>
  );
}
