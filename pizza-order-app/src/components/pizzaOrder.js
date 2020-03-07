import React, { useState } from 'react'
import TabPanel from './tabPanel'

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
        fontWeight: theme.typography.fontWeightRegular,
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
    return (
        <TabPanel value='2' index='2'>
            <h2>Pizza Order</h2>

            <div className={classes.root}>
                <ExpansionPanel>
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

                <ExpansionPanel>
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
                <Button variant="contained" color="primary">Add to order</Button>
            </div>
        </TabPanel >
    )
}

export default PizzaOrder



