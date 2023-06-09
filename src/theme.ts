// theme.ts

// 1. import `extendTheme` function
import { extendTheme, useColorMode, type ThemeConfig } from '@chakra-ui/react'


// 2. Add your color mode config


const config: ThemeConfig = {
useSystemColorMode: false,
  initialColorMode: 'dark',
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme