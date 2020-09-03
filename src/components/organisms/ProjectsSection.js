import React from "react"
import Project from "../atoms/Project"
import Title from "../atoms/SectionTitle"
import Button from "../atoms/CTA"

const ProjectsSection = ({ title, button, projects }) => {
  return (
    <section className="projects-wrapper" id="works">
      <Title title={title} styleClass="dark" />
      <Project projects={projects} />
      {button && (
        <Button direction="/projects" styledClass="secondary">
          All projects
        </Button>
      )}
    </section>
  )
}

export default ProjectsSection
