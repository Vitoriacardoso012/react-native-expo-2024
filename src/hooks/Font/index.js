import {useFonts} from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator } from "react-native";

const FontContext = createContext({});


export function FontProvider({ children }) {
    const [fontsLoaded, error] = useFonts({
        regular: require("../../assets/fontes/Montserrat-Regular.ttf"),
        bold: require("../../assets/fontes/Montserrat-Bold.ttf"),
        semibold: require("../../assets/fontes/Montserrat-SemiBold.ttf"),
        light: require("../../assets/fontes/Montserrat-Light.ttf"),
    });

    if (!fontsLoaded && !error) {
        return <ActivityIndicator />;
    }

    return (
        <FontContext.Provider value={{}}>
            {children}
        </FontContext.Provider>
    );
}

export function useFont() {
    const context = useContext(FontContext);
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}