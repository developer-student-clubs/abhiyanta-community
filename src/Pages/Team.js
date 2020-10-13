import React from "react";
import TeamMemberCard from "../Components/TeamMemberCard";
import { Grid, Container, Box } from "@material-ui/core";

const team = [
  {
    rank: 0,
    rating: 2.5,
    name: "Rishav",
    description: "lorem ipsum dolor",
    detailedContent:  `lorem ipsum dolor \n
                       lorem ipsum dolor \n
                       lorem ipsum dolor`,
    image:
    process.env.PUBLIC_URL + "/Assets/temp-img.jpg",
  },
  {
    rank: 1,
    rating: 4,
    name: "Parth",
    description: "lorem ipsum dolor",
    detailedContent: `lorem ipsum dolor
                        lorem ipsum dolor
                        lorem ipsum dolor`,
    image:
    process.env.PUBLIC_URL + "/Assets/temp-img.jpg",
  },
  {
    rank: 0,
    rating: 2.5,
    name: "Saul",
    description: "lorem ipsum dolor",
    detailedContent: `lorem ipsum dolor
                        lorem ipsum dolor
                        lorem ipsum dolor`,
    image:
    process.env.PUBLIC_URL + "/Assets/temp-img.jpg",
  },
  {
    rank: 1,
    rating: 4,
    name: "Chuck",
    description: "lorem ipsum dolor",
    detailedContent: `lorem ipsum dolor
                        lorem ipsum dolor
                        lorem ipsum dolor`,
    image:
    process.env.PUBLIC_URL + "/Assets/temp-img.jpg",
  },
  {
    rank: 1,
    rating: 4,
    name: "James",
    description: "lorem ipsum dolor",
    detailedContent: `lorem ipsum dolor
                        lorem ipsum dolor
                        lorem ipsum dolor`,
    image:
    process.env.PUBLIC_URL + "/Assets/temp-img.jpg",
  },
  {
    rank: 1,
    rating: 4,
    name: "Alyssa",
    description: "lorem ipsum dolor",
    detailedContent: `lorem ipsum dolor
                        lorem ipsum dolor
                        lorem ipsum dolor`,
    image:
    process.env.PUBLIC_URL + "/Assets/temp-img.jpg",
  },
];

function Team() {
  return (
    <Container maxWidth="md">
      <Box p={2} component='h2'>
        Meet our Team!
      </Box>
      <Grid  container spacing={3}>
      {team.map((member) => (
    
          <Grid item xs={12} sm={6} md={4}>
            <TeamMemberCard member={member} />
          </Grid>
      ))}
        
      </Grid>
    </Container>
  );
}

export default Team;
