import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import OrderForm from "./pages/OrderForm";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/orderform" component={OrderForm} />
      </Switch>
    </div>
  );
}

export default App;
