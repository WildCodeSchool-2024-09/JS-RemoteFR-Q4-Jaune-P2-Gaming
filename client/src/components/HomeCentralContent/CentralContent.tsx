import "./CentralContent.css";

interface CentralContentType {
  game: {
    name: string;
    src: string;
    background_image: string;
    rating: number;
    ratings_count: number;
  };
}

export default function CentralContent({ game }: CentralContentType) {
  return (
    <>
      <div className="containerTop">
        <h2 className="hTop">Most Popular Game !</h2>
        <a href="./GameDetails.tsx">
          <img src={game.background_image} alt="" className="centralImg" />
        </a>
        <div className="containerInfo">
          <a href="./GameDetails.tsx">
            <p className="platforms">Platforms</p>
            <p className="infoPlatforms">PC PS XBOX</p>
            <h2 className="centralName">{game.name}</h2>
          </a>
          <div className="containerRate">
            <a href="./GameDetails.tsx">
              <p className="pRate">Rate</p>
              <p className="apiRate">
                {game.rating}/5 on {game.ratings_count}
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="containerBot">
        <div>
          <h2 className="hNew">Les Nouveautés</h2>
        </div>
      </div>
    </>
  );
}
