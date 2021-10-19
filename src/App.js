import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Link } from "react-router-dom";

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
    <button onClick={()=> props.history.push('/')}>HOME</button>
    <Link to="/">Also Home</Link>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
