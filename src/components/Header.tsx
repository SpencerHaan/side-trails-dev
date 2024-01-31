import * as React from "react"
import { useMediaQuery } from "react-responsive"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import DesktopNavigator from "./navigation/DesktopNavigator"
import MobileNavigator from "./navigation/MobileNavigator"
import { Overlay } from "."

const screens = {
  "sm": "640px",
  "md": "768px",
  "lg": "1024px",
  "xl": "1280px",
  "2xl": "1536px",
  "3xl": "2080px",
}

export interface Hero {
  image: React.ReactElement<typeof StaticImage> | React.ReactElement<typeof GatsbyImage>
  body: React.ReactElement | React.ReactElement[]
}

interface HeaderProps {
  hero?: Hero
}

const Header = ({ hero }: HeaderProps) => {
  const observeeRef = React.useRef(null)
  const navigatorRef = React.useRef<HTMLDivElement>(null)

  const [isScrolled, setIsScrolled] = React.useState(false)
  const [navigatorHeight, setNavigatorHeight] = React.useState(0)

  React.useLayoutEffect(() => {
    const observee = observeeRef.current
    if (!observee) {
      return
    }
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolled(!entry.isIntersecting)
    }, { threshold: 0.95 })
    observer.observe(observee)
    return () => observer.unobserve(observee)
  }, [hero, observeeRef])

  React.useEffect(() => setNavigatorHeight(navigatorRef.current?.offsetHeight || 0), [navigatorRef])
  
  const isDesktop = useMediaQuery({ query: `(min-width: ${screens["md"]})` })
  const isMobile = useMediaQuery({ query: `(max-width: ${screens["md"]})` })

  return (
    <>
      {hero
        ? <div ref={observeeRef}>
            <Overlay>
              {hero.image}
              <div className="relative flex flex-col h-full">
                <div style={{height: navigatorHeight}} />
                <div className="flex-1">
                  {hero.body}
                </div>
              </div>
            </Overlay>
          </div>
        : <div ref={observeeRef} style={{height: navigatorHeight}}/>
      }
      <div ref={navigatorRef} className={`fixed z-50 top-0 w-full ${isScrolled ? "shadow md:shadow-lg" : null}`}>
        {isDesktop
          ? <DesktopNavigator overlay={hero && !isScrolled}/>
          : isMobile
          ? <MobileNavigator  overlay={hero && !isScrolled}/>
          : null
        }
      </div>
    </>
  )
}

export default Header