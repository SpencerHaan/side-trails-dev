import * as React from 'react'
import Content from './Content'

interface ItemProperties {
  anchor?: string
  title: string | React.ReactElement | React.ReactElement[]
  subtitle?: string | React.ReactElement | React.ReactElement[]
  children?: React.ReactElement | React.ReactElement[]
}

const Item = ({anchor, title, subtitle, children}: ItemProperties) => {
  return (
    <div id={anchor}>
      <Content>
        <div className="flex flex-col gap-3 md:gap-5">
          <div className="text-center text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl">
            {title}
          </div>
          { subtitle
            ? <div className="pb-2 xl:pb-3 3xl:pb-4 text-xs md:text-base xl:text-lg 3xl:text-xl text-center text-zinc-400">{subtitle}</div>
            : null
          }
          {children}
        </div>
      </Content>
    </div>
  )
}

interface ListProperties {
  children?: React.ReactElement<typeof Item> | React.ReactElement<typeof Item>[]
}

const List = ({children}: ListProperties) => {
  return (
    <div>
      {Array.isArray(children)
        ? children.map((child, i) => <div key={i} className={`py-8 xl:py-12 ${i % 2 === 0 ? "bg-white" : "bg-zinc-200"}`}>{child}</div>)
        : <div className="py-8 xl:py-12 bg-white">{children}</div>
      }
    </div>
  )
}

interface SectionProperties {
  anchor?: string
  title: string | React.ReactElement | React.ReactElement[]
  subtitle?: string | React.ReactElement | React.ReactElement[]
  children?: React.ReactElement | React.ReactElement[]
}

const Section = ({anchor, title, subtitle, children}: SectionProperties) => {
  return (
    <List>
      <Item anchor={anchor} title={title} subtitle={subtitle}>
        {children}
      </Item>        
    </List>
  )
}

Section.Item = Item
Section.List = List

export default Section