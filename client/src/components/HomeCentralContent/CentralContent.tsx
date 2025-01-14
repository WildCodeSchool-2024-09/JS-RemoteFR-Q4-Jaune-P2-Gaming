import "./CentralContent.css";

interface GamesProps {
  games: {
    name: string;
    src: string;
    background_image: string;
    rating: number;
    ratings_count: number;
  };
}

export default function CentralContent({ games }: GamesProps) {
  return (
    <div className="centralContainer">
      <div className="containerTop">
        <div className="containerImg">
          <img src={games.background_image} alt="" className="centralImg" />
        </div>
        <div className="containerInfo">
          <p className="platforms">Platforms</p>
          <p className="infoPlatforms">PC PS XBOX</p>
          <h2 className="centralName">{games.name}</h2>
          <div className="containerRate">
            <p className="pRate">Rate</p>
            <p className="apiRate">
              {games.rating}/5 on {games.ratings_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
