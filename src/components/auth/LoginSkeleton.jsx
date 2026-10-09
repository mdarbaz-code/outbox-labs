import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageContainer } from "@/components/shared/design-system/PageContainer";
import { Spinner } from "@/components/shared/design-system/Spinner";
export function LoginSkeleton() {
    return (_jsx(PageContainer, { className: "flex min-h-screen items-center justify-center", children: _jsxs("div", { className: "w-full max-w-[380px] rounded-[24px] border border-[#E5E7EB] bg-white p-8 shadow-sm", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "h-6 w-24 rounded bg-[#F4F7F5]" }), _jsx("div", { className: "h-4 w-40 rounded bg-[#F4F7F5]" }), _jsx("div", { className: "h-[56px] rounded-[10px] bg-[#F4F7F5]" }), _jsx("div", { className: "h-[56px] rounded-[10px] bg-[#F4F7F5]" }), _jsx("div", { className: "h-[48px] rounded-[12px] bg-[#F4F7F5]" })] }), _jsx("div", { className: "mt-6 flex justify-center", children: _jsx(Spinner, { label: "Preparing sign-in" }) })] }) }));
}
