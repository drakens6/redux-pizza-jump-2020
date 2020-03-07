import React from 'react'

const final = (props) => {
    console.log(props);
    return (
        <div>
            <p>Review your order:</p>
            <p>First name: {props.data.first_name}</p>
            <p>Last name: {props.data.last_name}</p>
            <p>Address: {props.data.address}</p>
            <p>Phone number: {props.data.phone}</p>
            <p>Email Address: {props.data.email}</p>
            <p>Sauce level: {props.data.sauceLevel}</p>
            <p>Curst type: {props.data.crustType}</p>
            <p>Pepperoni: {props.data.pepperoni}</p>
            <p>Pineapple: {props.data.pineapple}</p>
            <p>Spinach: {props.data.spinach}</p>
            <p>Sausage: {props.data.sausage}</p>
            <p>Bacon: {props.data.bacon}</p>
            <p>Onion: {props.data.onion}</p>
            <p>Mushroom: {props.data.mushroom}</p>

        </div>
    )
}

export default final

