import { Children } from "react";
import { FontProvider } from "./Font";
import { AuthProvider } from "./Auth";

export function AppProvider({ children }) {
    return 
    <FontProvider>
        <AuthProvider>{children}</AuthProvider>
    </FontProvider>;
}