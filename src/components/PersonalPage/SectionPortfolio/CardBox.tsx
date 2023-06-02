import { useCallback } from "react"
import styled from "styled-components"
import { cn } from "../../../lib/cn"
import { theme, themeProp } from "../Theme/themeProp"
import {
  CardItemStyled,
  CardItem,
  CardContentExtra,
  ShortDescription,
} from "./CardItem"
import { CloseBtnStyled } from "./CloseBtn"
import { strongAccent } from "./colors"
import { PortfolioItem } from "./portfolio"

const CardBoxStyled = styled.li`
  /* width: 100%; */
  /* max-width: 300px; */
  display: flex;
  justify-content: center;
  &.active {
    ${CardItemStyled}.overlay {
      border-color: ${theme((t) => t.sectionPortfolio.cardBorderColorHover)};
      height: 100%;
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      justify-content: flex-start;
      cursor: default;
      ${ShortDescription} {
        min-height: auto;
      }
    }
  }
  &:not(.active),
  & ${CardItemStyled}:not(.overlay) {
    .media.media {
      margin-bottom: 0;
    }
    ${CardContentExtra}, ${CloseBtnStyled} {
      display: none;
    }
    .card-content {
      justify-content: center;
    }
  }
  &:not(.active) ${CardItemStyled}:not(:hover) {
    box-shadow: none;
  }
`
type CardBoxProps = {
  portfolioItem: PortfolioItem
  activeItem: string
  setActiveItem: (item: string) => void
}
export const CardBox = ({
  portfolioItem,
  activeItem,
  setActiveItem,
}: CardBoxProps) => {
  const active = activeItem === portfolioItem.projectName
  const onClick = useCallback(() => {
    if (!active) setActiveItem(portfolioItem.projectName)
  }, [active, portfolioItem.projectName, setActiveItem])
  const onClose = useCallback(() => {
    setActiveItem("")
  }, [setActiveItem])
  return (
    <CardBoxStyled className={cn({ active })} onClick={onClick}>
      <CardItem
        className="overlay"
        portfolioItem={portfolioItem}
        onClose={onClose}
        active={active}
      />
      <CardItem portfolioItem={portfolioItem} />
    </CardBoxStyled>
  )
}
