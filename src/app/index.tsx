import { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { DescriptionHeader, DescriptionText, H1, H2, H3, HelperText } from 'shared/ui/Text';


export function App() {
    const [fontsLoaded] = useFonts({
      'MetropolisBold': require('./assets/fonts/Metropolis-Bold.otf'),
      'MetropolisMedium': require('./assets/fonts/Metropolis-Medium.otf'),
      'MetropolisRegular': require('./assets/fonts/Metropolis-Regular.otf'),
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
      <View style={styles.container} onLayout={onLayoutRootView}>
        <H1>Header1</H1>
        <H2>Header2</H2>
        <H3>Header3</H3>
        <DescriptionHeader>Description header</DescriptionHeader>
        <DescriptionText>Description text</DescriptionText>
        <HelperText>Helper text</HelperText>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  