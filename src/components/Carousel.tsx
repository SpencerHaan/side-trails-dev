import * as React from 'react'
import {
  TbSquareRoundedChevronLeftFilled as LeftArrow,
  TbSquareRoundedChevronRightFilled as RightArrow,
} from "react-icons/tb"
import Card from './Card'

interface ItemProperties {
  children: React.ReactElement
}

const Item = ({children}: ItemProperties) => {
  return (
    <div className="w-full">
      {children}
    </div>
  )
}

interface CarouselProperties {
  children: React.ReactElement<typeof Item>[]
}

const Carousel = ({children}: CarouselProperties) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const previousSlide = () => setCurrentIndex(currentIndex === 0 ? children.length - 1 : currentIndex - 1)
  const nextSlide = () => setCurrentIndex(currentIndex === children.length - 1 ? 0 : currentIndex + 1)

  return (
    <Card>
      <div className="flex">
        <button onClick={previousSlide} className="text-zinc-600 text-3xl">
          <LeftArrow/>
        </button>
        <div className="overflow-hidden relative">
          <div
            className="flex transition ease-out duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {
              children.map((child, index) => {
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    {child}
                  </div>
                )
              })
            }
          </div>
        <div className="w-full pb-4 flex justify-center gap-2">
            {
              children.map((_, index) => {
                const style = index === currentIndex
                  ? "w-6 bg-zinc-600"
                  : "w-3 bg-zinc-300"
                return <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  disabled={index === currentIndex}
                  className={`h-3 rounded-full ${style}`}
                />
              })
            }
          </div>
        </div>
        <button onClick={nextSlide} className="text-zinc-600 text-3xl">
          <RightArrow/>
        </button>
      </div>
    </Card>
  )
}

Carousel.Item = Item

export default Carousel
