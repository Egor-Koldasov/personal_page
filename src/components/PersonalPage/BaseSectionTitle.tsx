import styled from "styled-components"
import { theme } from "./Theme/themeProp"

export const BaseSectionTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  scroll-margin: 40px;
  /* background-color: ${theme((t) => t.basic.sectionTitleBg)};
  background-size: 10px 10px; */
  /* background-image: repeating-linear-gradient(
    45deg,
    ${theme((t) => t.basic.bgColor)} 0,
    ${theme((t) => t.basic.bgColor)} 2px,
    ${theme((t) => t.basic.sectionTitleBg)} 0,
    ${theme((t) => t.basic.sectionTitleBg)} 25%
  ); */
  width: 100%;
  padding: 32px;
  && {
    font-weight: bold;
  }
`
