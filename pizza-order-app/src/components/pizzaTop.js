import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
    root: {
        minWidth: 500,
        
    }
}));

const topOptions = {
    veggies: ['Mushrooms', 'Black Olives', 'Spinach', 'Bananna Peppers', 'Onion'],
    meats: ['Pepperoni', 'Bacon', 'Sausauge', 'Chicken'],
    cheese: ['None', 'Normal', 'Extra']
}


function PizzaTop({ handleTopChange }) {
    const classes = useStyles();

    return (

        <Fragment>
            <Card className={classes.root}>
                <CardContent>
                    {Object.entries(topOptions).map((option) => {
                        return (
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">{option[0][0].toUpperCase()+option[0].slice(1)}</FormLabel>
                                <RadioGroup aria-label={option[0]} name={option[0]} handleTopChange={handleTopChange} id={option}>
                                    {
                                        option[1].map((elem) => {
                                            return (
                                                <FormControlLabel name={option[0]} value={elem} control={<Radio />} label={elem} />
                                            )
                                        })
                                    }
                                </RadioGroup>
                            </FormControl>
                        )
                    })
                    }
                    {/* <div>
                    <Button type="submit" variant="contained" color="primary">Save</Button>
                    </div> */}
                </CardContent>
            </Card>
        </Fragment>

    )
}

export default PizzaTop