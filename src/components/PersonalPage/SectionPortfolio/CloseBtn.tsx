import { ComponentProps } from "react";
import styled from "styled-components";
import { themeProp } from "../Theme/themeProp";
import { strongAccent } from "./colors";


export const CloseBtnStyled = styled.div`
  position: absolute;
  right: .5rem;
  top: .5rem;
  font-size: 1rem;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	text-indent: 100%;
	cursor: pointer;
	background-color: ${themeProp('sectionPortfolio.cardBg')};
	z-index: 1;
	
	&:focus {
		outline: solid 0 transparent;
		box-shadow: 0 0 0 2px #aaa;
	}
	
	&:hover {
		/* background: #aaa; */
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
