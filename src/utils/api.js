import axios from "axios";

const tmdbApiKey = "d7fdd4cbb53f9191cae9a8dac2c7dcfd";
const tmdbBaseUrl = "https://api.themoviedb.org/3";

export async function getMovies(page) {
  try {
    const response = await axios.get(
      `${tmdbBaseUrl}/discover/movie?api_key=${tmdbApiKey}&page=${page}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch movies");
  }
}

export async function getFilteredMovies(data) {
  const { page, genres, sort_by } = data;
  const commaSeparatedString = genres.join(", ");

  try {
    const response = await axios.get(
      `${tmdbBaseUrl}/discover/movie?api_key=${tmdbApiKey}&page=${page}&with_genres:${commaSeparatedString}&sort_by=${sort_by}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movies");
  }
}

export async function getPopularMovies(page) {
  try {
    const response = await axios.get(
      `${tmdbBaseUrl}/movie/popular?api_key=${tmdbApiKey}&page=${page}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch movies");
  }
}

export async function getUpcomingMovies(page) {
  try {
    const response = await axios.get(
      `${tmdbBaseUrl}/movie/upcoming?api_key=${tmdbApiKey}&page=${page}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch movies");
  }
}

export async function getGenres() {
  try {
    const response = await axios.get(
      `${tmdbBaseUrl}/genre/movie/list?api_key=${tmdbApiKey}`
    );
    return response.data.genres;
  } catch (error) {
    throw new Error("Failed to fetch movie genres");
  }
}
