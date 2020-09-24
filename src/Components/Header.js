import React from "react";
import Box from "@material-ui/core/Box";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { usePointNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/point";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./BackToTop";
import { CssBaseline } from "@material-ui/core";

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

const PointNavigationMenuStyle = React.memo(function PointNavigationMenu(
  props
) {
  const [index, setIndex] = React.useState(1);
  const handleClick = (i) => (e) => {
    setIndex(i);
  };

  const classes = useStyles();

  const routes = {
    Home: "/",
    About: "/about",
    Team: "/team",
    FAQ: "/faq",
  };

  return (
    <Box height={56} display={"flex"}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <img
            className={classes.image}
            src={process.env.PUBLIC_URL + "/Assets/abhiyanta_logo_round.png"}
            alt="Home Icon"
          />
          <Typography variant="h6" className={classes.title}>
            Abhiyanta Community
          </Typography>
          <NavMenu useStyles={usePointNavigationMenuStyles}>
            {Object.keys(routes).map((key) => {
              return (
                <NavItem
                  as={"div"}
                  active={index === key}
                  onClick={handleClick(key)}
                >
                  <Link
                    to={routes[key]}
                    style={{
                      textDecoration: "none",
                      textDecorationColor: "wheat",
                    }}
                  >
                    {key}
                  </Link>
                </NavItem>
              );
            })}
          </NavMenu>
        </Toolbar>
        <Toolbar id="back-to-top-anchor" />
      </AppBar>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
});

export default PointNavigationMenuStyle;
