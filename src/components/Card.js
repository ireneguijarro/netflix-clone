const Card = ({ movie }) => {
  const { title, duration, thumbnail } = movie;
  return (
    <div>
      <h4>{title}</h4>
      <h4>{duration}</h4>
      <video>
        <source src={thumbnail} type="video/mp4" />
      </video>
    </div>
  );
};

export default Card;
