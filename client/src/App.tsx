import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <main className="outlet">
        <Header />
        <div className="underH">
          <NavBar />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
