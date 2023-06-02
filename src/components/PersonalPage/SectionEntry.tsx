import styled from "styled-components"
import { breakpointFrom } from "../../styles/modules/breakpointFrom"
import {
  bgBlack,
  textCyan,
  textGreen,
  textYellow,
} from "../../styles/modules/colors"
import { bpTablet } from "../../styles/modules/vars"
import { BaseSection } from "./BaseSection"
import { theme, themeProp } from "./Theme/themeProp"

const theme1 = {
  section1Bg: `#FFCED4`,
  section1Text1: `#0f5198`,
  section1Text2: `#7C459C`,
  section1Text2Bg: `#FFCED4`,
}
const theme2 = {
  ...theme1,
  section1Bg: `#F8C6BF`,
  section1Text1: `#81C9E1`,
  section1Text2: `#fff`,
  section1Text2Bg: `#81C9E1`,
}
const theme3 = {
  ...theme2,
  section1Bg: `#9AC3E3`,
  section1Text1: `#fff`,
  section1Text2: `#fff`,
  section1Text2Bg: `#81C9E1`,
}
const theme4 = {
  ...theme3,
  section1Bg: `#FFF7E0`,
  section1Text1: `rgb(107 217 104 / 1)`,
  section1Text2: `#fff`,
  section1Text2Bg: `rgb(107 217 104 / 1)`,
}
const theme5 = {
  ...theme4,
  section1Bg: `rgb(18 18 18 / 1)`,
  // section1Text1: `#4DB39E`,
  // section1Text2: `#fff`,
  // section1Text2Bg: `#4DB39E`,
}
const theme6Dark = {
  mainBg: bgBlack,
  nameTextColor: textCyan,
  webDevTitleColor: textGreen,
  webDevTitleBg: bgBlack,
  webDevBorderColor: "#fff",
  stackColor: textYellow,
}
const theme7Light = {
  mainBg: "#fff",
  nameTextColor: textCyan,
  webDevTitleColor: textGreen,
  webDevTitleBg: "#fff",
  webDevBorderColor: "#000",
  stackColor: textYellow,
}
// const theme = theme7Light;
const NameTitle = styled.h1`
  color: ${theme((t) => t.sectionEntry.nameTextColor)};
  text-align: center;
  font-size: 2.3rem;
  line-height: 2rem;
  font-weight: bold;
`
const WebDevTitle = styled.h3`
  color: ${theme((t) => t.sectionEntry.webDevTitleColor)};
  font-size: 2.3rem;
  line-height: 2rem;
  background-color: ${theme((t) => t.sectionEntry.webDevTitleBg)};
  padding: 1rem;
  border: 0.4rem solid ${theme((t) => t.sectionEntry.webDevBorderColor)};
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;

  ${breakpointFrom(bpTablet)} {
    padding: 1rem;
  }
`
const StackTitle = styled.h1`
  color: ${theme((t) => t.sectionEntry.stackColor)};
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`
const Section1Styled = styled(BaseSection)`
  background-color: ${theme((t) => t.sectionEntry.mainBg)};
`
export const SectionEntry = () => (
  <Section1Styled className="">
    <NameTitle className="title">Egor Koldasov</NameTitle>
    <WebDevTitle className="title">Web Developer</WebDevTitle>
    <StackTitle className="title">React, NodeJS, SQL, TypeScript</StackTitle>
  </Section1Styled>
)
