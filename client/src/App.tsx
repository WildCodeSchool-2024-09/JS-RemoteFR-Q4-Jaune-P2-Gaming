import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";
import { useDarkTheme } from "./services/XboxThemeContext";

function App() {
  const { xboxTheme } = useDarkTheme();

  const root = document.querySelector("#root");

  if (root) {
    root.className = xboxTheme ? "dark" : "light";
  }

  return (
    <>
      <Header />
      <div className="centralPage">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
