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

interface DesktopNavigatorProperties {
  overlay?: boolean
}

const DesktopNavigator = ({overlay}: DesktopNavigatorProperties) => {
  const {site: {siteMetadata: {menuLinks}}} = useStaticQuery(menuLinksQuery)
  return (
    <nav className={overlay ? "backdrop-blur-[1px]" : "bg-white"}>
      <Content>
        <div className="flex justify-between items-center p-4">
          <div className="w-16 3xl:w-20">
            <Link to="/">
                { overlay
                  ? <StaticImage src="../../images/logo_white.png" alt="" placeholder="blurred"/>
                  : <StaticImage src="../../images/logo.png" alt="" placeholder="blurred"/>
                }
            </Link>
          </div>
          <div className={`flex text-lg lg:text-xl 3xl:text-2xl ${overlay ? "text-white" : null}`}>
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
  )
}

export default DesktopNavigator