import * as React from 'react'

export interface BannerCardProperties {
  title: string
  className?: string
  children: React.ReactElement | React.ReactElement[]
}

const BannerCard = (props: BannerCardProperties) => {
  return (
    <div className={"py-12 space-y-8 " + props.className}>
      <p className="text-center text-4xl">
        {props.title}
      </p>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default BannerCard