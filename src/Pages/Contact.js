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
        <iframe title="contactPage"  src="https://docs.google.com/forms/d/e/1FAIpQLSfRYb0yOlHnSjKP0Ogck2uiJitoieJrUv62ZOOXQFJzpxSIuA/viewform?embedded=true" width="640" height="950" frameborder="0" marginheight="0" marginwidth="0">

        </iframe>
        </div>
    );
}

export default Contact;