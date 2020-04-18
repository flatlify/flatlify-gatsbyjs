import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Show } from "../components/showCard/showCard"
import { graphql, Link } from "gatsby"

import css from "./index.module.css"
import img from "../images/200410_4149120_The_Knockouts_Premiere.jpg"

const title = "THE TONIGHT SHOW STARRING JIMMY FALLON"
const subhead = "WEEKNIGHTS 11:35/10:35c"
const description = `Hailing from Rockefeller Center in the heart of New York City, Jimmy has made it his mission to make sure
 viewers end the day with a smile. Each weeknight, he hosts A-list guests, from movie stars to athletes, comedians,
  public figures and everyone in between. He also delivers a signature nightly monologue, performs in topical comedy sketches, 
  plays fan-favorite games, and presents recurring segments like Thank You Notes.
  Today's popular musical guests also stop by to perform alongside house band The Roots.`

const IndexPage = props => {
  const shows = props.data.allRestApiContentShow.edges[0].node.data

  return (
    <Layout>
      <SEO title="Home" />
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
