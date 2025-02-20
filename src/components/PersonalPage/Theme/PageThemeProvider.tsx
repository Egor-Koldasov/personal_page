import Image from "next/image"
import { PropsWithChildren, useCallback, useEffect, useState } from "react"
import styled, { css, ThemeProvider } from "styled-components"
import { theme, themeProp } from "./themeProp"
import { Theme, ThemeName, themes } from "./themes"
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
export const ThemeSwitchStyled = styled.div<{ nextThemeName: ThemeName }>`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 30px;
  cursor: pointer;
  color: ${theme((t) => t.basic.textColor)};
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  ${({ nextThemeName }) =>
    nextThemeName === "dark"
      ? css`
          .light {
            display: none !important;
          }
        `
      : css`
          .dark {
            display: none !important;
          }
        `}
`
type ThemeSwitchProps = {
  onSwitch: () => void
  nextThemeName: ThemeName
}
const ThemeSwitch = (props: ThemeSwitchProps) => {
  return (
    <ThemeSwitchStyled
      onClick={props.onSwitch}
      nextThemeName={props.nextThemeName}
    >
      <span className="dark">
        <Image
          // layout="fixed"
          width={32}
          height={32}
          src="/icons/sun.png"
          alt=""
          priority
        />
      </span>
      <span className="light">
        <Image
          // layout="fixed"
          width={32}
          height={32}
          src="/icons/moon.png"
          alt=""
          priority
        />
      </span>
      {/* {props.nextTheme} */}
    </ThemeSwitchStyled>
  )
}

export const PageThemeProvider = (props: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(themeDark)
  const [themeLoaded, setThemeLoaded] = useState<boolean>(false)
  const onSwitch = useCallback(() => {
    const setAndSaveTheme = (theme: Theme) => {
      setTheme(theme)
      saveTheme(theme.name)
    }
    if (theme.name === "dark") return setAndSaveTheme(themeLight)
    return setAndSaveTheme(themeDark)
  }, [theme, setTheme])
  useEffect(() => {
    setTheme(themes[loadTheme()])
    setThemeLoaded(true)
  }, [])
  if (!themeLoaded) return null
  return (
    <ThemeProvider theme={theme}>
      <ThemeSwitch onSwitch={onSwitch} nextThemeName={theme.name} />
      {props.children}
    </ThemeProvider>
  )
}
