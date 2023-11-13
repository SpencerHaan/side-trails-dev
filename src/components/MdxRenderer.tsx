import * as React from "react"
import { evaluateSync } from "@mdx-js/mdx"
import { MDXProps, MDXComponents } from "mdx/types"
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
  components?: MDXComponents
  children?: string
}

const MDXRenderer = ({children, components}: MDXRendererProperties) => {
  if (!children) {
    return
  }
  
  const exports = React.useMemo(() => {
    return evaluateSync(children, { ...runtime, Fragment })
  }, [children])
  const Content = exports.default
  return(
    <>
      <Content components={components}/>
    </>
  )
}

export default MDXRenderer