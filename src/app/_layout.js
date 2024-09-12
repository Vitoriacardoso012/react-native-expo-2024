import { Stack, useSegments, router } from "expo-router"
import { AppProvider } from "../hooks"
import { useEffect } from "react";
import { ScreenStackHeaderLeftView } from "react-native-screens";
import { useAuth } from "../hooks/Auth";


const StackLayout = () => {
      const { user } = useAuth();
      const segments = useSegments();

      useEffect(() => {
            const inAuthGroup = segments[0] === "(protected)";

            if (!user?.autenticated && inAuthGroup) {
                  router.replace("/")
            } else {
                  if (!user?.autenticated) {
                        router.replace("/(protected")
                  }
            }
      }, [user]);
      return (
            <Stack>
                  <Stack.Screen name="index" options={{headerShow: false}}/>
                  <Stack.Screen name="(protected)" options={{headerShow: false}}/>

            </Stack>)
}
export default function Layout() {

      return <AppProvider>
            <StackLayout />
      </AppProvider>
}