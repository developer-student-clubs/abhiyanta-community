import React from "react";
import TeamMemberCard from "../Components/TeamMemberCard";
import { Grid, Container, Box, IconButton } from "@material-ui/core";
import { Team } from "../Content/TeamContent";
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  align: {
    position: "relative",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  icon: {
    color: "white",
  }
}));
function DisplayTeam() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={classes.align}>
      <Container maxWidth="md">
        <Box p={2} component='h2'>
          Meet our Team!
        </Box>

        {Team.map((data,key) => (
          <div key={key}>
          <Box p={2} component='h5'>
            {data.TeamName}
          <IconButton
              className={clsx(classes.expand, classes.icon, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Grid container spacing={3}>
              {data.TeamMembers.map((member) => (
                <Grid item xs={12} sm={6} md={4}>
                  <TeamMemberCard member={member} />
                </Grid>
              ))}
            </Grid>
          </Collapse>
          </div>
        ))}
        
      </Container>
    </div>

  );
}

export default DisplayTeam;
