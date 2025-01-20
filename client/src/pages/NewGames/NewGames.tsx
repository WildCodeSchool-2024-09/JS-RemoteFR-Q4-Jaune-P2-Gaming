import { useLoaderData } from "react-router-dom";
import NewGamesComponent from "../../components/NewGamesComponent/NewGamesComponent";
import "./NewGames.css";

interface NewGamesDataType {
  newGames: NewGamesType[];
}

interface NewGamesType {
  name: string;
  background_image: string;
}

export default function NewGames() {
  const data = useLoaderData() as NewGamesDataType;
  console.info(data);

  const newGames = data.newGames;

  return (
    <div>
      <h1>Les Nouveautées</h1>
      {newGames.map((newGame) => (
        <NewGamesComponent key={newGame.name} newGame={newGame} />
      ))}
    </div>
  );
}
