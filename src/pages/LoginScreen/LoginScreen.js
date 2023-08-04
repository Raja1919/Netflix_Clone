import React, { useState } from "react";
import "./LoginScreen.css";
import SigninScreen from "../SigninScreen/SigninScreen";

const LoginScreen = () => {
  const [signin, setSignin] = useState(false);
  return (
    <div className="login_screen">
      <div className="login_background">
        <img
          className="loginscreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginscreen_button" onClick={() => setSignin(true)}>
          sign in
        </button>

        <div className="loginscreen_gradient" />

        <div className="loginscreen_body">
          {signin ? (
            <SigninScreen />
          ) : (
            <>
              <h1>Unlimited films, TV Programmes</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>
                Ready to watch? enter your email to create or restart your
                membership
              </h3>
              <div className="loginscreen_input">
                <form>
                  <input type="email" placeholder="Email Addrees" />
                  <button
                    className="loginscreen_getstarted"
                    onClick={() => setSignin(true)}
                  >GET STARTED</button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
