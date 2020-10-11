import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
    display: 'inline-block',
    transitionDuration: '0.3s',
  },
  content: {
    background: "#1B9CE5",  //#1b9ce5 27,156,229rgb  202,80,50,1 hsla
    color: "white"
  },
  action: {
    background: "#0074E1",  //209 100 44 1 hsla
    color: "hsla(0,0,0,0.9)",
  },
  icons: {
    background: "#dddddd",  //209 100 44 1 hsla
    //color: "white",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function ImgMediaCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.member.name}
            </Typography>
            <Typography gutterBottom component="p">
              {props.member.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/*<CardActions className={classes.action}>
          <Button size="small" className={classes.action}>
            Share
          </Button>
          <Button size="small" className={classes.action}>
            More Details
          </Button>
          
          {/*<Rating
            value={props.member.rating}
            size={"small"}
            precision={0.5}
            readOnly
          />}
        </CardActions>*/}
        <CardActions  className={classes.action} disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton 
            className={clsx(classes.expand, classes.icons, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse className={classes.action} in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          {props.member.detailedContent}
        </CardContent>
      </Collapse>
      </Card>
    </div>
  );
}

export default ImgMediaCard;
