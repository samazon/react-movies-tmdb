import React from "react";
import MovieCard from "./MovieCard";

const Movies = ({ movies }) => {
  return (
    <ul className="MovieListWrapper">
      {movies.map((movie) => (
        <li className="MovieCard" key={`${movie.title}-${movie.vote_average}`}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default Movies;
