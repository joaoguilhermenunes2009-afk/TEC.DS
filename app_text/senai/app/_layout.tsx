import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home'}} />
        <Stack.Screen name="sobre" options={{ title: 'Informaçoes sobre o App' }} />
        <Stack.Screen name= "tipo" options={{ title: 'SENAI'}} />
      </Stack>
  );
}
