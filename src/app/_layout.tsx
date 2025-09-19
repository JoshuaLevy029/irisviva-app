import { Poppins_100Thin, Poppins_100Thin_Italic, Poppins_200ExtraLight, Poppins_200ExtraLight_Italic, Poppins_300Light, Poppins_300Light_Italic, Poppins_400Regular, Poppins_400Regular_Italic, Poppins_500Medium, Poppins_500Medium_Italic, Poppins_600SemiBold, Poppins_600SemiBold_Italic, Poppins_700Bold, Poppins_700Bold_Italic, Poppins_800ExtraBold, Poppins_800ExtraBold_Italic, Poppins_900Black, Poppins_900Black_Italic } from '@expo-google-fonts/poppins'
import { Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'moment/locale/pt-br'

import { ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack, useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { PaperProvider, Portal } from 'react-native-paper'
import 'react-native-reanimated'

import themeConfig from '@/config/theme.config'
import SessionProvider from '@/context/auth'
import { TranslatorProvider } from '@/context/translator'
import * as NavigationBar from 'expo-navigation-bar'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

if (Platform.OS === 'android') {
  NavigationBar.setVisibilityAsync('hidden')
}

export default function RootLayout() {
  const router = useRouter()
  const [loaded, error] = useFonts({
    'Poppins_100Thin': Poppins_100Thin,
    'Poppins_100Thin_Italic': Poppins_100Thin_Italic,
    'Poppins_200ExtraLight': Poppins_200ExtraLight,
    'Poppins_200ExtraLight_Italic': Poppins_200ExtraLight_Italic,
    'Poppins_300Light': Poppins_300Light,
    'Poppins_300Light_Italic': Poppins_300Light_Italic,
    'Poppins_400Regular': Poppins_400Regular,
    'Poppins_400Regular_Italic': Poppins_400Regular_Italic,
    'Poppins_500Medium': Poppins_500Medium,
    'Poppins_500Medium_Italic': Poppins_500Medium_Italic,
    'Poppins_600SemiBold': Poppins_600SemiBold,
    'Poppins_600SemiBold_Italic': Poppins_600SemiBold_Italic,
    'Poppins_700Bold': Poppins_700Bold,
    'Poppins_700Bold_Italic': Poppins_700Bold_Italic,
    'Poppins_800ExtraBold': Poppins_800ExtraBold,
    'Poppins_800ExtraBold_Italic': Poppins_800ExtraBold_Italic,
    'Poppins_900Black': Poppins_900Black,
    'Poppins_900Black_Italic': Poppins_900Black_Italic,
    'Quicksand_300Light': Quicksand_300Light,
    'Quicksand_400Regular': Quicksand_400Regular,
    'Quicksand_500Medium': Quicksand_500Medium,
    'Quicksand_600SemiBold': Quicksand_600SemiBold,
    'Quicksand_700Bold': Quicksand_700Bold
  })

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SessionProvider>
          <TranslatorProvider>
            <ThemeProvider value={themeConfig}>
              <PaperProvider theme={{
                "colors": {
                  "primary": "#052540",
                  "onPrimary": "#052540",
                  "primaryContainer": "#052540",
                  "onPrimaryContainer": "#052540",
                  "secondary": "#0f243b",
                  "onSecondary": "#0f243b",
                  "secondaryContainer": "#0f243b",
                  "onSecondaryContainer": "#0f243b",
                  "tertiary": "#052540",
                  "onTertiary": "#052540",
                  "tertiaryContainer": "#052540",
                  "onTertiaryContainer": "#052540",
                  "error": "rgb(255, 179, 175)",
                  "onError": "rgb(104, 0, 13)",
                  "errorContainer": "rgb(146, 3, 23)",
                  "onErrorContainer": "rgb(255, 218, 215)",
                  "background": "rgb(161, 201, 255)",
                  "onBackground": "rgb(0, 49, 91)",
                  "surface": "rgb(25, 28, 27)",
                  "onSurface": "rgb(224, 227, 225)",
                  "surfaceVariant": "rgb(63, 73, 71)",
                  "onSurfaceVariant": "rgb(190, 201, 198)",
                  "outline": "rgb(137, 147, 144)",
                  "outlineVariant": "rgb(63, 73, 71)",
                  "shadow": "rgb(0, 0, 0)",
                  "scrim": "rgb(0, 0, 0)",
                  "inverseSurface": "rgb(224, 227, 225)",
                  "inverseOnSurface": "rgb(45, 49, 48)",
                  "inversePrimary": "#052540",
                  "elevation": {
                    "level0": "transparent",
                    "level1": "rgb(28, 38, 36)",
                    "level2": "rgb(30, 43, 41)",
                    "level3": "rgb(31, 49, 46)",
                    "level4": "rgb(32, 51, 48)",
                    "level5": "rgb(33, 55, 52)"
                  },
                  "surfaceDisabled": "rgba(224, 227, 225, 0.12)",
                  "onSurfaceDisabled": "rgba(224, 227, 225, 0.38)",
                  "backdrop": "rgba(41, 50, 48, 0.4)",
                  "success": "rgb(96, 225, 73)",
                  "onSuccess": "rgb(3, 57, 0)",
                  "successContainer": "rgb(6, 83, 0)",
                  "onSuccessContainer": "rgb(125, 254, 99)",
                  "warning": "rgb(251, 188, 62)",
                  "onWarning": "rgb(66, 44, 0)",
                  "warningContainer": "rgb(95, 65, 0)",
                  "onWarningContainer": "rgb(255, 222, 169)",
                  "info": "rgb(185, 195, 255)",
                  "onInfo": "rgb(0, 35, 136)",
                  "infoContainer": "rgb(0, 53, 190)",
                  "onInfoContainer": "rgb(221, 225, 255)",
                  "gray": "rgb(178, 197, 255)",
                  "onGray": "rgb(0, 43, 116)",
                  "grayContainer": "rgb(32, 66, 143)",
                  "onGrayContainer": "rgb(218, 226, 255)",
                  "grayLight": "rgb(175, 198, 255)",
                  "onGrayLight": "rgb(0, 45, 109)",
                  "grayLightContainer": "rgb(23, 67, 143)",
                  "onGrayLightContainer": "rgb(217, 226, 255)",
                  "backgroundContainer": "rgb(0, 72, 128)",
                  "onBackgroundContainer": "rgb(211, 228, 255)"
                } as any
              }}>
                <Portal.Host>
                  <Stack
                    screenOptions={{ headerShown: false }}
                    initialRouteName='(tabs)'
                  >
                    <Stack.Screen
                      name='(tabs)'
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name='(plans)'
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name='(admin)'
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name='(analysis)'
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name='(signin)'
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name='(signup)'
                      options={{ headerShown: false }}
                    />
                  </Stack>
                </Portal.Host>
              </PaperProvider>
            </ThemeProvider>
          </TranslatorProvider>
        </SessionProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}