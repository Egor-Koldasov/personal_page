import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { PortfolioItem } from "./PersonalPage/Section4";


export const ImageInlineStyled = styled.div`
  position: relative;
  border: 3px solid #4DB39E;
  display: flex;
`;
type ImageInlineProps = {
  setIsOpen: (isOpen: boolean) => void;
  src?: StaticImageData;
}
const ImageInline = (props: ImageInlineProps) => {
  if (!props.src) return null;
  return (
    <ImageInlineStyled>
      <Image
        src={props.src}
        alt="Image"
        objectFit="contain"
        layout="fixed"
        height={150}
        width={150 / props.src.height * props.src.width}
      />
    </ImageInlineStyled>
  )
}

type ImageModalProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}
const ImageModal = (props: ImageModalProps) => {
  return null;
}

export const ImageViewerStyled = styled.div`
  display: flex;
`;
type ImageViewerProps = {
  portfolioItem: PortfolioItem;
}
export const ImageViewer = (props: ImageViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const inlineSrc: StaticImageData | undefined = props.portfolioItem.images[0]?.path;
  return (
    <ImageViewerStyled className="block">
      <ImageInline {...{ setIsOpen }} src={inlineSrc} />
      <ImageModal {...{ isOpen, setIsOpen }} />
    </ImageViewerStyled>
  );
};
