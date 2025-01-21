import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <main>
        <Header />
        <div className="centralPage">
          <div className="navbar">
            <NavBar />
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
