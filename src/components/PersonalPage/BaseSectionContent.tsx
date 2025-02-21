import styled from "styled-components"
import { breakpointFrom } from "../../styles/modules/breakpointFrom"
import { bpTablet } from "../../styles/modules/vars"

export const BaseSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  && {
    padding: 0 1rem;
    ${breakpointFrom(bpTablet)} {
      padding: 0 2rem;
    }
  }
`
