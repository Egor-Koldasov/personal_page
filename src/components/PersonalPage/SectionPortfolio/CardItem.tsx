import styled from "styled-components";
import { cn } from "../../../lib/cn";
import { ImageViewer } from "../../lib/ImageViewer";
import { CloseBtn } from "./CloseBtn";
import { CardHeader } from "./SectionPortfolio";
import { PortfolioItem } from "./portfolio";
import { flexColumnGrow } from "../../../styles/modules/flexColumnGrow";
import { background, text, lightAccent, strongAccent, cardBackground } from "./colors";
import { PropsWithChildren, useMemo } from "react";
import { ScrollShadow, ScrollShadowStyled } from "../../lib/ScrollShadow";
import { themeProp } from "../Theme/themeProp";
import { breakpointFrom } from "../../../styles/modules/breakpointFrom";
import { bpTablet } from "../../../styles/modules/vars";


export const CardContentExtra = styled.div`
  ${flexColumnGrow()}
`;
export const CardItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  min-height: 9rem;
  max-width: 100%;
  border: 8px solid ${themeProp('sectionPortfolio.cardBorderColor')};
  border-radius: 0;
  /* box-shadow: none; */
  background-color: ${themeProp('sectionPortfolio.cardBg')};
  text-align: center;
  color: inherit;
  .title, .subtitle, .content {
    color: inherit;
  }
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: ${themeProp('sectionPortfolio.cardBorderColorHover')};
  }
  &.overlay {
    position: absolute;
    z-index: 1;
    transition: top 0.2s ease-in-out;
  }
  .card-content {
    ${flexColumnGrow()}
    padding: .5rem;
  }
  ${breakpointFrom(bpTablet)} {
    width: 10rem;
  }
`;

const ProjectName = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  ${breakpointFrom(bpTablet)} {
    font-size: 1rem;
  }
  && {
    /* color: ${themeProp('sectionPortfolio.projectTextColor')}; */
  }
`;

export const ShortDescription = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  min-height: 2rem;
  ${breakpointFrom(bpTablet)} {
    font-size: .7rem;
    line-height: .7rem;
  }
  && {
    margin-bottom: 0;
  }
`;

const Description = styled.div`
  text-align: left;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1rem;
  ${breakpointFrom(bpTablet)} {
    font-size: .7rem;
    line-height: .7rem;
  }
`;

const Role = styled.div`
  font-size: 1rem;
  line-height: 1rem; // weird scroll fix
  overflow: hidden;
  ${breakpointFrom(bpTablet)} {
    font-size: .7rem;
    line-height: .7rem;
  }
  && {
    color: ${themeProp('sectionPortfolio.projectTextColor')};
  }
`;

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
`;
type CardItemProps = {
  portfolioItem: PortfolioItem;
  className?: string;
  active?: boolean;
  onClose?: () => void;
};
export const CardItem = ({ portfolioItem, className, active, onClose }: CardItemProps) => {
  return (
    <CardItemStyled className={cn("card", className)}>
      <ScrollShadow ScrollList={CardItemScrollBox}>
        <div className="card-content">
          <CardHeader className="media">
            <div className="media-content">
              <ProjectName className="title">{portfolioItem.projectName}</ProjectName>
              <ShortDescription className="subtitle">
                {portfolioItem.shortDescription}
              </ShortDescription>
              <Role className="subtitle">{portfolioItem.jobTitle}</Role>
            </div>
            <CloseBtn onClick={onClose} />
          </CardHeader>
          {active && (
            <CardContentExtra>
              {portfolioItem.images.length > 0 && <ImageViewer portfolioItem={portfolioItem} />}
              <Description className='content block'>
                {portfolioItem.description}
              </Description>
            </CardContentExtra>
          )}
        </div>
      </ScrollShadow>
    </CardItemStyled>
  );
};
