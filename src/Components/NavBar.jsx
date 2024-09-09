import React, { useRef, useState } from "react";
// import "../Styles/NavBar.css";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import logo from "../images/hulu-logo.svg";
// import disnep1 from '../image'
import disnep1 from "../images/disnep1.png";
import disnep2 from "../images/disnep2.png";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const showGetWrap = useRef();
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/search?search=${searchQuery}`);
    }
  };
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

  const [password,setPassword]=useState(false)

  return (
    <section className="navWrap">
      <div className="heroWrap">
        <header className="header">
          <Link to="/">
            <div>
              <img className="logo" src={logo} alt="hulu-logo" />
            </div>
          </Link>

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

            <Link to="/signup">
              <button className="log"> LOG IN</button>
            </Link>
            <Link to="/SubScriptions">
              <button className="gat"> GET ALL THREE</button>
            </Link>
          </div>
        </div>

        <div className="disneyBundleWrap px-4 md:px-0">
       
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

        <div>
        <form className="mt-8 px-6 pt-14">
          <div className="flex bg-white rounded-full shadow-md overflow-hidden">
            <input
              type="text"
              className="flex-grow px-4 py-2 text-black focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a movie..."
            />
            <button type="submit"
              className="px-6 py-3 bg-[#1ce783] text-white font-semibold rounded-full"
              onClick={handleSearch}>
              Search
            </button>
          </div>
        </form>
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
            <label htmlFor="password">PASSWORD</label>
            <div>
              <input
                id="password"
                type={password?"text":"password"}
                required
               
              />
              <button class="showPass" onClick={()=>{
                setPassword(true)
              }}>show password</button>

              <button class="hidePass" onClick={()=>{
              setPassword(false)
              }}>hide password</button>
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
