import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src="/public/images/logo.webp" alt="logo" />
      <h1>Wild Games</h1>
      {/* A remplacer par le composant pour la recherche */}
      <input name="myInput" defaultValue="Rechercher un jeu" />
    </header>
  );
}
