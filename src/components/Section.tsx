import * as React from 'react'
import Content from './Content'

interface ItemProperties {
  title: string
  subtitle?: string
  children?: React.ReactElement | React.ReactElement[]
}

const Item = ({title, subtitle, children}: ItemProperties) => {
  return (
    <Content>
      <div className="flex flex-col gap-3 md:gap-5">
        <div className="text-center text-2xl md:text-3xl 3xl:text-5xl">
          {title}
        </div>
        { subtitle
          ? <div className="pb-2 3xl:pb-4 text-xs md:text-base 3xl:text-lg text-center text-zinc-400">{subtitle}</div>
          : null
        }
        {children}
      </div>
    </Content>
  )
}

interface ListProperties {
  children?: React.ReactElement<typeof Item> | React.ReactElement<typeof Item>[]
}

const List = ({children}: ListProperties) => {
  return (
    <div>
      {Array.isArray(children)
        ? children.map((child, i) => <div className={`py-8 space-y-3 md:space-y-6 ${i % 2 === 0 ? "bg-white" : "bg-zinc-200"}`}>{child}</div>)
        : <div className="py-8 space-y-3 md:space-y-6 bg-white">{children}</div>
      }
    </div>
  )
}

interface SectionProperties {
  title: string
  subtitle?: string
  children?: React.ReactElement | React.ReactElement[]
}

const Section = ({title, subtitle, children}: SectionProperties) => {
  return (
    <List>
      <Item title={title} subtitle={subtitle}>
        {children}
      </Item>        
    </List>
  )
}

Section.Item = Item
Section.List = List

export default Section