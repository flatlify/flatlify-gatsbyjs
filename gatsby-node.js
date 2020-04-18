/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
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
    }
  `)
  result.data.allRestApiContentShow.edges[0].node.data.forEach(show => {
    // console.log(`node.data.id`, "\n")
    createPage({
      path: `/show/${show.id}`,
      component: path.resolve(`./src/pages/show.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        ...show,
      },
    })
  })
}
