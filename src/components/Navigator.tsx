import { useEffect, useState } from "react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
} from "./ui/navigation-menu"
import { Popover, PopoverAnchor, PopoverContent } from "./ui/popover";
import { XIcon, MenuIcon } from "lucide-react"
import { LinkedInIcon, GitHubIcon } from "./ui/icons";
import { ThemeToggle } from "./ThemeToggle";

export interface NavigatorLink {
  label: string
  path: string
}

export interface NavigatorProps {
  links: NavigatorLink[]
}

export default function Navigator(props: NavigatorProps) {
  return <ResponsiveNavigator {...props} />
}

// NOTE: Throws an error regarding use of hooks if it's the top level component, presumably because of Astro's island architecture
function ResponsiveNavigator({ links }: NavigatorProps) {
  const [open, setOpen] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)")
    const update = (e: MediaQueryListEvent | MediaQueryList) => setIsDesktop(e.matches)

    // Initial check
    update(mediaQuery)

    // Listener for changes
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return (
    <Popover>
      <PopoverAnchor className="w-5xl mx-4">
        <div className="relative h-12 rounded-b-2xl flex items-center bg-background shadow">
          <a className="absolute left-2 lg:left-4" href="">
            <img className="h-6" src="logo.png" />
          </a>
          <NavigationMenu className="mx-auto hidden sm:flex gap-2">
            {links.map((link, i) =>
              <NavigationMenuItem key={i} asChild>
                <NavigationMenuLink href={link.path} className="text-base hover:rounded-full">{link.label}</NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenu>
          <div className="absolute right-2 lg:right-4 flex gap-2 text-muted-foreground items-center">
            <a href="https://www.linkedin.com/in/spencerhaan/" target="_blank" className="p-1 hover:rounded-lg hover:bg-muted">
              <LinkedInIcon size={20} />
            </a>
            <a href="https://github.com/SpencerHaan/side-trails-dev" target="_blank" className="p-1 hover:rounded-lg hover:bg-muted">
              <GitHubIcon size={20} />
            </a>
            <ThemeToggle />
            <button onClick={() => setOpen(!open)} className="sm:hidden ml-2">
              {open ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </PopoverAnchor>

      {isDesktop ? null :
        <PopoverContent
          align="end"
          sideOffset={8}
          className="flex flex-col"
          style={{
            visibility: open ? "visible" : "hidden"
          }}
        >
          <ul className="flex flex-col gap-2">
            {links.map((link, i) =>
              <li key={i}>
                <a href={link.path} onClick={() => setOpen(false)} className="text-lg">{link.label}</a>
              </li>
            )}
          </ul>
        </PopoverContent>
      }
    </Popover>
  )
}
