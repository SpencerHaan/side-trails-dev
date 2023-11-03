import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

export interface ListCardProperties {
  title: string
  children: React.ReactElement<typeof Item>[]
}

const ListCard = ({title, children}: ListCardProperties) => {
  return (
    <div className="p-4 space-y-4 rounded-xl drop-shadow-lg bg-zinc-100">
      <p className="text-center text-3xl">
        {title}
      </p>
      {children}
    </div>
  )
}

enum Justify {
  Left,
  Right
}

interface ItemProperties {
  image: React.ReactElement
  justify: Justify
  children: React.ReactElement[] | string[]
}

const Item = ({image, justify, children}: ItemProperties) => {
  return (
    <div className="flex flex-row space-x-4">
      { justify === Justify.Left
          ? <div>{image}</div>
          : ""
      }
      <div className="flex flex-col justify-center gap-4">
        {children}
      </div>
      { justify === Justify.Right
          ? <div>{image}</div>
          : ""
      }
    </div>
  )
}
Item.Justify = Justify
ListCard.Item = Item

export default ListCard
