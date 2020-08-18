import React, { useContext } from "react";
import "./App.css";
import { FirebaseAuth } from "./provider/AuthProvider";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Profile from "./components/Profile";

import { Link, Switch, Route } from "react-router-dom";

function App() {
  const { token } = useContext(FirebaseAuth);

  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route
          exact
          path="/profile"
          render={(rProps) => (token === null ? <SignIn /> : <Home />)}
        >
          <Profile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
