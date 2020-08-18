import React, { useState } from "react";
import { authMethods } from "../firebase/authMethod";

function AuthProvider(props) {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null)

  const handleSignUp = () => {
    authMethods.signUp(inputs.email, inputs.password, setErrors, setToken);
  };
  const handleSignIn = () => {
    authMethods.signIn(inputs.email, inputs.password, setErrors, setToken)
  }
  const handleSignOut = () => {
    authMethods.signOut(setErrors, setToken);
  }

  return (
    <FirebaseAuth.Provider
      value={{
        handleSignUp,
        handleSignIn,
        handleSignOut,
        inputs,
        setInputs,
        errors,
        setToken,
        token
      }}
    >
      {props.children}
    </FirebaseAuth.Provider>
  );
}

export const FirebaseAuth = React.createContext();

export default AuthProvider;
