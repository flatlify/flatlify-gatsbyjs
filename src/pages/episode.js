import React from "react"
import Layout from "../components/layout"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import css from "./episode.module.css"

const IndexPage = props => {
  const {
    episodeNumber,
    title,
    description,
    cover: { src: imgSrc },
  } = props.pageContext
  return (
    <Layout>
      <Paper className={css.mainFeaturedPost}>
        <img src={imgSrc} className={css.coverImg} alt="preview"></img>
        <div className={css.mainFeaturedPostContent}>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            {title}
          </Typography>
          <Typography component="h3" variant="h4" color="inherit" gutterBottom>
            {episodeNumber}
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

export default IndexPage
