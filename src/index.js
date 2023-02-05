import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseConext } from "./sore/firebaseContext";
import firebase from "./firebase/config";


ReactDOM.render(
  <FirebaseConext.Provider value={{firebase}}>
    <App />
  </FirebaseConext.Provider>,
  document.getElementById("root")
);
