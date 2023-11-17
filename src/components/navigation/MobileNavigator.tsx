import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"
import { 
  MdMenu as MenuIcon,
  MdClose as CloseIcon,
} from "react-icons/md";
import MediaLinks from "./MediaLinks";
import { Overlay } from "./DesktopNavigator";

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

interface MobileNavigatorProperties {
  overlay?: Overlay
}

const MobileNavigator = ({overlay}: MobileNavigatorProperties) => {
  const {site: {siteMetadata: {menuLinks}}} = useStaticQuery(menuLinksQuery)
  const [expanded, setExpanded] = React.useState(false)

  const [visibility, setVisibility] = React.useState(false)
  const observeeRef = React.useRef(null)

  React.useLayoutEffect(() => {
    const html = document.querySelector("html")
    expanded
      ? html?.classList.add("overflow-hidden")
      : html?.classList.remove("overflow-hidden")
  }, [expanded])
  
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
      <div ref={observeeRef} className={`${overlay ? "h-0" : "h-12" }`}/>
      <nav className={`fixed flex flex-col ${overlay && visibility && !expanded ? "backdrop-blur-[1px]" : "bg-white"} ${expanded ? "min-h-screen" : "shadow"} z-50 top-0 w-full`}>
        <div className="grid">
          <div className="flex items-center justify-center h-12 p-2 col-start-1 col-end-1 row-start-1 row-end-1">
            {overlay && visibility && !expanded
              ? <StaticImage src="../../images/logo_white.png" alt="" height={32} layout="fixed" placeholder="none"/>
              : <StaticImage src="../../images/logo.png" alt="" height={32} layout="fixed" placeholder="none"/>
            }
          </div>
          <div
            onClick={() => setExpanded(!expanded)}
            className="absolute flex flex-col justify-center h-12 p-2 col-start-1 col-end-1 row-start-1 row-end-1"
          >
            {expanded
              ? <CloseIcon size={32}/>
              : <MenuIcon size={32} className={`${overlay && visibility ? "text-white" : null}`}/> 
            }
          </div>
        </div>
        <div hidden={!expanded} className={`${expanded ? "flex flex-col justify-between" : null} flex-1 p-4 pt-8`}>
          <div className="flex flex-col text-3xl gap-6">
            {menuLinks.map((item: { name: string, link: string }) =>
              <div key={item.name}>
                <Link to={item.link} onClick={() => setExpanded(false)}>
                  {item.name}
                </Link>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl text-zinc-400">
              Social Media
            </div>
            <hr/>
            <div className="flex justify-between">
              <div className="flex flex-row gap-4">
                <div><MediaLinks.LinkedIn size={36}/></div>
                <div><MediaLinks.GitHub size={36}/></div>
              </div>
              <div><MediaLinks.Source size={36}/></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default MobileNavigator