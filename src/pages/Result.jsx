import Movie from "../components/Movie";
import "../styles/resultStyle.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const movies = location.state.movies;
  console.log(movies);
  const [containerHeight, setContainerHeight] = useState(120);
  useEffect(() => {
    const numMovies = movies.length;
    const calculatedHeight = 14 > numMovies ? 120 : 200;
    setContainerHeight(calculatedHeight);
  }, [movies]);
  const handleClick = (movie) => {
    console.log(movie);
    navigate("/moviedetail", { state: { movie: movie } });
  };
  return (
    <div className="main-result" style={{ height: `${containerHeight}vh` }}>
      <h1 className="heading"> Movie Club </h1>
      <div className="movie-page">
        {movies.map((movie, index) => (
          <div key={index} onClick={() => handleClick(movie)}>
            <Movie key={index} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
