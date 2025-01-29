import "./GameCards.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Interfaces
interface Platform {
  platform: {
    id: number;
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
    <div className="catalogue">
      <div className="filters">
        <button
          type="button"
          className="buttonAll"
          onClick={() => setSelectedPlatform("")}
        >
          <span className="textAll">All</span>
        </button>
        <button
          type="button"
          className="buttonPC"
          onClick={() => setSelectedPlatform("PC")}
        >
          <span className="textPC">PC</span>
        </button>
        <button
          type="button"
          className="buttonPlayStation"
          onClick={() => setSelectedPlatform("PlayStation 5")}
        >
          <span className="textPlayStation">Playstation</span>
        </button>
        <button
          type="button"
          className="buttonXbox"
          onClick={() => setSelectedPlatform("Xbox One")}
        >
          <span className="textXbox">Xbox Series</span>
        </button>
        <button
          type="button"
          className="buttonSwitch"
          onClick={() => setSelectedPlatform("Nintendo Switch")}
        >
          <span className="textSwitch">Nintendo Switch</span>
        </button>
      </div>

      <div className="cards-container">
        {filteredGames.map((game) => (
          <div key={game.id} className="card">
            <Link to={`/GameDetails/${game.id}`}>
              <img
                className="card-image"
                src={game.background_image}
                alt={game.name}
              />
            </Link>
            <h2 className="card-title">{game.name}</h2>
            <p className="card-platform">
              {game.platforms.map((p) => (
                <span key={p.platform.id}>
                  {p.platform.name === "PC" ? (
                    <img
                      src="../public/images/PC.png"
                      alt="PC"
                      style={{
                        width: "45px",
                        height: "auto",
                        margin: "2px",
                      }}
                    />
                  ) : (
                    " "
                  )}

                  {p.platform.name === "PlayStation 5" ? (
                    <img
                      src="../public/images/PS5.png"
                      alt="PS5"
                      style={{
                        width: "45px",
                        height: "auto",
                        margin: "2px",
                      }}
                    />
                  ) : (
                    " "
                  )}

                  {p.platform.name === "Xbox Series S/X" ? (
                    <img
                      src="../public/images/Xbox X.png"
                      alt="Xbox X"
                      style={{
                        width: "45px",
                        height: "auto",
                        margin: "2px",
                      }}
                    />
                  ) : (
                    " "
                  )}

                  {p.platform.name === "PlayStation 4" ? (
                    <img
                      src="../public/images/PS4.png"
                      alt="PS4"
                      style={{
                        width: "45px",
                        height: "auto",
                        margin: "2px",
                      }}
                    />
                  ) : (
                    " "
                  )}

                  {p.platform.name === "Xbox One" ? (
                    <img
                      src="../public/images/Xbox One.png"
                      alt="Xbox One"
                      style={{
                        width: "45px",
                        height: "auto",
                        margin: "2px",
                      }}
                    />
                  ) : (
                    " "
                  )}

                  {p.platform.name === "Nintendo Switch" ? (
                    <img
                      src="../public/images/Switch.png"
                      alt="Nintendo Switch"
                      style={{
                        width: "45px",
                        height: "auto",
                        margin: "2px",
                      }}
                    />
                  ) : (
                    " "
                  )}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
