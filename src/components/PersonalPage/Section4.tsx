import { useCallback, useState } from "react";
import styled from "styled-components";
import { breakpointFrom } from "../../styles/modules/breakpointFrom";
import { bpTablet } from "../../styles/modules/vars";
import { cn } from "../../util/cn";
import { BaseSection } from "./BaseSection";

const Section4Styled = styled(BaseSection)`
  background-color: #FFF7E0;
`;

const Title = styled.h3`
  text-align: center;
  color: #4DB39E;
  text-transform: uppercase;
`;

const Box = styled.div`
  width: 65rem;
  height: 100%;
  background-color: #FFF7E0;
  flex-grow: 1;
`

type PortfolioImage = {
  path: string,
  description: string,
}
type PortfolioItem = {
  jobTitle: string,
  projectName: string,
  description: string,
  images: PortfolioImage[],
  dateFrom?: string,
  dateTo?: string,
}

const portfolio: PortfolioItem[] = [
  {
    projectName: 'Sangix - hospital appointment booking',
    jobTitle: 'Front End Web Developer',
    description: `Sangix is the application for the hospital booking. I've been implementing the front-end
      part including the booking process itself, management of the appointments booked,
      parts that are made for use inside the hospital (the queue of patients in the cabinet, the
      check-in screen for self check-in), and some pages meant for the hospital staff.`,
    images: [],
  },
  {
    projectName: 'Iorad - tutorial building tool',
    jobTitle: 'Full Stack Web Developer',
    description: `I’ve been working as a full-stack developer with React and NodeJS. Have been building
      the application itself, the website for it, browser extension, payment system, admin
      system.
      Iorad is the application for automatic building step-by-step tutorials with images and
      descriptions on each step, the user records it like a video then they can edit it.
      I have been building the browser extension, rewriting and upgrading the Stripe payment
      
      system, admin panel, optimizing slow database queries and inefficient front-end code,
      working on multiple redesigns, adding features to the player and editor.`,
    images: [],
  },
  {
    projectName: 'Autostat Radar - car market analytics',
    jobTitle: 'Full Stack Web Developer',
    description: `Data Analytics app of the Russian car market. The customer had the OLAP database
      filled with car market data and requested the app to view that data in a user-friendly
      feature-rich way with tables, diagrams and maps.
      I've been working there as a full-stack developer, adding features to Google Maps,
      tables, query saving, query building, admin page, and have implemented the docker
      instancing (launches the app in a separate docker container for each team to split their
      resources when they run heavy queries).`,
    images: [],
  }
];

const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--block-spacing);
  width: 100%;
  position: relative;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  &.expand {
    flex-grow: 1;
  }
`

const CardItemStyled = styled.div`
  width: 35rem;
  max-width: 100%;
  border: 5px solid #4DB39E;
  border-radius: 0;
  /* box-shadow: none; */
  background-color: #FFF7E0;
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
  .media.media {
    margin-bottom: 0;
  }
  .content {
    height: 0px;
    overflow: hidden;
  }
`;
const CardBoxStyled = styled.li`
  &.active {
    ${CardItemStyled}.overlay {
      border-color: #FEA86D;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      .content {
        height: 100%;
      }
    }
  }
`;
type CardItemProps = {
  portfolioItem: PortfolioItem,
  className?: string,
}
const CardItem = ({ portfolioItem, className }: CardItemProps) => {
  return (
    <CardItemStyled
      className={cn("card", className)}
    >
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{portfolioItem.projectName}</p>
            <p className="subtitle is-6">{portfolioItem.jobTitle}</p>
          </div>
        </div>
        <div className='content is-size-5'>
          {portfolioItem.description}
        </div>
      </div>
    </CardItemStyled>
  )
}
type CardBoxProps = {
  portfolioItem: PortfolioItem,
  activeItem: string,
  setActiveItem: (item: string) => void,
}
const CardBox = ({ portfolioItem, activeItem, setActiveItem }: CardBoxProps) => {
  const active = activeItem === portfolioItem.projectName;
  const onClick = useCallback(() => {
    setActiveItem(active ? '' : portfolioItem.projectName);
  }, [active, portfolioItem.projectName, setActiveItem]);
  return (
    <CardBoxStyled
      className={cn({ active })}
      onClick={onClick}
    >
      <CardItem className="overlay" portfolioItem={portfolioItem} />
      <CardItem portfolioItem={portfolioItem} />
    </CardBoxStyled>
  )
}

export const Section4 = () => {
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
