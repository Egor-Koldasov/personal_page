import styled from 'styled-components';
import { cn } from '../../lib/cn';
import { WrapperProps } from "./WrapperProps";

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  justify-content: center;
`;

export const BaseSection = (props: WrapperProps) => {
  return (
    <SectionStyled className={cn(props.className, "section")}>
      {props.children}
    </SectionStyled>
  );
};
