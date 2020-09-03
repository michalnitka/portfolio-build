import React from "react"

const SectionTitle = ({ title, styleClass }) => {
  return (
    <h3 className={`section-title ${styleClass ? styleClass : ""}`}>{title}</h3>
  )
}

export default SectionTitle
