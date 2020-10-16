import React from "react";
import TeamMemberCard from "../Components/TeamMemberCard";
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

function SubTeamDiv(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Box p={2} component='h5'>
                {props.subTeam.TeamName}
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
                <Grid container spacing={3}>
                    {props.subTeam.TeamMembers.map((member) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <TeamMemberCard member={member} index={props.index}/>
                        </Grid>
                    ))}
                </Grid>
            </Collapse>
        </div>
    );
}

export default SubTeamDiv;
