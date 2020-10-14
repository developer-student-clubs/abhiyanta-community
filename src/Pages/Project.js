import React from "react";

import ProjectMemberCard from "../Components/ProjectMemberCard";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const project = [
  {
    title: "Diode",
    image:
      "https://image.freepik.com/free-vector/light-blue-project-management-concept_23-2147782704.jpg",
    content: "There are many types of semiconductor diodes namely Selenium, Germanium and Silicon types. Selenium type is commonly used in the early days in ac power suppliers but in recent years... "
  },
  {
    title: "Diode",
    image:
      "https://image.freepik.com/free-vector/light-blue-project-management-concept_23-2147782704.jpg",
    content: "There are many types of semiconductor diodes namely Selenium, Germanium and Silicon types. Selenium type is commonly used in the early days in ac power suppliers but in recent years... "
  },
  {
    title: "Diode",
    image:
      "https://image.freepik.com/free-vector/light-blue-project-management-concept_23-2147782704.jpg",
    content: "There are many types of semiconductor diodes namely Selenium, Germanium and Silicon types. Selenium type is commonly used in the early days in ac power suppliers but in recent years... "
  },
  {
    title: "Diode",
    image:
      "https://image.freepik.com/free-vector/light-blue-project-management-concept_23-2147782704.jpg",
    content: "There are many types of semiconductor diodes namely Selenium, Germanium and Silicon types. Selenium type is commonly used in the early days in ac power suppliers but in recent years... "
  },
  {
    title: "Diode",
    image:
      "https://image.freepik.com/free-vector/light-blue-project-management-concept_23-2147782704.jpg",
    content: "There are many types of semiconductor diodes namely Selenium, Germanium and Silicon types. Selenium type is commonly used in the early days in ac power suppliers but in recent years... "
  },

];


const useStyles = makeStyles((theme) => ({
  pad: {
    marginBottom:"10%",
    marginTop:"5%",

  }
}));


function Team() {
  const classes = useStyles();
  return (
    <div className={classes.pad}>
      <Container>
        <Grid container spacing={3}>
          {project.map((member) => (
            <Grid item xs={12} sm={6} md={4}>
              <ProjectMemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>

  );
}

export default Team;
