import axiosInstance from "../axios";
import Movie from "../components/Movie";
import Pagination from "../components/Pagination";
import "../styles/resultStyle.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  // const movies = location.state.movies;
  const details = location.state.details 
  const totalpages = Math.ceil(details.movie_count / details.limit )
  const searchTerm = location.state.searchterm
  const [currentPage , setCurrentPage] = useState(1)
  const locationMovies = location.state?.movies || [];
  const [movies , setMovies ] = useState(locationMovies)

  const [containerHeight, setContainerHeight] = useState(120);
  useEffect(() => {
    const numMovies = movies.length;
    const calculatedHeight = 14 > numMovies ? 120 : 200;
    setContainerHeight(calculatedHeight);
  }, [movies]);
  const handleClick = (movie) => {
    // console.log(movie);
    navigate("/moviedetail", { state: { movie: movie } });
  };
  const handlePageChange = (number) =>{

    axiosInstance.get(`?query_term=${searchTerm}&page=${number}`)
      .then((data)=>{
        setMovies(data.data.data.movies)
        setCurrentPage(number)
      })
      .catch((err)=>{
        console.log("error occured" ,err)
      })
    console.log("page changed" , number)
  }
  return (
    <div className="main-result" style={{ height: `${containerHeight}vh` }}>
      <h1 className="heading"> Movie Club </h1>
      <div className="movie-page">
        {movies.length == 0 ? 

        <h2 className = "noresult">No result found</h2> : 
        
        movies.map((movie, index) => (
          <div key={index} onClick={() => handleClick(movie)}>
            <Movie key={index} movie={movie} />
          </div>
        ))}
      </div>
      <Pagination  currentPage={currentPage} totalPages={totalpages } onPageChange = {handlePageChange}/>
    </div>
  );
}

export default Result;
