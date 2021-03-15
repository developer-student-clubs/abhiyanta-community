import React from "react";
import Position from "../Components/Position";
import {
  Container, Paper, TextField, Input, InputLabel,
  MenuItem, FormControl, Select, Chip, useTheme, Button
} from "@material-ui/core";
import { Careers } from "../Content/CareersContent";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  align: {
    position: "relative",
    top: '30px',
  },
  root: {
    '& $notchedOutline': {
      borderColor: 'white',
      color: 'white'
    }
  },
  notchedOutline: {},
  tagline: {
    fontSize: '20px',
    fontStyle: 'italic'
  },
  box: {
    borderRadius: '10px',
    height: '500px',
    width: '100%',
    overflow: 'hidden'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  textColor: {
    color: '#FFFFFF',
    borderRadius: '5px',
    borderColor: 'white'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(4),
  },
  pad: {
    padding: 10
  },
  Outline: {
    borderColor: 'white !important',
    color: 'white !important'
  },
  paper: {
    width: '100%',
    padding: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 10
  },
  input: {
    width: "100%"
  },
  confirm: {
    color: 'green',
    fontSize: 15,
    paddingLeft: 10
  },
  inputwidth: {
    width: "100%",
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      padding: 10
    },
  },
};

const names = [
  'Technical Lead',
  'Non-Technical Lead',
  'Innovators'
];

function getStyles(name, positionName, theme) {
  return {
    fontWeight:
      positionName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function DisplayCareers() {
  const classes = useStyles();



  const theme = useTheme();
  const [data, SetData] = React.useState({
    positionName: [],
    personName: "",
    phno: "",
    email: "",
    branch: "",
    cid: "",
    intro: ""
  });

  const { positionName, personName, phno, email, intro } = data;

  const handleChange = (event) => {
    SetData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/squarebat/google_sheets/MMUvHVCDOmWjmFcg?tabId=Sheet1", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([
          [new Date().toDateString(), personName, phno, email, JSON.stringify(positionName), intro]
        ])
      }
      );
      await response.json();
      SetData({
        ...data,
        positionName: [],
        personName: "",
        phno: "",
        email: "",
        intro: ""
      });
      document.getElementById('confirm').innerHTML = "Thanks for your response! We'll get back to you as soon as possible.";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.align}>
      <Container maxWidth="md">
        <h3>{Careers[0].title}</h3>
        <p className={classes.tagline}>
          {Careers[0].tagline}
        </p>
        {Careers[0].positions.map((position, index) => (
          <Position position={position} index={index} />
        ))}

        <h4>Apply now to become a member of the community!</h4><hr />
        <Paper className={classes.paper} elevation={3}>
          <form onSubmit={handleSubmit} >
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">Preferred Position</InputLabel>
              <Select
                labelId="demo-mutiple-chip-label"
                id="positionName"
                name="positionName"
                multiple
                required
                value={positionName}
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
                  <MenuItem key={name} value={name} style={getStyles(name, positionName, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <div className={classes.pad}>

                <TextField iid="outlined-multiline-static" className={classes.inputwidth}
                  variant="outlined" required id="name" onChange={handleChange} name="personName" label="Name" value={personName} />
              </div>
              <div className={classes.pad}>

                <TextField iid="outlined-multiline-static" className={classes.inputwidth}
                  variant="outlined" id="phno" onChange={handleChange} name="phno" label="Contact No" value={phno} /> </div>
              <div className={classes.pad}>

                <TextField iid="outlined-multiline-static" className={classes.inputwidth}
                  variant="outlined" required id="email" onChange={handleChange} type="email" name="email" label="Email" value={email} />  </div>

              <div className={classes.pad}>

                <TextField
                  className={classes.inputwidth}
                  iid="outlined-multiline-static"
                  id="intro"
                  name="intro"
                  variant="outlined"
                  label="Brief Introduction"
                  multiline
                  required
                  rows={4}
                  value={intro}
                  onChange={handleChange}
                />
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
    </div>
  );
}
export default DisplayCareers;