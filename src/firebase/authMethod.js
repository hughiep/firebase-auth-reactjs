import "./index";
import firebase from "firebase/app";

export const authMethods = {
  // firebase helper methods go here...
  signUp: (email, password, setErrors, setToken) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        // set token to localStorage
        window.localStorage.setItem("token", token);
        setToken(window.localStorage.token);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  },
  signIn: (email, password, setErrors, setToken) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        console.log(res);
        const token = await Object.entries(res.user)[5][1].a;
        localStorage.setItem("token", token);
        setToken(window.localStorage.token);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  },
  signOut: (setErrors, setToken) => {
    // signOut is a no argument function
    firebase
      .auth()
      .signOut()
      .then((res) => {
        //remove the token
        localStorage.removeItem("token");
        //set the token back to original state
        setToken(null);
      })
      .catch((err) => {
        //there shouldn't every be an error from firebase but just in case
        setErrors((prev) => [...prev, err.message]);
        //whether firebase does the trick or not i want my user to do there thing.
        localStorage.removeItem("token");
        setToken(null);
      });
  },
};
