import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";

import { Link, Switch, Route } from "react-router-dom";

function App() {
  // const { handleSignUp } = useContext(FirebaseAuth);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/signup" component={SignUp}>
        </Route>
      </Switch>
    </>
  );
}

export default App;
