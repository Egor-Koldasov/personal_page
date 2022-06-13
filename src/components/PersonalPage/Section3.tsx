import Image from "next/image";
import styled from "styled-components";
import { breakpointFrom } from "../../styles/modules/breakpointFrom";
import { bpTablet } from "../../styles/modules/vars";
import { BaseSection } from "./BaseSection";
import { WrapperProps } from "./WrapperProps";


const Section3Styled = styled(BaseSection)`
  background-color: #d7e1e0;
  a {
    color: #4667ab;
  }
  justify-content: flex-start;
  ${breakpointFrom(bpTablet)} {
    justify-content: center;
  }
`;
const Photo = (props: WrapperProps) => (
  <Image
    src="/photo.jpg"
    alt="photo"
    width={300}
    height={300}
    {...props}
    objectFit="contain"
    priority
  />
);
const PhotoStyled = styled(Photo)`
  flex-shrink: 1;
  height: auto;
`
const ProfileBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  ${breakpointFrom(bpTablet)} {
    flex-direction: row;
    flex-grow: 0;
  }
  /* justify-content: center; */
  /* background-color: #ddedec; */
`
const PhotoBox = styled.div`
  max-width: 300px;
  max-height: 300px;
  border: .5rem solid #111719;
  padding: 0;
`
const PhotoText = styled.div`
  color: #111719;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  padding-top: var(--block-spacing);
  padding-bottom: 0;
  ${breakpointFrom(bpTablet)} {
    padding-top: 0;
  }
`;
const LinkRow = styled.div`
  
`
const LinkRowTop = styled(LinkRow)`
  margin-bottom: auto;
`
const linkMap: [string, string, string][] = [
  ['Email', 'mailto:koldasov3@gmail.com', 'koldasov3@gmail.com'],
  ['Github', 'https://github.com/Egor-Koldasov', 'https://github.com/Egor-Koldasov'],
  ['LinkedIn', 'https://www.linkedin.com/in/egor-koldasov', 'https://www.linkedin.com/in/egor-koldasov'],
  ['Upwork', 'https://www.upwork.com/freelancers/egor', 'https://www.upwork.com/freelancers/egor'],
];

const DesktopLinksStyled = styled.div`
  display: none;
  ${breakpointFrom(bpTablet)} {
    display: block;
  }
`;
const DesktopLinks = () => (
  <DesktopLinksStyled>
    {linkMap.map(([name, href, text]) => (
      <LinkRow key={name}>
        {name + ': '}
        <a target="_blank" rel="noreferrer" href={href}>{text}</a>
      </LinkRow>
    ))}
  </DesktopLinksStyled>
);
const MobileLinksStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 var(--block-spacing);
  ${breakpointFrom(bpTablet)} {
    display: none;
  }
`;
const MobileLinks = () => (
  <MobileLinksStyled>
    {linkMap.map(([name, href]) => (
      <LinkRow key={name}>
        <a target="_blank" rel="noreferrer" href={href}>{name}</a>
      </LinkRow>
    ))}
  </MobileLinksStyled>
);
export const Section3 = () => {
  return (
    <Section3Styled>
      <ProfileBlock className="columns">
        <PhotoBox className="column"><Photo /></PhotoBox>
        <PhotoText className="column is-size-5">
          <LinkRowTop>
            I&apos;m located at{' '}
            <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/TQvh9mpMkULRNott6">Batumi, Georgia</a>
            {' '}(GMT+4) and open for remote offers.
          </LinkRowTop>
          <DesktopLinks />
          <MobileLinks />
        </PhotoText>
      </ProfileBlock>
    </Section3Styled>
  );
};
