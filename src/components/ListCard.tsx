import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Card from "./Card"
import { HorizontalOrientation } from "../utilities/HorizontalOrientation"

export interface ListCardProperties {
  title: string
  children: React.ReactElement<typeof Item>[]
}

const ListCard = ({title, children}: ListCardProperties) => {
  return (
    <Card>
      <p className="text-center text-4xl">
        {title}
      </p>
      <div>
        {children}
      </div>
    </Card>
  )
}

interface ItemProperties {
  image: React.ReactElement
  imageOrientation: HorizontalOrientation
  children: React.ReactElement[] | string[]
}

const Item = ({image, imageOrientation, children}: ItemProperties) => {
  return (
    <div className="flex flex-row space-x-4">
      { imageOrientation === HorizontalOrientation.Left
          ? <div>{image}</div>
          : ""
      }
      <div className="flex flex-col justify-center gap-4">
        {children}
      </div>
      { imageOrientation === HorizontalOrientation.Right
          ? <div>{image}</div>
          : ""
      }
    </div>
  )
}

ListCard.Item = Item

export default ListCard
