import { useEffect, useState } from "react";
import Section from "./components/Section";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

const App = () => {
  const genreIncrement = 4;

  const [genres, setGenres] = useState(null);
  const [limit, setLimit] = useState(genreIncrement);

  const fetchData = async (limit) => {
    const response = await fetch("/.netlify/functions/getGenres", {
      method: "POST",
      body: limit,
    });
    const responseBody = await response.json();
    setGenres(responseBody.data.reference_list.values);
  };

  useEffect(() => {
    fetchData(limit);
  }, [limit]);

  const handleMouseEnter = () => {
    setLimit((limit) => limit + genreIncrement);
  };

  return (
    <>
      <NavBar />
      <HeroSection />
      {genres && (
        <div className="container">
          {genres.map((genre) => (
            <Section genre={genre.value} />
          ))}
        </div>
      )}
      <div className="page-end" onMouseEnter={handleMouseEnter} />
    </>
  );
};

export default App;
