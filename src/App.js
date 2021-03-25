import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import OrderForm from "./pages/OrderForm";
import { auth, createUserProfileDocument } from "./config/fbConfig";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
      }
    });
    console.log(user);
  });

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
