import Head from "next/head";
import { FullScreenBox } from "./FullScreenBox";
import { Section1 } from "./Section1";
import { SectionValues } from './SectionValues';
import { Section3 } from "./Section3";
import { SectionPortfolio } from "./Portfolio/SectionPortfolio";


export const PersonalPage = () => {
  return (
    <FullScreenBox>
      <Head>
        <title>Egor Koldasov. Web Developer. React, Typescript, SQL, Node.</title>
      </Head>
      <Section1 />
      <SectionValues />
      <SectionPortfolio />
      <Section3 />
    </FullScreenBox>
  );
};
