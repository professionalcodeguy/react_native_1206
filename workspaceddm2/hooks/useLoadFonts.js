import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { Montserrat_300Light, Montserrat_400Regular,  Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
        'Montserrat_Light': Montserrat_300Light,
        'Montserrat_Regular':  Montserrat_400Regular,   
        'Montserrat_Bold':  Montserrat_700Bold
      });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return { fontsLoaded, onLayoutRootView };
}

export default useLoadFonts;