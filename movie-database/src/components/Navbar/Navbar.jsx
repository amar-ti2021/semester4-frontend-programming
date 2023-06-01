/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import { Link } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <NavbarStyled>
      <nav className="navbar">
        <div>
          <h1 className="navbar__brand">Movie App</h1>
        </div>
        <div>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/"> Home </Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/create"> Add Movie </Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/popular"> Popular </Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/now-playing"> Now Playing </Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/top-rated"> Top Rated </Link>
            </li>
          </ul>
        </div>
      </nav>
    </NavbarStyled>
  );
}

export default Navbar;
