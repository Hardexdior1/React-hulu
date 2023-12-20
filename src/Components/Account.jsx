import React, { useState,useEffect } from "react";
import "../Styles/Form.css";
import logoDark from "../images/hulu-dark.svg";
import { Link } from "react-router-dom";

const Account = () => {
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
          <Link to="/Form">
            <h3>LOG IN </h3>
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
          {/* <div className="flexRemoveForm">
          </div> */}

          <div>
            <h2>Create Your Account </h2>
            <p>
              Use your email and password to watch on your favorite devices.
              <a href="#">Learn more</a>
            </p>
          </div>

          <div>
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
          <div>
            <label htmlFor="name">NAME</label>
            <div>
              <input id="name" type="email" required />
            </div>
          </div>

          <div>
            <label htmlFor="birth">BIRTHDATE</label>
            <div>
              <input type="date" id="birth" required />
            </div>
          </div>
          <div>
            <label htmlFor="gender">GENDER</label>
            <div>
              <select name="" id="gender">
              <option value="select">Select </option>

                <option value="man">Male</option>
                <option value="woman">Female</option>
                <option value="not-to-say">prefer not to say </option>


              </select>
            </div>
          </div>
          <a href="#">Forgot your email or password?</a>

         
          {/* <input type="submit" name="" id="" /> */}
          <div className="continueWrap">
      <small>
          Hulu will use your data to personalize and improve your Hulu experience and to send you information about Hulu. You can change your communication preferences at any time. We may use your data as described in our Privacy Policy, including sharing it with The Walt Disney Family of Companies. By clicking “CONTINUE” below you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy.
          </small>

          <button>CONTINUE</button>
      </div>
        </div>
        
      </form>

     
    </div>
  );
};

export default Account;
