require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: `Shows`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    apiUrl: process.env.API_URL,
  },
  plugins: [
    //This plugin exists only once but can consume an array of endpoints
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: [
          "http://localhost:3020/content/cast",
          "http://localhost:3020/content/episode",
          "http://localhost:3020/content/season",
          "http://localhost:3020/content/show",
          "http://localhost:3020/content/media",
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
