import { useLoaderData } from "react-router-dom";
import NewGamesComponent from "../../components/NewGamesComponent/NewGamesComponent";
import "./NewGames.css";

interface NewGamesTypes {
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
}

export default function NewGames() {
  const { newGames } = useLoaderData() as {
    newGames: NewGamesTypes[];
  };

  return (
    <div className="containerPage">
      {newGames.map((newGame) => (
        <NewGamesComponent key={newGame.name} newGame={newGame} />
      ))}
    </div>
  );
}
