import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    // },
    // margin: {
    //     margin: theme.spacing(1),
    // },
    // button: {
    //     margin: theme.spacing(1),
    // },
    // alignButton:{
    //     marginLeft:"10%",
    //     marginTop:"2px",
    // },
    // textField: {
    //     marginLeft: theme.spacing(1),
    //     marginRight: theme.spacing(1),
    //     width: '118ch',
    // },
    // Box:{
    //     backgroundColor:"white",
    //     opacity:"0.7",
    //     boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    //     borderRadius:"10px",
    //     width:"120ch",
    //     height:"30ch",
    //     position:"relative",
    //     left:"15%",
    //     top:"150px",
    // },
    // arrangeBox:{
    //     marginLeft:"10%",
    // },
    // heading:{
    //     marginLeft:"500px",
    //     color:"black",
    // },
    form:{
        height:"1100px",
        position:"relative",
        left:"590px",
        top:"140px"
    }
}));


function Contact() {
    const classes = useStyles();

    return (
       
<iframe className={classes.form} src="https://docs.google.com/forms/d/e/1FAIpQLSeunMIVOtBwmVF-IFLI924A6XCPPg2R52fwK5iWC1UX_K_cNg/viewform?embedded=true" width="640" height="673" frameborder="0" marginheight="0" marginwidth="0">
              {/* <div className={classes.root, classes.textField}>
            <div className={classes.Box}>
                
                <div className={classes.textField}>
                    <h1 className={classes.heading}><strong>Conatact Us</strong></h1>
                </div>
                <TextField
                    label="Full Name"
                    id="filled-margin-dense"
                    className={classes.textField}
                    margin="dense"
                    variant="filled"
                />
                <TextField
                    label="E-mail"
                    id="filled-margin-dense"
                    className={classes.textField}
                    margin="dense"
                    variant="filled"
                />
                <TextField
                    label="Contact Number"
                    id="filled-margin-dense"
                    className={classes.textField}
                    margin="dense"
                    variant="filled"
                />
                <div className={classes.alignButton}>
                <Button
                    // size="large"
                    variant="contained"
                    color="primary"
                    className={classes.button,classes.textField}
                    endIcon={<Icon />}>
                    Send</Button>
                </div>
            </div>
        </div> */}
        </iframe>

    );
}

export default Contact;