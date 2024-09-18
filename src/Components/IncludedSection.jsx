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
import axios from "axios";

import tvShows from "../images/img1Wrap.jfif";
import movie from "../images/img2Wrap.jfif";
import original from "../images/img3Wrap.jfif";
import premium from "../images/img4Wrap.jfif";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import Carousel8 from "./Carousel8";
import Carousel9 from "./Carousel9";
import Carousel10 from "./Carousel10";
import Carousel11 from "./Carousel11";
import Carousel12 from "./Carousel12";
import Carousel13 from "./Carousel13";
import Carousel14 from "./Carousel14";
import { format } from "date-fns";

const IncludedSection = () => {
  const TMDB_ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODhlMWE2OGUwNDRkYTQxMjI1OWZlNzNhN2E0ZTA4OSIsIm5iZiI6MTcyMzE1Mzg1Mi40OTc0ODQsInN1YiI6IjY2YjUzYzYyZmRjOGYwMzA4ZjU3YTk1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ML474-USalWWnvPURoZAGq9D4fIHHlFilAKp1rhHmDQ";

  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const [nowPlaying, setNowPlaying] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
const [tvTopRated,setTvTopRated]=useState([])

  let popular = "popular";
  let upcoming = "upcoming";
  let top_rated = "top_rated";

  useEffect(() => {
    // fetch popular movies
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${popular}`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            },
          }
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data from TMDb:", error);
      }
    };

    // fetch upcoming movies
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${upcoming}`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            },
          }
        );
        setUpcomingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data from TMDb:", error);
      }
    };
    // fetch topRatedMovies
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${top_rated}`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            },
          }
        );
        setTopRated(response.data.results);
      } catch (error) {
        console.error("Error fetching data from TMDb:", error);
      }
    };
    const now_playing = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            },
          }
        );
        setNowPlaying(response.data.results);

        // console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching data from TMDb:", error);
      }
    };
    const airing = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/airing_today`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            },
          }
        );
        // setNowPlaying(response.data.results);
        setAiringToday(response.data.results)
        // console.log(response.data.results);

        // console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching data from TMDb:", error);
      }
    };
