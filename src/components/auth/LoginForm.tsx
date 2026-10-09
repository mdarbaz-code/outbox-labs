import { useForm } from "react-hook-form";
import { AppButton } from "@/components/shared/AppButton";
import { AppInput } from "@/components/shared/AppInput";
import { Divider } from "@/components/shared/design-system/Divider";
import { GoogleButton } from "@/components/shared/design-system/GoogleButton";
import { cn } from "@/lib/cn";

interface LoginFormValues {
  email: string;
  password: string;
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    mode: "onTouched",
  });

  const onSubmit = (values: LoginFormValues) => {
    console.info("Login form submitted", values);
  };

  return (
    <div className="space-y-4">
      <GoogleButton />
      <Divider label="or sign up through email" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <AppInput
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Email ID"
          className={cn(
            "h-[56px] rounded-[10px]",
            errors.email && "border-red-500",
          )}
          {...register("email", { required: "Email is required" })}
        />

        <AppInput
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          className={cn(
            "h-[56px] rounded-[10px]",
            errors.password && "border-red-500",
          )}
          {...register("password", { required: "Password is required" })}
        />

        <AppButton
          type="submit"
          loading={isSubmitting}
          className="h-[56px] rounded-[12px] text-base"
        >
          Login
        </AppButton>
      </form>
    </div>
  );
}
