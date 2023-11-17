import React from "react"
import { useMediaQuery } from "react-responsive"
import DesktopNavigator, { Overlay } from "./navigation/DesktopNavigator";
import MobileNavigator from "./navigation/MobileNavigator";
import TabletNavigator from "./navigation/TabletNavigator";

const screens = {
  "sm": "640px",
  "md": "768px",
  "lg": "1024px",
  "xl": "1280px",
  "2xl": "1536px",
  "3xl": "2080px",
}

interface NavigatorProperties {
  overlay?: Overlay
}

const Navigator = (props: NavigatorProperties) => {
  const isDesktop = useMediaQuery({ query: `(min-width: ${screens["xl"]})` })
  const isMobile = useMediaQuery({ query: `(max-width: ${screens["md"]})` })

  return (
    <>
      {isDesktop
        ? <DesktopNavigator {...props}/>
        : isMobile
        ? <MobileNavigator {...props}/>
        : <TabletNavigator {...props}/>
      }
    </>
  )
}

export default Navigator