import styled from 'styled-components';
import { cn } from '../../lib/cn';
import { breakpointFrom } from '../../styles/modules/breakpointFrom';
import { bpTablet } from '../../styles/modules/vars';
import { BaseSection } from "./BaseSection";
import { themeProp } from './Theme/themeProp';
import { WrapperProps } from './WrapperProps';

const SectionValuesStyled = styled(BaseSection)`
  background-color: ${themeProp('sectionValues.mainBg')};
`;
const ListElementStyled = styled.li`
  background-color: ${themeProp('sectionValues.cardBg')};
  color: ${themeProp('sectionValues.textColor')};
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5rem;
  .card-content {
    padding: 1rem;
  }
  ${breakpointFrom(bpTablet)} {
    font-size: 1rem;
    line-height: 1rem;
  }
`
export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--block-spacing);
  width: 30rem;
  max-width: 100%;
`
const Title = styled.h3`
  text-align: center;
  color: ${themeProp('sectionValues.titleTextColor')};
  /* text-transform: uppercase; */
  font-size: 2.5rem;
  && {
    font-weight: bold;
  }
`;
const ListElement = (props: WrapperProps) => (
  <ListElementStyled className={cn(props.className, 'card')}>
    <div className='card-content'>
      <div className='content'>
        {props.children}
      </div>
    </div>
  </ListElementStyled>
);

const Accent1 = styled.span`
  color: ${themeProp('sectionValues.accentTextColor1')};
`
const Accent2 = styled.span`
  color: ${themeProp('sectionValues.accentTextColor2')};
`
const Accent3 = styled.span`
  color: ${themeProp('sectionValues.accentTextColor3')};
`

export const SectionValues = () => (
  <SectionValuesStyled className="">
    <Title className="title">My Values</Title>
    <ListStyled className='has-text-light'>
      <ListElement>
        Readable, modular code with a focus on <Accent1>reusability</Accent1>.
      </ListElement>
      <ListElement>
        Thorough <Accent2>test coverage</Accent2> for better team cooperation and safer releases.
      </ListElement>
      <ListElement>
        <Accent3>Optimization</Accent3>. Scalable solutions that handle resources efficiently even when the project usage grows.
      </ListElement>
    </ListStyled>
  </SectionValuesStyled>
);
