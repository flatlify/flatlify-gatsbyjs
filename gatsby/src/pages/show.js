import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import css from "./show.module.css"
import { EpisodeCard } from "../components/episodeCard/episodeCard"

const Show = props => {
  const {
    title,
    subhead,
    description,
    seasons: seasonIds,
    imgSrc,
  } = props.pageContext
  const { apiUrl } = props.data.site.siteMetadata
  console.log(props)

  const episodeIds = props.data.allRestApiContentSeason.edges[0].node.data
    .filter(season => seasonIds.includes(season.id))
    .map(season => [...season.episodes])
    .flat(1)
  const episodes = props.data.allRestApiContentEpisode.edges[0].node.data
  const media = props.data.allRestApiContentMedia.edges[0].node.data
  return (
    <Layout>
      <Paper className={css.mainFeaturedPost}>
        <img
          src={`${apiUrl}${imgSrc}`}
          className={css.coverImg}
          alt="preview"
        ></img>
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
              const relativeSrc = media.find(mediaItem => {
                return episode.cover === mediaItem.id
              })?.relativeSrc
              const src = `${apiUrl}${relativeSrc}`
              return (
                <Link
                  to={`/episode/${episodeId}`}
                  key={episodeId}
                  className={css.episodeLink}
                >
                  <EpisodeCard title={episode.title} imgSrc={src} />
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
    allRestApiContentEpisode {
      edges {
        node {
          data {
            cover
            id
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        apiUrl
      }
    }
  }
`
export default Show
