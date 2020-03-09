import React, { useState } from 'react'
import TabPanel from './tabPanel'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core'

import PizzaBase from './pizzaBase'
import PizzaTop from './pizzaTop'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const selectOptions = [
    {
        title: 'Crust & Sauce',
        section: 'PizzaBase'
    },
    {
        title: 'Toppings',
        section: ''
    }
]

function PizzaOrder() {

    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <TabPanel value='2' index='2'>
            <h2>Pizza Order</h2>

            <div className={classes.root}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>{selectOptions[0].title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <PizzaBase></PizzaBase>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>{selectOptions[1].title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <PizzaTop></PizzaTop>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <br />
                <Button variant="contained" color="primary" href="/review">Add to order</Button>
            </div>
        </TabPanel >
    )
}

export default PizzaOrder



