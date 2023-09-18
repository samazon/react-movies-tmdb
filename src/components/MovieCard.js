/* eslint-disable @next/next/no-img-element */
import React from "react";

const MovieCard = ({ movie }) => {
  const tmdbImageBaseUrl = "https://image.tmdb.org/t/p";
  const imageSize = "w300";

  return (
    <React.Fragment>
      {!movie.poster_path ? (
        <img src="../assets/no-image.png" alt="No Image" />
      ) : (
        <img
          src={`${tmdbImageBaseUrl}/${imageSize}${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
    </React.Fragment>
  );
};

export default MovieCard;
