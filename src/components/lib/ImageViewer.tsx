import composeRefs from "@seznam/compose-react-refs";
import Image, { StaticImageData } from "next/image";
import { forwardRef, PropsWithChildren, Ref, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useOnResize } from "../../lib/useOnResize";
import { flexColumnGrow } from "../../styles/modules/flexColumnGrow";
import { flexSafeCenterX } from "../../styles/modules/flexSafeCenterX";
import { lightAccent, strongAccent } from "../PersonalPage/SectionPortfolio/colors";
import { PortfolioItem } from "../PersonalPage/SectionPortfolio/portfolio";
import { themeProp } from "../PersonalPage/Theme/themeProp";
import { ScrollShadow, ScrollListProps } from "./ScrollShadow";

const cssWidth = ({ width }: { width: number }) => css`width: ${width}px;`;
export const ImageInlineStyled = styled.div<{ width: number }>`
  position: relative;
  border: 4px solid ${themeProp('sectionPortfolio.cardBorderColor')};
  display: flex;
  box-sizing: content-box;
  min-height: 150px;
  flex-shrink: 0;
  cursor: pointer;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
  ${cssWidth}
  &:hover {
    border-color: ${themeProp('sectionPortfolio.cardBorderColorHover')};
  }
`;
type ImageInlineProps = {
  onOpen: () => void;
  src?: StaticImageData;
}
const ImageInline = (props: ImageInlineProps) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const containerWidth = useMemo(() => {
    if (!props.src) return 0;
    return containerHeight / props.src.height * props.src.width
  }, [containerHeight, props.src]);
  const containerRef = useRef<HTMLDivElement>(null);
  const updateContainerHeight = useCallback(() => {
    const height = containerRef.current?.clientHeight || 0;
    setContainerHeight(height);
  }, [containerRef, setContainerHeight]);
  useEffect(() => {
    setInterval(updateContainerHeight);
  }, [updateContainerHeight]);
  useOnResize(updateContainerHeight);
  if (!props.src) return null;
  return (
    <ImageInlineStyled
      ref={containerRef}
      width={containerWidth}
      onClick={props.onOpen}
    >
      {(containerHeight > 0) && (
        <Image
          src={props.src}
          alt="Image"
          objectFit="contain"
          layout="fill"
        />
      )}
    </ImageInlineStyled>
  )
}

const ImageInlineListStyled = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 1rem;
  padding-bottom: .0rem;
  ${flexSafeCenterX()}
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    &:hover {
    }
  }
`;

const autoScrollStep = 1;
const autoScrollFreq = 30;
const ImageInlineList = forwardRef((props: ScrollListProps, externalRef: Ref<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [autoScrollDir, setAutoScrollDir] = useState<'left' | 'right'>('right');
  const [isHovering, setIsHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const onAutoScrollEdge = useCallback(() => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  }, [setIsPaused])
  const onMouseEnter = useCallback(() => setIsHovering(true), [setIsHovering]);
  const onMouseLeave = useCallback(() => setIsHovering(false), [setIsHovering]);
  const runAutoScrollStep = useCallback(() => {
    const el = ref.current;
    if (!el || el.scrollWidth <= el.clientWidth || isHovering || isPaused) return;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const scrollLeft = Math.round(el.scrollLeft);
    const nextScrollLeft =
      autoScrollDir === 'right' ?
        Math.min(scrollLeft + autoScrollStep, maxScrollLeft) :
        Math.max(scrollLeft - autoScrollStep, 0);
    el.scroll({ left: nextScrollLeft });
    el.dispatchEvent(new UIEvent('scroll'));
    if (autoScrollDir === 'right' && nextScrollLeft === maxScrollLeft) {
      setAutoScrollDir('left');
      onAutoScrollEdge();
    }
    if (autoScrollDir === 'left' && nextScrollLeft === 0) {
      setAutoScrollDir('right');
      onAutoScrollEdge();
    }
  }, [autoScrollDir, ref, isHovering, isPaused, onAutoScrollEdge]);
  useEffect(() => {
    const intervalId = setInterval(runAutoScrollStep, autoScrollFreq);
    return () => clearInterval(intervalId);
  }, [runAutoScrollStep]);
  useEffect(() => {
    onAutoScrollEdge();
  }, [onAutoScrollEdge]);

  return (
    <ImageInlineListStyled
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
      ref={composeRefs(ref, externalRef)}
    >
      {props.children}
    </ImageInlineListStyled>
  )
})

type ModalImageBoxProps = {
}
export const ModalImageBox = styled.div<ModalImageBoxProps>`
  ${flexColumnGrow()}
  position: relative;

`;

export const ModalContent = styled.div`
  ${flexColumnGrow()}
  width: 100%;
  padding: 2rem 0;
  padding-bottom: 0;
  position: relative;
`;

export const ModalCloseBtn = styled.button`
  background-color: ${themeProp('sectionPortfolio.imageCloseButtonBg')};
  &:hover {
    background-color: ${themeProp('sectionPortfolio.imageCloseButtonBg')};
  }
  &::before, &::after {
    background-color: ${themeProp('sectionPortfolio.imageCloseButtonColor')};
  }
`;

export const ModalDescription = styled.div`
  color: #fff;
  margin: .5rem 0;
  font-size: .8rem;
`;

type ImageModalProps = {
  setOpenImageIndex: (index: number | null) => void;
  openImageIndex: number;
  portfolioItem: PortfolioItem,
}
const ImageModal = (props: ImageModalProps) => {
  const image = useMemo(
    () => props.portfolioItem.images[props.openImageIndex],
    [props.portfolioItem, props.openImageIndex]
  );
  const { setOpenImageIndex } = props;
  const onClose = useCallback(() => setOpenImageIndex(null), [setOpenImageIndex]);
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <ModalContent>
        <ModalImageBox>
          <Image
            src={image.data}
            alt={image.description}
            objectFit="contain"
            layout="fill"
            // width={image.data.width}
          />
        </ModalImageBox>
        <ModalDescription>{image.description}</ModalDescription>
      </ModalContent>
      <ModalCloseBtn
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></ModalCloseBtn>
    </div>
  );
}

export const ImageViewerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  justify-self: stretch;
  && {
    margin-bottom: .5rem;
  }
`;
type ImageViewerProps = {
  portfolioItem: PortfolioItem;
}
export const ImageViewer = (props: ImageViewerProps) => {
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);
  const { portfolioItem } = props;
  return (
    <ImageViewerStyled className="block is-clipped">
      <ScrollShadow ScrollList={ImageInlineList}>
        {portfolioItem.images.map(({ data }, index) => (
          <ImageInline key={index} onOpen={() => setOpenImageIndex(index)} src={data} />
        ))}
      </ScrollShadow>
      {openImageIndex !== null && (
        <ImageModal {...{ openImageIndex, setOpenImageIndex, portfolioItem }} />
      )}
    </ImageViewerStyled>
  );
};
