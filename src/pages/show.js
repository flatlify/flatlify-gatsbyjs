import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import css from "./show.module.css"
import { Episode } from "../components/episodeCard/episodeCard"

const Show = props => {
  const {
    title,
    subhead,
    description,
    seasons: seasonIds,
    cover: { src: imgSrc },
  } = props.pageContext

  const episodeIds = props.data.allRestApiContentSeason.edges[0].node.data
    .filter(season => seasonIds.includes(season.id))
    .map(season => [...season.episodes])
    .flat(1)
  const episodes = props.data.allRestApiContentEpisode.edges[0].node.data
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
            {episodeIds.map(episodeId => {
              const episode = episodes.find(episode => episode.id === episodeId)
              return (
                <Link
                  to={`/episode/${episodeId}`}
                  key={episodeId}
                  className={css.episodeLink}
                >
                  <Episode title={episode.title} imgSrc={episode.cover?.src} />
                </Link>
              )
            })}
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
            cast
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
