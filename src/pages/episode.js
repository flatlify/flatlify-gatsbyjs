import React from "react"
import Layout from "../components/layout"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import css from "./episode.module.css"
/*
Episode page displays full-width cover photo, title, episode#, description, cast
 {
                "cover": {
                  "src": "http://localhost:3020/public/tonight_1.jpg"
                },
                "id": 0,
                "description": "<p>Jimmy invites Miley Cyrus, Rachel Brosnahan and Lewis Capaldi to his #stayhome party via safe social distancing video chat in another home edition of The Tonight Show.</p><p>Available until 05/04/20</p><p><br></p>",
                "episodeNumber": "111",
                "title": "Jimmy Fallon S7 E111 Miley Cyrus, Rachel Brosnahan, Lewis Capaldi"
              },
*/
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
