import { Link } from "react-router-dom";

import "./ResultGameCard.css";

interface GameType {
  game: {
    id: number;
    name: string;
    background_image: string;
    platforms: {
      platform: {
        id: number;
        name: string;
      };
    }[];
  };
}

export default function ResultGameCard({ game }: GameType) {
  const gamePlatforms = game.platforms;
  console.info(gamePlatforms[0].platform.name);
  return (
    <>
      <div className="cards-container">
        <div key={game.id} className="card">
          <div className="image_content">
            <Link to={`/GameDetails/${game.id}`}>
              <img
                className="card_image"
                src={game.background_image}
                alt={game.name}
              />
            </Link>
          </div>
          <h2 className="card-title">{game.name}</h2>

          {gamePlatforms.length > 0 ? (
            gamePlatforms.map((gameplatform) => (
              <p key={gameplatform.platform.id} className="card-platform">
                {gameplatform.platform.name}
              </p>
            ))
          ) : (
            <p>No information</p>
          )}
        </div>
      </div>
    </>
  );
}
