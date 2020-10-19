import React from 'react';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    form: {
        position: "relative",
        top: 100,
        textAlign: "center"
    }
}));


function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.form}>
        <iframe title="contactPage"  src={process.env.REACT_APP_FORM_URL} width="640" height="925" frameborder="0" marginheight="0" marginwidth="0">

        </iframe>
        </div>
    );
}

export default Contact;