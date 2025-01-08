import "./App.css";
import { Outlet } from "react-router-dom";
import GameDetails from "./components/GameDetails/GameDetails";
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <NavBar />

      <Outlet />

      <GameDetails />
    </>
  );
}

export default App;
