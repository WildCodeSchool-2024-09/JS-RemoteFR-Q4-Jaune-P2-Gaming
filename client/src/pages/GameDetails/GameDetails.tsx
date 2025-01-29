import "./GameDetails.css";
import { useLoaderData } from "react-router-dom";
import DetailsGameContent from "../../components/DetailsGameContent/DetailsGameContent";

interface NewGamesDetailTypes {
  newGames: DetailsTypes[];
}

interface DetailsTypes {
  id: number;
  background_image: string;
  name: string;
  released: string;
  platform: string;
  description_raw: string;
  rating: number;
  rating_top: number;

  esrb_rating: {
    id: number;
    name: string;
  };

  ratings: {
    id: number;
    title: string;
    count: number;
    percent: number;
  }[];

  metacritic_platforms: {
    matascore: number;
    url: string;
    platform: {
      name: string;
      platform: number;
    };
  }[];
}

export default function GameDetails() {
  const { gameDetails, newGames } = useLoaderData() as {
    gameDetails: DetailsTypes;
    newGames: NewGamesDetailTypes[];
  };
  console.info(gameDetails);
  if (!gameDetails || !newGames) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pagedetail">
      <DetailsGameContent game={gameDetails} />
    </div>
  );
}
