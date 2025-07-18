import { useState } from "react"
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from "./popover"
import { Button } from "./button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "../ThemeToggle"

export default function MobileNav({
  items,
  className = ""
} : {
  items: { label: string, href: string }[],
  className?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn(
      "bg-background/90 backdrop-blur border rounded-lg shadow-sm",
      className
    )}>
      <Popover open={open} onOpenChange={setOpen} modal={true}>
        <PopoverAnchor className="flex justify-between items-center w-full">
          <PopoverTrigger asChild>
            <Button variant="ghost">
              <MenuIcon open={open} />
              <span className="sr-only">Menu Toggle</span>
            </Button>
          </PopoverTrigger>
          <a className="left-2 lg:left-4" href="/">
            <img className="h-5" src="/logo.png" alt="Side Trails Software Development logo." />
          </a>
          <ThemeToggle className="px-2.5" />
        </PopoverAnchor>
        <PopoverContent
          align="start"
          side="bottom"
          sideOffset={8}
          className="bg-background/90 backdrop-blur w-(--radix-popper-anchor-width)"
        >
          <ul className="space-y-3">
            {items.map((item, i) => (
              <MenuLinkItem key={i} {...item} />
            ))}
            <hr className="border-dashed" />
            <MenuLinkItem label="LinkedIn" href="https://www.linkedin.com/in/spencerhaan/" target="_blank" onClick={() => setOpen(false)} />
            <MenuLinkItem label="GitHub" href="https://github.com/SpencerHaan/side-trails-dev" target="_blank" onClick={() => setOpen(false)} />
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  )
}

function MenuIcon({
  open = false
} : {
  open: boolean
}) {
  return (
    <div className="relative w-4 h-4 my-auto">
      <MenuIconLine className={cn(
        "top-1/6",
        open ? "top-1/2 -translate-y-1/2 -rotate-45" : null
      )} />
      <MenuIconLine className={open ? "w-0" : ""} />
      <MenuIconLine className={cn(
        "top-5/6",
        open ? "top-1/2 -translate-y-1/2 rotate-45" : null
      )} />
    </div>
  )
}

function MenuIconLine({
  className = ""
} : {
  className?: string
}) {
  return (
    <div className={cn(
      "absolute bg-foreground rounded w-full h-0.5 top-1/2 left-1/2 -translate-1/2 transition-all duration-300",
      className
    )} />
  )
}

function MenuLinkItem({
  label,
  href,
  target,
  onClick
} : {
  label: string
  href: string
  target?: string
  onClick?: () => void
}) {
  return (
    <li>
      <a href={href} onClick={onClick} target={target}>{label}</a>
    </li>
  )
}
