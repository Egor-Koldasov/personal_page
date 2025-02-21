import styled, { css } from "styled-components"
import { breakpointFrom } from "../../styles/modules/breakpointFrom"
import { bpTablet } from "../../styles/modules/vars"
import { theme } from "./Theme/themeProp"
import { ThemeSwitch, ThemeSwitchStyled } from "./Theme/ThemeSwitch"
import { useCallback, useState } from "react"
import { useFullScreenBoxScroll } from "../../lib/useOnFullScreenBoxScroll"

const MobileNavigationButton = styled.svg`
  height: 24px;
  margin: ${(40 - 24) / 2}px;
  fill: ${theme((t) => t.basic.textColor)};
  cursor: pointer;
  flex-shrink: 0;
  flex-grow: 0;
  ${breakpointFrom(bpTablet)} {
    display: none;
  }
`

const NavigationPanel = styled.div`
  display: none;
  width: 100%;
  flex-direction: column;
  align-items: start;

  ${ThemeSwitchStyled} {
    width: 100%;
  }

  ${breakpointFrom(bpTablet)} {
    display: flex;
    flex-direction: row;
    align-items: center;
    ${ThemeSwitchStyled} {
      margin-left: auto;
      width: auto;
    }
  }

  ${breakpointFrom(bpTablet)} {
    align-items: center;
  }
`

const DesktopThemeSwitchBox = styled.div`
  display: none;
  margin-right: 16px;
  ${breakpointFrom(bpTablet)} {
    display: flex;
  }
`

const NavigationBox = styled.div<{ open: boolean; scrolled: boolean }>`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  /* border-bottom: 1px solid ${theme((t) => t.basic.textColor)}; */
  backdrop-filter: blur(9px);
  background: transparent;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  transition: height 0.3s, background 0.3s;
  a {
    color: inherit;
  }

  ${DesktopThemeSwitchBox} {
    margin-left: auto;
  }

  align-items: end;
  ${breakpointFrom(bpTablet)} {
    align-items: start;
  }

  ${(props) =>
    props.open &&
    css`
      height: 100%;
      background: #ffffff14;

      ${NavigationPanel} {
        display: flex;
      }
      ${MobileThemeSwitchBox} {
        padding: 8px 16px;
      }
    `}
  ${(props) =>
    props.scrolled &&
    css`
      background: #ffffff14;
    `}
`

const NavigationLink = styled.a`
  padding: 8px 16px;
  width: 100%;
  ${breakpointFrom(bpTablet)} {
    width: auto;
  }
  /* border-left: 1px solid ${theme((t) => t.basic.textColor)}; */
`

const MobileThemeSwitchBox = styled.div`
  display: flex;
  width: 100%;
  ${breakpointFrom(bpTablet)} {
    display: none;
  }
`

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false)
  const onNavButtonClick = useCallback(() => {
    setNavOpen((open) => !open)
  }, [])
  const onPanelClick = useCallback(() => {
    setNavOpen(false)
  }, [])
  const { scrollTop } = useFullScreenBoxScroll()

  const onLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      const target = event.currentTarget.getAttribute("href")
      if (!target) return
      const element = document.querySelector(target)
      if (!element) return
      element.scrollIntoView({ behavior: "smooth" })
    },
    []
  )

  return (
    <>
      <NavigationBox open={navOpen} scrolled={scrollTop > 30}>
        <MobileNavigationButton
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={onNavButtonClick}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </MobileNavigationButton>
        <NavigationPanel onClick={onPanelClick}>
          <NavigationLink href="#overview">Overview</NavigationLink>
          <NavigationLink href="#experience">Experience</NavigationLink>
          <NavigationLink href="#contacts">Contacts</NavigationLink>
          <MobileThemeSwitchBox>
            <ThemeSwitch>Dark/Light mode</ThemeSwitch>
          </MobileThemeSwitchBox>
          <DesktopThemeSwitchBox>
            <ThemeSwitch />
          </DesktopThemeSwitchBox>
        </NavigationPanel>
      </NavigationBox>
    </>
  )
}
