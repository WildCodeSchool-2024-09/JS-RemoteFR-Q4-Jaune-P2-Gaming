import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <Header />
      <NavBar />

      <Outlet />
    </>
  );
}

export default App;
