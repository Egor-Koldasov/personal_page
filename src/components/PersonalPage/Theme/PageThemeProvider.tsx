import { PropsWithChildren, useContext, useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { DarkModeContext } from "./DarkModeContext"
import { ThemeName } from "./themes"
import { themeDark } from "./themes/dark"
import { themeLight } from "./themes/light"

const themeKey = "theme" as const
const defaultTheme = "dark"
const loadTheme = (): ThemeName => {
  if (typeof window === "object") {
    const theme = window.localStorage.getItem(themeKey)
    return (theme || defaultTheme) as ThemeName
  }
  return defaultTheme
}
const saveTheme = (name: ThemeName) => {
  if (typeof window === "object") {
    window.localStorage.setItem(themeKey, name)
  }
}

export const PageThemeProvider = (props: PropsWithChildren) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const [themeLoaded, setThemeLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (!themeLoaded) return
    saveTheme(darkMode ? "dark" : "light")
  }, [darkMode, themeLoaded])

  useEffect(() => {
    const themeName = loadTheme()
    setDarkMode(themeName === "dark")
    setThemeLoaded(true)
  }, [setDarkMode])

  if (!themeLoaded) return null
  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      {props.children}
    </ThemeProvider>
  )
}
