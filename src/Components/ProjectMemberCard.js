import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root1: {
    display: 'flex',
    flexDirection: 'row-reverse',
    height: "400px"
  },
  root: {
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
    left: "30px"
  },
  title: {
    color: "black",
    fontSize: "2em",
    fontStyle: "bold"
  },
  desc: {
    fontSize: "1em"
  },
  head:{
    fontSize:"4.5em",
    fontFamily:"Comfortaa"
  }
}));

function ImgMediaCard(props) {
  const classes = useStyles();
  //align image alternatively
  const dirr = props.side % 2 === 0 ? classes.root1 : classes.root;
  const finalHead = props.member.status !== "" ? props.member.status === "going" ? <h1 className={classes.head}>Ongoing Project</h1> : <h1 className={classes.head}>Completed Project</h1> : " ";
  return (
    <div className={classes.align}>
      {finalHead}
      <Card className={dirr}>
        <div className={classes.details}>
          <CardActionArea>
            <CardContent>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                <strong><em>{props.member.title}</em></strong>
              </Typography>
              <Typography className={classes.desc} variant="body2" color="textSecondary" component="p">
                {props.member.content}
              </Typography>
            </CardContent>
          </CardActionArea>
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
