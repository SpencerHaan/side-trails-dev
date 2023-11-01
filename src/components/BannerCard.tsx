import * as React from 'react'

export interface BannerCardProperties {
  title: string
  description?: string
  className?: string
  children: React.ReactElement | React.ReactElement[]
}

const BannerCard = ({title, description, className, children}: BannerCardProperties) => {
  return (
    <div className={"py-12 space-y-8 " + className}>
      <p className="text-center text-4xl">
        {title}
      </p>
      <div className="w-1/2 m-auto space-y-8">
        { description
          ?  
            <p className="pb-4 text-center text-gray-400">
              {description}
            </p>
          : ""
        }
        {children}
      </div>
    </div>
  )
}

export default BannerCard