import Layout from "@/components/Layout";
import Movies from "@/components/Movies";
import { getUpcomingMovies } from "@/utils/api";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchUpcomingMovies() {
      try {
        const response = await getUpcomingMovies(page);
        const newData = response;
        setMovies((prevMovies) => [...prevMovies, ...newData]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUpcomingMovies();
  }, [page]);

  const loadMoreData = () => {
    setPage(page + 1); // Increment the page to load
  };

  return (
    <Layout>
      <h2 className="text-xl mb-3">Upcoming Movies</h2>
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

export default Upcoming;
