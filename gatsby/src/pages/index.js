import React from "react"

import Layout from "../components/layout"
import { ShowCard } from "../components/showCard/showCard"
import { graphql, Link } from "gatsby"

import css from "./index.module.css"

const IndexPage = props => {
  const shows = props.data.allRestApiContentShow.edges[0].node.data
  const media = props.data.allRestApiContentMedia.edges[0].node.data
  const { apiUrl } = props.data.site.siteMetadata

  return (
    <Layout>
      <div className={css.shows}>
        {shows.map(show => {
          const relativeSrc = media.find(mediaItem => {
            return show.cover === mediaItem.id
          })?.relativeSrc
          const src = `${apiUrl}${relativeSrc}`
          return (
            <Link to={`/show/${show.id}`} key={show.title} className={css.link}>
              <ShowCard show={show} imgSrc={src} />
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        apiUrl
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
    allRestApiContentShow {
      edges {
        node {
          data {
            cover
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
