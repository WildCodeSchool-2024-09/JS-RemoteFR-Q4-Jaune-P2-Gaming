import axios from "axios";

const getCentralContent = () => {
  return axios
    .get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`)
    .then((response) => response.data.results[0])
    .catch((error) => console.error(error));
};

export { getCentralContent };
