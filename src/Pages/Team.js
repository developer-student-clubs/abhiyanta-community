import React from "react";

import TeamMemberCard from "../Components/TeamMemberCard";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const team = [
  {
    rank: 0,
    rating: 2.5,
    name: "Rishav",
    image:
      "https://ssl.gstatic.com/analytics/20200901-00/app/static/mobile/ZeroStateIcons/zero-state-users.png",
  },
  {
    rank: 1,
    rating: 4,
    name: "Parth",
    image:
      "https://ssl.gstatic.com/analytics/20200901-00/app/static/mobile/ZeroStateIcons/zero-state-users.png",
  },
  {
    rank: 0,
    rating: 2.5,
    name: "Rishav",
    image:
      "https://ssl.gstatic.com/analytics/20200901-00/app/static/mobile/ZeroStateIcons/zero-state-users.png",
  },
  {
    rank: 1,
    rating: 4,
    name: "Parth",
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


function Team() {
  const classes = useStyles();
  return (
    <div className={classes.align}>
      <Container>
        <Grid container spacing={3}>
          {team.map((member) => (
            <Grid item xs={12} sm={6} md={4}>
              <TeamMemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>

  );
}

export default Team;
