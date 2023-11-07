import * as React from "react"
import { evaluateSync } from "@mdx-js/mdx"
import { MDXProps } from "mdx/types"
import * as runtime from "react/jsx-runtime"

interface FragmentProperties extends MDXProps {
  children?: React.ReactElement
}

const Fragment = ({children}: FragmentProperties) => {
  return (
    <>
      {children}
    </>
  )
}

interface MdxRendererProperties {
  children?: string
}

const MdxRenderer = ({children}: MdxRendererProperties) => {
  if (!children) {
    return
  }
  
  const exports = React.useMemo(() => {
    return evaluateSync(children, { ...runtime, Fragment })
  }, [children])
  const Content = exports.default
  return(
    <>
      <Content/>
    </>
  )
}

export default MdxRenderer