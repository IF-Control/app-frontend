import React from 'react';
import { StatusBar } from 'expo-status-bar';

// Tema
import AppLoading from 'expo-app-loading';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components/native';

// Fontes
import { useFonts, EncodeSans_500Medium } from "@expo-google-fonts/encode-sans"
import { MerriweatherSans_300Light } from "@expo-google-fonts/merriweather-sans"
import { Sarabun_400Regular, Sarabun_600SemiBold } from "@expo-google-fonts/sarabun"
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';
import { CheckProvider } from './src/contexts/CheckContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    EncodeSans_500Medium,
    MerriweatherSans_300Light,
    Sarabun_400Regular,
    Sarabun_600SemiBold
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CheckProvider>
          <Routes />
        </CheckProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
