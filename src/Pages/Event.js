import React from "react";
import { event } from "../Content/EventContent";
import EventCategory from "../Components/EventCategory";
import {Container} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  align: {
    marginBottom: "30px",
    position: "relative",
    top: '30px',
  },
}));


function Team1() {
  const classes = useStyles();
  return (
    <div className={classes.align}>
      <Container style={{ maxWidth: 900 }}>
        {event.map((category, index) => (
          <EventCategory category={category} index={index} />
        ))}
      </Container>
    </div>

  );
}

export default Team1;
