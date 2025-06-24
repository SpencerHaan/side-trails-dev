import { useEffect, useState } from "react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"

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
function ResponsiveNavigator(props: NavigatorProps) {
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

  if (isDesktop == null) return;
  return (
    <>
      {isDesktop
        ? <DesktopNavigator {...props} />
        : <MobileNavigator {...props} />
      }
    </>
  )
}

function DesktopNavigator({ links }: NavigatorProps) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-8">
        {links.map((link, i) =>
          <NavigationMenuItem key={i}>
            <NavigationMenuLink asChild className="text-lg lg:text-xl 3xl:text-2xl font-bold hover:underline hover:underline-offset-8">
              <a href={link.path}>{link.label}</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNavigator(props: NavigatorProps) {
  return null
}
