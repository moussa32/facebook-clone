import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./Context/reducer";
import { useStateValue } from "./Context/StateProvider";
import "./Login.css";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const handleSignin = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://iconape.com/wp-content/png_logo_vector/facebook-f-logo-2019.png"
          alt="facebook"
        />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="facebook" />
      </div>
      <Button type="submit" onClick={handleSignin}>
        Sign in
      </Button>
    </div>
  );
};

export default Login;
