import React from "react";
import "./App.css";
import Homepage from "./container/homepage";
import Footer from "./component/footer";
import Header from "./component/header";

function App() {
  return (
    <div className="App Site">
      <div className="Site-content">
        <Header></Header>
        <Homepage></Homepage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
