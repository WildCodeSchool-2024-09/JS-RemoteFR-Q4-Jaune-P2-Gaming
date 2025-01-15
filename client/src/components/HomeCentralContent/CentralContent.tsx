import "./CentralContent.css";

interface GamesProps {
  game: {
    name: string;
    src: string;
    background_image: string;
    rating: number;
    ratings_count: number;
  };
}

export default function CentralContent({ game }: GamesProps) {
  return (
    <>
      <div className="containerTop">
        <h2 className="h2Top">Most Popular Game !</h2>
        <div className="containerImg">
          <img src={game.background_image} alt="" className="centralImg" />
        </div>
        <div className="containerInfo">
          <p className="platforms">Platforms</p>
          <p className="infoPlatforms">PC PS XBOX</p>
          <h2 className="centralName">{game.name}</h2>
          <div className="containerRate">
            <p className="pRate">Rate</p>
            <p className="apiRate">
              {game.rating}/5 on {game.ratings_count}
            </p>
          </div>
        </div>
      </div>
      <div className="containerBot">
        <div>
          <h2 className="h2New">Les Nouveautées</h2>
        </div>
      </div>
    </>
  );
}
