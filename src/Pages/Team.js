import React from "react";
import SubTeam from "../Components/SubTeam";
import { Container, Box } from "@material-ui/core";
import { Team } from "../Content/TeamContent";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  align: {
    position: "relative",
    top: '30px',
  },
}));
function DisplayTeam() {
  const classes = useStyles();
  return (
    <div className={classes.align}>
      <Container maxWidth="md">
        <Box p={2} component='h2'>
          Meet our Team!
        </Box>
        {Team.map((sub_team) => (
          <SubTeam subTeam={sub_team}/>          
        ))}        
      </Container>
    </div>
  );
}
export default DisplayTeam;
