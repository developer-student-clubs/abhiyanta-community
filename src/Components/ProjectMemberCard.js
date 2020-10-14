
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: "590px",
  },
  align: {
    position: "relative",
    top: "50px",
    left:"100px"
  }
});

function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.align}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Project Image"
          height="100px"
          image={props.member.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <b>{props.member.title}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.member.content}
          </Typography>
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
    </div>
  );
}

export default ImgMediaCard;
