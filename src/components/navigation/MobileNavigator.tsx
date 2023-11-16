import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"
import { 
  MdMenu as MenuIcon,
  MdClose as CloseIcon,
} from "react-icons/md";
import MediaLinks from "./MediaLinks";

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

const MobileNavigator = () => {
  const {site: {siteMetadata: {menuLinks}}} = useStaticQuery(menuLinksQuery)
  const {pathname} = useLocation()
  const [expanded, setExpanded] = React.useState(false)

  React.useEffect(() => {
    const html = document.querySelector("html")
    expanded
      ? html?.classList.add("overflow-hidden")
      : html?.classList.remove("overflow-hidden")
  }, [expanded])

  const handlePageLink = (link: string) => {
    if (pathname.startsWith(link)) {
      setExpanded(false)
    }
  }

  return (
    <nav className={`flex flex-col sticky ${expanded ? "min-h-screen" : "shadow"} z-50 top-0 w-full bg-white`}>
      <div className="grid">
        <div className="flex items-center justify-center h-12 p-2 col-start-1 col-end-1 row-start-1 row-end-1">
          <StaticImage src="../../images/logo.png" alt="" height={32} layout="fixed" placeholder="none"/>
        </div>
        <div
          onClick={() => setExpanded(!expanded)}
          className="absolute flex flex-col justify-center h-12 p-2 col-start-1 col-end-1 row-start-1 row-end-1"
        >
          {expanded
            ? <CloseIcon size={32}/>
            : <MenuIcon size={32}/>
          }
        </div>
      </div>
      <div hidden={!expanded} className={`${expanded ? "flex flex-col justify-between" : null} flex-1 p-4`}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col text-2xl gap-4">
            {menuLinks.map((item: { name: string, link: string }) =>
              <div key={item.name}>
                <Link to={item.link} onClick={() => handlePageLink(item.link)}>
                  {item.name}
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xl text-zinc-400">
            Social Media
          </div>
          <hr/>
          <div className="flex justify-between">
            <div className="flex flex-row gap-4">
              <div><MediaLinks.LinkedIn size={32}/></div>
              <div><MediaLinks.GitHub size={32}/></div>
            </div>
            <div><MediaLinks.Source size={32}/></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavigator