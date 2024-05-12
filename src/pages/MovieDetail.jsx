import { useLocation } from "react-router-dom";
import "../styles/MovieDetailPage.css";
const MovieDetail = () => {
  const location = useLocation();
  const movie = location.state.movie;
  const {
    title,
    imdb_code,
    medium_cover_image,
    rating,
    summary,
    genres,
    yt_trailer_code,
  } = movie;
  const genreString = genres.join(", ");
  const youtubeTrailer = `https://www.youtube.com/embed/${yt_trailer_code}`;
  const torrentLink = movie.torrents[0].url;
  const servers = [
    {
      name: "Server 1 ",
      link: `https://vidsrc.me/embed/${imdb_code}`,
    },
    {
      name: "Server 2 ",
      link: `https://fsapi.xyz/movie/${imdb_code}`,
    },
    {
      name: "Server 3 ",
      link: `https://curtstream.com/movies/imdb/${imdb_code}`,
    },
    {
      name: "Server 4",
      link: `https://moviewp.com/se.php?video_id=${imdb_code}`,
    },
    {
      name: "Server 5",
      link: `https://v2.apimdb.net/e/movie/${imdb_code}`,
    },
    {
      name: "Server 6",
      link: `https://gomo.to/movie/${imdb_code}`,
    },
    {
      name: "Server 7",
      link: `https://vidcloud.stream/${imdb_code}`,
    },
  ];

  return (
    <div className="movie-detail-page">
      <div className="movie-info">
        <h1 className="movie-title">{title}</h1>
        <img className="movie-image" src={medium_cover_image} alt={title} />
        <div className="movie-details">
          <p className="movie-rating">IMDB Rating: {rating}</p>
          <p className="movie-genre">Genre: {genreString}</p>
          <p className="movie-description">{summary}</p>
        </div>
      </div>

      <div className="trailer-section">
        <h2>Trailer</h2>
        <iframe
          title="YouTube Trailer"
          className="youtube-trailer"
          src={youtubeTrailer}
          frameBorder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div className="server-section">
        <h2>Play Movie ( If one does not work try others)</h2>
        <ul className="server-list">
          {servers.map((server, index) => (
            <li key={index}>
              <a href={server.link}>{server.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="download-section">
        <h2>Download</h2>
        <a href={torrentLink} className="torrent-link">
          Download Torrent
        </a>
      </div>
    </div>
  );
};
export default MovieDetail;
