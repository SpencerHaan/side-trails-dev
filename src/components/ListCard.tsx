import * as React from "react"
import Card from "./Card"
import { Orientation } from "../utilities"

export interface ListCardProperties {
  title: string
  children: React.ReactElement<typeof Item>[]
}

const ListCard = ({title, children}: ListCardProperties) => {
  return (
    <Card heading={title}>
      <div className="flex flex-col gap-12 lg:gap-6">
        {children}
      </div>
    </Card>
  )
}

interface ItemProperties {
  image: React.ReactElement
  imageOrientation: Orientation.Horizontal
  children: React.ReactElement[] | string[]
}

const Item = ({image, imageOrientation, children}: ItemProperties) => {
  const ItemImage = () => (
    <div className="flex justify-center max-w-[192px] md:max-w-[224px] rounded-xl overflow-clip bg-white">
      {image}
    </div>
  )
  return (
    <div className={`flex ${imageOrientation === Orientation.Horizontal.Left ? "flex-wrap" : "flex-wrap-reverse"} justify-center gap-4`}>
      { imageOrientation === Orientation.Horizontal.Left
          ? <ItemImage/>
          : null
      }
      <div className="flex flex-col flex-1 justify-center gap-4 min-w-[320px]">
        {children}
      </div>
      { imageOrientation === Orientation.Horizontal.Right
          ? <ItemImage/>
          : null
      }
    </div>
  )
}

ListCard.Item = Item

export default ListCard
