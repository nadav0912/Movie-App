import star from "../images/star.png";

function LoadingCard() {
  return (
    <div className="card">
      <div className="card--up-part">
        <div className="card-load--img animated-bg"></div>
      </div>
      <div className="card--down-part">
        <div className="card--details">
          <span className="card-load--rating animated-bg"></span>
          <span className="card-load--year animated-bg"></span>
        </div>
        <div className="card-load--description">
          <div className="animated-bg"></div>
          <div className="animated-bg"></div>
          <div className="animated-bg"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingCard;
