import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="Div">
      <nav className="Navbar">
        <ul className="Navbar-item">
          <Link to="/" className="Navbar-Pages">
            Home
          </Link>
          <Link to="/about" className="Navbar-Pages">
            AboutMe
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
