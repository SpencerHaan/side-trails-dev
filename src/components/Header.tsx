import * as React from "react"
import { useMediaQuery } from "react-responsive"
import DesktopNavigator from "./navigation/DesktopNavigator"
import MobileNavigator from "./navigation/MobileNavigator"
import TabletNavigator from "./navigation/TabletNavigator"

const screens = {
  "sm": "640px",
  "md": "768px",
  "lg": "1024px",
  "xl": "1280px",
  "2xl": "1536px",
  "3xl": "2080px",
}

export interface Overlay {
  element: Element
  threshold?: number
}

interface HeaderProps {
  overlay?: Overlay
}

const Header = ({ overlay }: HeaderProps) => {
  const observeeRef = React.useRef(null)
  const navigatorRef = React.useRef<HTMLDivElement>(null)

  const [isScrolled, setIsScrolled] = React.useState(false)
  const [navigatorHeight, setNavigatorHeight] = React.useState(0)


  React.useLayoutEffect(() => {
    const observee = overlay?.element || observeeRef.current
    if (!observee) {
      return
    }
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolled(!entry.isIntersecting)
    }, { threshold: overlay?.threshold || 0.75 })
    observer.observe(observee)
    return () => observer.unobserve(observee)
  }, [overlay, observeeRef])

  React.useEffect(() => setNavigatorHeight(navigatorRef.current?.offsetHeight || 0), [navigatorRef])
  
  const isDesktop = useMediaQuery({ query: `(min-width: ${screens["xl"]})` })
  const isMobile = useMediaQuery({ query: `(max-width: ${screens["md"]})` })

  return (
    <>
      <div ref={observeeRef} style={{height: overlay ? 0 : navigatorHeight}}/>
      <div ref={navigatorRef} className={`fixed z-50 top-0 w-full ${isScrolled ? "shadow md:shadow-lg" : null}`}>
        {isDesktop
          ? <DesktopNavigator overlay={overlay && !isScrolled}/>
          : isMobile
          ? <MobileNavigator  overlay={overlay && !isScrolled}/>
          : <TabletNavigator  overlay={overlay && !isScrolled}/>
        }
      </div>
    </>
  )
}

export default Header