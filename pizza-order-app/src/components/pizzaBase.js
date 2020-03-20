import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(4),
    },
    root: {
        minWidth: 500,

    }
}));

const baseOptions = {
    size: ['Small', 'Medium', 'Large'],
    crust: ['Plain', 'Garlic', 'Parmesan', 'Thin'],
    sauce: ['Marinara', 'BBQ', 'Alfredo']
}

function PizzaBase({ handleBaseChange}) {
    const classes = useStyles();
    return (
        <Fragment>
            <Card className={classes.root}>
                <CardContent>
                    {Object.entries(baseOptions).map((option) => {
                        return (
                            <FormControl key={option} component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">{option[0][0].toUpperCase()+option[0].slice(1)}</FormLabel>
                                <RadioGroup aria-label={option[0]} name={option[0]}  handleBaseChange={handleBaseChange} id={option}>
                                    {
                                        option[1].map((elem) => {
                                            return (
                                                <FormControlLabel key={'formLabel_'+elem}name={option[0]} value={elem} control={<Radio />} label={elem} />
                                            )
                                        })
                                    }
                                </RadioGroup>
                            </FormControl>
                        )
                    })
                    }
                </CardContent>
            </Card>
        </Fragment>

    )
}

export default PizzaBase
