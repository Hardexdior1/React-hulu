import React, { useEffect, useRef, useState } from "react";
import "../Styles/Include.css";
import { Link } from "react-router-dom";
import tvImg1 from "../images/tvImg1.png";
import tvImg2 from "../images/tvImg2.jfif";
import tvImg3 from "../images/tvImg3.png";
import tvImg4 from "../images/tvImg4.png";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";

import Carousel4 from "./Carousel4";
import Carousel5 from "./Carousel5";
import Carousel6 from "./Carousel6";
import Carousel7 from "./Carousel7";
// import Carousel8 from "./Carousel8";


import tvShows from "../images/img1Wrap.jfif";
import movie from "../images/img2Wrap.jfif";
import original from "../images/img3Wrap.jfif";
import premium from '../images/img4Wrap.jfif'

import News from "./News";
import Carousel8 from "./Carousel8";
import Carousel9 from "./Carousel9";
import Carousel10 from "./Carousel10";
import Carousel11 from "./Carousel11";
import Carousel12 from "./Carousel12";
import Carousel13 from "./Carousel13";
import Carousel14 from "./Carousel14";
import Plans from "./Plans";

const IncludedSection = () => {


  const [tvShowTvShow, setShowTvShows] = useState(false);
  const [movies, setMovies] = useState(false);
  const [huluOriginal, setHuluOriginals] = useState(false);
  const[premiums,setPremiums]=useState(false)

  // let second=arrays.slice(0,2)

 

  const showTv = () => {
    setShowTvShows(true);
  };
  const hideShowTv = () => {
    setShowTvShows(false);
  };
  const showMovies = () => {
    setMovies(true);
  };
  const hideMovies = () => {
    setMovies(false);
  };
  const hideHuluOriginal = () => {
    setHuluOriginals(false);
  };
  const showHuluOriginal = () => {
    setHuluOriginals(true);
  };
  const showPremiums = () => {
    setPremiums(true);
  };
  const hidePremiums = () => {
    setPremiums(false);
  };
 
  return (
    <div>
    
      <section className="includeWrap">
        <div>
          <div className="include">
            <h5>INCLUDED IN ALL PLANS</h5>
            <h1>All The TV You Love</h1>
          </div>

          <div className="include">
            <p>
              Watch full seasons of exclusive streaming series, current-season
              episodes, hit movies, Hulu Originals, kids shows, and more.
            </p>
          </div>
        </div>

        {/* <h4>hello</h4> */}

        <div className="fourImagesWrap">
          {tvShowTvShow ? (
            <div className="absolute">
              <div className="imgAndTextWrap">
                <img className="img1" src={tvShows} alt="tv-show" />

                <div className="tv">
                  <h4>TV Shows </h4>

                  <button
                    className="remove"
                    onClick={() => {
                      hideShowTv();
                    }}>
                    x
                  </button>
                </div>

                <div className="tvText">
                  <h3>TV Shows</h3>

                  <p>
                    watch past seasons of exclusive shows, current-season
                    episodes the day after they air, 40+ acclaimed series from
                    FX, classic favorites, and tons more.{" "}
                  </p>
                </div>
              </div>
              <div>
                <Carousel1 />
                <Carousel2 />
                <Carousel3 />
                {/* <div> */}
                <Carousel4 />
                <Carousel5 />
                <Carousel6 />
                {/* <Carousel4 /> */}
              {/* </div> */}
              </div>
            </div>
          ) : null}
          {movies ? (
            <div className="absolute">
              <div className="imgAndTextWrap">
                <img className="img1" src={movie} alt="movie" />

                <div className="tv">
                  <h4>Movies </h4>

                  <button
                    className="remove"
                    onClick={() => {
                      hideMovies();
                    }}>
                    x
                  </button>
                </div>

                <div className="tvText">
                  <h3>Movies</h3>

                  <p>
                    watch past seasons of exclusive shows, current-season
                    episodes the day after they air, 40+ acclaimed series from
                    FX, classic favorites, and tons more.{" "}
                  </p>
                </div>
              </div>
              <div>
                <Carousel7 />
                <Carousel8 />
                <Carousel9 />
                <Carousel10 />
                {/* <Carousel4 /> */}
              </div>
            </div>
          ) : null}

          {huluOriginal ? (
            <div className="absolute">
              <div className="imgAndTextWrap">
                <img className="img1" src={original} alt="hulu-original" />

                <div className="tv">
                  <h4>Hulu Originals </h4>

                  <button
                    className="remove"
                    onClick={() => {
                      hideHuluOriginal();
                    }}>
                    x
                  </button>
                </div>

                <div className="tvText">
                  <h3>Hulu Originals</h3>

                  <p>
                    watch past seasons of exclusive shows, current-season
                    episodes the day after they air, 40+ acclaimed series from
                    FX, classic favorites, and tons more.{" "}
                  </p>
                </div>
              </div>
              <div>
                <Carousel11 />
                <Carousel12 />
                <Carousel13 />
                {/* <Carousel4 /> */}
              </div>
            </div>
          ) : null}

          {premiums ? (
            <div className="absolute">
              <div className="imgAndTextWrap">
                <img className="img1" src={premium} alt="premium" />

                <div className="tv">
                  <h4>Premiums </h4>

                  <button
                    className="remove"
                    onClick={() => {
                      hidePremiums();
                    }}>
                    x
                  </button>
                </div>

                <div className="tvText">
                  <h3>Premiums</h3>

                  <p>
                    watch past seasons of exclusive shows, current-season
                    episodes the day after they air, 40+ acclaimed series from
                    FX, classic favorites, and tons more.{" "}
                  </p>
                </div>
              </div>
              <div>
                <Carousel14 />
                <Carousel12 />
                <Carousel13 />
                {/* <Carousel4 /> */}
              </div>
            </div>
          ) : null}
          <div className="fisrtgrid">
            <div className="imgHover">
              <img
                src={tvImg1}
                alt="movie-img"
                onClick={() => {
                  showTv();
                }}
              />
              <div class="img-text" onClick={()=>{showTv()}}>
                <p>Past & Current Seasons</p>
                <h3>TV Shows</h3>
              </div>
            </div>
            <div className="imgHover">
              <img
                src={tvImg2}
                alt="movie-img"
                onClick={() => {
                  showMovies();
                }}
              />
                             <div class="img-text" onClick={()=>{showMovies()}}>

            <p>New & Classic</p>
            <h3>Movies</h3>
          </div>
            </div>
            <div className="imgHover">
            <img
              src={tvImg3}
              alt="movie-img"
              onClick={() => {
                showHuluOriginal();
              }}
            />
                          <div class="img-text" onClick={()=>{showHuluOriginal()}}>

            <p>Groundbreaking</p>
            <h3>Hulu Originals</h3>
          </div>
          </div> 
           <div className="imgHover" onClick={()=>{
            showPremiums()
           }}>
            <img src={tvImg4} alt="movie-img" />

            <div class="img-text">
            <p>Add-on</p>
            <h3>Premiums</h3>
          </div>
          </div>
          </div>

          
        </div>

        <div>
          <div className="include">
            <h4>HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS</h4>
            <h1>Live TV Makes It Better</h1>
          </div>

          <div className="include">
            <p className="lineHeight">
              Get 90+ top channels on Hulu (With Ads) + Live TV with your
              favorite live sports, news, and events - plus the entire Hulu
              streaming library. With Unlimited DVR, store Live TV recordings
              for up to nine months and fast-forward through your DVR content.
              Access endless entertainment with Disney+ and live sports with
              ESPN+.
            </p>
          </div>
        </div>

        <div className="getHulu">
          <div>
            <Link>
              <button>GET HULU + LIVE TV </button>
            </Link>
          </div>
          <small>
            Hulu (With Ads) + Live TV plan only. $76.99/mo (or then-current,
            regular monthly price). Regional restrictions, blackouts and Live TV
            terms apply. Access content from each service separately. Location
            data required to watch certain content. Unlimited DVR recording is
            not available for on-demand shows. See details.
          </small>
          <div>
            <Link>VIEW CHANNELS IN YOUR AREA →</Link>
          </div>
        </div>
      </section>

      <News />
      <Plans />
    </div>
  );
};

export default IncludedSection;
