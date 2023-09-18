import React from "react";
import { v4 as uuidv4 } from "uuid";

import MovieCard from "./MovieCard";

const Movies = ({ movies }) => {
  return (
    <ul className="MovieListWrapper">
      {movies.map((movie) => {
        const randomUUID = uuidv4();
        return (
          <li className="MovieCard" key={`${movie.title}-${randomUUID}`}>
            <MovieCard movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default Movies;
