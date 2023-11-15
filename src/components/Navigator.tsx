import React from "react"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useMediaQuery } from "react-responsive"
import resolveConfig from "tailwindcss/resolveConfig";
import { Config, ScreensConfig } from "tailwindcss/types/config";
import tailwindConfig from "../../tailwind.config";
import { TbMenu2 as MenuIcon } from "react-icons/tb";
import {
  FaCode as SourceIcon,
  FaLinkedin as LinkedInIcon,
  FaSquareGithub as GithubIcon,
} from "react-icons/fa6"

function useTailwindBreakpoint(screen: string, defaultValue?: boolean) {
  const { theme } = React.useMemo(() => {
    return resolveConfig(tailwindConfig as Config)
  }, [tailwindConfig])

  const screens = theme?.screens
  if (!screens) {
    return defaultValue
  }
  return useMediaQuery({ maxWidth: `${screens[screen as keyof ScreensConfig]}`})
}

const MobileNavigator = () => {
  const [expanded, setExpanded] = React.useState(false)
  const menuClickHandler = () => {
    setExpanded(!expanded)
  }
  const menuItemHandler = () => {
    setExpanded(false)
  }
  return (
    <nav className={`${expanded ? "fixed top-0 w-full min-h-screen overflow-hidden" : ""} bg-white`}>
      <div className="grid">
        <div className="flex items-center justify-center col-start-1 col-end-1 row-start-1 row-end-1">
          <StaticImage src="../images/logo.png" alt="" height={32} layout="fixed" placeholder="none"/>
        </div>
        <div onClick={menuClickHandler} className="p-2 col-start-1 col-end-1 row-start-1 row-end-1 cursor-pointer">
          <MenuIcon size={28}/>
        </div>
      </div>
      <div hidden={!expanded} className="overflow-hidden bg-white p-4">
        <ul className="flex flex-col gap-2 text-xl">
          <li className="hover:font-bold">
            <Link onClick={menuItemHandler} to="/">Home</Link>
          </li>
          <li className="hover:font-bold">
            <Link onClick={menuItemHandler} to="/projects">Projects</Link>
          </li>
          <li className="hover:font-bold">
            <Link onClick={menuItemHandler} to="/philosophy">Philosophy</Link>
          </li>
          <li className="hover:font-bold">
            <Link onClick={menuItemHandler} to="/about">About</Link>
          </li>
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
          <li>
            <Link to="https://github.com/SpencerHaan/side-trails-dev">
              <SourceIcon size={24}/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const DesktopNavigator = ({className, overlay = false}: NavigatorProperties) => {
  return (
    <nav className={`${className}`}>
      <ul className="flex flex-row gap-10 items-center text-xl 3xl:text-2xl">
        <li className="flex-1">
          <Link to="/">
            {
              overlay
                ? <StaticImage src="../images/logo_white.png" alt="" height={48} layout="fixed" placeholder="none"/>
                : <StaticImage src="../images/logo.png" alt="" height={48} layout="fixed" placeholder="none"/>
            }
          </Link>
        </li>
        <li className="hover:font-bold text-center">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hover:font-bold text-center">
          <Link to="/philosophy">Philosophy</Link>
        </li>
        <li className="hover:font-bold text-center">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export interface NavigatorProperties {
  className?: string
  overlay?: boolean
}

export function Navigator(props: NavigatorProperties) {
  const isMobile = useTailwindBreakpoint("md")
  return (
    <>
      {isMobile
        ? <MobileNavigator/>
        : <DesktopNavigator {...props}/>
      }
    </>
  )
}