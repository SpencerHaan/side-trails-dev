import { useEffect, useState } from "react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
} from "./ui/navigation-menu"
import IconLink from "./ui/icon-link";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverAnchor } from "@radix-ui/react-popover";
import { XIcon, MenuIcon } from "lucide-react"

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
    const mediaQuery = window.matchMedia("(min-width: 768px)")
    const update = (e: MediaQueryListEvent | MediaQueryList) => setIsDesktop(e.matches)

    // Initial check
    update(mediaQuery)

    // Listener for changes
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return (
    <Popover>
      <PopoverAnchor className="w-full">
        <div className="flex items-center py-2 bg-background shadow">
          <button onClick={() => setOpen(!open)} className="md:hidden px-4">
            {open ? <XIcon /> : <MenuIcon />}
          </button>
          <a className="md:fixed md:px-4" href="/">
            <img className="h-8" src="./logo.png" />
          </a>
          <NavigationMenu className="mx-auto hidden md:flex gap-2">
            {links.map((link, i) =>
              <NavigationMenuItem key={i} asChild>
                <NavigationMenuLink href={link.path} className="hover:rounded-full">{link.label}</NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenu>
          <div className="fixed right-4 flex gap-2">
            <IconLink to="https://www.linkedin.com/in/spencerhaan/" name="fa6-brands:linkedin" size={24} />
            <IconLink to="https://github.com/SpencerHaan/side-trails-dev" name="fa6-brands:square-github" size={24} />
          </div>
        </div>
      </PopoverAnchor>

      {isDesktop ? null :
        <PopoverContent
          sideOffset={0}
          className="flex flex-col min-w-dvw border-0 rounded-none"
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
