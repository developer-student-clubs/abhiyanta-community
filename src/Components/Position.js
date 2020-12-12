import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { createMuiTheme } from '@material-ui/core/styles';
//#151719
//#ACB9C3
let fonttheme = createMuiTheme();
fonttheme.typography.body1 = {
    fontSize: '0.85rem',
}
const useStyles = makeStyles((theme) => ({
    divBox: {
        backgroundColor: '#1C1E1F',
        borderRadius: '10px',
        padding: '20px',
    },
    defaultColor: {
        color: '#B4C1CB',
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
                    <h6>Key Responsibilities</h6>
                    <ul className={classes.defaultColor}>
                        {props.position.responsibility.map((text) =>
                            <li>{text}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h6>Basic Qualifications</h6>
                    <ul className={classes.defaultColor}>
                        {props.position.basic_qualification.map((text) =>
                            <li>{text}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h6>Preferred Qualifications</h6>
                    <ul className={classes.defaultColor}>
                        {props.position.pref_qualification.map((text) =>
                            <li>{text}</li>
                        )}
                    </ul>
                </div>
                { props.position.advantages.length>0 ?                     
                    <div>
                        <h6>What will you get?</h6>
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
