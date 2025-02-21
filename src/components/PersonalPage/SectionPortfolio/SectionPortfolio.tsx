import { useState } from "react"
import styled from "styled-components"
import { cn } from "../../../lib/cn"
import { BaseSection } from "../BaseSection"
import { theme } from "../Theme/themeProp"
import { CardBox } from "./CardBox"
import { portfolioItems } from "./portfolio"
import { BaseSectionTitle } from "../BaseSectionTitle"
import { BaseSectionContent } from "../BaseSectionContent"

const SectionPortfolioStyled = styled(BaseSection)`
  background-color: ${theme((t) => t.sectionPortfolio.mainBg)};
  /* height: 100%; */
  min-height: 700px;
`

const Title = styled(BaseSectionTitle)``

const ListStyled = styled.ul`
  display: flex;
  /* flex-direction: column; */
  gap: 1rem;
  width: 100%;
  position: relative;
  flex-grow: 1;
  /* flex-shrink: 1;
  overflow-y: auto; */
  justify-content: center;
  align-items: center;
  align-content: center;

  flex-wrap: wrap;
  &.expand {
    flex-grow: 1;
  }
`

export const SectionPortfolio = () => {
  const [activeItem, setActiveItem] = useState<string>("")
  return (
    <SectionPortfolioStyled>
      <Title id="experience">Experience</Title>
      <BaseSectionContent>
        <ListStyled className={cn({ expand: !!activeItem })}>
          {portfolioItems.map((portfolioItem) => (
            <CardBox
              key={portfolioItem.projectName}
              {...{ portfolioItem, activeItem, setActiveItem }}
            />
          ))}
        </ListStyled>
      </BaseSectionContent>
    </SectionPortfolioStyled>
  )
}
