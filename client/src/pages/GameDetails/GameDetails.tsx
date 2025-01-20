import "./GameDetails.css";
import { useLoaderData } from "react-router-dom";
import DetailsGameContent from "../../components/DetailsGameContent/DetailsGameContent";

interface DetailsTypes {
  id: number;
  background_image: string;
  name: string;
  released: string;
  platform: string;
  description: string;
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

  short_screenshots: {
    id: number;
    image: string;
  };
}

export default function GameDetails() {
  const details = useLoaderData() as DetailsTypes;

  return (
    <div className="pagedetail">
      <DetailsGameContent game={details} />
    </div>
  );
}
