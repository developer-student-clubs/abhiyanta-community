import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    flexGrow: 1,
  },
  image: {
    width: "90%",
    height: "53%",
    objectFit: "cover",
    margin: "auto",
    display: "flex",
  },
});

function NotFound() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Box>
        <img
          className={classes.image}
          src={process.env.PUBLIC_URL + "/Assets/404.png"}
          alt="404 "
        />
        <Button
          style={{ margin: "auto", display: "flex", fontSize: "140%" }}
          href="/"
          color="primary"
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
