import { Icon } from "@iconify/react"

const DEFAULT_ICON_SIZE = 24

interface IconLinkProps {
  to: string
  name: string
  size?: number
}

export default function IconLink({ to, name, size = DEFAULT_ICON_SIZE }: IconLinkProps) {
  return (
    <a href={to} target="_blank">
      <Icon icon={name} width={size} height={size}/>
    </a>
  )
}
