import Head from "next/head";
import { FullScreenBox } from "./FullScreenBox";
import { Section1 } from "./Section1";
import { Section2 } from './Section2';
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";


export const PersonalPage = () => {
  return (
    <FullScreenBox>
      <Head>
        <title>Egor Koldasov. Web Developer. React, Typescript, SQL, Node.</title>
      </Head>
      <Section1 />
      <Section2 />
      <Section4 />
      <Section3 />
    </FullScreenBox>
  );
};
