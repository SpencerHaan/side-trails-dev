import * as React from 'react'

export interface SlideProperties {
  children: React.ReactElement
}

export function Slide({children}: SlideProperties) {
  return (
    <div className="w-full">
      {children}
    </div>
  )
}

export interface CarouselProperties {
  children: React.ReactElement<typeof Slide>[]
}

export default function Carousel({children}: CarouselProperties) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const carouselReference = React.useRef<HTMLDivElement | null>(null);
  const slideReferences = children.map((_) => React.useRef<HTMLDivElement | null>(null))

  React.useEffect(() => {
    const carousel = carouselReference.current
    if (!carousel) {
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>  {
        if (entry.isIntersecting) {
          const index = slideReferences.map((ref) => ref.current).indexOf(entry.target as HTMLDivElement)
          setCurrentIndex(index)
        }
      })
    }, {
      root: carousel,
      threshold: 0.5,
    })
    children.forEach((_, index) => {
      const slide = slideReferences[index].current
      if (slide) {
        observer.observe(slide)
      }
    })
    return () => children.forEach((_, index) => {
      const slide = slideReferences[index].current
      if (slide) {
        observer.unobserve(slide)
      }
    })
  }, [carouselReference, slideReferences])

  return (
    <div className="w-full mx-auto rounded-xl drop-shadow-lg bg-zinc-100">
      <div
        ref={carouselReference}
        className="flex flex-row overflow-x-scroll snap-x snap-mandatory"
        style={{
          paddingBottom: "15px",
          clipPath: "inset(0 0 15px 0)",
        }}
      >
        {
          children.map((child, index) => {
            return (
              <div key={index} ref={slideReferences[index]} className="w-full flex-shrink-0 snap-start">
                {child}
              </div>
            )
          })
        }
      </div>
      <div className="pb-4 space-x-2 text-center">
        {
          slideReferences.map((_, index) => {
            return (index === currentIndex
              ? <button className="w-6 h-3 bg-zinc-600 rounded-full" />
              : <button className="w-3 h-3 bg-zinc-300 rounded-full" />
            )
          })
        }
      </div>
    </div>
  )
}
