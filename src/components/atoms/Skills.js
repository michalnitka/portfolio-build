import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image/withIEPolyfill"

const Skills = ({ type }) => {
  const data = useStaticQuery(graphql`
    {
      allStrapiSkills {
        nodes {
          Technology
          Image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          strapiId
          type
        }
      }
    }
  `)

  const {
    allStrapiSkills: { nodes },
  } = data

  const skillsCard = nodes
    .filter(skill => skill.type === type)
    .map(skill => {
      return (
        <li key={skill.strapiId} className="skill-card">
          <h4>{skill.Technology}</h4>
          <Image
            fluid={skill.Image.childImageSharp.fluid}
            objectFit="contain"
          />
        </li>
      )
    })

  return (
    <div className="skills-cards">
      <h4 className="skills-type">{type}</h4>
      <ul>{skillsCard}</ul>
    </div>
  )
}

export default Skills
