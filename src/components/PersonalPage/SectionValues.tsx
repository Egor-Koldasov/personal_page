import styled from 'styled-components';
import { cn } from '../../lib/cn';
import { BaseSection } from "./BaseSection";
import { WrapperProps } from './WrapperProps';

const SectionValuesStyled = styled(BaseSection)`
  background-color: #D7FDDF;
`;
const ListElementStyled = styled.li`
  background-color: #E0FFFD;
  color: #444558;
  font-weight: bold;
`
export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--block-spacing);
  width: 65rem;
  max-width: 100%;
`
const Title = styled.h3`
  text-align: center;
  color: #444558;
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

const Accent = styled.span`
  color: #70c05c;
`

export const SectionValues = () => (
  <SectionValuesStyled className="">
    <Title className="title is-3">My Values</Title>
    <ListStyled className='has-text-light'>
      <ListElement>
        Readable, modular code with a focus on <Accent>reusability</Accent>.
      </ListElement>
      <ListElement>
        Thorough <Accent>test coverage</Accent> for better team cooperation and safer releases.
      </ListElement>
      <ListElement>
        <Accent>Optimization</Accent>. Scalable solutions that handle resources efficiently even when the project usage grows.
      </ListElement>
    </ListStyled>
  </SectionValuesStyled>
);
