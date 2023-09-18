import Layout from "@/components/Layout";
import Movies from "@/components/Movies";
import { getFilteredMovies } from "@/utils/api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Results = () => {
  const router = useRouter();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (router.query) {
      const { page } = router.query;
      async function fetchMovies() {
        try {
          const response = await getFilteredMovies({ page: page });
          const newData = response;
          setMovies((prevMovies) => [...prevMovies, ...newData]);
        } catch (error) {
          console.error(error);
        }
      }
      fetchMovies();
    }
  }, [router.query]);

  return (
    <Layout>
      <h1 className="text-lg mb-4">Search Results:</h1>
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

export default Results;
