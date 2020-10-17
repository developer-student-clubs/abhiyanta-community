import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ReactGA from "react-ga";

import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date('2020-10-17T17:35:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className={classes.root}>

      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>

        <Grid item xs={6}>
          <Typography variant="h2" className={classes.title}>
            Abhiyanta Community
          </Typography>
          
          <Grid container
          style={{paddingTop: "2rem"}}
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center">
          { timerComponents.length ? 
            <Typography> Website will launch in {timerComponents} </Typography> : 
            <Typography variant="h5" className={classes.title}>
              Website is Live!
            </Typography>}
          </Grid>


        </Grid>
      </Grid>
    </div>
  );
};

export default App;
