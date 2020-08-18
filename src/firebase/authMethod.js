import "./index";
import firebase from "firebase/app";

export const authMethods = {
  // firebase helper methods go here...
  signUp: (email, password, setErrors) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setErrors(prev => [...prev, err.message]);
      });
  },
  signIn: (email, password) => {},
  signOut: (email, password) => {},
};
