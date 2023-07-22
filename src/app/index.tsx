import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Routing } from '../pages';


export function App() {
    const [fontsLoaded] = useFonts({
      'MetropolisBold': require('../../assets/fonts/Metropolis-Bold.otf'),
      'MetropolisMedium': require('../../assets/fonts/Metropolis-Medium.otf'),
      'MetropolisRegular': require('../../assets/fonts/Metropolis-Regular.otf'),
    });
  
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
    }
  
    return (
        <Routing/>    
    );
  }
  