import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../App.css";

const final = props => {
  return (
    <div>
      <Card style={{ margin: 100 }}>
        <CardMedia>
          <img src={require("../assets/piazza.jpeg")} alt="Delicious pizza" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Review your order:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <hr></hr>
            <h3>Your info:</h3>
            <p>First name: {props.data.first_name}</p>
            <p>Last name: {props.data.last_name}</p>
            <p>Address: {props.data.address}</p>
            <p>Phone number: {props.data.phone}</p>
            <p>Email Address: {props.data.email}</p>
            <hr></hr>
            <h3>Sauce level and crust type</h3>
            <p>Sauce level: {props.data.sauceLevel}</p>
            <p>Curst type: {props.data.crustType}</p>
            <hr></hr>
            <h3>Additional toppings:</h3>
            <p>Pepperoni: {props.data.pepperoni}, Pineapple: {props.data.pineapple},
            Spinach: {props.data.spinach}, Sausage: {props.data.sausage}, Bacon: {props.data.bacon}
            , Onion: {props.data.onion}, Mushroom: {props.data.mushroom}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default final;
