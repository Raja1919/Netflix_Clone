import React, { useState } from "react";
import "./SigninScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import {  useNavigate } from "react-router-dom";

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
   
  };
  return (
    <div className="signinScreen">
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signin}>
          Sign In
        </button>
        <h4>
          <span className="signinScreen_gray">new to netflix? </span>
          <span className="signinScreen_link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SigninScreen;
