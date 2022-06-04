import React, { useRef } from "react";
import { auth } from "../firebase";
import classes from "./SignupScreen.module.scss";

const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log("user", user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.signupScreen}>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={register} type="submit">
          Sign in
        </button>
        <h4>
          <span className={classes.signupScreen__grey}>New to Netflix? </span>
          <span onClick={signIn} className={classes.signupScreen__link}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
