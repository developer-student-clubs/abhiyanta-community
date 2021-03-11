import React from 'react';
import CustomizedAccordions from './Faq';
import "./Contact.css";
import { Container, Paper, useTheme } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        maxWidth: 300,
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

        paddingBottom: 40
    },
    paper: {
        minWidth: 400,
        maxWidth: 300,
        paddingLeft: 50,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    formpad: {
        paddingTop: 20
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Technical Lead',
    'Non-Technical Lead',
    'Innovators'
];
function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


function Contact() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };


    return (
        <div>

            < CustomizedAccordions />
            <Container>

                {/* <iframe title="contactPage" className="form" src="https://form.typeform.com/to/NmQXsN32" frameborder="0" marginheight="0" marginwidth="0">
                </iframe> */}
                <Paper className={classes.paper} elevation={3}>
                    <FormControl className={classes.formControl}>

                        <InputLabel id="demo-mutiple-chip-label">Position</InputLabel>
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} className={classes.chip} />
                                    ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                        <div className={classes.formpad}>

                            <div className={classes.pad}>

                                <TextField iid="outlined-multiline-static"
                                    variant="outlined" required id="standard-required" label="Name" />
                            </div>
                            <div className={classes.pad}>

                                <TextField iid="outlined-multiline-static"
                                    variant="outlined" required id="standard-required" label="Contact" /> </div>
                            <div className={classes.pad}>

                                <TextField iid="outlined-multiline-static"
                                    variant="outlined" required id="standard-required" label="Email" />  </div>
                            <div className={classes.pad}>

                                <TextField
                                    id="outlined-multiline-static"
                                    variant="outlined"
                                    label="Brief Introduction"
                                    multiline
                                    rows={4}

                                />
                            </div>
                        </div>
                    </FormControl>
                </Paper>
            </Container>


        </div>
    );
}




export default Contact;