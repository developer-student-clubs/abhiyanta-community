import React from "react";

import ProjectMemberCard from "../Components/ProjectMemberCard";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const Items = [
  {
  
  
    name: "project1",
    desc: "this is project1",
    image:
      "https://ssl.gstatic.com/analytics/20200901-00/app/static/mobile/ZeroStateIcons/zero-state-users.png",
  },
  {
    name: "project2",
    desc: "this is project2",
    image:
      "https://ssl.gstatic.com/analytics/20200901-00/app/static/mobile/ZeroStateIcons/zero-state-users.png",
  },
  {
    
    name: "project3",
    desc: " this is project3",
    image:
      "https://ssl.gstatic.com/analytics/20200901-00/app/static/mobile/ZeroStateIcons/zero-state-users.png",
  },
  {
    
    name: "Project4",
    desc:" this is project4",
    image:
      "https://ssl.gstatic.com/analytics/20200901-00/app/static/mobile/ZeroStateIcons/zero-state-users.png",
  },
];

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
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
