import "./DetailsGameContent.css";

interface DetailsTypes {
  game: {
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
  };
}

export default function DetailsGamesContent({ game }: DetailsTypes) {
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
          <p className="description">{game.description_raw}</p>
        </article>
        <article className="esb_rating">
          <h2>
            <b>Catégorie</b>
          </h2>
          <p className="ratinGame">{game.esrb_rating.name}</p>
        </article>
        <article className="ratings">
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
        </article>

        <article className="metacriticmenu">
          <div className="metacritic">
            <div className="titre2">
              <h2>Metacritic</h2>
            </div>
            <p className="note">
              {game.rating}/{game.rating_top}
            </p>
          </div>
        </article>
        <article className="platformsmenu">
          <div className="platforms">
            <h2>Platforms</h2>
            {game.metacritic_platforms &&
            game.metacritic_platforms.length > 0 ? (
              game.metacritic_platforms.map((platform) => (
                <div className="metaplatforms" key={platform.platform.platform}>
                  <p>
                    <i>{platform.platform.name}</i>
                  </p>
                </div>
              ))
            ) : (
              <p>No information</p>
            )}
          </div>
        </article>
      </div>
    </>
  );
}
