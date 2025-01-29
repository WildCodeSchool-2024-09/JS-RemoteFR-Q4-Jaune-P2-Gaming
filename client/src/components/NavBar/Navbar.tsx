import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul className="pages">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/NewGames">New Games</Link>
        </li>
        <li>
          <Link to="/Catalogue">Catalogue</Link>
        </li>
        <li>
          <Link to="/Calendrier">Pre-orders</Link>
        </li>
      </ul>
      <div className="logos_reseaux">
        <img src="/public/Logos_réseaux_sociaux/Insta.png" alt="instagram" />
        <img src="/public/Logos_réseaux_sociaux/Linkedin.png" alt="linkedin" />
        <img src="/public/Logos_réseaux_sociaux/X.png" alt="X" />
      </div>
    </nav>
  );
}
