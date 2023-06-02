import { css } from "styled-components"

export const breakpointFrom = (breakpoint: number) =>
  // prettier-ignore
  css`@media screen and (min-width: ${breakpoint}px)`
