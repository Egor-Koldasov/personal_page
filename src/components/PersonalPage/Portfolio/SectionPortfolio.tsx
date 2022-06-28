import { HTMLProps, useState } from "react";
import styled from "styled-components";
import { cn } from "../../../lib/cn";
import { BaseSection } from "../BaseSection";
import { CardBox } from "./CardBox";
import { portfolio } from "./portfolio";

const Section4Styled = styled(BaseSection)`
  background-color: #FFF7E0;
  /* height: 100%; */
`;

const Title = styled.h3`
  text-align: center;
  color: #4DB39E;
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
    <Section4Styled>
      <Title className="title is-3">My Experience</Title>
      <ListStyled className={cn('has-text-light', { expand: !!activeItem })}>
        {portfolio.map((portfolioItem) => (
          <CardBox key={portfolioItem.projectName} {...{ portfolioItem, activeItem, setActiveItem }} />
        ))}
      </ListStyled>
    </Section4Styled>
  );
};
