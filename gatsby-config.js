/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aleksandra Kondricz`,
        short_name: `Frontend developer at your service`,
        description: `Collection of skills, projects and sneak peak into who am I as a developer.`,
        lang: `en`,
        icon: `static/images/fav.svg`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve:  `gatsby-plugin-offline`
    }
   
  ]
   
}
