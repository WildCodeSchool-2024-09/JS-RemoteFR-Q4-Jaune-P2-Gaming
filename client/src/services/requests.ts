import axios from "axios";

const getGames = () => {
  return axios
    .get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
};

// fetch pour le component StreamGaming (à droite de la page d'accueil)

// const getMetacritic = () => {
//   return axios
//     .get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`)
//     .then((response) => response.data.results)
//     .catch((error) => console.error(error));
// };

export { getGames };
