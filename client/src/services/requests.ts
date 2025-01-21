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
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split("T")[0];
  return axios
    .get(
      // `https://api.rawg.io/api/games?dates=2025-01-10,2025-10-10&ordering=-added&key=${import.meta.env.VITE_API_KEY}`,
      `https://api.rawg.io/api/games?dates=${tomorrowFormatted},2025-10-10&ordering=-added&key=${import.meta.env.VITE_API_KEY}`,
    )

    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

export { getGames, getNewGames, getCalendriers };
