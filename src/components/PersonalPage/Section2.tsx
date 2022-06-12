import styled from 'styled-components';
import { cn } from '../../util/cn';
import { BaseSection } from "./BaseSection";
import { WrapperProps } from './WrapperProps';

const Section2Styled = styled(BaseSection)`
  background-color: #A1C8B3;
`;
const ListElementStyled = styled.li`
  background-color: #E1EAEE;
  color: #6a5a74;
  font-weight: bold;
`
const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--block-spacing);
`
const Title = styled.h3`
  text-align: center;
  color: #6a5a74;
  text-transform: uppercase;
`;
const ListElement = (props: WrapperProps) => (
  <ListElementStyled className={cn(props.className, 'card')}>
    <div className='card-content'>
      <div className='content is-size-5'>
        {props.children}
      </div>
    </div>
  </ListElementStyled>
);

export const Section2 = () => (
  <Section2Styled className="">
    <div>
      <Title className="title is-3">My Values</Title>
      <ListStyled className='has-text-light'>
        <ListElement>
          Readable, modular code that uses generalized reusable approaches.
        </ListElement>
        <ListElement>
          Thorough testing to produce consistent updates that align with the rest of the
          application.
        </ListElement>
        <ListElement>
          Scalable, optimized solutions that handle resources efficiently as the project
          grows.
        </ListElement>
      </ListStyled>
    </div>
  </Section2Styled>
);
