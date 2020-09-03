import React from "react"
import { Link } from "gatsby"

const CTA = ({ children, direction, styledClass }) => {
  return (
    <Link to={direction} className={`btn ${styledClass ? styledClass : ""}`}>
      {children}
    </Link>
  )
}

export default CTA
