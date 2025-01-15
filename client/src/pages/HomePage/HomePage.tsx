import { useLoaderData } from "react-router-dom";
import CentralContent from "../../components/HomeCentralContent/CentralContent";
import { Metacritic } from "../../components/Metacritic/Metacritic";
import "./HomePage.css";

interface MetacriticTypes {
  id: number;
  background_image: string;
  name: string;
  rating: number;
  rating_top: number;
}

interface GamesType {
  name: string;
  src: string;
  background_image: string;
  rating: number;
  ratings_count: number;
}

export default function HomePage() {
  const games = useLoaderData() as GamesType[];
  const data = useLoaderData() as MetacriticTypes[];
  console.info(games);
  const filteredData = data.filter((game) => game.rating > 4);

  const sortedData = filteredData.sort((a, b) => b.rating - a.rating);

  console.info(sortedData);
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
