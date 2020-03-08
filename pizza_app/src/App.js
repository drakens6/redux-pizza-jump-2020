import React from "react";
import "./App.css";
import Homepage from "./container/homepage";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App Site">
      <div className="Site-content">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Bad Seal Studios - Pizza application
            </Typography>
          </Toolbar>
        </AppBar>

        <Homepage></Homepage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
