import React from "react";
import star from "../images/star.png";
import noImg from "../images/no-img.png";

const MovieContent = (props) => {
  return (
    <>
      <div className="page--left">
        <img
          className="page--img"
          src={props.Poster === "N/A" ? noImg : props.Poster}
        ></img>
        <div className="page--details">
          <img className="page--star" src={star}></img>
          <span className="page--rating">
            {props.imdbRating === "N/A" ? "No Rating" : props.imdbRating}
          </span>
          <span className="page--year">
            {props.Year === "N/A" ? "No Year" : props.Year}
          </span>
        </div>
        <div className="page--time">
          {props.Runtime === "N/A" ? "" : props.Runtime}
        </div>
      </div>
      <div className="page--right">
        <h2 className="page--title">{props.Title}</h2>
        <p className="page--description">
          {props.Plot === "N/A"
            ? "No plot available for this movie..."
            : props.Plot}
        </p>
        <p className="page--actors">
          Actors:{" "}
          {props.Actors === "N/A" ? "Information missing..." : props.Actors}
          <br />
          Writer:{" "}
          {props.Writer === "N/A" ? "Information missing..." : props.Writer}
          <br />
          Director:{" "}
          {props.Director === "N/A" ? "Information missing..." : props.Director}
        </p>
        <p className="page--categories">
          {props.Genre === "N/A" ? "" : props.Genre}
        </p>
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
        <h2 className="page-load--title animated-bg"></h2>
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
      `https://omdbapi.com/?apikey=2e004ade&i=${movieId}&plot=full`
    )
      .then((res) => {
        return res.json();
      })
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
