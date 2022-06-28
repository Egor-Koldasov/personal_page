import styled from "styled-components";
import { cn } from "../../../lib/cn";
import { ImageViewer } from "../../ImageViewer";
import { CloseBtn } from "./CloseBtn";
import { CardHeader } from "./SectionPortfolio";
import { PortfolioItem } from "./portfolio";
import { flexColumnGrow } from "../../../styles/modules/flexColumnGrow";


export const CardContentExtra = styled.div`
  ${flexColumnGrow()}
`;
export const CardItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  min-height: 15rem;
  max-width: 100%;
  border: 8px solid #4DB39E;
  border-radius: 0;
  /* box-shadow: none; */
  background-color: #FFF7E0;
  text-align: center;
  .title, .subtitle {
    color: rgb(107 103 93);
  }
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: #FEA86D;
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
type CardItemProps = {
  portfolioItem: PortfolioItem;
  className?: string;
  active?: boolean;
  onClose?: () => void;
};
export const CardItem = ({ portfolioItem, className, active, onClose }: CardItemProps) => {
  return (
    <CardItemStyled className={cn("card", className)}>
      <div className="card-content">
        <CardHeader className="media">
          <div className="media-content">
            <p className="title is-4">{portfolioItem.projectName}</p>
            <ShortDescription className="subtitle is-5">{portfolioItem.shortDescription}</ShortDescription>
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
    </CardItemStyled>
  );
};
