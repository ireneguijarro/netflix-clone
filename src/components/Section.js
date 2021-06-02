import { useCallback, useEffect, useState } from "react";
import Card from "./Card";

const Section = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch("/.netlify/functions/getMovies", {
      method: "POST",
      body: JSON.stringify({ genre: genre }),
    });
    const responseBody = await response.json();
    setMovies(responseBody.data.movies_by_genre.values);
  }, [genre]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div>{genre}</div>
      {movies && (
        <div className="movie-section">
          {movies.map((movie, i) => (
            <Card key={i} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Section;
