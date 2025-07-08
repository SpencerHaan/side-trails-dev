import { cn } from "@/lib/utils"
import { SunIcon, SunMoonIcon, MoonIcon } from "lucide-react"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  return (
    <button className={cn("border p-1 bg-muted rounded-full", className)}>
      <MoonIcon size={20} />
    </button>
  )
}
