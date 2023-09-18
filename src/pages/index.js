import Layout from "@/components/Layout";
import MovieFilters from "@/components/MovieFilters";
import Movies from "@/components/Movies";
import { getFilteredMovies, getGenres, getMovies } from "@/utils/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const router = useRouter();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [toggleFilters, setToggleFilters] = useState(false);
  const [sortOption, setSortOption] = useState("popularity.desc");

  const [genres, setGenres] = useState([]);

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await getMovies(page);
        const newData = response;
        setMovies((prevMovies) => [...prevMovies, ...newData]);
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchGenres() {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
    fetchGenres();
  }, [page]);

  const loadMoreData = () => {
    setPage(page + 1); // Increment the page to load
  };

  // Callback functions for filter changes
  const handleGenreChange = (e) => {
    const genreId = e.target.value;
    setSelectedGenres((prevGenres) => {
      const updatedGenres = prevGenres.includes(genreId)
        ? prevGenres.filter((id) => id !== genreId)
        : [...prevGenres, genreId];
      return updatedGenres;
    });
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterButtonClick = async () => {
    // Gather selected filters
    const filters = {
      page: page,
      genres: selectedGenres,
      primary_release_date: selectedYear,
      vote_average: selectedRating,
      sort_by: sortOption,
    };

    try {
      const data = await getFilteredMovies({ ...filters });
      localStorage.removeItem("sortedMovies");
      localStorage.setItem("sortedMovies", JSON.stringify(data.results));
      router.push({
        pathname: "/results",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Layout>
      <h1 className="text-xl mb-3">TMDB Movies - Homepage</h1>
      <button
        className="p-2 bg-[#faa532] rounded-lg hover:text-white"
        onClick={() => setToggleFilters(!toggleFilters)}
      >
        Filter
      </button>
      {genres.length > 0 && toggleFilters && (
        <MovieFilters
          genres={genres}
          onGenreChange={handleGenreChange}
          onRatingChange={handleRatingChange}
          selectedYear={selectedYear}
          onYearChange={handleYearChange}
          onSortChange={handleSortChange}
          onFilterButtonClick={handleFilterButtonClick} // Pass the handler
        />
      )}
      {movies && (
        <InfiniteScroll
          dataLength={movies.length}
          next={loadMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Movies movies={movies} />
        </InfiniteScroll>
      )}
    </Layout>
  );
}
