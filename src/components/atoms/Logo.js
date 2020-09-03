import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Logo = () => {
  const {
    strapiImages: {
      Image: {
        childImageSharp: { fluid },
      },
    },
  } = useStaticQuery(graphql`
    {
      strapiImages(Name: { eq: "logo" }) {
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
    <Link to="/">
      <Image fluid={fluid} className="navLogo" alt="Michał Nitka site logo" />
    </Link>
  )
}

export default Logo
