import { useState } from "react";
import styled from "styled-components";
import { cn } from "../../../lib/cn";
import { BaseSection } from "../BaseSection";
import { CardBox } from "./CardBox";
import { background, text, lightAccent } from "./colors";
import { portfolio } from "./portfolio";

const SectionPortfolioStyled = styled(BaseSection)`
  background-color: ${background}
  /* height: 100%; */
`;

const Title = styled.h3`
  text-align: center;
  color: ${text};
  text-transform: uppercase;
`;

const ListStyled = styled.ul`
  display: flex;
  /* flex-direction: column; */
  gap: var(--block-spacing);
  width: 100%;
  position: relative;
  flex-grow: 1;
  /* flex-shrink: 1;
  overflow-y: auto; */
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  &.expand {
    flex-grow: 1;
  }
`;

export const CardHeader = styled.div`
  position: relative;
`;

export const SectionPortfolio = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  return (
    <SectionPortfolioStyled>
      <Title className="title is-3">My Experience</Title>
      <ListStyled className={cn('has-text-light', { expand: !!activeItem })}>
        {portfolio.map((portfolioItem) => (
          <CardBox key={portfolioItem.projectName} {...{ portfolioItem, activeItem, setActiveItem }} />
        ))}
      </ListStyled>
    </SectionPortfolioStyled>
  );
};
