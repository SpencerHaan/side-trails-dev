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

interface MDXRendererProperties {
  children?: string
}

const MDXRenderer = ({children}: MDXRendererProperties) => {
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

export default MDXRenderer