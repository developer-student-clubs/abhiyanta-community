import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CustomizedAccordions  from './Faq';




const useStyles = makeStyles((theme) => ({
    form: {
        height: "500px",
        position: "relative",
        left: "500px",
        top: "0px"
    }
}));


function Contact() {
    const classes = useStyles();

    return (
        <div>
      
          < CustomizedAccordions />
        <iframe title="contactPage" className={classes.form} src="https://form.typeform.com/to/NmQXsN32" width="500" height="500" frameborder="0" marginheight="0" marginwidth="0">
         
        </iframe>
         </div>
    );
}




export default Contact;