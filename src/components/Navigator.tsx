import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export interface NavigatorProperties {
  className?: string
  overlay?: boolean
}

export function Navigator({className, overlay = false}: NavigatorProperties) {
  return (
    <nav className={className}>
      <ul className="flex items-center">
        <li className="mr-auto">
          <Link to="/">
            {
              overlay
                ? <StaticImage src="../images/logo_white.png" alt="" height={48} layout="fixed" placeholder="none"/>
                : <StaticImage src="../images/logo.png" alt="" height={48} layout="fixed" placeholder="none"/>
            }
          </Link>
        </li>
        <li className="w-24 hover:font-bold text-center">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="w-24 ml-5 hover:font-bold text-center">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}