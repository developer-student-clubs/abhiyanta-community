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
    <div className={classes.align}>
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
                  href="https://docs.google.com/forms/d/1MZok8CC2HS3nP3DJ2FpmpCgFUC_ZTsz-hZ52O4Tz8-k/edit"
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
                {props.member.content} <br /> <br />
                {!props.member.current ? (
                  <div>
                    {props.member.conduct} <br />
                    {!props.member.jury ? null : (
                      <div>{props.member.jury}</div>
                    )}{" "}
                    <br />
                    {props.member.platform}
                  </div>
                ) : null}
                {props.member.current ? (
                  <div>
                    {props.member.add0} <br />
                    {props.member.add1} <br />
                    {props.member.add2}
                    {props.member.add3} <br /> 
                    {props.member.add4} <br /><br />
                    {props.member.add5} <br /><br />
                    <b>{props.member.date1 }</b><br /><br />
                    {props.member.date2} <br /><br/>
                    {props.member.add6} <br />

                  </div>
                ) : null}
              </Typography>

              <Typography variant="body2" component="p"></Typography>
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
