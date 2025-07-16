import { SunIcon, SunMoonIcon, MoonIcon } from "lucide-react"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  return (
    <button onClick={() => {}} className={className}>
      <SunIcon size={20} />
    </button>
  )
}
