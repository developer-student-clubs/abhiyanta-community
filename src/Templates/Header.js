import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  image: {
    width: 45,
    height: 45,
    marginRight: 10,
    marginLeft: -10,
  },
}));

function Header() {
  const classes = useStyles();

  const routes = {
    Home: "/",
    About: "/about",
    Team: "/team",
  
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img
            className={classes.image}
            src={process.env.PUBLIC_URL + "/Assets/abhiyanta_logo_round.png"}
            alt="Home Icon"
          />
          <Typography variant="h6" className={classes.title}>
            Abhiyanta Community
          </Typography>
          {Object.keys(routes).map((key) => {
            console.log(key);
            return (
              <Link to={routes[key]}>
                <Button>{key}</Button>
              </Link>
            );
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
