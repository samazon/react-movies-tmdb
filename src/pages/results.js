import Layout from "@/components/Layout";
import Movies from "@/components/Movies";
import React, { useEffect, useState } from "react";

const Results = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("sortedMovies")) || [];
    if (data) {
      setMovies(data);
    }
  }, []);

  return (
    <Layout>
      <h1 className="text-lg mb-4">Search Results:</h1>
      {movies && <Movies movies={movies} />}
    </Layout>
  );
};

export default Results;
