import { useLoaderData } from "react-router-dom";
import CalendrierCard from "../../components/calendrierCard/CalendrierCard";

interface platform {
  platform: {
    name: string;
  };
}

interface gameType {
  id: number;
  name: string;
  background_image: string;
  released: string;
  platforms: platform[];
  genres: [];
}

export default function Calendrier() {
  const games = useLoaderData() as gameType[];
  console.info(games);

  return (
    <>
      <div className="pagecalendrier">
        <h1>Les jeux vidéo bientôt disponibles</h1>
        {games.map((game) => (
          <CalendrierCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}
