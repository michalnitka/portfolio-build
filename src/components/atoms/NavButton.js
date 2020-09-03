import React from "react"
import { FaAlignRight } from "react-icons/fa"

const Button = ({ toggleSidebar }) => {
  return (
    <button type="button" className="navBtn" onClick={toggleSidebar}>
      <FaAlignRight />
    </button>
  )
}

export default Button
