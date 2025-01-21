import "./CalendrierCard.css";

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
      <img src={game.background_image} alt="" />
      <div className="calendrierCardDetail">
        <p className="gametitle">{game.name}</p>
        <p>Sortie le: {game.released}</p>
        {/* verifie si game.platforms est toujours un tableau (même vide)  */}
        <p>{platforms?.map((p) => p.platform.name).join(" - ") || []}</p>
        <p>Genres: {genres?.map((g) => g.name).join(" - ") || []}</p>
      </div>
    </div>
  );
}
