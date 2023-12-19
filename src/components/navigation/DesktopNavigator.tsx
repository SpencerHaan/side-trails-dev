import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../Layout"

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
      <Layout.Container>
        <div className="flex justify-between items-center p-4">
          <div className="w-12 lg:w-16 3xl:w-20">
            <Link to="/">
                { overlay
                  ? <StaticImage src="../../images/logo_white.png" alt="Side Trails logo" placeholder="blurred"/>
                  : <StaticImage src="../../images/logo.png" alt="Side Trails logo" placeholder="blurred"/>
                }
            </Link>
          </div>
          <div className={`flex text-lg lg:text-xl 3xl:text-2xl ${overlay ? "text-white" : null}`}>
            {menuLinks.map((item: {name: string, link: string}) => {
                return (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="w-36 lg:w-40 text-center hover:font-bold"
                  >
                    {item.name}
                  </Link>
                )
              })
            }
          </div>
        </div>
      </Layout.Container>
    </nav>
  )
}

export default DesktopNavigator