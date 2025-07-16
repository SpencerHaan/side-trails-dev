import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "./navigation-menu";
import { ThemeToggle } from "../ThemeToggle";
import { LinkedInIcon, GitHubIcon } from "./icons";

export default function DesktopNav({
  items,
  className = ""
} : {
  items: { label: string, href: string }[],
  className?: string
}) {
  return (
    <NavigationMenu
      viewport={false}
      className={cn(
        "relative justify-center gap-1 bg-background/90 backdrop-blur border rounded-lg shadow-sm p-1",
        className
      )}
    >
      {items.map((item, i) =>
        <NavigationMenuItem key={i} asChild>
          <NavigationMenuLink href={item.href} className="hover:rounded-lg">{item.label}</NavigationMenuLink>
        </NavigationMenuItem>
      )}
      <a className="absolute left-3" href="/">
        <img className="h-5" src="/logo.png" alt="Side Trails Software Development logo." />
      </a>
      <div className="absolute right-3 flex items-center gap-1">
        <a href="https://www.linkedin.com/in/spencerhaan/" target="_blank" className="p-1 hover:rounded-lg hover:bg-muted" aria-label="LinkedIn profile link.">
          <LinkedInIcon size={20} />
        </a>
        <a href="https://github.com/SpencerHaan/side-trails-dev" target="_blank" className="p-1 hover:rounded-lg hover:bg-muted" aria-label="GitHub website repository link.">
          <GitHubIcon size={20} />
        </a>
        <hr className="h-6 mx-2 border border-dashed" />
        <ThemeToggle className="p-1 hover:rounded-lg hover:bg-muted" />
      </div>
    </NavigationMenu>
  )
}
