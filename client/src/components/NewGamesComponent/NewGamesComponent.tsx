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
        <p className="platforms">
          {newGamesPlatforms.length > 0
            ? newGamesPlatforms
                .map((platform) => platform.platform.name)
                .join(", ")
            : ""}
        </p>
        <h2 className="Title">{newGame.name}</h2>
        <p className="released">{newGame.released}</p>
      </div>
    </div>
  );
}

/* <div className="containerTop">
<h2 className="h2Top">Most Popular Game !</h2>
<a href="./GameDetails.tsx">
  <img src={game.background_image} alt="" className="centralImg" />
</a>
<div className="containerInfo">
  <a href="./GameDetails.tsx">
    <p className="platforms">Platforms</p>
    <p className="infoPlatforms">PC PS XBOX</p>
    <h2 className="centralName">{game.name}</h2>
  </a>
  <div className="containerRate">
    <a href="./GameDetails.tsx">
      <p className="pRate">Rate</p>
      <p className="apiRate">
        {game.rating}/5 on {game.ratings_count}
      </p>
    </a>
  </div>
</div>
</div>
<div className="containerBot">
<div>
  <h2 className="h2New">Les Nouveautées</h2>
</div>
</div>
</> */
