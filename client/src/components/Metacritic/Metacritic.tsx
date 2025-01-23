import { Link } from "react-router-dom";
import "./Metacritic.css";

interface MetacriticTypes {
  game: {
    id: number;
    background_image: string;
    name: string;
    rating: number;
    rating_top: number;
  };
}

export function Metacritic({ game }: MetacriticTypes) {
  return (
    <>
      <div className="meta">
        <Link className="pictures" to={`/GameDetails/${game.id}`}>
          <img src={game.background_image} alt={game.name} />
        </Link>
        <article>
          <p>
            <b>{game.name}</b>
          </p>
          <p>
            <i>Metacritic :</i>
          </p>
          <p>
            {game.rating}/{game.rating_top}
          </p>
        </article>
      </div>
    </>
  );
}
