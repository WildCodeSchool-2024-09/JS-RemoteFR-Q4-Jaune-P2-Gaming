import { useLoaderData } from "react-router-dom";
import CentralContent from "../../components/HomeCentralContent/CentralContent";
import "./HomePage.css";

interface GamesType {
  name: string;
  src: string;
  background_image: string;
  rating: number;
  ratings_count: number;
}

export default function HomePage() {
  const games = useLoaderData() as GamesType;
  console.info(games);
  return (
    <div className="centralContainer">
      <CentralContent games={games} />
    </div>
  );
}
