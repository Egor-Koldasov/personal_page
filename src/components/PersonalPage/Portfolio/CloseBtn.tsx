import { ComponentProps } from "react";
import styled from "styled-components";
import { strongAccent } from "./colors";


export const CloseBtnStyled = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1.5rem;

	width: 2rem; height: 2rem;
	border-radius: 50%;
  color: ${strongAccent};
	text-indent: 100%;
	cursor: pointer;
	
	&:focus {
		outline: solid 0 transparent;
		box-shadow: 0 0 0 2px #fff;
	}
	
	&:hover {
		background: #fff;
	}
	
	&:before, &:after {
		position: absolute;
		top: 15%; left: calc(50% - .0625em);
		width: .125em; height: 70%;
		border-radius: .125em;
		transform: rotate(45deg);
		background: currentcolor;
		content: '';
	}
	
	&:after { transform: rotate(-45deg); }
`;
export const CloseBtn = (props: ComponentProps<typeof CloseBtnStyled>) => {
  return (
    <CloseBtnStyled {...props}></CloseBtnStyled>
  );
};
