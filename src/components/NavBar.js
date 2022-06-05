import movieIcon from "../images/movie-icon.png";

function NavBar() {
  return (
    <nav className="nav">
      <a href="/">
        <img className="nav--icon" src={movieIcon} alt="" />
      </a>
      <a href="/">
        <h1 className="nav--title">Movie App</h1>
      </a>
    </nav>
  );
}

export default NavBar;
