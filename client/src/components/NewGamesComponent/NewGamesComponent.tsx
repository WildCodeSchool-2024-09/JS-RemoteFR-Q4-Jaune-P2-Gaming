import { Link } from "react-router-dom";
import "./NewGamesComponent.css";

interface NewGamesComponentsType {
  newGame: {
    id: number;
    released: number;
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

export default function NewGamesComponent({ newGame }: NewGamesComponentsType) {
  const newGamesPlatforms = newGame.platforms;

  return (
    <div className="containerCard">
      <Link to={`/GameDetails/${newGame.id}`}>
        <img src={newGame.background_image} alt="" className="imgNews" />
      </Link>
      <div className="containerI">
        <h2 className="Title">{newGame.name}</h2>
        <p className="released">{newGame.released}</p>
        <p className="newGamesPlatforms">
          {newGamesPlatforms.map((platform) => (
            <span key={platform.platform.id}>
              {platform.platform.name === "PC" ? (
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

              {platform.platform.name === "PlayStation 5" ? (
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

              {platform.platform.name === "Xbox Series S/X" ? (
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

              {platform.platform.name === "PlayStation 4" ? (
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

              {platform.platform.name === "Xbox One" ? (
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

              {platform.platform.name === "Nintendo Switch" ? (
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
        <div className="newGamesText">
          <button type="button" className="newGamesBuy">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
