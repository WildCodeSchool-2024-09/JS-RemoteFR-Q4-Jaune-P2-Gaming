import "./Metacritic.css";

interface MetaCriticGameType {
  game: {
    name: string;
    id: number;
    src: string;
    background_image: string;
    rating: number;
    ratings_count: number;
    rating_top: number;
  };
}

export function Metacritic({ game }: MetaCriticGameType) {
  return (
    <>
      <div className="meta">
        <img src={game.background_image} alt={game.name} />
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
