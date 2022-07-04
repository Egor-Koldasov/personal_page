import Head from "next/head";
import { FullScreenBox } from "./FullScreenBox";
import { SectionEntry } from "./SectionEntry";
import { SectionValues } from './SectionValues';
import { SectionContacts } from "./SectionContacts";
import { SectionPortfolio } from "./SectionPortfolio/SectionPortfolio";
import { PageThemeProvider } from "./Theme/PageThemeProvider";
import { GlobalStyle } from "./GlobalStyle";


export const PersonalPage = () => {
  return (
    <PageThemeProvider>
      <GlobalStyle />
      <FullScreenBox>
        <Head>
          <title>Egor Koldasov. Web Developer. React, Typescript, SQL, Node.</title>
        </Head>
        <SectionEntry />
        <SectionValues />
        <SectionPortfolio />
        <SectionContacts />
      </FullScreenBox>
    </PageThemeProvider>
  );
};
