import React from "react"
import Layout from "../components/layout"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import css from "./episode.module.css"

const IndexPage = props => {
  const { episodeNumber, title, description, cover } = props.pageContext
  const { apiUrl } = props.data.site.siteMetadata
  const imgSrc = `${apiUrl}${props.pathContext.imgSrc}`
  return (
    <Layout>
      <Paper className={css.mainFeaturedPost}>
        <img src={imgSrc} className={css.coverImg} alt="preview"></img>
        <div className={css.mainFeaturedPostContent}>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            {title}
          </Typography>

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
export const query = graphql`
  query {
    site {
      siteMetadata {
        apiUrl
      }
    }
  }
`
export default IndexPage
