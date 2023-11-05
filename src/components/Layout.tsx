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
          : ""
        }
        {children}
      </main>
      <footer className="p-4 grid grid-cols-3 bg-zinc-800 text-white">
        <div>
          <a href="https://github.com/SpencerHaan/side-trails-dev">
            <SourceIcon size={24}/>
          </a>
        </div>
        <div className="text-center text-sm italic">
          &copy; 2023 Side Trails Software Development, Spencer Haan. All rights reserved.
        </div>
        <div className="ml-auto">
          <ul className="flex gap-x-3">
            <li>
              <Link to="https://www.linkedin.com/in/spencerhaan/">
                <LinkedInIcon size={24}/>
              </Link>
            </li>
            <li>
              <Link to="https://github.com/SpencerHaan">
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