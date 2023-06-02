import { css } from "styled-components"

export const flexSafeCenterX = () => css`
  & > * {
    &:first-child {
      margin-left: auto;
    }
    &:last-child {
      margin-right: auto;
    }
  }
`
