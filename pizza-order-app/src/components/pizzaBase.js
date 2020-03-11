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
import { connect } from 'react-redux';
import store from '../redux/store'
import {addBase} from '../redux/actions/actions'

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

function PizzaBase(props) {
    const classes = useStyles();
    const [size, setSize] = React.useState('');
    const [crust, setCrust] = React.useState('');
    const [sauce, setSauce] = React.useState('');

    const handleChange = event => {
        const {name, value} = event.target
        console.log(name)
        if(name === "size"){
            setSize(value);
        }else if(name === "crust"){
            setCrust(value);
        }else if(name === "sauce"){
            setSauce(value);
        }
    };

    // const handleClick = () => {

    // }
     let {handleSubmit} = props

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
                                                <FormControlLabel key={'formLabel_'+elem}name={option[0]} value={elem} control={<Radio />} label={elem} />
                                            )
                                        })
                                    }
                                </RadioGroup>
                            </FormControl>
                        )
                    })
                    }
                    <br />
                    <Button type='submit' variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
                    <br/><br/>
                    Selections: {size} { crust} {sauce}
                    {props.base}
                </CardContent>
            </Card>
        </Fragment>

    )
}

const mapStateToProps = (state) => {
    return { base: state.base }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSubmit: data => dispatch(addBase(data))
//     }
// }


export default connect(
    mapStateToProps,
    dispatch => ({
        onClick: data => store.dispatch(addBase(data))
    })
)(PizzaBase)
