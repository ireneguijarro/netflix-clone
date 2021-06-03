import { useState } from "react";

const Card = ({ movie }) => {
  const { title, duration, thumbnail } = movie;
  const [isShown, setIsShown] = useState(false);

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h4>{title}</h4>
      <h4>{duration}</h4>
      <video className="video" controls autoPlay={isShown} loop={isShown}>
        <source src={thumbnail} type="video/mp4" />
      </video>
      {isShown && <div>{title}</div>}
    </div>
  );
};

export default Card;
