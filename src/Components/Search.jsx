import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import nullImg from "../images/null-img.png";
import { format } from "date-fns";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading
  const [error, setError] = useState(null); // State to track errors
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const place = queryParams.get("search");

  useEffect(() => {
    if (place) {
      setLoading(true); // Set loading to true before fetching data
      axios
        .get(`https://api.themoviedb.org/3/search/movie`, {
          params: {
            api_key: "f88e1a68e044da412259fe73a7a4e089",
            query: place,
          },
        })
        .then((response) => {
          setSearchResults(response.data.results);
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
          setError("Error fetching movie data try to refresh");
          setLoading(false); // Set loading to false in case of error
        });
    }
  }, [place]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Results for "{place}"</h2>
      
      {/* Show loading state */}
      {loading ? (
        <p className="text-gray-400">Searching...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((movie) => {
            const formattedDate = format(
              new Date(movie.release_date),
              "MMMM d, yyyy"
            );
            return (
              <Link to={"/search/" + movie.id} key={movie.id}>
                <div className="bg-gray-800 p-4 rounded-lg border border-#1ce783">
                  <img
                    className="rounded w-full object-cover"
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        : nullImg
                    }
                    alt={movie.title}
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {movie.title}
                  </h3>
                  <p className="text-gray-400">{formattedDate}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-400 h-screen flex items-center justify-center">No movies found</p>
      )}
    </div>
  );
};

export default Search;
