import React from "react";

import ProjectMemberCard from "../Components/ProjectMemberCard";
import { Grid, Container } from "@material-ui/core";

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

function Project() {
  return (
    <Container>
      <Grid container spacing={3}>
        {Items.map((member) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProjectMemberCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Project;
