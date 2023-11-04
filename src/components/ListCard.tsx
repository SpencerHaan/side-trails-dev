import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Card from "./Card"

export interface ListCardProperties {
  title: string
  children: React.ReactElement<typeof Item>[]
}

const ListCard = ({title, children}: ListCardProperties) => {
  return (
    <Card>
      <p className="text-center text-3xl">
        {title}
      </p>
      <div>
        {children}
      </div>
    </Card>
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
