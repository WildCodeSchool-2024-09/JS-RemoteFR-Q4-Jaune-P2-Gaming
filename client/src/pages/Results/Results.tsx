import "./Results.css";
import { useLoaderData, useParams } from "react-router-dom";
import ResultGameCard from "../../components/ResultGameCard/ResultGameCard";

interface GameType {
  id: number;
  name: string;
  background_image: string;
  platforms: {
    platform: {
      id: number;
      name: string;
    };
  }[];
}

export default function Results() {
  const results = useLoaderData() as GameType[];
  const { name } = useParams();

  if (!results) {
    return <h2>No results for {name}</h2>;
  }

  return (
    <>
      <div className="allpage">
        <h2>
          There {results.length > 1 ? "are" : "is"} {results.length} result
          {results.length > 1 ? "s" : ""} for {name}
        </h2>
        <div className="cards-container">
          {results.map((result) => (
            <ResultGameCard key={result.id} game={result} />
          ))}
        </div>
      </div>
    </>
  );
}
