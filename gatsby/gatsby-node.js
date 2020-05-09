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
              cover
            }
          }
        }
      }
      allRestApiContentEpisode {
        edges {
          node {
            data {
              cover
              id
              description
              episodeNumber
              title
            }
          }
        }
      }
      allRestApiContentMedia {
        edges {
          node {
            data {
              filename
              id
              mimetype
              relativeSrc
              size
            }
          }
        }
      }
    }
  `)
  result.data.allRestApiContentShow.edges[0].node.data.forEach(show => {
    const img = result.data.allRestApiContentMedia.edges[0].node.data.find(
      media => media.id === show.cover
    )
    const imgSrc = img ? img.relativeSrc : null
    createPage({
      path: `/show/${show.id}`,
      component: path.resolve(`./src/pages/show.js`),
      context: {
        ...show,
        imgSrc,
      },
    })
  })
  result.data.allRestApiContentEpisode.edges[0].node.data.forEach(episode => {
    const img = result.data.allRestApiContentMedia.edges[0].node.data.find(
      media => media.id === episode.cover
    )
    const imgSrc = img ? img.relativeSrc : null
    createPage({
      path: `/episode/${episode.id}`,
      component: path.resolve(`./src/pages/episode.js`),
      context: {
        ...episode,
        imgSrc,
      },
    })
  })
}
