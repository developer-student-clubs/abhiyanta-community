import React from 'react';
import CustomizedAccordions from './Faq';
import "./Contact.css";
import { Container, Paper, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",

    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
    pad: {
        paddingRight: 10,
        paddingBottom: 40
    },
    paper: {
        minWidth: "100%",
        maxWidth: "100%",
        padding: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#EEEEEE'
    },
    formpad: {
        paddingTop: 20
    },
    inputwidth: {
        width: "100%",
    },
    confirm: {
        color: 'green',
        fontSize: 15
    }
}));


function Contact() {
    const classes = useStyles();
    const [data, SetData] = React.useState({
        name: "",
        phno: "",
        email: "",
        query: "",
    });
    const { name, phno, email, query } = data;

    const handleChange = (event) => {
        SetData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/squarebat/google_sheets/MMUvHVCDOmWjmFcg?tabId=Sheet2", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([
                    [new Date().toDateString(), name, phno, email, query]
                ])
            }
            );
            await response.json();
            SetData({
                ...data,
                name: "",
                phno: "",
                email: "",
                query: "",
            });
            document.getElementById('confirm').innerHTML = "Thanks for your response! We'll get back to you as soon as possible.";
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>

            < CustomizedAccordions />
            <Container>

                <Paper className={classes.paper} elevation={3}>
                    <form onSubmit={handleSubmit} >
                        <FormControl variant="outlined" className={classes.formControl} >
                            <div className={classes.formpad}>
                                <div className={classes.pad}>

                                    <TextField iid="outlined-multiline-static" className={classes.inputwidth}
                                        onChange={handleChange} variant="outlined" required id="name" name="name" value={name} label="Name" />
                                </div>
                                <div className={classes.pad}>

                                    <TextField iid="outlined-multiline-static" className={classes.inputwidth}
                                        onChange={handleChange} variant="outlined" id="phno" name="phno" value={phno} label="Contact No" /> </div>
                                <div className={classes.pad}>

                                    <TextField iid="outlined-multiline-static" className={classes.inputwidth}
                                        onChange={handleChange} variant="outlined" required id="email" type="email" name="email" value={email} label="Email Id" />  </div>
                                <div className={classes.pad}>

                                    <TextField
                                        id="outlined-multiline-static"
                                        variant="outlined"
                                        label="Type your query here..."
                                        multiline
                                        required
                                        rows={4}
                                        name="query"
                                        value={query}
                                        onChange={handleChange}
                                        className={classes.inputwidth}
                                    />
                                </div>
                            </div>
                            <div className={classes.pad}>
                                <Button type="submit" variant="contained" color="primary">
                                    Submit
                          </Button>
                            </div>
                            <label className={classes.confirm} id="confirm" name="confirm"></label>
                        </FormControl>
                    </form>

                </Paper>
            </Container>


        </div >
    );
}

export default Contact;