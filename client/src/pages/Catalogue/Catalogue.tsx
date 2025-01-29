import "./Catalogue.css";
import GameCards from "../../components/GameCards/GameCards";

export default function Catalogue() {
  return (
    <main className="catalogue-main">
      <h2 className="catalogueh2">Catalogue</h2>
      <div className="catalogue-cards-container">
        <GameCards />
      </div>
    </main>
  );
}
