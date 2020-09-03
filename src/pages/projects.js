import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/Layout"
import ProjectsSection from "../components/organisms/ProjectsSection"

const projects = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <ProjectsSection
        projects={projects}
        title="Moje projekty"
        button={false}
      />
    </Layout>
  )
}

export default projects

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        stack {
          name
          id
        }
        github
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        strapiId
      }
    }
  }
`
