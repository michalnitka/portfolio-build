import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImage = () => {
  const {
    strapiImages: {
      Image: {
        childImageSharp: { fluid },
      },
    },
  } = useStaticQuery(graphql`
    {
      strapiImages(Name: { eq: "hero" }) {
        Image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <div className="hero-img">
      <Img fluid={fluid} />
    </div>
  )
}

export default HeroImage
