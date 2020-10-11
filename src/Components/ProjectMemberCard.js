import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.member.name}
            height="140"
            image={props.member.image}
            title={props.member.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.member.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button href="#" size="small" color="primary">
            More Details
          </Button>
          <Rating
            value={props.member.rating}
            size={"small"}
            precision={0.5}
            readOnly
          />
        </CardActions>
      </Card>
    </div>
  );
}

export default ImgMediaCard;