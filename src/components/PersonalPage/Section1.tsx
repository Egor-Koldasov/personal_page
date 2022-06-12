import styled from 'styled-components';
import { BaseSection } from "./BaseSection";

const theme1 = {
  section1Bg: `#FFCED4`,
  section1Text1: `#0f5198`,
  section1Text2: `#7C459C`,
  section1Text2Bg: `#FFCED4`,
};
const theme2 = {
  ...theme1,
  section1Bg: `#F8C6BF`,
  section1Text1: `#81C9E1`,
  section1Text2: `#fff`,
  section1Text2Bg: `#81C9E1`,
};
const theme3 = {
  ...theme2,
  section1Bg: `#9AC3E3`,
  section1Text1: `#fff`,
  section1Text2: `#fff`,
  section1Text2Bg: `#81C9E1`,
};
const theme4 = {
  ...theme3,
  section1Bg: `#FFF7E0`,
  section1Text1: `#4DB39E`,
  section1Text2: `#fff`,
  section1Text2Bg: `#4DB39E`,
};
const theme5 = {
  ...theme4,
  section1Bg: `#B7E3E2`,
  // section1Text1: `#4DB39E`,
  // section1Text2: `#fff`,
  // section1Text2Bg: `#4DB39E`,
};
const theme = theme5;
const NameTitle = styled.h1`
  color: ${theme.section1Text1};
  text-align: center;
`
const WebDevTitle = styled.h3`
  color: ${theme.section1Text2};
  background-color: ${theme.section1Text2Bg};
  padding: 1rem;
  border: .5rem solid ${theme.section1Text2};
  text-transform: uppercase;
  text-align: center;
`
const StackTitle = styled.h1`
  color: ${theme.section1Text1};
  text-align: center;
`
const Section1Styled = styled(BaseSection)`
  background-color: ${theme.section1Bg};
`;
export const Section1 = () => (
  <Section1Styled className="">
    <NameTitle className="title is-3">Egor Koldasov</NameTitle>
    <WebDevTitle className="title is-2 is-size-1-tablet">Web Developer</WebDevTitle>
    <StackTitle className="title is-4">
      React, NodeJS, SQL, TypeScript
    </StackTitle>
  </Section1Styled>
);
