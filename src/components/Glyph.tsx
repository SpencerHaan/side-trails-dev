import * as React from "react"
import { IconType } from "react-icons"

interface GlyphProperties {
  iconType: IconType
}

const RoundGlyph = ({ iconType: Icon }: GlyphProperties) => {
  return (
    <div className="flex flex-col text-center justify-center w-12 h-12 lg:w-14 lg:h-14 p-3 lg:p-4 rounded-full font-extrabold bg-zinc-300 border border-zinc-400 text-zinc-500">
      <Icon className="w-full h-full"/>
    </div>
  )
}

const SquareGlyph = ({ iconType: Icon }: GlyphProperties) => {
  return (
    <div className="flex flex-col text-center justify-center w-7 h-7 lg:w-10 lg:h-10 p-1 lg:p-2 rounded-lg lg:rounded-xl font-extrabold bg-zinc-500 text-zinc-50">
      <Icon className="w-full h-full"/>
    </div>
  )
}

export {
  RoundGlyph,
  SquareGlyph,
}