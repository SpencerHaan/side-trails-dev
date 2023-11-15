import * as React from 'react'
import { Link } from 'gatsby'
import { Navigator } from './Navigator'
import { StaticImage } from 'gatsby-plugin-image'
import {
  FaCode as SourceIcon,
  FaLinkedin as LinkedInIcon,
  FaSquareGithub as GithubIcon,
} from "react-icons/fa6"

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
    <div className="flex flex-col min-h-screen font-base">
      <header
        className={`w-full z-50 shadow-xl
          ${hero ? "fixed" : "sticky"} top-0
          ${overlayNavigator ? "backdrop-blur-[1px] text-white" : "bg-white"}
          transition ease-in-out duration-200
        `}
      >
        <Navigator overlay={overlayNavigator}/>
      </header>
      <main className="flex flex-col flex-1">
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
          : null
        }
        {children}
      </main>
      <footer className="flex flex-row items-center p-4 bg-zinc-800 text-white">
        <div className="hidden md:block">
          <Link to="https://github.com/SpencerHaan/side-trails-dev" target="_blank">
            <SourceIcon size={24}/>
          </Link>
        </div>
        <div className="flex flex-wrap flex-1 justify-center gap-1 text-xs md:text-sm italic">
          <p>
            &copy; 2023 Side Trails Software Development, Spencer Haan.
          </p>
          <p>
            All rights reserved.
          </p>
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row gap-3">
            <li>
              <Link to="https://www.linkedin.com/in/spencerhaan/" target="_blank">
                <LinkedInIcon size={24}/>
              </Link>
            </li>
            <li>
              <Link to="https://github.com/SpencerHaan" target="_blank">
                <GithubIcon size={24}/>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Layout