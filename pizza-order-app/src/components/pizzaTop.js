import React, {Fragment} from 'react'
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

const topOptions = {
    veggies: ['Mushrooms', 'Black Olives', 'Spinach', 'Bananna Peppers', 'Onion'],
    meats: ['Pepperoni', 'Bacon', 'Sausauge', 'Chicken'],
    cheese: ['None', 'Normal', 'Extra']
}


function PizzaTop() {
    const classes = useStyles();
    const [veggies, setVeggies] = React.useState('');
    const [meats, setMeats] = React.useState('');
    const [cheese, setCheese] = React.useState('');

    const handleChange = event => {
        const {name, value} = event.target
        if(name === "veggies"){
            
            setVeggies(value);
        }else if(name === "meats"){
            setMeats(value);
        }else if(name === "cheese"){
            setCheese(value);
        }
    };


    return (

        <Fragment>
            <Card className={classes.root}>
                <CardContent>
                    {Object.entries(topOptions).map((option, index) => {
                        return (
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">{option[0]}</FormLabel>
                                <RadioGroup aria-label={option[0]} name={option[0]} onChange={handleChange} id={option}>
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
                    <Button type="submit" variant="contained" color="primary">Save</Button>
                    <br/><br/>
                    Selections: {veggies} { meats } {cheese}
                </CardContent>
            </Card>
        </Fragment>

    )
}

export default PizzaTop