import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";

let fonttheme = createMuiTheme();
fonttheme.typography.body2 = {
  fontSize: "0.85rem",
};
const useStyles = makeStyles((theme) => ({
  root1: {
    display: "flex",
    flexDirection: "row-reverse",
    height: 350,
  },
  root: {
    display: "flex",
    height: 350,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  linebreak: {
    whiteSpace: 'pre-wrap',
  },
  cover: {
    width: "70%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
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
  },
  contentTheme: {
    background: "#8183FF",
    color: "hsla(0,0,0,0.9)",
    height: "100%",
    overflow: "auto",
  },
}));

function ImgMediaCard(props) {
  const classes = useStyles();
  //align image alternatively

  const dirr = props.side % 2 === 0 ? classes.root1 : classes.root;

  return (
    <div className={classes.align, classes.linebreak}>
      <Card className={dirr}>
        <div className={classes.details}>
          <CardContent className={classes.contentTheme}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.member.title}<br/>
              {props.member.title2}
            </Typography>

            {props.member.current ? (
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  href={props.member.link}
                >
                  Register
                  </Button>
                {/* <Button
                  variant="contained"
                  color="secondary"
                  href="https://youtu.be/j-irhD-VMIc"
                >
                  Video
                  </Button> */}
              </div>
            ) : null}
            <ThemeProvider theme={fonttheme}>
              <Typography variant="body2" component="p">
                <br />
                {props.member.content} <br />
              </Typography>
            </ThemeProvider>
          </CardContent>
        </div>
        <CardMedia
          component="img"
          image={props.member.image}
          alt="project image"
          style={{ width: 350 }}
          title="project image"
        />
      </Card>
    </div >
  );
}

export default ImgMediaCard;
