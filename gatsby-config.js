/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Michał Nitka Portfolio",
    description: "Its Michał Nitka portfolio site",
    author: "Mihcał Nitka",
    siteUrl: "https://michal-nitka-portfolio.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://michalnitka-portfolio-backend.herokuapp.com`,
        queryLimit: 1000,
        contentTypes: ["images", "skills", "projects"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
  ],
}
