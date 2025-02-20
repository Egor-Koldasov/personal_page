import styled, { useTheme } from "styled-components"
import { cn } from "../../../lib/cn"
import { ImageViewer } from "../../lib/ImageViewer"
import { CloseBtn } from "./CloseBtn"
import { PortfolioItem } from "./portfolio"
import { flexColumnGrow } from "../../../styles/modules/flexColumnGrow"
import {
  background,
  text,
  lightAccent,
  strongAccent,
  cardBackground,
} from "./colors"
import { PropsWithChildren, useMemo } from "react"
import { ScrollShadow, ScrollShadowStyled } from "../../lib/ScrollShadow"
import { theme, themeProp } from "../Theme/themeProp"
import { breakpointFrom } from "../../../styles/modules/breakpointFrom"
import { bpTablet } from "../../../styles/modules/vars"
import { Theme } from "../Theme/themes"

const CardHeader = styled.div`
  position: relative;
  &&& {
    margin-bottom: 0rem;
  }
  .media-content {
    overflow: clip;
  }
`

export const CardContentExtra = styled.div`
  ${flexColumnGrow()}
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const CardItemStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 15rem;
  min-height: 9rem;
  max-width: 100%;
  /* border: 8px solid ${theme((t) => t.sectionPortfolio.cardBorderColor)}; */
  /* border-radius: 0; */
  box-shadow: none;
  background-color: ${theme((t) => t.sectionPortfolio.cardBg)};
  text-align: center;
  color: inherit;
  .title,
  .subtitle,
  .content {
    color: inherit;
  }
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: ${theme((t) => t.sectionPortfolio.cardBorderColorHover)};
  }
  &.overlay {
    position: absolute;
    z-index: 1;
    transition: top 0.2s ease-in-out;
  }
  .card-content {
    ${flexColumnGrow()}
    padding: .5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  ${breakpointFrom(bpTablet)} {
    width: 10rem;
    .card-content {
      padding: 2rem;
    }
  }
  ${breakpointFrom(bpTablet)} {
    font-size: 0.8rem;
    line-height: 0.8rem;
  }
`

const ProjectName = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  ${breakpointFrom(bpTablet)} {
    font-size: 1rem;
  }
  && {
    /* color: ${theme((t) => t.sectionPortfolio.projectTextColor)}; */
  }
`

export const ShortDescription = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  min-height: 2rem;
  ${breakpointFrom(bpTablet)} {
    font-size: 0.7rem;
    line-height: 0.7rem;
  }
  && {
    margin-bottom: 0;
  }
`

const Description = styled.div`
  text-align: left;
  max-width: 1000px;
  margin: 0 auto;
  /* font-size: 1rem; */
  line-height: 1rem;
  /* ${breakpointFrom(bpTablet)} {
    font-size: 0.7rem;
    line-height: 0.7rem;
  } */
`

const Role = styled.div`
  font-size: 1rem;
  line-height: 1rem; // weird scroll fix
  overflow: hidden;
  ${breakpointFrom(bpTablet)} {
    font-size: 0.7rem;
    line-height: 0.7rem;
  }
  && {
    color: ${theme((t) => t.sectionPortfolio.projectTextColor)};
  }
`

const CardItemScrollBox = styled.div`
  ${flexColumnGrow()}
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    /* background-color: ${lightAccent}; */
    &:hover {
      /* background-color: ${strongAccent}; */
    }
  }
`

const KeyPointList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
const KeyPointItem = styled.li``
const TechStackBox = styled.div`
  font-style: italic;
`

type CardItemProps = {
  portfolioItem: PortfolioItem
  className?: string
  active?: boolean
  onClose?: () => void
}
export const CardItem = ({
  portfolioItem,
  className,
  active,
  onClose,
}: CardItemProps) => {
  const theme = useTheme() as Theme
  return (
    <CardItemStyled className={cn("card", className)}>
      <ScrollShadow
        ScrollList={CardItemScrollBox}
        shadowColor={theme.sectionPortfolio.scrollShadowColor}
      >
        <div className="card-content">
          <CardHeader className="media">
            <div className="media-content">
              <ProjectName className="title">
                {portfolioItem.projectName}
              </ProjectName>
              <ShortDescription className="subtitle">
                {portfolioItem.shortDescription}
              </ShortDescription>
              {/* <Role className="subtitle">{portfolioItem.jobTitle}</Role> */}
            </div>
          </CardHeader>
          {active && (
            <CardContentExtra>
              {portfolioItem.images.length > 0 && (
                <ImageViewer portfolioItem={portfolioItem} />
              )}
              <Description>{portfolioItem.description}</Description>
              <KeyPointList>
                {portfolioItem.keyPoints.map((keyPoint, i) => (
                  <KeyPointItem key={i}>• {keyPoint}</KeyPointItem>
                ))}
              </KeyPointList>
              <TechStackBox>
                <span>Tech Stack:</span> {portfolioItem.techStack.join(", ")}
              </TechStackBox>
            </CardContentExtra>
          )}
        </div>
      </ScrollShadow>
      <CloseBtn onClick={onClose} />
    </CardItemStyled>
  )
}
