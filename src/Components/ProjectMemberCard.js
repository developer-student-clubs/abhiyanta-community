import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root1: {
    display: 'flex',
    flexDirection: 'row-reverse',
    height: "400px"
  },
  root:{
    display: 'flex',
    height: "400px"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "70%",
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  align: {
    position: "relative",
    top: "50px",
    left: "100px"
  }
}));

function ImgMediaCard(props) {
  const classes = useStyles();
  //align image alternatively
  const dirr = props.side %2===0 ? classes.root1 : classes.root;

  return (
    <div className={classes.align}>
      <Card className={dirr}>
        <div className={classes.details}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.member.title}
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
        </div>
        <CardMedia
          component="img"
          alt="project image"
          height="140"
          image={props.member.image}
          title="project image"
        />
      </Card>
    </div>
  );
}

export default ImgMediaCard;
