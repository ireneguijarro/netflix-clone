import { useEffect, useState } from "react";
import Card from "./Card";

const Section = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  const [pageState, setPageState] = useState("");

  const fetchData = async (genre, pageState = null) => {
    const response = await fetch("/.netlify/functions/getMovies", {
      method: "POST",
      body: JSON.stringify({ genre: genre, pageState: pageState }),
    });
    const responseBody = await response.json();
    setMovies(responseBody.data.movies_by_genre.values);
    setPageState(responseBody.data.movies_by_genre.pageState);
  };

  useEffect(() => {
    fetchData(genre);
  }, [genre]);

  const handleMoreMoviesClick = () => {
    fetchData(genre, pageState);
  };

  return (
    <>
      <div>{genre}</div>
      {movies && (
        <div className="movie-section">
          {movies.map((movie, i) => (
            <Card key={i} movie={movie} />
          ))}
          <div className="more-button" onClick={handleMoreMoviesClick} />
        </div>
      )}
    </>
  );
};

export default Section;
