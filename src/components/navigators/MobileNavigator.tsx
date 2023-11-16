import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"
import { 
  MdMenu as MenuIcon,
  MdClose as CloseIcon,
} from "react-icons/md";

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

  return (
    <nav className={`sticky ${expanded ? "min-h-screen" : "shadow"} z-50 top-0 w-full bg-white`}>
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
      <div hidden={!expanded} className="p-4">
        <div className="flex flex-col text-xl gap-3">
          {menuLinks.map((item: { name: string, link: string }) =>
            <div>
              <Link to={item.link} onClick={() => {
                if (item.link === pathname) {
                  setExpanded(false)}
                }
              }>
                {item.name}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default MobileNavigator