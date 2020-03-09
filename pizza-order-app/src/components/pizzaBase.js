import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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

    },
    bullet: {
        display: 'inline-block',
        margin: '0 10px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 20,
    },
}));

const baseOptions = {
    size: ['Small', 'Medium', 'Large'],
    crust: ['Plain', 'Garlic', 'Parmesan', 'Thin'],
    sauce: ['Marinara', 'BBQ', 'Alfredo']
}

function PizzaBase() {
    const classes = useStyles();
    const [size, setSize] = React.useState('');
    const [crust, setCrust] = React.useState('');
    const [sauce, setSauce] = React.useState('');

    const handleChange = event => {
        if(event.target.id === "size"){
            setSize(event.target.value);
        }else if(event.target.id === "crust"){
            setCrust(event.target.value);
        }else if(event.target.id === "sauce"){
            setSauce(event.target.value);
        }
    };

    return (

        <Fragment>
            <Card className={classes.root}>
                <CardContent>
                    {Object.entries(baseOptions).map((option) => {
                        return (
                            <FormControl key={option} component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">{option[0]}</FormLabel>
                                <RadioGroup aria-label={option[0]} name={option[0]}  onChange={handleChange} id={option}>
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
                    <br />
                    {/* <Button variant="contained" color="primary">Next</Button> */}
                </CardContent>
            </Card>
        </Fragment>

    )
}

export default PizzaBase
