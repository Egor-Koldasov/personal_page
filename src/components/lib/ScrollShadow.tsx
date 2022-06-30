import { ComponentType, ReactNode, Ref, UIEventHandler, useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { flexColumnGrow } from "../../styles/modules/flexColumnGrow";

type RGBTulpe = [number, number, number];
export type ScrollShadowBox = {
  scrollLeft?: boolean,
  scrollRight?: boolean,
  scrollTop?: boolean,
  scrollBottom?: boolean,
  shadowColor?: RGBTulpe,
}
export type ScrollListProps = {
  children?: ReactNode,
  onScroll?: UIEventHandler<HTMLDivElement>,
  ref: Ref<HTMLDivElement>,
}

const makeColor = ([r, g, b]: RGBTulpe, a: number = 100) =>
  css`rgba(${r} ${g} ${b} / ${a}%)`;

const shadowSize = '20px';
export const ScrollShadowStyled = styled.div<ScrollShadowBox>`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  & > div {
    flex-grow: 1;
  }
  & > div > .scrollShadow {
    position: absolute;
    transition: transform 100ms;
    z-index: 1;
    &.left {
      left: 0;
      top: 0;
      bottom: 0;
      transform: translateX(-100%);
      width: ${shadowSize};
      ${({ shadowColor = [255, 255, 255] }) => css`
        background:
          linear-gradient(
            90deg,
            ${makeColor(shadowColor)} 0%,
            ${makeColor(shadowColor, 70)} 50%,
            ${makeColor(shadowColor, 10)} 100%
          );
      `}
      border-radius: 0 10% 10% 0;
    }
    &.right {
      right: 0;
      top: 0;
      bottom: 0;
      transform: translateX(100%);
      width: ${shadowSize};
      ${({ shadowColor = [255, 255, 255] }) => css`
        background:
          linear-gradient(
            270deg,
            ${makeColor(shadowColor)} 0%,
            ${makeColor(shadowColor, 70)} 50%,
            ${makeColor(shadowColor, 10)} 100%
          );
      `}
      border-radius: 10% 0 0 10%;
    }
    &.bottom {
      right: 0;
      left: 0;
      bottom: 0;
      transform: translateY(100%);
      height: ${shadowSize};
      ${({ shadowColor = [255, 255, 255] }) => css`
        background:
          linear-gradient(
            180deg,
            ${makeColor(shadowColor)} 0%,
            ${makeColor(shadowColor, 70)} 50%,
            ${makeColor(shadowColor, 10)} 100%
          );
      `}
      border-radius: 10% 10% 0 0;
    }
    ${({ scrollLeft }) => scrollLeft && css`
      &.left {
        transform: translateX(-50%);
      }
    `}
    ${({ scrollRight }) => scrollRight && css`
      &.right {
        transform: translateX(50%);
      }
    `}
    ${({ scrollBottom }) => scrollBottom && css`
      &.bottom {
        transform: translateY(50%);
      }
    `}
  }
  ${flexColumnGrow()}
`;

type ScrollShadowProps = {
  ScrollList: ComponentType<ScrollListProps>,
  children?: ReactNode,
  shadowColor?: RGBTulpe,
}
export const ScrollShadow = (props: ScrollShadowProps) => {
  const [scroll, setScroll] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });
  const listRef = useRef<HTMLDivElement>(null);
  const onScroll = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const nextScroll = {
      left: list.scrollLeft > 0,
      right: (list.scrollWidth - list.clientWidth) > list.scrollLeft,
      top: list.scrollTop > 0,
      bottom: (list.scrollHeight - list.clientHeight) > list.scrollTop,
    };
    setScroll(nextScroll);
  }, [setScroll]);
  useEffect(() => {
    setInterval(onScroll);
  }, [onScroll])
  return (
    <ScrollShadowStyled
      scrollLeft={scroll.left}
      scrollRight={scroll.right}
      scrollTop={scroll.top}
      scrollBottom={scroll.bottom}
      shadowColor={props.shadowColor}
    >
      <props.ScrollList onScroll={onScroll} ref={listRef}>
        <span className="scrollShadow left" />
        <span className="scrollShadow right" />
        <span className="scrollShadow top" />
        <span className="scrollShadow bottom" />
        {props.children}
      </props.ScrollList>
    </ScrollShadowStyled>
  );
};
