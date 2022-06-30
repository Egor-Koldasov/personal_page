import styled from "styled-components";
import { cn } from "../../../lib/cn";
import { ImageViewer } from "../../lib/ImageViewer";
import { CloseBtn } from "./CloseBtn";
import { CardHeader } from "./SectionPortfolio";
import { PortfolioItem } from "./portfolio";
import { flexColumnGrow } from "../../../styles/modules/flexColumnGrow";
import { darkGrey, green, orange } from "./colors";
import { PropsWithChildren, useMemo } from "react";
import { ScrollShadow, ScrollShadowStyled } from "../../lib/ScrollShadow";


export const CardContentExtra = styled.div`
  ${flexColumnGrow()}
`;
export const CardItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  min-height: 15rem;
  max-width: 100%;
  border: 8px solid ${green};
  border-radius: 0;
  /* box-shadow: none; */
  background-color: #FFF7E0;
  text-align: center;
  .title, .subtitle {
    color: ${darkGrey};
  }
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: ${orange};
  }
  &.overlay {
    position: absolute;
    z-index: 1;
    transition: top 0.2s ease-in-out;
  }
  .card-content {
    ${flexColumnGrow()}
  }
`;

export const ShortDescription = styled.div`
  line-height: 1.5rem;
  min-height: 3rem;
`;

export const Description = styled.div`
  text-align: left;
  max-width: 1000px;
  margin: 0 auto;
`;

export const CardItemScrollBox = styled.div`
  ${flexColumnGrow()}
  overflow-y: auto;
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
      <ScrollShadow ScrollList={CardItemScrollBox} shadowColor={[255, 247, 224]}>
        <div className="card-content">
          <CardHeader className="media">
            <div className="media-content">
              <p className="title is-4">{portfolioItem.projectName}</p>
              <ShortDescription className="subtitle is-5">
                {portfolioItem.shortDescription}
              </ShortDescription>
              <p className="subtitle is-6">{portfolioItem.jobTitle}</p>
            </div>
            <CloseBtn onClick={onClose} />
          </CardHeader>
          {active && (
            <CardContentExtra>
              {portfolioItem.images.length > 0 && <ImageViewer portfolioItem={portfolioItem} />}
              <Description className='content is-size-5 block'>
                {portfolioItem.description}
              </Description>
            </CardContentExtra>
          )}
        </div>
      </ScrollShadow>
    </CardItemStyled>
  );
};
