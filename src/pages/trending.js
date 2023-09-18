import Layout from "@/components/Layout";
import Movies from "@/components/Movies";
import { getPopularMovies } from "@/utils/api";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await getPopularMovies(page);
        const newData = response;
        setMovies((prevMovies) => [...prevMovies, ...newData]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPopularMovies();
  }, [page]);

  const loadMoreData = () => {
    setPage(page + 1); // Increment the page to load
  };

  return (
    <Layout>
      <h2 className="text-xl mb-3">Trending Movies</h2>
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
};

export default Trending;
