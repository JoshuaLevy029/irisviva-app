import '@react-navigation/native'
import React, { Dispatch, SetStateAction } from 'react'

declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.webp'
declare module '*.avif'
declare module '*.gif'
declare module '*.json'
declare module '*.pdf'
declare module '*.mp3'
declare module '*.avi'
declare module '*.mp4'
declare module '*.wasm'
declare module '*.otf'
declare module '*.ttf'

declare module 'react-native-svg-animations'

declare module '@react-navigation/native' {
  interface ColorScheme {
    main: string
    A50: string
    A100: string
    A200: string
    A300: string
    A400: string
    A500: string
    A600: string
    A700: string
    A800: string
    A900: string
    A950: string
  }

  interface Theme {
    dark: boolean
    colors: {
      background: string
      card: string
      border: string
      notification: string
      primary: string
      text: string
      main: ColorScheme
      secondary: ColorScheme
      gray: ColorScheme
      grayLight: ColorScheme
      success: ColorScheme
      error: ColorScheme
      warning: ColorScheme
      typography: {
        primary: string
        secondary: string
        disabled: string
      }
    }
    typography: {
      fontWeight: {
        Regular: number
        Light: number
        Medium: number
        Bold: number
      }
      fontSize: number
    }
  }

  export const DarkTheme: Theme
  export const DefaultTheme: Theme
  export const ThemeProvider: (props: {
    value: Theme
    children: React.ReactNode
  }) => React.JSX.Element
  export const NavigationContainer: NavigationContainer
}

export type useStateType<T = any> = Dispatch<SetStateAction<T>>

type RuleOfThreeProps = {
    x1?: number
    x2?: number
    y1?: number
    y2?: number
}