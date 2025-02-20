import styled from "styled-components"
import { cn } from "../../lib/cn"
import { breakpointFrom } from "../../styles/modules/breakpointFrom"
import { bpTablet } from "../../styles/modules/vars"
import { BaseSection } from "./BaseSection"
import { theme, themeProp } from "./Theme/themeProp"
import { WrapperProps } from "./WrapperProps"

const SectionValuesStyled = styled(BaseSection)`
  background-color: ${theme((t) => t.sectionValues.mainBg)};
`
const ListElementStyled = styled.li`
  border: 1px solid ${theme((t) => t.sectionValues.borderColor)};
  color: ${theme((t) => t.sectionValues.textColor)};
  background-color: transparent;
  /* font-weight: bold; */
  /* font-size: 1.5rem; */
  line-height: 1.5rem;
  .card-content {
    padding: 1rem;
  }
  ${breakpointFrom(bpTablet)} {
    font-size: 1rem;
    line-height: 1rem;
  }
  box-shadow: none;
`
export const ListStyled = styled.ul`
  background-color: ${theme((t) => t.sectionValues.cardBg)};
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  width: 30rem;
  max-width: 100%;
  box-shadow: none;
  ${breakpointFrom(bpTablet)} {
    padding: 32px;
    gap: 16px;
  }
`
const Title = styled.h3`
  text-align: center;
  /* color: ${theme((t) => t.sectionValues.titleTextColor)}; */
  /* text-transform: uppercase; */
  font-size: 1.5rem;
  && {
    font-weight: bold;
  }
`
const ListElement = (props: WrapperProps) => (
  <ListElementStyled className={cn(props.className, "")}>
    <div className="content">• {props.children}</div>
  </ListElementStyled>
)

const Accent1 = styled.span`
  color: ${theme((t) => t.sectionValues.accentTextColor1)};
`
const Accent2 = styled.span`
  color: ${theme((t) => t.sectionValues.accentTextColor2)};
`
const Accent3 = styled.span`
  color: ${theme((t) => t.sectionValues.accentTextColor3)};
`
const Accent4 = styled.span`
  color: ${theme((t) => t.sectionValues.accentTextColor4)};
`
const Accent5 = styled.span`
  font-style: bold;
  color: ${theme((t) => t.sectionValues.accentTextColor5)};
`
const Accent6 = styled.span`
  color: ${theme((t) => t.sectionValues.accentTextColor6)};
`

export const SectionValues = () => (
  <SectionValuesStyled className="">
    <Title className="title">Professional summary</Title>
    <ListStyled className="has-text-light card">
      <ListElement>
        <Accent1>Product-Oriented Full-Stack Developer</Accent1> experienced in
        small, fast-paced startup teams.
      </ListElement>
      <ListElement>
        Proven <Accent2>10+ years</Accent2> in contractor-based roles,
        delivering <Accent2>end-to-end solutions</Accent2> including
        architecture, back-end and front-end.
      </ListElement>
      <ListElement>
        Skilled at <Accent3>rapid iteration</Accent3>, adapting to minimal
        oversight while aligning on core product goals.
      </ListElement>
      <ListElement>
        <Accent4>Proactive communicator:</Accent4> raise concerns, share
        technical insights, and mentor peers.
      </ListElement>
      <ListElement>
        <Accent5>Unstoppable experimenter</Accent5> who consistently overcomes
        technical challenges.
      </ListElement>
      <ListElement>
        Open to <Accent6>formal leadership opportunities</Accent6>; adept at
        balancing team collaboration with hands-on coding.
      </ListElement>
    </ListStyled>
  </SectionValuesStyled>
)
