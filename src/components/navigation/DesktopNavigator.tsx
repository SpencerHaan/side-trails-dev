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

const DesktopNavigator = () => {
  const {site: {siteMetadata: {menuLinks}}} = useStaticQuery(menuLinksQuery)
  const [visibility, setVisibility] = React.useState(false)
  const observeeRef = React.useRef(null)

  React.useEffect(() => {
    const observee = observeeRef.current
    if (!observee) {
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setVisibility(!entry.isIntersecting)
    }, { threshold: 0.75 })
    observer.observe(observee)
    return () => observer.unobserve(observee)
  }, [observeeRef])

  return (
    <>
      <div ref={observeeRef} className="h-24"/>
      <nav className={`fixed w-full top-0 z-50 bg-white ${visibility ? "shadow-lg" : null} transition ease-in-out duration-300`}>
        <Content>
          <div className="flex justify-between items-center h-24 p-4">
            <Link to="/">
              <StaticImage src="../../images/logo.png" alt="" height={56} layout="fixed"/>
              {/* {intersecting
                ? <StaticImage src="../../images/logo.png" alt="" height={56} layout="fixed"/>
                : <StaticImage src="../../images/logo_white.png" alt="" height={56} layout="fixed"/>
              } */}
            </Link>
            <div className="flex text-lg">
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