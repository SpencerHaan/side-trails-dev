import * as React from "react"
import { IconBaseProps } from "react-icons"
import {
  FaCode as SourceIcon,
  FaLinkedin as LinkedInIcon,
  FaSquareGithub as GithubIcon,
} from "react-icons/fa6"

const DEFAULT_ICON_SIZE = 24

interface IconLinkProperties {
  to: string
  type: React.ElementType<IconBaseProps>
  size?: number
}

const IconLink = ({to, type: Icon, size = DEFAULT_ICON_SIZE}: IconLinkProperties) => {
  return (
    <a href={to} target="_blank">
      <Icon size={size}/>
    </a>
  )
}

interface LinkProperties {
  size?: number
}

const LinkedInLink = (props: LinkProperties) => <IconLink to="https://www.linkedin.com/in/spencerhaan/" type={LinkedInIcon} {...props}/>
const GitHubLink = (props: LinkProperties) => <IconLink to="https://github.com/SpencerHaan" type={GithubIcon} {...props}/>
const SourceLink = (props: LinkProperties) => <IconLink to="https://github.com/SpencerHaan/side-trails-dev" type={SourceIcon} {...props}/>

namespace MediaLinks {
  export const LinkedIn = LinkedInLink
  export const GitHub  = GitHubLink
  export const Source = SourceLink
}

export default MediaLinks