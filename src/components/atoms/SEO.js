import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ lang }) => {
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

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          name: "title",
          content: site.siteMetadata.title,
        },
        {
          property: "og:url",
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        { property: `og:title`, content: site.siteMetadata.title },
        { property: `og:type`, content: `website` },
        {
          property: `og:image:url`,
          content: `https://res.cloudinary.com/dc53h4qn6/image/upload/v1599149550/portfolio-screen_iuye6z.png`,
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
