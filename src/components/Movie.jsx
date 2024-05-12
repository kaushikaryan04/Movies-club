import "../styles/moviestyle.css";
const Movie = ({ movie }) => {
  return (
    <div className="movie-card-item">
      <img
        src={movie.medium_cover_image}
        alt={movie.title}
        className="movie-image-item"
      />
      <div className="movie-details-item">
        <h2 className="movie-name-item">{movie.title}</h2>
        <p className="movie-year-item">Year: {movie.year}</p>
        <p className="movie-rating-item">Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default Movie;
