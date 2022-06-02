import React from "react";
import star from "../images/star.png";
import MoviePage from "./MoviePage";

function MovieCard({ movieId }) {
  const [showMoviePage, setShowMoviePage] = React.useState(false);
  const [cardData, setCardData] = React.useState({});

  const toggle = () => {
    setShowMoviePage(!showMoviePage);
  };

  React.useEffect(() => {
    const data = fetch(
      `https://omdbapi.com/?i=${movieId}&apikey=2e004ade&plot=short`
    )
      .then((res) => res.json())
      .then((data) =>
        setCardData({
          title: data.Title,
          imgUrl: data.Poster,
          rating: data.imdbRating,
          year: data.Year,
          plot: data.Plot,
        })
      );
  }, [movieId]);

  return (
    <>
      <div className="card" onClick={toggle}>
        <div className="card--up-part">
          <img src={cardData.imgUrl} className="card--img"></img>
          <h3 className="card--title">{cardData.title}</h3>
        </div>
        <div className="card--down-part">
          <div className="card--details">
            <img className="card--star" src={star}></img>
            <span className="card--rating">{cardData.rating}</span>
            <span className="card--year">{cardData.year}</span>
          </div>
          <p className="card--description">{cardData.plot}</p>
        </div>
      </div>
      {showMoviePage && <MoviePage movieId={movieId} toggle={toggle} />}
    </>
  );
}

export default MovieCard;
