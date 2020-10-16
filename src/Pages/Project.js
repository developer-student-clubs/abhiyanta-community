import React from "react";
import { project } from "../Content/ProjectContent";
import ProjectCategory from "../Components/ProjectCategory";
import {Container} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  align: {
    marginBottom: "30px",
    position: "relative",
    top: '30px',
  },
}));


function Team() {
  const classes = useStyles();
  return (
    <div className={classes.align}>
      <Container style={{ maxWidth: 900 }}>
        {project.map((category, index) => (
          <ProjectCategory category={category} index={index} />
        ))}
      </Container>
    </div>

  );
}

export default Team;
