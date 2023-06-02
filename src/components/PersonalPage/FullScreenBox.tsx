import styled from "styled-components"
import { theme, themeProp } from "./Theme/themeProp"

export const FullScreenBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    background-color: ${theme((t) => t.basic.bgColor)};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${theme((t) => t.basic.scrollColor)};
    &:hover {
      background-color: ${theme((t) => t.basic.scrollHoverColor)};
    }
  }
`
