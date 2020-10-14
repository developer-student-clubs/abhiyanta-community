import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Card,CardActions,CardContent,CardMedia } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Rating } from '@material-ui/lab';
import { IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

import { createMuiTheme } from '@material-ui/core/styles';

let fonttheme = createMuiTheme();
fonttheme.typography.body1 = {
  fontSize: '0.85rem',
}
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: 'inline-block',
  },
  content: {
    background: "#1B9CE5",  //#1b9ce5 27,156,229rgb  202,80,50,1 hsla
    color: "white"
  },
  action: {
    background: "#0074E1",  //209 100 44 1 hsla
    color: "hsla(0,0,0,0.9)",
  },
  text:
  {
    color: "#eeeeee",
  },
}));

function ImgMediaCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
          <CardMedia
            component="img"
            alt={props.member.Name}
            height="140"
            image={props.member.Photo}
            title={props.member.Name}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.member.Name}
            </Typography>
            <ThemeProvider theme={fonttheme}>
              <Typography variant="body1" component="div" >
                <div className={classes.text}>{props.member.Designation}</div>
                <MailIcon style={{fontSize:16}}/>&nbsp;<span style={{fontSize:16}}>{props.member.Email}</span>
              </Typography>
            </ThemeProvider>

          </CardContent>
        <CardActions className={classes.action} disableSpacing>
          <IconButton href={props.member.LinkedIn}>
            <LinkedInIcon fontSize="medium"/>
          </IconButton>
          <IconButton href={props.member.Github}>
            <GitHubIcon fontSize="small"/>
          </IconButton>
          <Rating
            value={props.member.Stars}
            size={"small"}
            style={{color:"white", marginLeft: 'auto', padding:10}}
            precision={0.5}
            readOnly
          />
        </CardActions>
      </Card>
    </div>
  );
}

export default ImgMediaCard;
