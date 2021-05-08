import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import { actionType } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Login.css";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type:actionType.SET_USER,
          user:result.user
        })
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG95169.png"
          alt="whatsApp image"
        />
        <div className="login_text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn} type="submit">
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};
export default Login;
