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
      <video className="video" controls autoPlay={isShown} loop={isShown}>
        <source src={thumbnail} type="video/mp4" />
      </video>
      {isShown && (
        <div className="info-box">
          <p>{title}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
