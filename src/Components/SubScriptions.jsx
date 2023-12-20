import React, { useEffect, useRef, useState } from "react";
import "../Styles/SubScription.css";
import logoDark from "../images/hulu-dark.svg";
import disnep2 from "../images/superbundle-logo-color (1).svg";

import { Link } from "react-router-dom";

const SubScriptions = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const black = useRef();
  const white = useRef();

  const blacker = () => {
    black.current.classList.remove("grey");
    black.current.classList.add("black");

    white.current.classList.add("grey");
    white.current.classList.remove("black");
  };
  const whiter = () => {
    black.current.classList.add("grey");
    black.current.classList.remove("black");

    white.current.classList.remove("grey");
    white.current.classList.add("black");
  };
  const [showBase,setShowBase]=useState(true)
  return (
    <div className="subGeneralWrap">
      <header className="flexSubScribe">
        <Link to="/" path="/">
          {" "}
          <div>
            <img src={logoDark} alt="huluLogo" />
          </div>
        </Link>
        <div>
          <Link to="/Form">
            <h3>LOG IN</h3>
          </Link>
        </div>
      </header>

      <section className="subWrap">
        <div>
          <h1>Choose Your Plan </h1>
          <p>Switch plans or cancel anytime</p>
        </div>

        <div className="baseWrap">
          <h4
            className="black"
            ref={black}
            onClick={() => {
              blacker();
              setShowBase(true)
            }}>
            BASE PLANS{" "}
          </h4>
          <h4
            className="grey"
            ref={white}
            onClick={() => {
              whiter();
              setShowBase(false)

            }}>
            BUNDLE / SAVE{" "}
          </h4>
        </div>

{showBase?<div className="flexSubScriptions">
          <div className="whiteBackground">
            <div className="noAds">
              <h4>Hulu (No Ads )</h4>

              <span className="green">get First Month Free. Then </span>

              <h2>
                $17.99 / <small>month</small>
              </h2>
            </div>

            <div>
              <p>
                Our Hulu (no Ads ) plan lets you watch exclusive series,hit
                movies, originals, kids shows, and tons more with no ad
                interruptions{" "}
              </p>
            </div>

            <div>
              <Link to="/Account">
                <button className="select1">SELECT </button>
              </Link>
            </div>
          </div>

          <div className="whiteBackground border">
            <div className="noAds">
              <button>MOST POPULAR</button>

              <h4>Hulu </h4>

              <span className="green">get First Month Free. Then </span>

              <h2>
                $7.99
                <small>/ month</small>
              </h2>
            </div>

            <div>
              <p>
                Our Hulu (With Ads) plan lets you watch exclusive series, hit
                movies, Originals, kids shows, and tons more.
              </p>
            </div>

            <div>
              <Link to="/Account">
                <button className="select2">SELECT </button>
              </Link>
            </div>
          </div>
          <div className="whiteBackground">
            <div className="noAds">
              <h4>Hulu (No Ads )</h4>

              <span className="green">Includes Disney+ and ESPN+ </span>

              <h2>
                $76.99 / <small>month</small>
              </h2>
            </div>

            <div>
              <p>
                Access 90+ channels with Live TV, Unlimited DVR, endless
                entertainment with Disney+ (With Ads), live sports with ESPN+
                (With Ads), and award-winning Hulu originals with Hulu (With
                Ads).
              </p>
            </div>

            <div>
              <Link to="/Account">
                <button className="select1">SELECT </button>
              </Link>
            </div>
          </div>
        </div>:  <div className="flexSubScriptions">
          <div className="whiteBackground">
            <div className="noAds">
              <h4>Disney Bundle Duo Basic</h4>

              <div>
                {" "}
                <img src={disnep2} alt="hulu-logo" />{" "}
              </div>

              <h2>
                $9.99 / <small>month</small>
              </h2>
            </div>

            <div>
              <p>
                Access endless entertainment with Disney+ (With Ads), and
                award-winning Hulu Originals with Hulu (With Ads).
              </p>
            </div>

            <div>
              <Link to="/Account">
                <button className="select1">SELECT </button>
              </Link>
            </div>
          </div>

          <div className="whiteBackground border">
            <div className="noAds">
              <button>SAVE 44% ($11.98/MO. OFF)*</button>

              <h4>Disney Bundle Trio Basic</h4>
              <div>
                {" "}
                <img src={disnep2} alt="hulu-logo" />{" "}
              </div>

              <h2>
                $14.99
                <small>/ month</small>
              </h2>
            </div>

            <div>
              <p>
                Access live sports with ESPN+ (With Ads), endless entertainment
                with Disney+ (With Ads), and award-winning Hulu Originals with
                Hulu (With Ads). *Savings compared to regular monthly price of
                each service.
              </p>
            </div>

            <div>
              <Link to="/Account">
                <button className="select2">SELECT </button>
              </Link>
            </div>
          </div>
          <div className="whiteBackground">
            <div className="noAds">
              <h4>Disney Bundle Trio Premium</h4>
              <div>
                {" "}
                <img src={disnep2} alt="hulu-logo" />{" "}
              </div>
              <h2>
                $24.99 / <small>month</small>
              </h2>
            </div>

            <div>
              <p>
                Access live sports with ESPN+ (With Ads), endless entertainment
                with Disney+ (No Ads), and award-winning Hulu Originals with
                Hulu (No Ads).
              </p>
            </div>

            <div>
              <Link to="/Account">
                <button className="select1">SELECT </button>
              </Link>
            </div>
          </div>
        </div>}
      
      </section>
    </div>
  );
};

export default SubScriptions;
