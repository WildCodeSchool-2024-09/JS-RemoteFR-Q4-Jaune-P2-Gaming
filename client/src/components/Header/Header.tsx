import "./Header.css";
import Checkbox from "./Checkbox";

export default function Header() {
  return (
    <header>
      <Checkbox />
      <img src="/public/images/logo.webp" alt="logo" />
      <h1>Wild Games</h1>
      <div className="search">
        {/* A remplacer par le composant pour la recherche */}
        <input name="myInput" defaultValue="Rechercher un jeu" />
        <button type="button">Search</button>
      </div>
    </header>
  );
}
