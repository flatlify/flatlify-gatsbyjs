import React from "react"

import Layout from "../components/layout"
import { Show } from "../components/showCard/showCard"
import { graphql, Link } from "gatsby"

import css from "./index.module.css"

const IndexPage = props => {
  const shows = props.data.allRestApiContentShow.edges[0].node.data

  return (
    <Layout>
      <div className={css.shows}>
        {shows.map(show => (
          <Link to={`/show/${show.id}`} key={show.title} className={css.link}>
            <Show show={show} />
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allRestApiContentShow {
      edges {
        node {
          data {
            cover {
              filename
              mimetype
              relativeSrc
              size
              src
            }
            description
            id
            seasons
            subhead
            title
          }
        }
      }
    }
  }
`

export default IndexPage
