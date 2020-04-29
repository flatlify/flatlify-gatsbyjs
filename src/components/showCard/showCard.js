import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import css from "./showCard.module.css"

export const ShowCard = props => {
  const { show } = props
  return (
    <Card className={css.card}>
      <CardActionArea>
        <CardMedia
          className={css.media}
          image={show.cover.src}
          title={show.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {show.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            dangerouslySetInnerHTML={{
              __html: `${show.description.slice(0, 80)}...`,
            }}
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
