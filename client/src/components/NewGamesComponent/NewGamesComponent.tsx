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
        <Link className="pictures" to={`/GameDetails/${newGame.id}`}>
          <p className="platforms">
            {newGamesPlatforms.length > 0
              ? newGamesPlatforms
                  .map((platform) => platform.platform.name)
                  .join(", ")
              : ""}
          </p>
          <h2 className="Title">{newGame.name}</h2>
          <p className="released">{newGame.released}</p>
        </Link>
      </div>
    </div>
  );
}
