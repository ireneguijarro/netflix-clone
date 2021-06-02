import { useCallback, useEffect, useState } from "react";
import Card from "./Card";

const Section = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  const fetchData = useCallback(async () => {
    const url = new URL("/.netlify/functions/getGenres", process.env.BASE_URL);

    const response = await fetch(url, {
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
