import * as React from "react"
import { IconBaseProps } from "react-icons"

interface IconProperties {
  type: React.ElementType<IconBaseProps>
}

const Icon = ({type: Icon}: IconProperties) => {
  return (
    <div className="w-fit h-fit p-3 lg:p-6 flex items-center justify-center rounded-full drop-shadow bg-zinc-300 border border-zinc-400">
      <div className="hidden xl:block">
        <Icon size={32} className="text-zinc-500"/>
      </div>
      <div className="xl:hidden">
        <Icon size={24} className="text-zinc-500"/>
      </div>
    </div>
  )
}

export default Icon