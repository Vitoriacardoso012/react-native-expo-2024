import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, View } from "react-native";

const FontContext = createContext({})

export function fontProvider({children}) {

   const[loaded, error] = useFonts({
    regular: require("../../assets/fontes/Montserrat-Regular.ttf"),
    bol: require("../../assets/fontes/Montserrat-Bold.ttf"),
    black: require("../../assets/fontes/Montserrat-Black.ttf"),
    semibold: require("../../assets/fontes/Montserrat-SemiBold.ttf"),
    light: require("../../assets/fontes/Montserrat-Light.ttf"),
   });

   if (!loaded && !error) {
     return (
      <View> 
         <Text>Carregando as Fontes </Text>
         <ActivityIndicator />
          </View> 
    }
  

return <FontContext.Provider value={{}}>{children}</FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext)
 if (!context) {
    throw new Error("useFont must be used within a fontProvider");
 }
 return context;
}
