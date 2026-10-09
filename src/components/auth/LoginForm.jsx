import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { AppButton } from "@/components/shared/AppButton";
import { AppInput } from "@/components/shared/AppInput";
import { Divider } from "@/components/shared/design-system/Divider";
import { GoogleButton } from "@/components/shared/design-system/GoogleButton";
import { cn } from "@/lib/cn";
export function LoginForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm({
        mode: "onTouched",
    });
    const onSubmit = (values) => {
        console.info("Login form submitted", values);
    };
    return (_jsxs("div", { className: "space-y-4", children: [_jsx(GoogleButton, {}), _jsx(Divider, { label: "or sign up through email" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", noValidate: true, children: [_jsx(AppInput, { id: "email", type: "email", autoComplete: "email", placeholder: "Email ID", className: cn("h-[56px] rounded-[10px]", errors.email && "border-red-500"), ...register("email", { required: "Email is required" }) }), _jsx(AppInput, { id: "password", type: "password", autoComplete: "current-password", placeholder: "Password", className: cn("h-[56px] rounded-[10px]", errors.password && "border-red-500"), ...register("password", { required: "Password is required" }) }), _jsx(AppButton, { type: "submit", loading: isSubmitting, className: "h-[56px] rounded-[12px] text-base", children: "Login" })] })] }));
}
