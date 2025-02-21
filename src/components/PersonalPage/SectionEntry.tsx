import styled, { keyframes } from "styled-components"
import { useFullScreenBoxScroll } from "../../lib/useOnFullScreenBoxScroll"
import { breakpointFrom } from "../../styles/modules/breakpointFrom"
import {
  bgBlack,
  textCyan,
  textGreen,
  textYellow,
} from "../../styles/modules/colors"
import { bpTablet } from "../../styles/modules/vars"
import { BaseSection } from "./BaseSection"
import { BaseSectionContent } from "./BaseSectionContent"
import { theme } from "./Theme/themeProp"

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
const borderAngleRotate = keyframes`
  0% { --border-angle: 0deg; }
  100% { --border-angle: 360deg; }
`
// const theme = theme7Light;
const NameTitle = styled.h1`
  color: ${theme((t) => t.sectionEntry.nameTextColor)};
  text-align: center;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
`
const WebDevTitleBorderBox = styled.div`
  background: linear-gradient(white, white) padding-box,
    conic-gradient(
        from var(--border-angle),
        oklch(100% 100% 0deg),
        oklch(100% 100% 45deg),
        oklch(100% 100% 90deg),
        oklch(100% 100% 135deg),
        oklch(100% 100% 180deg),
        oklch(100% 100% 225deg),
        oklch(100% 100% 270deg),
        oklch(100% 100% 315deg),
        oklch(100% 100% 360deg)
      )
      border-box;
  /* border-radius: 12px; */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${borderAngleRotate} 10s infinite linear;
  border: 1px solid transparent;
  position: relative;
  border-radius: 16px;
  overflow: clip;
  color: inherit;
`
const WebDevTitle = styled.h3`
  color: ${theme((t) => t.sectionEntry.webDevTitleColor)};
  font-size: 2.3rem;
  line-height: 2.5rem;
  background-color: ${theme((t) => t.sectionEntry.webDevTitleBg)};
  padding: 1rem;
  /* border: 0.4rem solid ${theme((t) => t.sectionEntry.webDevBorderColor)}; */
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
const sectionEntryKeyframe = keyframes`
  30% {
    background-color: #afafa9;
  }
`
const Section1Styled = styled(BaseSection)`
  background-color: ${theme((t) => t.sectionEntry.mainBg)};
  /* animation: 3s ${sectionEntryKeyframe}; */
  overflow: clip;
  position: relative;
  min-height: 100%;
`

const EntryBgImage = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0.2;

  background-image: url("/backgrounds/editor_${theme((t) => t.name)}.png");
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  will-change: transform;
  transition: transform 0.1s linear;
  width: 100%;
  height: 100%;
`

const ParalaxContainer = styled.div`
  background: transparent;
  position: relative;
  z-index: 1;
`

export const SectionEntry = () => {
  const { scrollTop } = useFullScreenBoxScroll()

  return (
    <Section1Styled className="">
      <BaseSectionContent>
        <EntryBgImage
          style={{ transform: `translate(-50%, ${scrollTop * 0.5}px)` }}
        />
        <ParalaxContainer>
          <NameTitle className="title">Egor Koldasov</NameTitle>
          <WebDevTitleBorderBox className="title">
            <WebDevTitle>Web Developer</WebDevTitle>
          </WebDevTitleBorderBox>
          <StackTitle className="title">React TypeScript Go</StackTitle>
        </ParalaxContainer>
      </BaseSectionContent>
    </Section1Styled>
  )
}
