import { createContext, PropsWithChildren, useState } from "react"

export type DarkModeContextValue = {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export const DarkModeContext = createContext<DarkModeContextValue>({
  darkMode: true,
  setDarkMode: () => {},
})

export const DarkModeProvider = (props: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  )
}
