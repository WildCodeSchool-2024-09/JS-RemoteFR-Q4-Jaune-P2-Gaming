import "./DetailsGameContent.css";

interface DetailsTypes {
  game: {
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
  };
}

export default function DetailsGamesContent({ game }: DetailsTypes) {
  const description_clear = game.description
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "");
  console.info(game.ratings);

  return (
    <>
      <div className="allDetail">
        <div className="image">
          <img
            src={game.background_image}
            alt={game.name}
            className="centralImage"
          />
        </div>
        <article className="main">
          <p className="gameName">
            <b>{game.name}</b>
          </p>
          <p className="releaseDate"> Sortie le : {game.released}</p>
          <p className="platform">{game.platform}</p>
          <p className="description">{description_clear}</p>
        </article>
        <article className="esb_rating">
          <p className="ratinGame">
            Catégorie : <b>{game.esrb_rating.name}</b>
          </p>
        </article>
        <article className="ratings">
          <div className="titre_rates">
            <div className="titre">
              <h2>Rates</h2>
            </div>
            <div className="rates">
              {game.ratings && game.ratings.length > 0 ? (
                game.ratings.map((rate) => (
                  <div className="ratings_infos" key={rate.id}>
                    <p>
                      <b>Rating :</b> {rate.title}
                    </p>
                    <p>
                      <b>Count :</b> {rate.count}
                    </p>
                    <p>
                      <b>Percent :</b> {rate.percent}%
                    </p>
                  </div>
                ))
              ) : (
                <p>No ratings available</p>
              )}
            </div>
          </div>
          <div className="metacritic">
            <div className="titre2">
              <h2>Metacritic</h2>
            </div>
            <p className="note">
              {game.rating}/{game.rating_top}
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
