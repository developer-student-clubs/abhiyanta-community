import React from "react";
import { IconButton } from "@material-ui/core";
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
    divBox: {
        backgroundColor: '#6163FF',
        borderRadius: '10px',
        padding: '20px',
    },
    defaultColor: {
        color: '#FFFFFF',
    },
    heading: {
        backgroundColor: '#5153EF',
        padding:'10px',
        borderRadius:'50px',
        color:'#EEEEEE',
        fontSize: '18px'
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

function PositionDiv(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div>
                <h4>{props.position.name}
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
                </h4>
                <hr/>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <div className={classes.divBox}>
                <p className={classes.defaultColor}>
                    {props.position.description}
                </p>
                <div>
                    <b className={classes.heading}>Key Responsibilities</b><br/><br/>
                    <ul className={classes.defaultColor}>
                        {props.position.responsibility.map((text) =>
                            <li>{text}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <b className={classes.heading}>Basic Qualifications</b><br/><br/>
                    <ul className={classes.defaultColor}>
                        {props.position.basic_qualification.map((text) =>
                            <li>{text}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <b className={classes.heading}>Preferred Qualifications</b><br/><br/>
                    <ul className={classes.defaultColor}>
                        {props.position.pref_qualification.map((text) =>
                            <li>{text}</li>
                        )}
                    </ul>
                </div>
                { props.position.advantages.length>0 ?                     
                    <div>
                        <b className={classes.heading}>What will you get?</b><br/><br/>
                        <ul className={classes.defaultColor}>
                            {props.position.advantages.map((text) =>
                                <li>{text}</li>
                            )}
                        </ul>
                    </div>
                  : null  
                }
                </div>
            </Collapse>
        </div>
    );
}

export default PositionDiv;
