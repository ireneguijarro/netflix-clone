import { useEffect, useState } from "react";

const HeroSection = () => {
  const [movie, setMovie] = useState();

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getMovies", {
      method: "POST",
      body: JSON.stringify({ genre: "Sci-Fi", pageState: null }),
    });
    const responseBody = await response.json();
    const movies = responseBody.data.movies_by_genre.values;
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {movie && (
        <div className="hero">
          <video className="hero-video" muted controls autoPlay loop>
            <source src={movie.thumbnail} type="video/mp4" />
          </video>

          <div className="info-section">
            <h3 className="hero-blurb">{movie.synopsis}</h3>
            <div className="button-section">
              <div className="button play">
                <span>
                  <i className="fas fa-play" />
                </span>
                Play
              </div>
              <div className="button more">
                <span>
                  <i className="fas fa-info-circle" />
                </span>
                More info
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
