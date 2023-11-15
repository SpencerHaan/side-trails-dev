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
      <div className="text-center text-xl md:text-3xl 3xl:text-4xl pb-4 md:pb-0">
        {title}
      </div>
      <div className="flex flex-col gap-4">
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
    <div className={`flex ${imageOrientation === HorizontalOrientation.Left ? "flex-wrap" : "flex-wrap-reverse"} justify-center gap-4`}>
      { imageOrientation === HorizontalOrientation.Left
          ? <div className="flex justify-center max-w-[256px]">{image}</div>
          : ""
      }
      <div className="flex flex-col flex-1 justify-center gap-4">
        {children}
      </div>
      { imageOrientation === HorizontalOrientation.Right
          ? <div className="flex justify-center max-w-fit">{image}</div>
          : ""
      }
    </div>
  )
}

ListCard.Item = Item

export default ListCard
