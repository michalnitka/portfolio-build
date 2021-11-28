import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaGithub, FaDesktop } from "react-icons/fa"

const Project = ({ projects }) => {
  return projects.map(card => {
    return (
      <div className="project-card" key={card.strapiId}>
        <div className="info">
          <h4>{card.title}</h4>
          <p>{card.description}</p>
          <div className="stack-wrapper">
            {card.stack.map(item => (
              <p key={item.id}>{item.name}</p>
            ))}
          </div>
          <div className="links-wrapper">
              {card.github && <a href={card.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
              </a>}

            <a href={card.url} target="_blank" rel="noopener noreferrer">
              <FaDesktop />
            </a>
          </div>
        </div>
        <div className="project-image">
          <Image fluid={card.image.childImageSharp.fluid} />
        </div>
      </div>
    )
  })
}

export default Project
