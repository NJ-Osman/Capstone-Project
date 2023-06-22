import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="navBar">
      <header className="header">
        <nav>
          <h1 className="shoeStoreTitle">Shoe Haven</h1>
          <ul className="menu">
            <li>
              <Link to="/LogIn" className="loginLink">Log In</Link>
            </li>
            <li>
              <Link to="/SignUp" className="signupLink">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
