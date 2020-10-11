import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '105ch',
      },

}));


function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.root,classes.textField}> 
        <div className={classes.textField}>
            <h1><strong>Conatact Us</strong></h1>
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
            <Button 
                size="large"
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon />}>
                Send</Button>
        </div>
    );
}

export default Contact;