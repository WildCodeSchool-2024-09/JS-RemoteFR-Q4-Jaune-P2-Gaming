import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div className="pages">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/NewGames">NewGames</Link>
          </li>
          <li>
            <Link to="/Catalogue">Catalog</Link>
          </li>
          <li>
            <Link to="/Calendrier">upcoming releases</Link>
          </li>
        </ul>
      </div>
      <div className="logos_reseaux">
        <img src="/public/Logos_réseaux_sociaux/Insta.png" alt="instagram" />
        <img src="/public/Logos_réseaux_sociaux/Linkedin.png" alt="linkedin" />
        <img src="/public/Logos_réseaux_sociaux/X.png" alt="X" />
      </div>
    </nav>
  );
}
