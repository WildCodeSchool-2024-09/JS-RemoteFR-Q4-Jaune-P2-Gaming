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
                      src="https://cdn.discordapp.com/attachments/1324658067647893546/1331289684554420255/PC.png?ex=6791bc62&is=67906ae2&hm=e45eed23feb3b309b12d4db142456a07ed6e23be0b51cd6387dd8f6e0a24c6e8&"
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
                      src="https://cdn.discordapp.com/attachments/1324658067647893546/1331289701793136750/PS5.png?ex=6791bc67&is=67906ae7&hm=87169da27f4d54a592996bb8ee4975ac174765048dbddbb85b99f944ee486569&"
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
                      src="https://cdn.discordapp.com/attachments/1324658067647893546/1331289731002273822/Xbox_X.png?ex=6791bc6e&is=67906aee&hm=541c4b6bf4c379e6ae35560c6a45a8cf651f0d453fc4b89cb03acf374f47da5a&"
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
                      src="https://cdn.discordapp.com/attachments/1324658067647893546/1331289718008057907/PS4.png?ex=6791bc6a&is=67906aea&hm=1b0006da8bd2b7bbbfadba2760c8cf551f85cb8b129dd45cc7992d6a20cc0451&"
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
                      src="https://cdn.discordapp.com/attachments/1324658067647893546/1331289744880959599/Xbox_One.png?ex=6791bc71&is=67906af1&hm=5262f4e6bf14c809d0cf2ab73811b8bfb853241983cc44f3d2388929362224ab&"
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
                      src="https://cdn.discordapp.com/attachments/1324658067647893546/1331289760785764505/Switch.png?ex=6791bc75&is=67906af5&hm=c6203b37f2231e092355d6e5d9ce2ffd9738ea9df880c1b38c3716a3c90cd53d&"
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
