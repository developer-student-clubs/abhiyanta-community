import React from "react";

import ProjectMemberCard from "../Components/ProjectMemberCard";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const Items = [
  {
    rank: 0,
    rating: 2.5,
    name: "project1",
    image:
      "https://ssl.gstatic.com/analytics/20200901-00/app/static/mobile/ZeroStateIcons/zero-state-users.png",
  },
  {
    rank: 1,
    rating: 4,
    name: "Project2",
    image:
      "https://ssl.gstatic.com/analytics/20200901-00/app/static/mobile/ZeroStateIcons/zero-state-users.png",
  },
  {
    rank: 0,
    rating: 2.5,
    name: "project3",
    image:
      "https://ssl.gstatic.com/analytics/20200901-00/app/static/mobile/ZeroStateIcons/zero-state-users.png",
  },
  {
    rank: 1,
    rating: 4,
    name: "Project4",
    image:
      "https://ssl.gstatic.com/analytics/20200901-00/app/static/mobile/ZeroStateIcons/zero-state-users.png",
  },
];

const useStyles = makeStyles((theme) => ({
  align: {
    position: "relative",
    top: "140px"
  }
}));


function Project() {
  const classes = useStyles();
  return (
    <div className={classes.align}>
      <Container>
        <Grid container spacing={3}>
          {Items.map((member) => (
            <Grid item xs={12} sm={6} md={4}>
              <ProjectMemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>

  );
}

export default Project;
