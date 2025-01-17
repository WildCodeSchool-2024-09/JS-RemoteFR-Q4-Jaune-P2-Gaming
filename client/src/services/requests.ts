import axios from "axios";

const getGames = () => {
  return axios
    .get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

// fetch pour le component StreamGaming (à droite de la page d'accueil)

const getNewGames = () => {
  return axios
    .get(
      `https://api.rawg.io/api/games?dates=2025-02-01,2025-10-10&ordering=-added&key=${import.meta.env.VITE_API_KEY}`,
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

const getCalendriers = () => {
  return (
    axios
      //  .get("https://api.rawg.io/api/games?key=5be63d61d2074479b270cc9fac44140e")
      // .get(`https://api.rawg.io/api/games?key=${apiKey}`)
      //.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`)
      .get(
        `https://api.rawg.io/api/games?dates=2025-01-10,2025-10-10&ordering=-added&key=${import.meta.env.VITE_API_KEY}`,
      )

      .then((response) => response.data.results)
      .catch((error) => console.error(error))
  );
};

export { getGames, getNewGames, getCalendriers };
