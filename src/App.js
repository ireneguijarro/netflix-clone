import { useEffect, useState } from "react";
import Section from "./components/Section";
import "./App.css";

const App = () => {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getGenres");
    const responseBody = await response.json();
    setGenres(responseBody.data.reference_list.values);
  };

  return (
    <>{genres && genres.map((genre) => <Section genre={genre.value} />)}</>
  );
};

export default App;
