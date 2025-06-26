import { Icon } from "@iconify/react"

interface IconButtonProps {
  name: string
  size?: number
  onClick?: () => void
}

export default function IconButton({ name, size, onClick = () => {} }: IconButtonProps) {
  return (
    <button onClick={onClick}>
      <Icon icon={name} width={size} height={size} />
    </button>
  )
}
