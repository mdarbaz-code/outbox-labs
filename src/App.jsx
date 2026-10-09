import { jsx as _jsx } from "react/jsx-runtime";
import { AppProviders } from "@/app/providers";
import { AppRouter } from "@/app/router";
function App() {
    return (_jsx(AppProviders, { children: _jsx(AppRouter, {}) }));
}
export default App;
