import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import css from "./show.module.css"

const Show = props => {
  console.log("yes", props, props.pageContext)
  const {
    title,
    subhead,
    description,
    seasons: seasonIds,
    cover: { src: imgSrc },
  } = props.pageContext

  const episodes = props.data.allRestApiContentSeason.edges[0].node.data
    .filter(season => seasonIds.includes(season.id))
    .map(season => [...season.episodes])
    .flat(1)

  // console.log(
  //   "episodes",
  //   props.data.allRestApiContentEpisode.edges[0].node.data
  // )
  return (
    <Layout>
      <Paper className={css.mainFeaturedPost}>
        <img src={imgSrc} className={css.coverImg} alt="preview"></img>
        <div className={css.mainFeaturedPostContent}>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            {title}
          </Typography>
          <Typography component="h3" variant="h4" color="inherit" gutterBottom>
            {subhead}
          </Typography>
          <div className={css.episodes}>
            {episodes.map(episode => (
              <Link
                to={`/episodes/${episode}`}
                key={episode}
                className={css.episodeLink}
              >
                {/* <Show show={episode} /> */}
              </Link>
            ))}
          </div>
          <Typography
            color="inherit"
            paragraph
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
      </Paper>
    </Layout>
  )
}
// filter doesn't work
export const query = graphql`
  query {
    allRestApiContentSeason(
      filter: { data: { elemMatch: { id: { eq: 1 } } } }
    ) {
      edges {
        node {
          data {
            episodes
            id
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
            title
          }
        }
      }
    }
  }
`
export default Show
