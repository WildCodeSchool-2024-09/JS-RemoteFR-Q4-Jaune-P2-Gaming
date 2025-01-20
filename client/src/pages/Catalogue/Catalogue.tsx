import "./Catalogue.css";
import GameCards from "../../components/GameCards/GameCards";

export default function Catalogue() {
  return (
    <main>
      <h2>Catalogue</h2>
      <div className="cards-container">
        <GameCards />
      </div>
    </main>
  );
}
