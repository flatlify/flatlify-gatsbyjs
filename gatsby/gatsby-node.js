/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
require("dotenv").config()
// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allRestApiContentShow {
        edges {
          node {
            data {
              title
              subhead
              description
              seasons
              id
              cover {
                src
              }
            }
          }
        }
      }
      allRestApiContentEpisode {
        edges {
          node {
            data {
              cover {
                src
              }
              id
              description
              episodeNumber
              title
            }
          }
        }
      }
    }
  `)
  result.data.allRestApiContentShow.edges[0].node.data.forEach(show => {
    createPage({
      path: `/show/${show.id}`,
      component: path.resolve(`./src/pages/show.js`),
      context: {
        ...show,
      },
    })
  })
  result.data.allRestApiContentEpisode.edges[0].node.data.forEach(episode => {
    createPage({
      path: `/episode/${episode.id}`,
      component: path.resolve(`./src/pages/episode.js`),
      context: {
        ...episode,
      },
    })
  })
}
