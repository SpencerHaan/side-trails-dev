import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { 
  MdMenu as MenuIcon,
  MdClose as CloseIcon,
} from "react-icons/md";
import MediaLinks from "./MediaLinks";
import Collapsible from "../Collapsible";

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
  overlay?: boolean
}

const MobileNavigator = ({overlay}: MobileNavigatorProperties) => {
  const {site: {siteMetadata: {menuLinks}}} = useStaticQuery(menuLinksQuery)
  const [expanded, setExpanded] = React.useState(false)

  React.useLayoutEffect(() => {
    const html = document.querySelector("html")
    expanded
      ? html?.classList.add("overflow-hidden")
      : html?.classList.remove("overflow-hidden")
  }, [expanded])

  return (
    <nav>
      <div className={`grid ${overlay && !expanded ? "backdrop-blur-[1px]" : "bg-white"}`}>
        <div className="flex items-center justify-center h-12 p-2 col-start-1 col-end-1 row-start-1 row-end-1">
          {overlay && !expanded
            ? <StaticImage src="../../images/logo_white.png" alt="" height={32} layout="fixed" placeholder="none"/>
            : <StaticImage src="../../images/logo.png" alt="" height={32} layout="fixed" placeholder="none"/>
          }
        </div>
        <div
          onClick={() => setExpanded(!expanded)}
          className={`absolute flex flex-col justify-center h-12 p-2 col-start-1 col-end-1 row-start-1 row-end-1`}
        >
          {expanded
            ? <CloseIcon size={32}/>
            : <MenuIcon size={32} className={`${overlay ? "text-white" : null}`}/> 
          }
        </div>
        <div className="col-start-1 col-end-1 row-start-1 row-end-1">
          <Collapsible expanded={expanded}>
            <div className="flex flex-col justify-between min-h-screen p-4 pt-20 bg-white">
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
          </Collapsible>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavigator