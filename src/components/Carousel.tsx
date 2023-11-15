import * as React from 'react'
import {
  TbSquareRoundedChevronLeftFilled as LeftArrow,
  TbSquareRoundedChevronRightFilled as RightArrow,
} from "react-icons/tb"
import Card from './Card'
import { useDrag } from "@use-gesture/react"

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
  const carouselRef = React.useRef<HTMLDivElement>(null)

  const previousSlide = () => setCurrentIndex(currentIndex === 0 ? children.length - 1 : currentIndex - 1)
  const nextSlide = () => setCurrentIndex(currentIndex === children.length - 1 ? 0 : currentIndex + 1)

  const bind = useDrag(({active, movement: [mx], direction: [xDir], cancel}) => {
    const carousel = carouselRef.current
    if (!carousel) {
      return
    }

    if (active && Math.abs(mx) > carousel.offsetWidth / 3) {
      if (xDir > 0) {
        nextSlide()
      } else if (xDir < 0) {
        previousSlide()
      }
      cancel()
    }
  }, { axis: "x" })

  return (
    <Card>
      <div ref={carouselRef} className="flex touch-pan-y lg:touch-none" {...bind()}>
        <button onClick={previousSlide} className="hidden md:block text-zinc-600">
          <LeftArrow size={36}/>
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
        <div className="w-full py-2 md:py-4 flex justify-center gap-2">
            {
              children.map((_, index) => {
                const style = index === currentIndex
                  ? "w-8 bg-zinc-600"
                  : "w-4 bg-zinc-300"
                return <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  disabled={index === currentIndex}
                  className={`h-4 rounded-full ${style}`}
                />
              })
            }
          </div>
        </div>
        <button onClick={nextSlide} className="hidden md:block text-zinc-600">
          <RightArrow size={36}/>
        </button>
      </div>
    </Card>
  )
}

Carousel.Item = Item

export default Carousel
