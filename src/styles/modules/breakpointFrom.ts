import { css } from "styled-components";

export const breakpointFrom = (breakpoint: number) => css`@media screen and (min-width: ${breakpoint}px)`;