import "./GameCards.css";
import axios from "axios";
import { useEffect, useState } from "react";

// Interfaces
interface Platform {
  platform: {
    name: string;
  };
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: Platform[];
}

// Function
export default function GameCards() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

  // API
  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`)
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(`${err} Failed to fetch games.`);
        setLoading(false);
      });
  }, []);

  // Loading
  if (loading)
    return (
      <div className="loader">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  if (error) return <p>{error}</p>;

  // Platform filter
  const filteredGames = selectedPlatform
    ? games.filter((game) =>
        game.platforms.some((p) => p.platform.name === selectedPlatform),
      )
    : games;

  // Return
  return (
    <div>
      <div className="filters">
        <button type="button" onClick={() => setSelectedPlatform("")}>
          <span className="text">All</span>
        </button>
        <button type="button" onClick={() => setSelectedPlatform("PC")}>
          <span className="text">PC</span>
        </button>
        <button
          type="button"
          onClick={() => setSelectedPlatform("PlayStation 5")}
        >
          <span className="text">Playstation</span>
        </button>
        <button type="button" onClick={() => setSelectedPlatform("Xbox One")}>
          <span className="text">Xbox Series</span>
        </button>
      </div>

      <div className="cards-container">
        {filteredGames.map((game) => (
          <div key={game.id} className="card">
            <img
              className="card-image"
              src={game.background_image}
              alt={game.name}
            />
            <h2 className="card-title">{game.name}</h2>
            <p className="card-platform">
              {game.platforms.map((p) => p.platform.name).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
