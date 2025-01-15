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

  return (
    <div className="containerTop">
      <CentralContent games={games} />
    </div>
  );
}
