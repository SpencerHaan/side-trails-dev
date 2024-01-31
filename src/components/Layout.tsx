import * as React from 'react'
import MediaLinks from './navigation/MediaLinks'
import Header, { Hero } from './Header'

const Container = ({ children }: { children?: string | React.ReactElement | React.ReactElement[] | null}) => {
  return (
    <div className="m-3 sm:m-auto sm:w-5/6 md:w-5/6 lg:w-3/4 2xl:w-3/5 3xl:w-1/2">
      {children}
    </div>
  )
}

type LayoutOptions = {
  setHero: (hero: Hero) => void
  clearHero: () => void
}

export const LayoutContext = React.createContext<LayoutOptions | null>(null)

export function useLayoutControls(): LayoutOptions {
  const options = React.useContext(LayoutContext)
  return options ? {
      setHero: options.setHero,
      clearHero: options.clearHero,
    } : {
      setHero: () => {},
      clearHero: () => {},
    }
}

interface LayoutProperties {
  children: React.ReactElement | React.ReactElement[]
}

const Layout = ({children}: LayoutProperties) => {
  const [hero, setHero] = React.useState<Hero>()
  const clearHero = () => setHero(undefined)

  return (
    <div className="flex flex-col min-h-screen font-base">
      <Header hero={hero}/>
      <main className="flex flex-col flex-1">
        <LayoutContext.Provider value={{ setHero, clearHero }}>
          {children}
        </LayoutContext.Provider>
      </main>
      <footer className="flex flex-row items-center py-2 md:py-4 md:px-8 bg-zinc-800 text-white">
        <div className="hidden md:block">
          <MediaLinks.Source size={24}/>
        </div>
        <div className="flex flex-wrap flex-1 justify-center gap-1 text-xs md:text-sm italic">
          <p>
            &copy; {new Date().getFullYear()} Side Trails Software Development, Spencer Haan.
          </p>
          <p>
            All rights reserved.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row gap-2">
            <MediaLinks.LinkedIn size={24}/>
            <MediaLinks.GitHub size={24}/>
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.Container = Container

export default Layout