import React from "react";
import EventCard from "../Components/EventCard";
import { Grid, Box, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { createMuiTheme } from '@material-ui/core/styles';

let fonttheme = createMuiTheme();
fonttheme.typography.body1 = {
    fontSize: '0.85rem',
}
const useStyles = makeStyles((theme) => ({
    align: {
        marginBottom: "30px",
        position: "relative",
        top: '30px',
    },
    margin: {
        marginBottom: 15,
        marginTop: 15,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    icon: {
        color: "white",
    },
}));
function EventCategory(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
        <Box component='h3' className={classes.align}>
                {props.category.Category}
                <IconButton
                    className={clsx(classes.expand, classes.icon, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                  </IconButton>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container spacing={3} className={classes.margin}>
          {props.category.Events.map((member,ind) => (
            <Grid item xs={12} sm={12} md={12}>
              <EventCard member={member} side={ind+1+props.index}/>
            </Grid>
          ))}
        </Grid>
        </Collapse>
        </div>
    );
}
export default EventCategory;
