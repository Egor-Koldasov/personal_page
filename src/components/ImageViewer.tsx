import Image, { StaticImageData } from "next/image";
import { PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useOnResize } from "../lib/useOnResize";
import { flexColumnGrow } from "../styles/modules/flexColumnGrow";
import { flexSafeCenterX } from "../styles/modules/flexSafeCenterX";
import { PortfolioItem } from "./PersonalPage/Portfolio/portfolio";

const cssWidth = ({ width }: { width: number }) => css`width: ${width}px;`;
export const ImageInlineStyled = styled.div<{ width: number }>`
  position: relative;
  border: 4px solid #4DB39E;
  display: flex;
  box-sizing: content-box;
  min-height: 150px;
  flex-shrink: 0;
  cursor: pointer;
  ${cssWidth}
  &:hover {
    border-color: #FEA86D;
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
  padding-bottom: 1rem;
  ${flexSafeCenterX()}
`;

const autoScrollStep = 1;
const autoScrollFreq = 30;
const ImageInlineList = (props: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  const [autoScrollDir, setAutoScrollDir] = useState<'left' | 'right'>('right');
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = useCallback(() => setIsHovering(true), [setIsHovering]);
  const onMouseLeave = useCallback(() => setIsHovering(false), [setIsHovering]);
  const runAutoScrollStep = useCallback(() => {
    const el = ref.current;
    if (!el || el.scrollWidth <= el.clientWidth || isHovering) return;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const scrollLeft = Math.round(el.scrollLeft);
    const nextScrollLeft =
      autoScrollDir === 'right' ?
        Math.min(scrollLeft + autoScrollStep, maxScrollLeft) :
        Math.max(scrollLeft - autoScrollStep, 0);
    el.scroll({ left: nextScrollLeft });
    if (autoScrollDir === 'right' && nextScrollLeft === maxScrollLeft) {
      setAutoScrollDir('left');
    }
    if (autoScrollDir === 'left' && nextScrollLeft === 0) {
      setAutoScrollDir('right');
    }
  }, [autoScrollDir, ref, isHovering]);
  useEffect(() => {
    const intervalId = setInterval(runAutoScrollStep, autoScrollFreq);
    return () => clearInterval(intervalId);
  }, [runAutoScrollStep]);

  return (
    <ImageInlineListStyled
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.children}
    </ImageInlineListStyled>
  )
}

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
  background-color: #4DB39E;
  &:hover {
    background-color: #FEA86D;
  }
  /* &::before, &::after {
    background-color
  } */
`;

export const ModalDescription = styled.div`
  color: #fff;
  margin: 1rem 0;
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
  width: 100%;
  flex-grow: 1;
  justify-self: stretch;
`;
type ImageViewerProps = {
  portfolioItem: PortfolioItem;
}
export const ImageViewer = (props: ImageViewerProps) => {
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);
  const { portfolioItem } = props;
  return (
    <ImageViewerStyled className="block is-clipped">
      <ImageInlineList>
        {portfolioItem.images.map(({ data }, index) => (
          <ImageInline key={index} onOpen={() => setOpenImageIndex(index)} src={data} />
        ))}
      </ImageInlineList>
      {openImageIndex !== null && (
        <ImageModal {...{ openImageIndex, setOpenImageIndex, portfolioItem }} />
      )}
    </ImageViewerStyled>
  );
};
