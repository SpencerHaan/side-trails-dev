import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export interface NavigatorProperties {
  className?: string
  overlay?: boolean
}

export function Navigator({className, overlay = false}: NavigatorProperties) {
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