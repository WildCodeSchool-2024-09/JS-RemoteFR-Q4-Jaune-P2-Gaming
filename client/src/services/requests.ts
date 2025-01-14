import axios from "axios";

const getCentralContent = () => {
  return axios
    .get("https://api.rawg.io/api/games?key=3f32853f2bfa4951833c20b475475ea6")
    .then((response) => response.data.results[0])
    .catch((error) => console.error(error));
};

export { getCentralContent };
