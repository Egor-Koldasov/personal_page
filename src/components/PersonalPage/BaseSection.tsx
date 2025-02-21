import styled from "styled-components"
import { cn } from "../../lib/cn"
import { theme, themeProp } from "./Theme/themeProp"
import { WrapperProps } from "./WrapperProps"

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  /* border-bottom: 1px solid ${theme((t) => t.basic.sectionDividerColor)}; */
  && {
    padding: 0;
    padding-bottom: 4rem;
  }
`

export const BaseSection = (props: WrapperProps) => {
  return (
    <SectionStyled className={cn(props.className, "section")}>
      {props.children}
    </SectionStyled>
  )
}
