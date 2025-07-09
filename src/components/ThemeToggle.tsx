import { cn } from "@/lib/utils"
import { SunIcon, SunMoonIcon, MoonIcon } from "lucide-react"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  return (
    <button onClick={() => {}} className={cn("p-1 hover:rounded-lg hover:bg-muted", className)}>
      <SunIcon size={20} />
    </button>
  )
}
