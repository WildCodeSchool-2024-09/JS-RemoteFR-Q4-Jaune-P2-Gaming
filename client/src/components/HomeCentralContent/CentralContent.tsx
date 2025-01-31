import { useState } from "react";
import "./CentralContent.css";
import { Link } from "react-router-dom";

interface CentralContentType {
  game: {
    name: string;
    src: string;
    background_image: string;
    rating: number;
    ratings_count: number;
    id: number;
  };
}

export default function CentralContent({ game }: CentralContentType) {
  const [displayGoty, setDisplayGoty] = useState(false);
  const toggleImageVisibility = () => {
    setDisplayGoty((prevState) => !prevState);
  };

  return (
    <>
      <div className="containerTop">
        <h2 className="hTop">Most Popular Game !</h2>
        <Link to={`/GameDetails/${game.id}`}>
          <img src={game.background_image} alt="" className="centralImg" />
        </Link>
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
      <div>
        <section className="blocEasterEgg">
          <h2 className="hTop">Le Greatest Of The Year</h2>
          <button
            type="button"
            className="buttonGoty"
            onClick={toggleImageVisibility}
          >
            <img
              src="../public/images/Code_Of_War.png"
              alt=""
              className="imgGoty"
              style={{ display: displayGoty ? "block" : "none" }}
            />
            Code Of War !
          </button>
        </section>
      </div>
    </>
  );
}
