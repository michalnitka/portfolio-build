import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          siteUrl
          title
        }
      }
    }
  `)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "title",
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        { property: `og:title`, content: site.siteMetadata.title },
        { property: `og:type`, content: `website` },
        {
          property: `og:image`,
          content: `https://res.cloudinary.com/dc53h4qn6/image/upload/v1599147890/portfolio-screen_pmruyo.png`,
        },
      ]}
    />
  )
}
SEO.defaultProps = {
  lang: `pl`,
  meta: [],
  description: ``,
}

export default SEO
