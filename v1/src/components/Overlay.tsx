import * as React from "react"

interface OverlayProps {
  children?: React.ReactElement[]
}

const Overlay = ({ children }: OverlayProps) => {
  return (
    <div className="grid">
      {children?.map((child, i) => <div key={i} className="col-start-1 col-end-1 row-start-1 row-end-1">{child}</div>)}
    </div>
  )
}

export default Overlay