import axios from "axios";

console.info(import.meta.env.VITE_API_KEY);



const getCalendriers =()=> {
return axios
//  .get("https://api.rawg.io/api/games?key=5be63d61d2074479b270cc9fac44140e")
// .get(`https://api.rawg.io/api/games?key=${apiKey}`)
//.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`)
.get(`https://api.rawg.io/api/games?dates=2025-01-10,2025-10-10&ordering=-added&key=${import.meta.env.VITE_API_KEY}`)

.then((response) => response.data.results)
.catch((error) => console.error(error));
}



export {getCalendriers}