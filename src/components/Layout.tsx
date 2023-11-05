import * as React from 'react'
import { Link } from 'gatsby'
import { Navigator } from './Navigator'
import { StaticImage } from 'gatsby-plugin-image'

export interface LayoutProperties {
  hero?: HeroProperties
  children: React.ReactElement | React.ReactElement[]
}

export interface HeroProperties {
  image: React.ReactElement<typeof StaticImage>
  content: React.ReactElement
}

const Layout = ({hero, children}: LayoutProperties) => {
  const [overlayNavigator, setOverlayNavigator] = React.useState(Boolean(hero))
  const heroReference = React.useRef(null)

  React.useEffect(() => {
    const hero = heroReference.current
    if (!hero) {
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setOverlayNavigator(entry.isIntersecting)
    }, {
      threshold: 0.95
    })
    observer.observe(hero)
    return () => observer.unobserve(hero)
  }, [overlayNavigator, setOverlayNavigator, heroReference])

  return (
    <div className="min-h-screen font-base flex flex-col">
      <header
        className={`w-full z-50 shadow-xl
          ${hero ? "fixed" : "sticky"} top-0
          ${overlayNavigator ? "backdrop-blur-[1px] text-white" : "bg-white"}
          transition ease-in-out duration-200
        `}
      >
        <Navigator overlay={overlayNavigator} className="w-1/2 mx-auto py-5 text-xl"/>
      </header>
      <main className="mb-auto">
        {hero
          ?  <div ref={heroReference} className="grid shadow-xl">
              <div className="col-start-1 col-end-1 row-start-1 row-end-1">
                {hero.image}
              </div>
              <div className="col-start-1 col-end-1 row-start-1 row-end-1 relative">
                <div className="h-full flex flex-col">
                  {hero.content}
                </div>
              </div>
            </div>
          : ""
        }
        {children}
      </main>
      <footer className="p-4 grid grid-cols-3 bg-zinc-800 text-white">
        <div></div>
        <p className="text-center text-sm italic">
          &copy; 2023 Side Trails Software Development, Spencer Haan. All rights reserved.
        </p>
        <ul className="ml-auto space-x-2 flex">
          <li>
            <Link to="https://linkedin.com">
              {/* <!-- Linkedin --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="https://github.com">
              {/* <!-- Github --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout