import React from "react";
import star from "../images/star.png";

const MovieContent = (props) => {
  return (
    <>
      <div className="page--left">
        <img className="page--img" src={props.Poster}></img>
        <div className="page--details">
          <img className="page--star" src={star}></img>
          <span className="page--rating">{props.imdbRating}</span>
          <span className="page--year">{props.Year}</span>
        </div>
        <div className="page--time">{props.Runtime}</div>
      </div>
      <div className="page--right">
        <h2 className="page--title">{props.Title}</h2>
        <p className="page--description">{props.Plot}</p>
        <p className="page--actors">
          Actors: {props.Actors}.
          <br />
          Writer: {props.Writer}.
          <br />
          Director: {props.Director}.
        </p>
        <p className="page--categories">{props.Genre}</p>
      </div>
    </>
  );
};

const LoadContent = () => {
  return (
    <>
      <div className="page--left">
        <div className="page-load--img animated-bg"></div>
        <div className="page-load--details animated-bg"></div>
        <div className="page-load--time animated-bg"></div>
      </div>
      <div className="page--right">
        <h2 className="page-load-title animated-bg"></h2>
        <div className="page-load--description">
          <div className="animated-bg"></div>
          <div className="animated-bg"></div>
          <div className="animated-bg"></div>
          <div className="animated-bg"></div>
        </div>
        <div className="page-load--actors">
          <div className="animated-bg"></div>
          <div className="animated-bg"></div>
          <div className="animated-bg"></div>
        </div>
        <div className="page-load--categories animated-bg"></div>
      </div>
    </>
  );
};

function MoviePage({ movieId, toggle }) {
  const [movieData, setMovieData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const loadData = async () => {
    const data = await fetch(
      `https://omdbapi.com/?i=${movieId}&apikey=2e004ade&plot=full`
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data));

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="page-container" onClick={toggle}>
      <div className="page">
        {loading ? <LoadContent /> : <MovieContent {...movieData} />}
      </div>
    </div>
  );
}

export default MoviePage;
