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
        <div className="flex items-center px-1 bg-background">
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <XIcon /> : <MenuIcon />}
          </button>
          <NavigationMenu className="mx-auto hidden md:flex">
            {links.map((link, i) =>
              <NavigationMenuItem key={i} asChild>
                <NavigationMenuLink href={link.path} className="2xl:text-lg">{link.label}</NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenu>
          <div className="fixed right-0 flex p-2 gap-1">
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
