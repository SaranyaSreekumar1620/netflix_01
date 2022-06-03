import axioss from "../axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import classes from "./Row.module.scss";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  const API_KEY = "5f005c95fa7d3809f6ebf38acab5f543";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //   console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axioss
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("array empty");
        }
      });
  };
  return (
    <div className={classes.row}>
      <h2>{title}</h2>
      <div className={classes.row__posters}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => handleMovie(movie.id)}
                className={`${classes.row__poster} ${
                  isLargeRow && classes.row__posterLarger
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
};

export default Row;
