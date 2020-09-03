import React from "react"
import Title from "../atoms/SectionTitle"
import Skills from "../atoms/Skills"

const SkillsSection = ({ styleClass }) => {
  return (
    <section className={`${styleClass ? styleClass : ""}`}>
      <Title
        title="Technologie, których użyłem do tej pory"
        styleClass="light"
      />
      <div className="cards-wrapper">
        <Skills type="frontend" />
        <Skills type="backend" />
        <Skills type="other" />
      </div>
    </section>
  )
}

export default SkillsSection
