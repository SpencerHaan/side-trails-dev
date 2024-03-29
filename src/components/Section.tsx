import * as React from 'react'
import Layout from './Layout'

interface Heading {
  title: string
  subtitle?: string | string[]
}

interface ItemProperties {
  anchor?: string
  heading?: Heading
  children?: React.ReactElement | React.ReactElement[]
}

const Item = ({anchor, heading, children}: ItemProperties) => {
  return (
    <div id={anchor}>
      <Layout.Container>
        <div className="flex flex-col gap-3 md:gap-5">
          {heading?.title
            ? <div className="text-center text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl">{heading.title}</div>
            : null
          }
          { heading?.subtitle
            ? <div className="pb-2 xl:pb-3 3xl:pb-4 text-xs md:text-base xl:text-lg 3xl:text-xl text-center text-zinc-400">
                { Array.isArray(heading.subtitle)
                    ? heading.subtitle.map((s, i) => <p key={i}>{s}</p>)
                    : heading.subtitle
                }
              </div>
            : null
          }
          {children}
        </div>
      </Layout.Container>
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
        ? children.map((child, i) => <div key={i} className={`py-8 xl:py-12 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50"}`}>{child}</div>)
        : <div className="py-8 xl:py-12 bg-white">{children}</div>
      }
    </div>
  )
}

interface SectionProperties {
  anchor?: string
  heading?: Heading
  children?: React.ReactElement | React.ReactElement[]
}

const Section = ({anchor, heading, children}: SectionProperties) => {
  return (
    <List>
      <Item anchor={anchor} heading={heading}>
        {children}
      </Item>        
    </List>
  )
}

Section.Item = Item
Section.List = List

export default Section