// tv top rated 
const tvRated = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated`,
      {
        headers: {
          Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    // setNowPlaying(response.data.results);
    setTvTopRated(response.data.results)
    console.log(response.data.results);

    // console.log(response.data.results);
  } catch (error) {
    console.error("Error fetching data from TMDb:", error);
  }
};
tvRated()
    airing()
    now_playing();
    fetchPopularMovies();
    fetchUpcomingMovies();
    fetchTopRatedMovies();
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [tvShowTvShow, setShowTvShows] = useState(false);
  const [movies, setMovies] = useState(false);
  const [huluOriginal, setHuluOriginals] = useState(false);
  const [premiums, setPremiums] = useState(false);

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
    
      {/* four images wrap 2 */}

      <section className="includeWrap className py-20">
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

        <div className="fourImagesWrap ">
          {tvShowTvShow ? (
            <div className="absolute p-5 my-5 h-screen overflow-y-scroll">
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

                  {tvShowTvShow ? (
                    <p>
                      watch past seasons of exclusive shows, current-season
                      episodes the day after they air, 40+ acclaimed series from
                      FX, classic favorites, and tons more.{" "}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div>
                {/* popular carousel */}
               <div>
               <h1 className="text-white text-md font-bold mb-3 my-3"> POPULAR </h1>
                <Carousel responsive={responsive}>
                  {popularMovies?.map((item) => {
                    const formattedDate = format(
                      new Date(item.release_date),
                      "MMMM d, yyyy"
                    );

                    return (
                      <div key={item.id} className="mx-2 bg-white border">
                        <div className="">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.title}
                          />
                        </div>
                        <div className="px-3 py-4">
                          <Link to={"/movie_Details/" + item.id}>
                            <h1 className="font-bold text-1xl">
                              {" "}
                              {item.original_title}{" "}
                            </h1>
                       
                          <p className="font-bold">
                            Release Date: {formattedDate}
                          </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
               </div>

{/*  upcoming movies*/}
<div>
               <h1 className="text-white text-md font-bold mb-3 my-3"> UPCOMING  </h1>
                <Carousel responsive={responsive}>
                  {upcomingMovies?.map((item) => {
                    const formattedDate = format(
                      new Date(item.release_date),
                      "MMMM d, yyyy"
                    );

                    return (
                      <div key={item.id} className="mx-2 bg-white border">
                        <div className="">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.title}
                          />
                        </div>
                        <div className="px-3 py-4">
                          <Link to={"/movie_Details/" + item.id}>
                            <h1 className="font-bold text-1xl">
                              {" "}
                              {item.original_title}{" "}
                            </h1>
                          
                          <p className="font-bold">
                            Release Date: {formattedDate}
                          </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
               </div>
                

                {/*  top rated movies*/}
<div>
               <h1 className="text-white text-md font-bold mb-3 my-3"> TOP RATED  </h1>
                <Carousel responsive={responsive}>
                  {topRated?.map((item) => {
                    const formattedDate = format(
                      new Date(item.release_date),
                      "MMMM d, yyyy"
                    );

                    return (
                      <div key={item.id} className="mx-2 bg-white border">
                        <div className="">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.title}
                          />
                        </div>
                        <div className="px-3 py-4">
                          <Link to={"/movie_Details/" + item.id}>
                            <h1 className="font-bold text-1xl">
                              {" "}
                              {item.original_title}{" "}
                            </h1>
                         
                          <p className="font-bold">
                            Release Date: {formattedDate}
                          </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
               </div>
              
              </div>
            </div>
          ) : null}



          {movies ? (
            <div className="absolute p-5 my-5 h-screen overflow-y-scroll">
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
              <div>
                {/* popular carousel */}
               <div>
               <h1 className="text-white text-md font-bold mb-3 my-3"> POPULAR </h1>
                <Carousel responsive={responsive}>
                  {nowPlaying?.map((item) => {
                    const formattedDate = format(
                      new Date(item.release_date),
                      "MMMM d, yyyy"
                    );

                    return (
                      <div key={item.id} className="mx-2 bg-white border">
                        <div className="">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.title}
                          />
                        </div>
                        <div className="px-3 py-4">
                          <Link to={"/movie_Details/" + item.id}>
                            <h1 className="font-bold text-1xl">
                              {" "}
                              {item.original_title}{" "}
                            </h1>
                          
                          <p className="font-bold">
                            Release Date: {formattedDate}
                          </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
               </div>

{/*  upcoming movies*/}
<div>
               <h1 className="text-white text-md font-bold mb-3 my-3"> AIRING TODAY  </h1>
                <Carousel responsive={responsive}>
                  {airingToday?.map((item) => {
                    const formattedDate = format(
                      new Date(item.first_air_date),
                      "MMMM d, yyyy"
                    );

                    return (
                      <div key={item.id} className="mx-2 bg-white border">
                        <div className="">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.title}
                          />
                        </div>
                        <div className="px-3 py-4">
                          <Link to={"/movie_Details/" + item.id}>
                            <h1 className="font-bold text-1xl">
                              {" "}
                              {item.original_name}
                            </h1>
                         
                          <p className="font-bold">
                            Release Date: {formattedDate}
                          </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
               </div>
                

                {/*  top rated movies*/}
<div>
               <h1 className="text-white text-md font-bold mb-3 my-3 mt-4"> TOP RATED  </h1>
                <Carousel responsive={responsive}>
                  {tvTopRated?.map((item) => {
                    const formattedDate = format(
                      new Date(item.first_air_date),
                      "MMMM d, yyyy"
                    );

                    return (
                      <div key={item.id} className="mx-2 bg-white border">
                        <div className="">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.original_name}
                          />
                        </div>
                        <div className="px-3 py-4">
                          <Link to={"/movie_Details/" + item.id}>
                            <h1 className="font-bold text-1xl">
                              {" "}
                              {item.original_name}{" "}
                            </h1>
                         
                          <p className="font-bold">
                            Release Date: {formattedDate}
                          </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
               </div>
              
              </div>
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
                {/* <Carousel11 /> */}
                <h1 className="text-white text-md font-bold mb-3 my-3 mt-4 ml-4"> TOP RATED  </h1>

                <Carousel responsive={responsive}>
                  {tvTopRated?.map((item) => {
                    const formattedDate = format(
                      new Date(item.first_air_date),
                      "MMMM d, yyyy"
                    );

                    return (
                      <div key={item.id} className="mx-2 bg-white border">
                        <div className="">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.original_name}
                          />
                        </div>
                        <div className="px-3 py-4">
                          <Link to={"/movie_Details/" + item.id}>
                            <h1 className="font-bold text-1xl">
                              {" "}
                              {item.original_name}{" "}
                            </h1>
                         
                          <p className="font-bold">
                            Release Date: {formattedDate}
                          </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
                <h1 className="text-white text-md font-bold mb-3 my-3 ml-4"> AIRING TODAY  </h1>
                <Carousel responsive={responsive}>
                  {airingToday?.map((item) => {
                    const formattedDate = format(
                      new Date(item.first_air_date),
                      "MMMM d, yyyy"
                    );

                    return (
                      <div key={item.id} className="mx-2 bg-white border">
                        <div className="">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.title}
                          />
                        </div>
                        <div className="px-3 py-4">
                          <Link to={"/movie_Details/" + item.id}>
                            <h1 className="font-bold text-1xl">
                              {" "}
                              {item.original_name}
                            </h1>
                         
                          <p className="font-bold">
                            Release Date: {formattedDate}
                          </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
                <h1 className="text-white text-md font-bold mb-3 my-3 ml-4"> POPULAR </h1>
                <Carousel responsive={responsive}>
                  {nowPlaying?.map((item) => {
                    const formattedDate = format(
                      new Date(item.release_date),
                      "MMMM d, yyyy"
                    );

                    return (
                      <div key={item.id} className="mx-2 bg-white border">
                        <div className="">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.title}
                          />
                        </div>
                        <div className="px-3 py-4">
                          <Link to={"/movie_Details/" + item.id}>
                            <h1 className="font-bold text-1xl">
                              {" "}
                              {item.original_title}{" "}
                            </h1>
                          
                          <p className="font-bold">
                            Release Date: {formattedDate}
                          </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
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
              <h1 className="text-white text-md font-bold mb-3 my-3 ml-4"> POPULAR </h1>
                <Carousel responsive={responsive}>
                  {popularMovies?.map((item) => {
                    const formattedDate = format(
                      new Date(item.release_date),
                      "MMMM d, yyyy"
                    );

                    return (
                      <div key={item.id} className="mx-2 bg-white border">
                        <div className="">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.title}
                          />
                        </div>
                        <div className="px-3 py-4">
                          <Link to={"/movie_Details/" + item.id}>
                            <h1 className="font-bold text-1xl">
                              {" "}
                              {item.original_title}{" "}
                            </h1>
                       
                          <p className="font-bold">
                            Release Date: {formattedDate}
                          </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
                {/* <Carousel14 /> */}
                <h1 className="text-white text-md font-bold mb-3 my-3 mt-4 ml-4"> TOP RATED  </h1>

                <Carousel responsive={responsive}>
                  {tvTopRated?.map((item) => {
                    const formattedDate = format(
                      new Date(item.first_air_date),
                      "MMMM d, yyyy"
                    );

                    return (
                      <div key={item.id} className="mx-2 bg-white border">
                        <div className="">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.original_name}
                          />
                        </div>
                        <div className="px-3 py-4">
                          <Link to={"/movie_Details/" + item.id}>
                            <h1 className="font-bold text-1xl">
                              {" "}
                              {item.original_name}{" "}
                            </h1>
                         
                          <p className="font-bold">
                            Release Date: {formattedDate}
                          </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
                <h1 className="text-white text-md font-bold mb-3 my-3 mt-4 ml-4"> TOP RATED  </h1>

<Carousel responsive={responsive}>
  {tvTopRated?.map((item) => {
    const formattedDate = format(
      new Date(item.first_air_date),
      "MMMM d, yyyy"
    );

    return (
      <div key={item.id} className="mx-2 bg-white border">
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
            alt={item.original_name}
          />
        </div>
        <div className="px-3 py-4">
          <Link to={"/movie_Details/" + item.id}>
            <h1 className="font-bold text-1xl">
              {" "}
              {item.original_name}{" "}
            </h1>
         
          <p className="font-bold">
            Release Date: {formattedDate}
          </p>
          </Link>
        </div>
      </div>
    );
  })}
</Carousel>
              </div>
            </div>
          ) : null}
          <div className="fisrtgrid p-5">
            <div className="imgHover">
              <img
                src={tvImg1}
                alt="movie-img"
                onClick={() => {
                  showTv();
                }}
              />
              <div
                class="img-text"
                onClick={() => {
                  showTv();
                }}>
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
              <div
                class="img-text"
                onClick={() => {
                  showMovies();
                }}>
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
              <div
                class="img-text"
                onClick={() => {
                  showHuluOriginal();
                }}>
                <p>Groundbreaking</p>
                <h3>Hulu Originals</h3>
              </div>
            </div>
            <div
              className="imgHover"
              onClick={() => {
                showPremiums();
              }}>
              <img src={tvImg4} alt="movie-img" />

              <div class="img-text">
                <p>Add-on</p>
                <h3>Premiums</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 md:px-0">
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

        <div className="getHulu px-5 md:px-0">
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
    </div>
  );
};

export default IncludedSection;
