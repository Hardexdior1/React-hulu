import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Form.css";
import logoDark from "../images/hulu-dark.svg";

const Form = () => {
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const CheckPassword = (event) => {
    if (event.target.value.length > 10) {
      console.log("successful");
      setSuccess(true);
    } else {
      console.log("not successful");
    }
  };
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <header className="flexAccount">
        <Link to="/" path="/">
          {" "}
          <div>
            <img src={logoDark} alt="huluLogo" />
          </div>
        </Link>

        <div>
          <Link to="/Account">
            <h3>Account </h3>
          </Link>
        </div>
      </header>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          CheckPassword();
        }}>
        <div class="formWrap">
          <div className="flexRemoveForm"></div>

          <div>
            <h2>Log in</h2>
            <p>
              You will use this email and password to log into your accounts for
              all your favorite services across The Walt Disney Family of
              Companies, including Disney+, Hulu and ESPN+.
              <a href="#">Learn more</a>
            </p>
          </div>

          <div>
            <label htmlFor="Email">EMAIL</label>
            <div>
              <input id="Email" type="email" required />
            </div>
          </div>

          <div>
            <label htmlFor="password">PASSWORD</label>
            <div>
              <input
                id="password"
                type="password"
                required
                onChange={CheckPassword}
              />
              <button class="showPass">show password</button>

              <button class="hidePass">hide password</button>
            </div>
          </div>

          <a href="#">Forgot your email or password?</a>

          <button id="login" type="submit">
            LOGIN
          </button>
          {/* <input type="submit" name="" id="" /> */}
          <p>
            Don't have an account?{" "}
            <Link to="/SubScriptions">Start your free trial</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
