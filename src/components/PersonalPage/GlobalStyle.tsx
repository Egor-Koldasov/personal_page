import { createGlobalStyle } from "styled-components";
import { breakpointFrom } from "../../styles/modules/breakpointFrom";
import { bpTablet } from "../../styles/modules/vars";
import { themeProp } from "./Theme/themeProp";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    ${breakpointFrom(bpTablet)} {
      font-size: 32px;
    }
  }
  body {
    font-family: "Noto Sans Mono", monospace;
    color: ${themeProp('basic.textColor')};
    text-shadow: ${themeProp('basic.textShadow')};
  }
  * {
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: ${themeProp('basic.scrollColor')};
      &:hover {
        background-color: ${themeProp('basic.scrollHoverColor')};
      }
    }
  }
`;
