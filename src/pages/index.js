import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/atoms/SEO"
import Layout from "../components/templates/Layout"
import HeroSection from "../components/organisms/HeroSection"
import SkillsSection from "../components/organisms/SkillsSection"
import ProjectsSection from "../components/organisms/ProjectsSection"

export default function Home({ data }) {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO />
      <HeroSection styleClass="section-dark" />
      <SkillsSection styleClass="section-light" />
      <ProjectsSection projects={projects} title="Przypięte projekty" button />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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
