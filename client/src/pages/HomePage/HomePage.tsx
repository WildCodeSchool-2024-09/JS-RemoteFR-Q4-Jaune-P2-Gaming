import { useLoaderData } from "react-router-dom";
import CentralContent from "../../components/HomeCentralContent/CentralContent";
import { Metacritic } from "../../components/Metacritic/Metacritic";
import "./HomePage.css";

interface GamesDataType {
  games: GamesProps[];
}

interface GamesProps {
  name: string;
  id: number;
  src: string;
  background_image: string;
  rating: number;
  ratings_count: number;
  rating_top: number;
}

export default function HomePage() {
  const data = useLoaderData() as GamesDataType;

  const games = data.games;

  const filteredGames = games.filter((game) => game.rating > 4);

  const sortedData = filteredGames.sort((a, b) => b.rating - a.rating);

  return (
    <main className="homemenu">
      <div className="containerTop">
        <CentralContent game={games[0]} />
      </div>
      <div className="listejeuxmeta">
        {sortedData.map((game) => (
          <Metacritic key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
}
