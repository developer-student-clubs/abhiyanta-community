import React from "react";
import Position from "../Components/Position";
import { Container } from "@material-ui/core";
import { Careers } from "../Content/CareersContent";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  align: {
    position: "relative",
    top: '30px',
  },
  tagline: {
      fontSize: '20px',
      fontStyle: 'italic'
  },
  box: {
    borderRadius: '10px',
    height: '500px',
    width: '100%',
    overflow: 'hidden'
  }
}));
function DisplayCareers() {
  const classes = useStyles();
  return (
    <div className={classes.align}>
      <Container maxWidth="md">        
        <h3>{Careers[0].title}</h3>        
        <p className={classes.tagline}>
          {Careers[0].tagline}
        </p>
        {Careers[0].positions.map((position, index) => (
          <Position position = {position} index = {index}/>      
        ))}
        <br/>
        <center>
        <iframe title="ApplyPage" className={classes.box} src="https://abhiyantaind.typeform.com/to/CX02FeRM" frameborder="0" marginheight="0" marginwidth="0">

        </iframe>
        </center>        
      </Container>
    </div>
  );
}
export default DisplayCareers;
