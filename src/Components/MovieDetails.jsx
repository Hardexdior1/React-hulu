
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";import nullImg from "../images/null-img.png";
import { FaPlay } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [credits, setCredits] = useState(null);
  const [videos, setVideos] = useState(null);
  const [user, setUser] = useState(null);
  // console.log(credits);
  //   console.log("movieDetails", movieDetails);
  console.log("credits", credits);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    // Fetch movie details
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f88e1a68e044da412259fe73a7a4e089`
    )
      .then((response) => response.json())
      .then((data) => setMovieDetails(data));

    // Fetch credits
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f88e1a68e044da412259fe73a7a4e089`
    )
      .then((response) => response.json())
      .then((data) => setCredits(data));

    // Fetch videos
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f88e1a68e044da412259fe73a7a4e089`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, [id]);
  const [showTriller, setShowTriller] = useState(false);

  const toggleShowTriller = () => {
    window.scrollTo(0, 0);
    setShowTriller(!showTriller);
  };
  if (!movieDetails || !credits || !videos)
    return <div className="text-white">Loading...</div>;

  // getting director , writerand trailer
  const director = credits.crew.find((member) => member.job === "Director");
  const writers = credits.crew.filter((member) => member.job === "Writer");
  const trailer = videos.results.find((video) => video.type === "Trailer");

  // responsiveness for casts carousel
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

  return (
    <div>
      <div
        className="relative p-8 px-10 grid items-center justify-center bg-black md:flex items-center justify-between gap-10 md: text-white"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
          backgroundSize: "cover",
          //   opacity: 0.5,
        }}>
        {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
        <div className="z-20 relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            className=" rounded-md"
            alt={movieDetails.title}
          />
        </div>
        <div>
          <div className="z-20 relative">
            <h1 className="text-3xl font-bold mb-4">
              {movieDetails.title} ( {movieDetails.release_date})
            </h1>
            <div className="p-5 items-center gap-3 font-bold cursor-pointer inline-block">
              <div
                className="flex gap-3 items-center cursor-pointer"
                onClick={() => {
                  toggleShowTriller();
                }}>
                <FaPlay />
                Play Tailer
              </div>
            </div>
            <h1 className="font-bold text-2xl mb-2">Overview</h1>
            <p className="text-sm font-bold mb-6">{movieDetails.overview}</p>
            <h3 className="text-2xl font-semibold mb-2">
              Director: {director?.name}
            </h3>
            <h4 className="text-xl font-semibold mb-2">Writers:</h4>
            <ul className="list-disc list-inside pl-5 mb-6">
              {writers.map((writer) => (
                <li key={writer.id} className="text-base font-bold">
                  {writer.name}
                </li>
              ))}
            </ul>{" "}
          </div>
        </div>

        {showTriller && (
          <div>
            {trailer && (
              <div className="absolute left-0 right-0 top-0 z-20 bg-black p-8">
                <div className="flex justify-end">
                  <button
                    className="pr-4 mb-3 text-3xl"
                    onClick={() => {
                      toggleShowTriller();
                    }}>
                    x
                  </button>
                </div>
                <iframe
                  className="w-full md:h-screen"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  //   aria-controls=''
                ></iframe>
              </div>
            )}
          </div>
        )}
      </div>

      <h1 className="font-bold text-2xl p-4"> Casts </h1>

      <div className="h-screen overflow-y-scroll pb-8">
      <div className="grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* <Carousel responsive={responsive}> */}
        {credits?.cast.map((cast) => {
          return (
            <div key={cast.id} className="shadow-md   bg-white">
              <div>
                {/* <img
                    className="rounded  w-full"
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                        : nullImg
                    }
                    alt={cast.original_name}
                  /> */}
                <img
                  className="rounded w-full object-cover" // Adjust the width with Tailwind classes
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/original${cast.profile_path}` // Use original size and let Tailwind handle the width
                      : nullImg
                  }
                  alt={cast.original_name}
                />
              </div>
              <div className="p-4">
                <p>
                  <span className="font-bold">Name:</span>{" "}
                  <span className="font-semibold">{cast.original_name}</span>
                </p>
                {cast.character && (
                  <p>
                    <span className="font-bold">Character:</span>{" "}
                    <span className="font-semibold">{cast.character}</span>
                  </p>
                )}
              </div>
            </div>
          );
        })}
        {/* </Carousel> */}
      </div>
      </div>
    </div>
  );
};

export default MovieDetails;
