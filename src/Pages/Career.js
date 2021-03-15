import React from "react";
import Position from "../Components/Position";
import {
  Container, Paper, TextField, InputLabel
  , FormControl, Select, Button
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

  Outline: {
    borderColor: 'white !important',
    color: 'white !important'
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
  pad: {
    paddingRight: 10,
    paddingBottom: 30
  },
  paddrop: {
    paddingTop: 471,
  },
}));




function DisplayCareers() {
  const classes = useStyles();
  const TextProps = {
    PaperProps: {
      style: {
        width: '100%',
      },
    },
  };

  const [data, SetData] = React.useState({
    positionName: [],
    personName: "",
    phno: "",
    email: "",
    branch: "",
    cid: "",
    intro: ""
  });

  const { positionName, personName, phno, email, branch, cid, intro } = data;

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
          [new Date().toDateString(), personName, phno, email, branch, cid, JSON.stringify(positionName), intro]
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
        branch: "",
        cid: "",
        intro: ""
      });
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
        {/* <iframe title="contactPage" className="form" src="https://form.typeform.com/to/NmQXsN32" frameborder="0" marginheight="0" marginwidth="0">
          </iframe> */}
        <Paper className={classes.paper} elevation={3}>
          <FormControl variant="outlined" className={classes.formControl}>

            <div className={classes.formpad}>
              <div className={classes.pad}>

                <InputLabel htmlFor="outlined-age-native-simple">Position</InputLabel>
                <Select
                  native
                  id="positionName"
                  name="positionName"
                  value={positionName}
                  onChange={handleChange}
                  className={classes.inputwidth}
                  label="Position"

                >
                  <option aria-label="None" value="" />
                  <option value={"Technical Lead"}>Technical Lead</option>
                  <option value={"Non-Technical Lead"}>Non-Technical Lead</option>
                  <option value={"Innovators"}>Innovators</option>
                </Select>
              </div>

              <div className={classes.pad}>
                <TextField iid="outlined-multiline-static" className={classes.inputwidth}
                  variant="outlined" required id="name" onChange={handleChange} name="personName" label="Name" value={personName} />
              </div>
              <div className={classes.pad}>

                <TextField iid="outlined-multiline-static" className={classes.inputwidth}
                  variant="outlined" required id="phno" onChange={handleChange} name="phno" label="Contact" value={phno} /> </div>
              <div className={classes.pad}>

                <TextField iid="outlined-multiline-static" className={classes.inputwidth}
                  variant="outlined" required id="email" onChange={handleChange} name="email" label="Email" value={email} />  </div>
              <div className={classes.pad}>

                <TextField iid="outlined-multiline-static" className={classes.inputwidth}
                  variant="outlined" required id="branch" name="branch" onChange={handleChange} label="Branch" value={branch} />
              </div>
              <div className={classes.pad}>

                <TextField InputProps={TextProps} iid="outlined-multiline-static" className={classes.inputwidth}
                  variant="outlined" required id="cid" name="cid" onChange={handleChange} label="College ID" value={cid} />
              </div>
              <div>

                <div className={classes.pad}>

                  <TextField
                    iid="outlined-multiline-static"
                    id="intro"
                    name="intro"
                    variant="outlined"
                    label="Why do you wish to join us?"
                    multiline
                    rows={4}
                    value={intro}
                    onChange={handleChange}
                    className={classes.inputwidth}
                  />
                </div>
              </div>
              <div className={classes.pad}>
                <Button type="button" variant="contained" onClick={handleSubmit} color="primary">
                  Submit
                          </Button>
              </div>
            </div>
          </FormControl>
        </Paper>
      </Container>
    </div>
  );
}
export default DisplayCareers;
