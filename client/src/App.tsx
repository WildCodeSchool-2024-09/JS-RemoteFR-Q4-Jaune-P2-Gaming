import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <Header />
      <div className="centralPage">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
