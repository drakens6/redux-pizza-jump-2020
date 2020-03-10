import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../App.css";

const final = props => {
  let {
    pepperoni,
    pineapple,
    spinach,
    sausage,
    bacon,
    onion,
    mushroom
  } = props.data;
  pepperoni = pepperoni ? `Pepperoni: ${pepperoni}, ` : undefined;
  pineapple = pineapple ? `Pineapple: ${pineapple}, ` : undefined;
  spinach = spinach ? `Spinach: ${spinach}, ` : undefined;
  sausage = sausage ? `Sausage: ${sausage}, ` : undefined;
  bacon = bacon ? `Bacon: ${bacon}, ` : undefined;
  onion = onion ? `Onion: ${onion}, ` : undefined;
  mushroom = mushroom ? `Mushroom: ${mushroom}, ` : undefined;

  return (
    <div>
      <Card style={{ margin: "auto", width: "50%" }}>
        <CardMedia>
          <img src={require("../assets/piazza.jpeg")} alt="Delicious pizza" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Review your order:
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            <hr></hr>
            <h3>Your info:</h3>
            <p>First name: {props.data.first_name}</p>
            <p>Last name: {props.data.last_name}</p>
            <p>Address: {props.data.address}</p>
            <p>Phone number: {props.data.phone}</p>
            <p>Email Address: {props.data.email}</p>
            <hr></hr>
            <h3>Sauce level and crust type</h3>
            <p>
              Sauce level:{" "}
              {props.data.sauceLevel ? props.data.sauceLevel : "Regular"}
            </p>
            <p>
              Crust type:{" "}
              {props.data.crustType ? props.data.crustType : "Regular"}
            </p>
            <hr></hr>
            <h3>Additional toppings:</h3>
            <p>
              {pepperoni}
              {pineapple}
              {spinach}
              {sausage}
              {bacon}
              {onion}
              {mushroom}
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default final;
