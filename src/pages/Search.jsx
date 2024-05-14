import { useEffect, useState } from "react";
import "../styles/searchStyle.css";
import axiosInstance from "../axios";
import { NavigationType, useNavigate } from "react-router-dom";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    // console.log(movies);
  }, [movies]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchTerm);
    axiosInstance
      .get(`?query_term=${searchTerm}`)
      .then((data) => {
        var tempMovies = data.data.data.movies;

        setMovies(tempMovies);
        navigate("/result", { state: { movies: tempMovies , details : data.data.data , searchterm :searchTerm } });
        // console.log(movies);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };
  return (
    <div className="search-app">
      <header className="header">
        {" "}
        <h1 className="title">Movies Club</h1>
      </header>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="search-button"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
export default Search;
