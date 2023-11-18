import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Content from "../Content"

const menuLinksQuery = graphql`
query MenuLinks {
  site {
    siteMetadata {
      menuLinks {
        name
        link
      }
    }
  }
}
`

export interface Overlay {
  element: Element
  threshold?: number
}

interface DesktopNavigatorProperties {
  overlay?: Overlay
}

const DesktopNavigator = ({overlay}: DesktopNavigatorProperties) => {
  const {site: {siteMetadata: {menuLinks}}} = useStaticQuery(menuLinksQuery)
  const [visibility, setVisibility] = React.useState(false)
  const observeeRef = React.useRef(null)

  React.useLayoutEffect(() => {
    const observee = overlay?.element || observeeRef.current
    if (!observee) {
      return
    }
    
    const observer = new IntersectionObserver(([entry]) => {
      setVisibility(entry.isIntersecting)
    }, { threshold: overlay?.threshold || 0.75 })
    observer.observe(observee)
    return () => observer.unobserve(observee)
  }, [overlay, observeeRef])

  return (
    <>
      <div ref={observeeRef} className={`${overlay ? "h-0" : "h-24" }`}/>
      <nav className={`fixed w-full top-0 z-50 ${overlay && visibility ? "backdrop-blur-[1px]" : "bg-white"} ${visibility ? null : "shadow-lg"}`}>
        <Content>
          <div className="flex justify-between items-center h-24 p-4">
            <Link to="/">
              {overlay && visibility
                ? <StaticImage src="../../images/logo_white.png" alt="" height={56} layout="fixed" placeholder="none"/>
                : <StaticImage src="../../images/logo.png" alt="" height={56} layout="fixed" placeholder="none"/>
              }
            </Link>
            <div className={`flex text-lg lg:text-xl ${overlay && visibility ? "text-white" : null}`}>
              {menuLinks
                .filter((item: {link: string}) => item.link != "/")
                .map((item: {name: string, link: string}) => {
                  return (
                    <Link
                      to={item.link}
                      className=""
                    >
                      {item.name}
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </Content>
      </nav>
    </>
  )
}

export default DesktopNavigator