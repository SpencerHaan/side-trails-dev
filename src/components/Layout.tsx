import * as React from 'react'
import MediaLinks from './navigation/MediaLinks'
import MobileNavigator from './navigation/MobileNavigator'
import DesktopNavigator, { Overlay } from './navigation/DesktopNavigator'

type LayoutOptions = {
  addOverlay: (overlay: Overlay) => void
  removeOverlay: () => void
}

export const LayoutContext = React.createContext<LayoutOptions | null>(null)

interface LayoutProperties {
  children: React.ReactElement | React.ReactElement[]
}

const Layout = ({children}: LayoutProperties) => {
  const [overlay, setOverlay] = React.useState<Overlay>()

  const addOverlay = setOverlay
  const removeOverlay = () => setOverlay(undefined)

  return (
    <div className="flex flex-col min-h-screen font-base">
      <DesktopNavigator overlay={overlay}/>
      {/* <MobileNavigator/> */}
      <main className="flex flex-col flex-1">
        <LayoutContext.Provider value={{ addOverlay, removeOverlay }}>
          {children}
        </LayoutContext.Provider>
      </main>
      <footer className="flex flex-row items-center py-2 md:py-4 md:px-8 bg-zinc-800 text-white">
        <div className="hidden md:block">
          <MediaLinks.Source size={24}/>
        </div>
        <div className="flex flex-wrap flex-1 justify-center gap-1 text-xs md:text-sm italic">
          <p>
            &copy; 2023 Side Trails Software Development, Spencer Haan.
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

export default Layout