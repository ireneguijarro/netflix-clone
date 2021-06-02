import { useEffect, useState } from "react";
import Section from "./components/Section";
import "./App.css";

const App = () => {
  const [genres, setGenres] = useState(null);

  const fetchData = async () => {
    console.log(process.env.BASE_URL);
    const url = new URL("/.netlify/functions/getGenres", process.env.BASE_URL);
    const response = await fetch(url);
    const responseBody = await response.json();
    setGenres(responseBody.data.reference_list.values);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>{genres && genres.map((genre) => <Section genre={genre.value} />)}</>
  );
};

export default App;
