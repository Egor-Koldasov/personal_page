import {
  ComponentType,
  ReactNode,
  Ref,
  UIEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import styled, { css } from "styled-components"
import { flexColumnGrow } from "../../styles/modules/flexColumnGrow"
import { RGBTulpe } from "../../lib/types/RGBTulpe"

export type ScrollShadowBox = {
  scrollLeft?: boolean
  scrollRight?: boolean
  scrollTop?: boolean
  scrollBottom?: boolean
  shadowColor?: RGBTulpe
}
export type ScrollListProps = {
  children?: ReactNode
  onScroll?: UIEventHandler<HTMLDivElement>
  ref: Ref<HTMLDivElement>
}

const makeColor = ([r, g, b]: RGBTulpe, a: number = 100) =>
  `rgba(${r} ${g} ${b} / ${a}%)`

const shadowSize = "15px"
const blurSize = "5px"
export const ScrollShadowSpan = styled.span``
export const ScrollShadowStyled = styled.div<ScrollShadowBox>`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  & > div {
    flex-grow: 1;
  }
  & > div > ${ScrollShadowSpan} {
    position: absolute;
    transition: transform 100ms;
    z-index: 1;
    pointer-events: none;
    filter: blur(${blurSize});
    background: transparent !important;
    &.left {
      left: 0;
      top: 0;
      bottom: 0;
      transform: translateX(calc(-100% - ${blurSize}));
      width: ${shadowSize};
      ${({ shadowColor = [255, 255, 255] }) => css`
        background: linear-gradient(
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
      transform: translateX(calc(100% + ${blurSize}));
      width: ${shadowSize};
      ${({ shadowColor = [255, 255, 255] }) => css`
        background: linear-gradient(
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
      transform: translateY(calc(100% + ${blurSize}));
      height: ${shadowSize};
      ${({ shadowColor = [255, 255, 255] }) => css`
        background: linear-gradient(
          0deg,
          ${makeColor(shadowColor)} 0%,
          ${makeColor(shadowColor, 70)} 50%,
          ${makeColor(shadowColor, 10)} 100%
        );
      `}
      border-radius: 10% 10% 0 0;
    }
    &.top {
      right: 0;
      left: 0;
      top: 0;
      transform: translateY(calc(-100% - ${blurSize}));
      height: ${shadowSize};
      ${({ shadowColor = [255, 255, 255] }) => css`
        background: linear-gradient(
          180deg,
          ${makeColor(shadowColor)} 0%,
          ${makeColor(shadowColor, 70)} 50%,
          ${makeColor(shadowColor, 10)} 100%
        );
      `}
      border-radius: 10% 10% 0 0;
    }
    ${({ scrollLeft }) =>
      scrollLeft &&
      css`
        &.left {
          transform: translateX(-50%);
        }
      `}
    ${({ scrollRight }) =>
      scrollRight &&
      css`
        &.right {
          transform: translateX(50%);
        }
      `}
    ${({ scrollBottom }) =>
      scrollBottom &&
      css`
        &.bottom {
          transform: translateY(50%);
        }
      `}
    ${({ scrollTop }) =>
      scrollTop &&
      css`
        &.top {
          transform: translateY(-50%);
        }
      `}
  }
  ${flexColumnGrow()}
`

const scrollThreshold = 5

type ScrollShadowProps = {
  ScrollList: ComponentType<ScrollListProps>
  children?: ReactNode
  shadowColor?: RGBTulpe
}
export const ScrollShadow = (props: ScrollShadowProps) => {
  const [scroll, setScroll] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  })
  const listRef = useRef<HTMLDivElement>(null)
  const onScroll = useCallback(() => {
    const list = listRef.current
    if (!list) return
    const nextScroll = {
      left: list.scrollLeft > scrollThreshold,
      right:
        list.scrollWidth - list.clientWidth - list.scrollLeft > scrollThreshold,
      top: list.scrollTop > scrollThreshold,
      bottom:
        list.scrollHeight - list.clientHeight - list.scrollTop >
        scrollThreshold,
    }
    setScroll(nextScroll)
  }, [setScroll])
  useEffect(() => {
    setInterval(onScroll)
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
        <ScrollShadowSpan className="scrollShadow left" />
        <ScrollShadowSpan className="scrollShadow right" />
        <ScrollShadowSpan className="scrollShadow top" />
        <ScrollShadowSpan className="scrollShadow bottom" />
        {props.children}
      </props.ScrollList>
    </ScrollShadowStyled>
  )
}
