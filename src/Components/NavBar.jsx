import React, { useRef, useState } from "react";
// import "../Styles/NavBar.css";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import logo from "../images/hulu-logo.svg";
// import disnep1 from '../image'
import disnep1 from "../images/disnep1.png";
import disnep2 from "../images/disnep2.png";
import Form from "./Form";

const NavBar = () => {
  const showGetWrap = useRef();
  const [showForm, setShowForm] = useState(false);
  const showWrap = () => {
    if (showGetWrap.current.classList.contains("getWrap")) {
      showGetWrap.current.classList.remove("getWrap");
      showGetWrap.current.classList.add("getWrapShow");
    } else {
      showGetWrap.current.classList.add("getWrap");
      showGetWrap.current.classList.remove("getWrapShow");
    }
    if (window.innerWidth > 1023) {
      showGetWrap.current.classList.add("getWrap");
      showGetWrap.current.classList.remove("getWrapShow");
    }
  };
  //  if(window.innerWidth>1023){
  //     showGetWrap.current.classList.add('getWrap')
  //     showGetWrap.current.classList.remove('getWrapShow')
  //   }
  const reMoveForm=()=>{
setShowForm(false)
  }

  return (
    <section className="navWrap">
      <div className="heroWrap">
        <header className="header">
          <Link to="/">
            <div>
              <img className="logo" src={logo} alt="hulu-logo" />
            </div>
          </Link>

          {/* <li>
          
            <Link
              className="active"
              to="./About"
              onClick={() => {
           
              }}>
              About
            </Link>
          </li> */}

          <div>
            <button
              className="login-button"
              onClick={() => {
                setShowForm(true);
              }}>
              LOG IN
            </button>
          </div>

          <div
            className="menu"
            onClick={() => {
              showWrap();
            }}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>

        <div className="getWrap" ref={showGetWrap}>
          <div className="getTheHuluAppWrap">
            <Link>
              <button className="gta"> Get the Hulu app</button>
            </Link>

            <Link to="/Form">
              <button className="log"> LOG IN</button>
            </Link>
            <Link to="/SubScriptions">
              <button className="gat"> GET ALL THREE</button>
            </Link>
          </div>
        </div>

        <div className="disneyBundleWrap">
          <div className="disneySub">
            <h5>DISNEY BUNDLE DUO BASIC </h5>

            <div className="gap">
              <div>
                <img className="img" src={disnep2} alt="disnep-logo" />
                {/* <img className="img" src={disnep1} alt="disnep-logo" /> */}
              </div>

              <div>
                <h4>Both with adds, for </h4>
                <h4>$9.99/month.</h4>
              </div>

              <div>
                <Link to="/SubScriptions">
                  <button>GET THEM BOTH</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="disneySub">
            <h5>DISNEY BUNDLE TRIO BASIC </h5>

            <div className="gap">
              <div>
                <img className="img" src={disnep2} alt="disnep-logo" />
              </div>

              <div>
                <h4>All with adds, for </h4>
                <h4>$14.99/month.</h4>
              </div>

              <div>
                <Link to="/SubScriptions">
                  <button>GET ALL THREE </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="termsWrap">
          <div>
            <Link>
              <small>Terms apply </small>
            </Link>
          </div>

          <div>
            <Link to="/Account">
              <h4>SIGN UP FOR HULU ONLY </h4>
            </Link>
          </div>
          <div>
            <Link className="view">
              <h5>VIEW MORE PLANS </h5>
            </Link>
          </div>
        </div>
      </div>
      {showForm ? <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
         
        }}>
        <div class="formWrap">
          <div className="flexRemoveForm">
          <button id="removeIcon" onClick={()=>{
            setShowForm(false)
          }}>x</button>
          </div>

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
            <label for="Email">EMAIL</label>
            <div>
              <input id="Email" type="email" required />
            </div>
          </div>

          <div>
            <label for="password">PASSWORD</label>
            <div>
              <input id="password" type="password" required/>
              <button class="showPass">show password</button>

              <button class="hidePass">hide password</button>
            </div>
          </div>

          <Link>Forgot your email or password?</Link>

          <button id="login" type="submit">LOGIN</button>
{/* <input type="submit" name="" id="" /> */}
          <p>
            Don't have an account? <Link to="/SubScriptions" href="#">Start your free trial</Link>
          </p>
        </div>
      </form> : ""}
    </section>
  );
};

export default NavBar;
