import Head from "next/head"
import { FullScreenBox } from "./FullScreenBox"
import { GlobalStyle } from "./GlobalStyle"
import { SectionContacts } from "./SectionContacts"
import { SectionEntry } from "./SectionEntry"
import { SectionPortfolio } from "./SectionPortfolio/SectionPortfolio"
import { SectionValues } from "./SectionValues"
import { DarkModeProvider } from "./Theme/DarkModeContext"
import { PageThemeProvider } from "./Theme/PageThemeProvider"
import { Navigation } from "./Navigation"

export const PersonalPage = () => {
  return (
    <DarkModeProvider>
      <PageThemeProvider>
        <GlobalStyle />
        <FullScreenBox id="full-screen-box">
          <Navigation />
          <Head>
            <title>Egor Koldasov | Web Developer | React, TypeScript, Go</title>
          </Head>
          <SectionEntry />
          <SectionValues />
          <SectionPortfolio />
          <SectionContacts />
        </FullScreenBox>
      </PageThemeProvider>
    </DarkModeProvider>
  )
}
