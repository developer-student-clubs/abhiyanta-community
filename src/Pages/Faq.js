import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
 
  align: {
    
    position: "relative",
    top: "100px",
    width: "1100px",
    marginBottom: "110px",
    marginRight: "auto",
    marginLeft: "auto",
    alignSelf: "auto",
    fontFamily:"IBM Plex Sans"
   
  }
}));


const Accordion = withStyles({
  root: {
    fontFamily:"IBM Plex Sans" ,
    border: '3px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    
    fontFamily:"IBM Plex Sans" ,
    align:'center',
    backgroundColor: 'rgba(0,0,128,0.1)',
    borderBottom: '5px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 60,
    '&$expanded': {
      minHeight: 100,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
      fontFamily:"IBM Plex Sans" ,
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    fontFamily:"IBM Plex Sans" ,
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles();
  return ( 
    
    <div className={classes.align}> 
    <h1><center>Frequently Asked Questions</center> </h1> 
 
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
          <Typography >1.What qualification do you have to join this community?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><ul>
          <li >People from any type of technical background can work into this community who have the willingness to learn something and implement it together.</li>
          <li>We prefer skills like problem solving, enthusiastic learners and an active listener with good capability of working on creative ideas/projects.</li>
          
        </ul>
        </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>2.What kind of Idea should be?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul><li>Indian Electronics Industry is in boom so we respect the creative & innovative ideas for the upcoming projects in technical aspects.
</li></ul>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>3.What Abhiyanta community will provide you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
          <li>Abhiyanta Community will provide the 2 months of fundamental training to the shortlisted learners in their interested domain. And also we will provide you throughout support in troubleshooting part of implementation of the idea/project.
   </li>
          <li>You will get 360 degree learning based self development by Abhiyanta Community in technical as well as non-technical aspects .</li>
         </ul>
          </Typography>

        </AccordionDetails>
      </Accordion>


      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>4. Who runs Abhiyanta Community?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
          Abhiyanta Community is run by the innovators, of the innovators and for the innovators.(master slave point)
          </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>5.How does it work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We are working in four stages mentioned as below:
          <br/>
             <b>1. Selection Process:</b> Selection is on the basis of Interview which is based on Technical as well as non-technical aspects.
             <br/>
            <b> 2. Training Stage:</b> Selected learners will get 2 months of basic training provided by the community in the respected domain of their interest.
             <br/>
             <b>3. Implementation Stage:</b> Learners will start working on their creative or innovative idea with the community and make it successful together.
             <br/>
             <b>4. Competition Stage:</b> We encourage every learner to participate in various innovative challenges and prove their skills.


          </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>6. What is the process of joining?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul><li>
              Check the daily updates of recruitment on our website page.</li>
            
              <li>Apply there and appear into the interview as per the schedule.</li>
</ul>
          </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>7. What is the purpose of the Abhiyanta Community?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul><li>
          To empower innovators to implement their best ideas and get it in front of the audience they deserve.
</li></ul>
          </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>8. What kind of knowledge one should gain by joining Abhiyanta Community?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
          <ul>
          <li>Learn via Implementation</li>
          <li>Team work, leadership, soft skills</li>
          <li>Implementing Team member’s creative IDEAS</li>
          <li>Evolving from each others EXPERIENCE</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <br/>
      <h4><center>If you still have any queries, then fill up the the below form</center></h4>



    </div>
  );
}