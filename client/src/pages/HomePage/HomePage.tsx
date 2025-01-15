import { Metacritic } from "../../components/Metacritic/Metacritic";
import "./HomePage.css";
import { useLoaderData } from "react-router-dom";

interface MetacriticTypes {
  id: number;
  background_image: string;
  name: string;
  rating: number;
  rating_top: number;
}

export default function HomePage() {
  const data = useLoaderData() as MetacriticTypes[];

  const filteredData = data.filter((game) => game.rating > 4);

  const sortedData = filteredData.sort((a, b) => b.rating - a.rating);

  console.info(sortedData);

  return (
    <main className="homemenu">
      <div className="home_content">
        <h1>Hello World !!!</h1>
      </div>

      <div className="listejeuxmeta">
        {sortedData.map((game) => (
          <Metacritic key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
}
