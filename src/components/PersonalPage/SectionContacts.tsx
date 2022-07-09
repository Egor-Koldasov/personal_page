import Image from "next/image";
import styled from "styled-components";
import { Paths } from "../../lib/types/Path";
import { breakpointFrom } from "../../styles/modules/breakpointFrom";
import { bpDesktop } from "../../styles/modules/vars";
import { BaseSection } from "./BaseSection";
import { themeProp } from "./Theme/themeProp";
import { Theme } from "./Theme/themes";
import { WrapperProps } from "./WrapperProps";


const Section3Styled = styled(BaseSection)`
  background-color: ${themeProp('sectionContacts.mainBg')};
  a {
    color: ${themeProp('sectionContacts.linkColor')};
  }
  justify-content: flex-start;
  ${breakpointFrom(bpDesktop)} {
    justify-content: center;
  }
`;
const Title = styled.h3`
  text-align: center;
  color: ${themeProp('sectionContacts.titleColor')};
  font-size: 2.5rem;
  && {
    font-weight: bold;
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
  ${breakpointFrom(bpDesktop)} {
    flex-direction: row;
    flex-grow: 0;
  }
  /* justify-content: center; */
  /* background-color: #ddedec; */
`
const PhotoBox = styled.div`
  max-width: 300px;
  max-height: 300px;
  min-width: 150px;
  border: .5rem solid ${themeProp('sectionContacts.photoBorderColor')};
  padding: 0;
`
const PhotoText = styled.div`
  color: ${themeProp('sectionContacts.textColor')};
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 0;
  font-size: 1rem;
  max-width: 300px;
  ${breakpointFrom(bpDesktop)} {
    padding-top: 0;
    max-width: none;
    justify-content: flex-end;
    align-self: stretch;
  }
`;
const LinkRow = styled.div<{num: number}>`
  font-weight: bold;
  a {
    color: ${(props) => themeProp((`sectionContacts.contactTextColor` + props.num) as Paths<Theme>)(props)};
  }
`
const LinkRowTop = styled.div`
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
  ${breakpointFrom(bpDesktop)} {
    display: block;
  }
  font-size: .8rem;
`;
const DesktopLinks = () => (
  <DesktopLinksStyled>
    {linkMap.map(([name, href, text], index) => (
      <LinkRow key={name} num={index + 1}>
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
  ${breakpointFrom(bpDesktop)} {
    display: none;
  }
`;
const MobileLinks = () => (
  <MobileLinksStyled>
    {linkMap.map(([name, href], index) => (
      <LinkRow key={name} num={index + 1}>
        <a target="_blank" rel="noreferrer" href={href}>{name}</a>
      </LinkRow>
    ))}
  </MobileLinksStyled>
);
export const SectionContacts = () => {
  return (
    <Section3Styled>
    <Title className="title">My Contacts</Title>
      <ProfileBlock className="columns">
        <PhotoBox className="column"><Photo /></PhotoBox>
        <PhotoText className="column">
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
