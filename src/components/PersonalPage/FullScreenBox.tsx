import styled from "styled-components";

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
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #90d09e;
    &:hover {
      background-color: #87ab97;
    }
  }
`;