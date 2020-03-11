/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  /* Your site config here */
  pathPrefix: "/portfolio",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aleksandra Kondricz`,
        short_name: `Frontend developer at your service`,
        description: `Collection of skills, projects and sneak peak into who am I as a developer.`,
        lang: `en`,
        icon: `static/images/fav.png`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve("static/images")
      }
    }
   
  ]
   
}
