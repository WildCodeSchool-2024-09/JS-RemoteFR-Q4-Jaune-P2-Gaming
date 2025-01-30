import "./CalendrierCard.css";
import { Link } from "react-router-dom";

interface platform {
  platform: {
    name: string;
  };
}

interface genre {
  name: string;
}

interface gameType {
  game: {
    id: number;
    name: string;
    background_image: string;
    released: string;
    platforms: platform[];
    genres: genre[];
  };
}

export default function CalendrierCard({ game }: gameType) {
  const platforms = game.platforms;
  const genres = game.genres;
  return (
    <div className="calendrierCard">
      <Link to={`/GameDetails/${game.id}`}>
        <img src={game.background_image} alt="" />
      </Link>
      <div className="calendrierCardDetail">
        <p className="gametitle">
          <b>{game.name}</b>
        </p>
        <p>
          <b>Release Date:</b> {game.released}
        </p>
        {/* verifie si game.platforms est toujours un tableau (même vide)  */}
        <p>{platforms?.map((p) => p.platform.name).join(" - ") || []}</p>
        <p>
          <b>Tags:</b> {genres?.map((g) => g.name).join(" - ") || []}
        </p>
      </div>
    </div>
  );
}
