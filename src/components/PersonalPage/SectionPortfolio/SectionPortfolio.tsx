import { useState } from "react"
import styled from "styled-components"
import { cn } from "../../../lib/cn"
import { BaseSection } from "../BaseSection"
import { theme, themeProp } from "../Theme/themeProp"
import { CardBox } from "./CardBox"
import { background, text, lightAccent } from "./colors"
import { portfolio, portfolioItems } from "./portfolio"

const SectionPortfolioStyled = styled(BaseSection)`
  background-color: ${theme((t) => t.sectionPortfolio.mainBg)};
  /* height: 100%; */
`

const Title = styled.h3`
  text-align: center;
  /* color: ${theme((t) => t.sectionPortfolio.titleTextColor)}; */
  font-size: 1.5rem;
  && {
    font-weight: bold;
  }
`

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
      <Title className="title">My Experience</Title>
      <ListStyled className={cn({ expand: !!activeItem })}>
        {portfolioItems.map((portfolioItem) => (
          <CardBox
            key={portfolioItem.projectName}
            {...{ portfolioItem, activeItem, setActiveItem }}
          />
        ))}
      </ListStyled>
    </SectionPortfolioStyled>
  )
}
